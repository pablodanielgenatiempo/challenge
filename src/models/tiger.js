const Animal = require('./animal');
class Tiger extends Animal {
    constructor(name, sound) {
        super(name,sound);
    }
}
module.exports = Tiger;
