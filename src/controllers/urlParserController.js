'use strict';

const urlParserService = require("../services/urlParserService");

const parser = async (req, res) => {
    const {urlFormatString, urlInstance} = req.body;
    if (!urlFormatString || !urlInstance) {
        return res.send({
            error: true,
            code: 500,
            message: 'url_format_string_and_url_instance_are_required'});
    }
    res.send(urlParserService.parse(urlFormatString, urlInstance));
};

module.exports = { parser };