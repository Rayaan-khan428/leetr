// Problem.js
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  problemName: { type: String, required: true },
  difficulty: String, 
  url: String,
  notes: String,
  timeComplexity: String,
  spaceComplexity: String,
  attempts: { type: Number, default: 0 },
  success: { type: Number, default: 0 },
  lastAttempted: { type: Date, default: Date.now },
  nextScheduled: Date
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
