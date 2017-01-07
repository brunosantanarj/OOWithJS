//Aula 4 - Prototype
var Animal = function() {

};

Animal.prototype.name = '';
Animal.prototype.type = '';

Animal.prototype.move = function() {
    console.log('movimentando')
};

Animal.prototype.say = function() {

};

var cat = new Animal();
cat.move()
console.log(new Animal())