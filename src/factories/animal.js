const Monkey = require('../models/monkey');
const Elephant = require('../models/elephant');
const Lion = require('../models/lion');
const Tiger = require('../models/tiger');
const Enum = require('../models/animalEnum');

class Animal {
    static build(animal) {
        switch (animal.toUpperCase()) {
            case Enum.TIGER:
                return new Tiger(Enum.TIGER, 'grrr');
            case Enum.LION:
                return new Lion(Enum.LION, 'roar');
            case Enum.MONKEY:
                return new Monkey(Enum.MONKEY, 'shriek');
            case Enum.ELEPHANT:
                return new Elephant(Enum.ELEPHANT, 'scream');
            default:
                console.error(`Incorrect value: " ${animal} " `);
                return null;
        }
    }
}
module.exports = Animal;
