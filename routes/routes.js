const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

router.post('/', controller.appointment_create);

module.exports = router;