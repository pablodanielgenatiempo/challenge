'use strict';

const express = require("express");
const controller = require('../controllers/urlParserController');
const router = express.Router();

router.post('', controller.parser);

module.exports = router;