const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const roadmapRoutes = require('./routes/roadmapRoutes');
const courseRoutes = require('./routes/courseRoutes');
const domainRoutes = require('./routes/domainRoutes');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/roadmaps', roadmapRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/domains', domainRoutes);
app.use('/api/auth', authRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));