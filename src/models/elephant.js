const Animal = require('./animal');
class Monkey extends Animal {
    constructor(name, sound) {
        super(name,sound);
    }
}
module.exports = Monkey;
