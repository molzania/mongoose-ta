const mongoose = require("mongoose");

// buat schema data model
const participantsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    max: 100,
  },
  dateOfBirth:{
    type: Date,
    require: true,
  },
  email: {
    type: String,
    max: 50,
    require: false,
  },
  phone: {
    type: String,
    require: false,
    max: 13,
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: "courses list",
  },
});

const participants = mongoose.model("participants", participantsSchema);
module.exports = participants;
