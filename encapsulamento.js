//Aula 3
function Person() {
    var name = '';
    var age = 0;

    this.getName = function() {
        return name;
    };

    this.setName = function(_name) {
        name = _name;
    };

    this.getAge = function() {
        return age;
    };

    this.setAge = function(_age) {
        age = _age;
    };
}

var bruno = new Person();
bruno.setName('Bruno');
bruno.setAge(20);
console.log(bruno.getName());
console.log(bruno.getAge());