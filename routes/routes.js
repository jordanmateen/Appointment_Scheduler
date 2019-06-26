const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

//post route to db
router.post('/', controller.appointment_create);


//exporting ruter for api
module.exports = router;