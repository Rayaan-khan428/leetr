// Problem.js
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  problemName: String,
  difficulty: String,
  url: String,
  notes: String,
  timeComplexity: String,
  spaceComplexity: String,
  attempts: Number,
  success: Number,
  lastAttempted: Date,
  nextScheduled: Date
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
