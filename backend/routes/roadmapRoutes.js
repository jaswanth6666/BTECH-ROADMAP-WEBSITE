const express = require('express');
const Roadmap = require('../models/Roadmap');
const router = express.Router();
const Course = require('../models/Course');
const Domain = require('../models/Domain');

// Get all roadmaps
router.get('/', async (req, res) => {
  try {
    const roadmaps = await Roadmap.find();
    res.json(roadmaps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get roadmaps by specialization
router.get('/:specialization', async (req, res) => {
  try {
    const roadmaps = await Roadmap.find({ specialization: req.params.specialization });
    res.json(roadmaps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;