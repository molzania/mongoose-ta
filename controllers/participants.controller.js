const {Participants} = require("../models/participants")

module.exports = {
  addParticipants: async (req, res) => {
    const data = req.body;
  
    try {
      await Participants.create(data);
      res.json({
        message: "berhasil input data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getAllParticipants: async (req, res) => {
 
    const Participants = await UserGetCourse.find({}, "-__v")
    .populate("Participants", "-__v")
  
    try {
      res.json({
        message: "berhasil ambil data participants",
        data: userGetCourse,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}