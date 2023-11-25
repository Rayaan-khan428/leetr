const express = require('express');
const mongoose = require('mongoose');
const Problem = require('./Problem'); // Import the Problem model

const app = express();
const router = express.Router();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

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

// Route to get all problems
router.get('/', async (req, res) => {
    try {
        const problems = await Problem.find();
        res.json(problems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route for chrome extension
app.post('/submitData', (req, res) => {
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

// Mount the router on the '/api/problems' path
app.use('/api/problems', router);

// Start the server
start();
