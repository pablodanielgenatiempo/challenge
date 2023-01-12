'use strict';
const _ = require('lodash');

function parse (urlFormatString, urlInstance) {
    console.log(`urlFormatString: ${urlFormatString} and urlInstance: ${urlInstance} `);

    const urlInstanceAux = _.split(urlInstance, '?');
    const urlInstanceAuxArray = _.split(urlInstanceAux[0], '/');
    const urlFormatArray = _.split(urlFormatString, '/');

    const result = {};
    console.log(`urlInstanceAuxArray: ${urlInstanceAuxArray} and urlFormatArray: ${urlFormatArray} `);

    for (let i = 0; i < urlFormatArray.length; i++) {
        if (
            urlFormatArray[i] !== urlInstanceAuxArray[i]
            && urlInstanceAuxArray[i] !== ''
            && urlFormatArray[i] !== '') {
            const key = urlFormatArray[i].substring(1);
            result[ key ] = urlInstanceAuxArray[i];
        }
    }
    const params = _.split(urlInstanceAux[1], '&');

    _.forEach(params, (param) => {
        const val =_.split(param, '=');
        result[val[0]] = val[1];
    });
    return result;

}

module.exports = {
    parse
}
