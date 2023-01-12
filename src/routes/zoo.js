'use strict';

const express = require("express");
const controller = require('../controllers/zooController');
const router = express.Router();

router.post('', controller.analyze);

module.exports = router;
