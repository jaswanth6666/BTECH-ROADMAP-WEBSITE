const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., AI, ML, DS
  description: { type: String, required: true }, // Brief description of the domain
  certifications: [{ type: String }], // List of required certifications,
  pathways: [{ type: String }], // List of required steps,
});

module.exports = mongoose.model('Domain', DomainSchema, 'Domains');
