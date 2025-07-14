const mongoose = require('mongoose');

const fitnessSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  steps: { type: Number, min: 0 },
  calories: { type: Number, min: 0 },
  weight: { type: Number, min: 0 },
  workoutType: { type: String }
});

module.exports = mongoose.model('FitnessEntry', fitnessSchema); 