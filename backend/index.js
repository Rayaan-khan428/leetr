const bodyParser = require('body-parser');
const axios = require('axios');
const { Infobip, AuthType } = require('@infobip-api/sdk');

const express = require('express');
const mongoose = require('mongoose');
const Problem = require('./Problem'); // Import the Problem model

const app = express();
const router = express.Router();
const cors = require('cors');
const PORT = 3000;

// const allowedOrigins = ['chrome-extension://mpipofaiabipacleohjlmjpkhnhamefl', 'http://localhost:3001'];

// Middleware to parse JSON request bodies
app.use(express.json());

// Use CORS middleware to allow all origins
app.use(cors());



// Connect to MongoDB
mongoose.set('strictQuery', false);
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://mongo:rayaan@cluster0.ezfpo5q.mongodb.net/LeetcodeQuestions?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    } catch (err) {
        console.error('Database connection error:', err);
    }
};

// Calcualte the next practice date
function calculateNextPracticeDate(attemptCount, baseIntervalDays = 1, growthFactor = 2) {
    const interval = baseIntervalDays * Math.pow(growthFactor, attemptCount - 1);
    const nextPracticeDate = new Date();
    nextPracticeDate.setDate(nextPracticeDate.getDate() + interval);
    return nextPracticeDate;
}

// Route to get all problems
router.get('/', async (req, res) => {
    try {
        const problems = await Problem.find();
        res.json(problems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/difficultyDistribution', async (req, res) => {
    try {
        const difficultyDistribution = await Problem.aggregate([
            {
                $group: {
                    _id: "$difficulty",
                    count: { $sum: 1 }  // Count the number of occurrences
                }
            },
            {
                $project: {
                    _id: 0,
                    difficulty: "$_id",
                    count: 1
                }
            }
        ]);

        res.json(difficultyDistribution);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/submitSolution', async (req, res) => {
    const { problemName, ...solutionData } = req.body;
    
    try {
        let problem = await Problem.findOne({ problemName: problemName });

        if (problem) {
            // Problem exists, update it
            problem.attempts += 1;
            problem.notes = solutionData.notes || problem.notes;
            problem.difficulty = solutionData.difficulty || problem.difficulty;
            problem.timeComplexity = solutionData.timeComplexity || problem.timeComplexity;
            problem.spaceComplexity = solutionData.spaceComplexity || problem.spaceComplexity;
            problem.lastAttempted = solutionData.date || new Date();

            // Calculate the next practice date
            problem.nextScheduled = calculateNextPracticeDate(problem.attempts);

            await problem.save();
        } else {
            // Problem does not exist, create a new one
            problem = new Problem({ 
                problemName, 
                ...solutionData, 
                attempts: 1,
                lastAttempted: solutionData.date || new Date(),
                nextScheduled: calculateNextPracticeDate(1)
            });
            await problem.save();
        }

        res.status(201).json(problem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route for chrome extension
app.post('/submitData', cors(), (req, res) => {
    db.collection('problems').insertOne(req.body, (err, result) => {
        if (err) {
            res.status(500).send('Error inserting data');
        } else {
            res.status(200).send('Data inserted successfully');
        }
    });
});

// Route to add a new problem
router.post('/add', async (req, res) => {
    const problem = new Problem({ ...req.body });
  
    try {
        const newProblem = await problem.save();
        res.status(201).json(newProblem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
  
// Route to update an existing problem
router.put('/:id', async (req, res) => {
    try {
        const updatedProblem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProblem) return res.status(404).json({ message: 'Problem not found' });
        res.json(updatedProblem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a problem
router.delete('/:id', async (req, res) => {
    try {
        const problem = await Problem.findByIdAndDelete(req.params.id);
        if (!problem) return res.status(404).json({ message: 'Problem not found' });
        res.json({ message: 'Problem deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Infobip setup
const API_URL = 'https://n8xp98.api.infobip.com'; // Ensure this is a valid URL
const API_KEY = 'c878bc4294d22c9ff073eca20c4839f2-13cb7d84-dd03-42e4-bbe3-066c0490986b'; // Replace with your actual API key
const infobip = new Infobip({
  baseUrl: API_URL,
  apiKey: API_KEY,
  authType: AuthType.ApiKey,
});

// Endpoint to send SMS
app.post('/signup-sms', async (req, res) => {
  try {
    const response = await infobip.channels.sms.send({
      messages: [{
        destinations: [{ to: req.body.phoneNumber }], // Phone number from request
        text: "You've successfully signed up for Leetr"
      }]
    });
    res.status(200).send(response.data);
    console.log('sent');
  } catch (error) {
    console.error('SMS sending failed:', error);
    res.status(500).send('Failed to send SMS');
    console.log('failed');
  }
});


// Endpoint to check nextScheduled and send SMS
router.get('/checkNextScheduled', async (req, res) => {
    try {
        const problems = await Problem.find({ nextScheduled: { $lte: new Date() } });

        if (problems.length > 0) {
            // Construct a message with problem details
            let messageText = 'You have problems to complete: ';
            problems.forEach(problem => {
                messageText += `${problem.problemName}, `;
            });

            // Hardcoded phone number for testing
            const phoneNumber = '16474706561';

            // Send SMS with Infobip
            const smsResponse = await infobip.channels.sms.send({
                messages: [{
                    destinations: [{ to: phoneNumber }],
                    text: messageText
                }]
            });

            res.json({ message: "SMS sent with problems to complete", smsResponse: smsResponse });
        } else {
            res.json({ message: "No problems to complete right now" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Mount the router on the '/api/problems' path
app.use('/api/problems', router);

// Start the server
start();
