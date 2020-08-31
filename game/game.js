let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d");

const targetFPS = 5;
const blockSize = 10;

let xDir = 0, yDir = 0;

document.addEventListener("keypress", function (event){
    switch (event.key){
        case 'A':
        case 'a':
            resetInputs();
            xDir--;
            break;
        case 'S':
        case 's':
            resetInputs();
            yDir++;
            break;
        case 'D':
        case 'd':
            resetInputs();
            xDir++;
            break;
        case 'W':
        case 'w':
            resetInputs();
            yDir--;
            break;
    }
});

function resetInputs(){
    xDir = 0;
    yDir = 0;
}

class Snake {
    constructor() {
        this.body = new Array(new Point(canvas.width / 2 - ((canvas.width / 2) % blockSize), canvas.height / 2 - ((canvas.height / 2) % blockSize)));
        this.body.push(new Point(this.body[0].x, this.body[0].y));
        for (let i = 0; i < this.body.length; i++)
            this.body[i].newPoint = false;
    }

    getLast(){
        return this.body[this.body.length - 1];
    }

    move(){
        const first = this.body[0];
        first.x += xDir * blockSize;
        first.y += yDir * blockSize;
        if (first.x > canvas.width)
            first.x = 0;
        else if (first.x < 0)
            first.x = canvas.width - blockSize;
        if (first.y > canvas.height)
            first.y = 0;
        else if (first.y < 0)
            first.y = canvas.height - blockSize;
        first.draw();
    }

    update(){
        const lastElement = this.getLast();
        ctx.clearRect(lastElement.x, lastElement.y, blockSize, blockSize);
        this.move();
        for (let i = this.body.length - 1; i > 0; i--){
            if (this.body[i].newPoint)
                this.body[i].newPoint = false;
            else {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
        }
    }

    feed(){
        const lastElement = this.getLast();
        this.body.push(new Point(lastElement.x, lastElement.y));
    }

}

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.newPoint = true;
    }

    update(){
        if (this.newPoint){
            this.newPoint = false;
            return;
        }
        this.x += xDir * blockSize;
        this.y += yDir * blockSize;
        if (this.x > canvas.width)
            this.x = 0;
        else if (this.x < 0)
            this.x = canvas.width - blockSize;
        if (this.y > canvas.height)
            this.y = 0;
        else if (this.y < 0)
            this.y = canvas.height - blockSize;
        this.draw();
    }

    draw(){
        ctx.fillRect(this.x, this.y, blockSize, blockSize);
    }
}

const snake = new Snake();

setInterval(function (){
    snake.update();
}, 1000 / targetFPS);

setInterval(function (){
    snake.feed();
}, 1000 / 0.1);