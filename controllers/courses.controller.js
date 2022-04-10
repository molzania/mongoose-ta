const {Course} = require("../models/courses")

module.exports = {
  addCourse: async (req, res) => {
    const data = req.body;
  
    try {
      await Course.create(data);
      res.json({
        message: "berhasil input data",
        data: 1,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }

    deleteCourse: async (req, res) => {
      const data = req.body;
    
      try {
        await Courses.delete(data);
        res.json({
          message: "berhasil hapus data",
          data: 1,
        });
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
  }
}}