'use strict';
const _ = require('lodash');
const Animal = require("../factories/animal");

function analyze (animal, words) {
    const animalCreated = Animal.build(animal);
    if (!animalCreated) {
        return null;
    }
    return {animal: animalCreated.getName(), says: animalCreated.speak(words) };
}

module.exports = {
    analyze
}
