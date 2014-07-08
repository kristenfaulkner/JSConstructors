/*global console */

var Cat = function (name, owner) {
    this.name = name;
    this.owner = owner;
};

Cat.prototype.cuteStatement = function () {
    return this.owner + " loves " + this.name;
};

Cat.prototype.meow = function () {
    console.log("Meow");
};

var cat = new Cat("name", "owner");

console.log(cat.name);
console.log(cat.owner);
console.log(cat.cuteStatement());