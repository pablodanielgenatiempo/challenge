const Animal = require('./animal');

class Lion extends Animal {
    constructor(name, sound) {
        super(name,sound);
    }
}
module.exports = Lion;
