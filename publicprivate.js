//Aula 2
function Person() {
    this.name = '';
    this.age = 0;
    var tatto = 0;

    var swin = function() {
        return console.log('nadando');
    };

    this.move = function(canSwin) {
        if (canSwin) {
            return swin();
        }

        return console.log('Só sei andar')
    };
}

var bruno = new Person();
bruno.tatto = 2;
console.log(bruno);

bruno.move();
bruno.move(true);