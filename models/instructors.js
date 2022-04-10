const mongoose = require("mongoose");

// buat schema data model
const instructorsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    max: 100,
  },
  dateOfBirth:{
    type: Date,
    require: true,
  },
  Location:{
    type: String,
    require: false,
  }
});

const instructors = mongoose.model("Instructors", instructorsSchema);
module.exports = instructors;
