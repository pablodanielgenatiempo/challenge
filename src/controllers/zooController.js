'use strict';

const zooService = require("../services/zooService");

const analyze = async (req, res) => {
    const {animal, words} = req.body;

    if(!animal || !words) {
        return res.send({
            error: true,
            code: 500,
            message: 'animal_and_words_are_required'});
    }
    const animalCreated  = zooService.analyze(animal, words);
    if (!animalCreated) {
        return res.send({
            error: true,
            code: 501,
            message: 'unknown_animal'});
    }
    res.send(animalCreated);
};

module.exports = { analyze };