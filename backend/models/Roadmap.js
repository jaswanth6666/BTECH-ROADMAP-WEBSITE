const mongoose = require('mongoose');

const RoadmapSchema = new mongoose.Schema({
  specialization: { type: String, required: true },
  semester: { type: Number, required: true },
  subjects: { type: [String], required: true },
  skills: { type: [String], required: true },
  projects: { type: [String], required: true },
  certifications: { type: [String], required: true },
});

module.exports = mongoose.model('Roadmap', RoadmapSchema);