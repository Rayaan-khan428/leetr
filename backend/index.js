const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false)
const Problem = require('./Problem');
const router = express.Router();
app.use(express.json()); // To parse JSON request bodies


const PORT = 3000;

// get all the problems /api/problems

app.get('/', (req, res) => {
    res.send('Welcome to my LeetCode Tracker API!');
});

router.get('/test', async (req, res) => {
    try {
      const problems = await Problem.find();
      res.json(problems);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// Add a new problem /api/problems
router.post('/add', async (req, res) => {
    const problem = new Problem({
      // assuming req.body contains all the necessary fields
      ...req.body
    });
  
    try {
      const newProblem = await problem.save();
      res.status(201).json(newProblem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});
  
// Update an Existing Problem /api/problems/:id
router.put('/:id', async (req, res) => {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProblem) return res.status(404).json({ message: 'Problem not found' });
      res.json(updatedProblem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

// Delete a Problem /api/problems/:id
router.delete('/:id', async (req, res) => {
    try {
      const problem = await Problem.findByIdAndDelete(req.params.id);
      if (!problem) return res.status(404).json({ message: 'Problem not found' });
      res.json({ message: 'Problem deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

app.use('/api/problems', router);

const start = async() => {
    
    try {
        await mongoose.connect('mongodb+srv://mongo:rayaan@cluster0.ezfpo5q.mongodb.net/LeetcodeQuestions?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    } catch (err) {
        console.error('Database connection error:', err);
    }
}
  
start();
  

