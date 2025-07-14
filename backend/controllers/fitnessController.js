const FitnessEntry = require('../models/FitnessEntry');

exports.getEntries = async (req, res) => {
  const entries = await FitnessEntry.find({ user: req.user._id }).sort({ date: -1 });
  res.json(entries);
};

exports.createEntry = async (req, res) => {
  const entry = await FitnessEntry.create({ ...req.body, user: req.user._id });
  res.status(201).json(entry);
};

exports.updateEntry = async (req, res) => {
  const entry = await FitnessEntry.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  if (!entry) return res.status(404).json({ message: 'Entry not found' });
  res.json(entry);
};

exports.deleteEntry = async (req, res) => {
  const entry = await FitnessEntry.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!entry) return res.status(404).json({ message: 'Entry not found' });
  res.json({ message: 'Entry deleted' });
};

exports.getStats = async (req, res) => {
  const stats = await FitnessEntry.aggregate([
    { $match: { user: req.user._id } },
    {
      $group: {
        _id: null,
        totalSteps: { $sum: '$steps' },
        totalCalories: { $sum: '$calories' },
        avgWeight: { $avg: '$weight' }
      }
    }
  ]);
  res.json(stats[0] || {});
}; 