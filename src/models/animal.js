const _ = require("lodash");
class Animal {
    constructor(name, sound) {
        this.sound = sound;
        this.name = name;
    }
    speak(input) {
        let result = "";
        const words = _.split(input, ' ');
        _.forEach(words, (word) => {
            result = result.concat(word, ` ${this.sound} `);
        });
        return result;
    }
    getName() {
        return this.name;
    }
}

module.exports = Animal;
