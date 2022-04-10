const express = require('express');
const router = express.Router()

const { addCourse } = require('../controllers/instructors.controller');

router.post("/", addCourse);

module.exports = router