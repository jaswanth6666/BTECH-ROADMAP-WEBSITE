const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('domains');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific course by ID
router.get('/:id', async (req, res) => {
    try {
      const course = await Course.findById(req.params.id).populate('domains');
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
module.exports = router;