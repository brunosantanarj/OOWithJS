function Person() {
    this.name = '';
    this.age = '';
    this.eyesColor = '';
    this.body = '';

    this.move = function() {

    };

    this.say = function() {
        console.log('hello from say action')
    };

    this.see = function() {

    };
}

var bruno = new Person();
bruno.name = 'Bruno';
bruno.age = 20;
bruno.eyesColor = "negro";
bruno.body = 'Fat';
console.log(bruno)
bruno.say()