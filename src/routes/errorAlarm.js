'use strict';

const express = require("express");
const controller = require('../controllers/errorAlarmController');
const router = express.Router();

router.get('', controller.logError);

module.exports = router;