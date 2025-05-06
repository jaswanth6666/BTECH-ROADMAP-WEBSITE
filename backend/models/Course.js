const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., CSE, ECE
  description: { type: String, required: true }, // Brief description of the course
  domains: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Domain' }], // List of domains
});

module.exports = mongoose.model('Course', CourseSchema ,'Courses');
