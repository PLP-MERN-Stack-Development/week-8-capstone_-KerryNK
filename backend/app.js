const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const fitnessRoutes = require('./routes/fitness');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRoutes);
app.use('/api/fitness', fitnessRoutes);

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || 'Server Error' });
});

module.exports = app; 