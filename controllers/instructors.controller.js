const {Instructors} = require("../models/instructors")

module.exports = {
  getAllInstructors: async (req, res) => {
 
    const users = await Instructors.find({}, "-__v");
    console.log(users);
  
    try {
      res.json({
        message: "berhasil ambil data instructors",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  deleteInstructors: async (req, res) => {
    const data = req.body;
  
    try {
      await Instructors.delete(data);
      res.json({
        message: "berhasil hapus data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
},

  getInstructorsDetailByID: async (req, res) => {
    const users = await Instructors.findById(req.params.id);
    try {
      res.json({
        message: "berhasil ambil data instructors by id",
        data: users,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  addInstructors: async (req, res) => {
    const data = req.body;
  
    try {
      await Instructors.create(data);
      res.json({
        message: "berhasil input data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  updateInstructors: async (req, res) => {
    const data = req.body;
  
    try {
      await Instructors.create(data);
      res.json({
        message: "berhasil update data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}