let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d");

const targetFPS = 5;
const blockSize = 10;

let xDir = 0, yDir = 0;

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
        if (first.x > canvas.width - blockSize)
            first.x = 0;
        else if (first.x < 0)
            first.x = canvas.width - blockSize;
        if (first.y > canvas.height - blockSize)
            first.y = 0;
        else if (first.y < 0)
            first.y = canvas.height - blockSize;
        first.draw();
        this.tailTest();
    }

    tailTest(){
        const first = this.body[0];
        for (let i = 2; i < this.body.length; i++){
            if (first.x === this.body[i].x && first.y === this.body[i].y)
                gameOver();
        }
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


    draw(){
        ctx.fillStyle = "#000";
        ctx.fillRect(this.x, this.y, blockSize, blockSize);
    }
}

const snake = new Snake();

document.addEventListener("keypress", function (event){
    switch (event.key){
        case 'A':
        case 'a':
            if(xDir === 0 || snake.body.length < 3) {
                resetInputs();
                xDir--;
            }
            break;
        case 'S':
        case 's':
            if(yDir === 0 || snake.body.length < 3) {
                resetInputs();
                yDir++;
            }
            break;
        case 'D':
        case 'd':
            if(xDir === 0 || snake.body.length < 3) {
                resetInputs();
                xDir++;
            }
            break;
        case 'W':
        case 'w':
            if(yDir === 0 || snake.body.length < 3) {
                resetInputs();
                yDir--;
            }
            break;
    }
});

let foodX = 0;
let foodY = 0;
let score = 0;
let foodInSnake = true;

function foodCreate(){
    while (foodInSnake){
        foodInSnake= false;
        foodX = Math.floor(Math.random() * canvas.width);
        foodY = Math.floor(Math.random() * canvas.height);
        foodX -= foodX % blockSize;
        foodY -= foodY % blockSize;
        for(let i = 1; i < snake.body.length; i++) {
            if(foodX === snake.body[i].x && foodY === snake.body[i].y){
                foodInSnake = true;
                }
            }
        ctx.fillStyle = "#9a0606";
        ctx.fillRect(foodX, foodY, blockSize, blockSize);
    }
}
foodCreate();

function foodCheck(){
    const first = snake.body[0];
    if(first.x === foodX && first.y === foodY){
        score++;
        snake.feed();
        foodInSnake = true;
        foodCreate();
    }
}

let updateTimer = setInterval(function (){
    snake.update();
    foodCheck();
    document.getElementById("score").innerText = "Score: " + score.toString();
}, 1000 / targetFPS);

function gameOver(){
    clearInterval(updateTimer);
    alert("Game Over");
}





