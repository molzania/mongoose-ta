const mongoose = require("mongoose");

// buat schema data model
const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 100,
    require: true,
  },
  description: {
    type: String,
    max:100,
    require:true,
  },
  scheduleDateTime: {
    type: Date,
    require:true,
  },
});

const courses = mongoose.model("Course", coursesSchema);
module.exports = courses;
