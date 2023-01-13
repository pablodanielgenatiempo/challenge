'use strict';
const fs = require('fs');
const path = require('path');
const filename = path.resolve("src", "log", "errorLog.txt");

//Configuration
let errorNumbers = 0;
const maxErrorsAllowed = 10

const getMinutes = () => new Date().getMinutes();
let minutes = getMinutes();

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function generateErrors() {
    //mock errors
      for ( let i = 0; i < 100; i++) {
        logError(`Error appears`);
        await delay(800);
    }
}
const saveError = (errorMessage) => {
    try {
        fs.appendFile(filename, errorMessage +'\n', (err) => {
            if (err) throw err;
            console.log('Saved data!');
        });
    }catch(e) {
        throw e;
    }
}

const logError=(errorMessage) => {
    saveError(errorMessage);
    errorNumbers++;
    if (errorNumbers > maxErrorsAllowed && (minutes != getMinutes()) ) {
        console.log(`Overflow -> Send Email and reset data  `)
        sendEmail();
        resetData();
    }
};

const sendEmail = () =>
    console.log(`Send email. At: ${getMinutes()} minutes. Minutes flag: ${minutes}. Number of errors: ${errorNumbers}`);

const resetData = () => {
    //log for test only
    console.log(`Reset data`);
    minutes = getMinutes();
    errorNumbers = 0;
}

module.exports = {
    generateErrors
}
