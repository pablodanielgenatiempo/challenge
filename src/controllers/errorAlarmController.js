'use strict';

const errorAlarmService = require("../services/errorAlarmService");

const logError = async (req, res) => {
    console.log('Starting ...');
    await errorAlarmService.generateErrors();
    console.log('End ...');
    res.status(200).send({message: 'All logs processed'});
};

module.exports = { logError };