const express = require('express');
const router = express.Router()

const courses = require("./courses.router")
const instructors = require("./instructors.router")
const participants = require("./participants.router")

router.get("/", (req, res) => {
  res.json("ini dari expres yg konek yg mongodb atlas dengan mongoose");
});

router.use("/courses", courses)
router.use("/instructors", instructors)
router.use("/participants", participants)

module.exports = router