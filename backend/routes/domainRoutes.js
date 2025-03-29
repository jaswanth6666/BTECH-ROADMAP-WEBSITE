const express = require('express');
const Domain = require('../models/Domain');
const router = express.Router();

// Get all domains
router.get('/', async (req, res) => {
  try {
    const domains = await Domain.find();
    res.json(domains);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific domain by ID
router.get('/:id', async (req, res) => {
    try {
      const domain = await Domain.findById(req.params.id);
      if (!domain) {
        return res.status(404).json({ message: 'Domain not found' });
      }
      res.json(domain);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;