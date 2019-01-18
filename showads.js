let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let pos = {};
let num = 1000;
let allCircles = [];
let colorArr = ["#0d0f11", "#61000d", "#d2374a", "#5d9700", "#092a3a"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mousePos(e) {
    pos.y = e.pageY - e.target.getBoundingClientRect().top;
    pos.x = e.pageX - e.target.getBoundingClientRect().left;
}

canvas.addEventListener("mousemove", function(e){
    mousePos(e);
});

function Circle(x, y, dx, dy, rad, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.color = color;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.update = function() {
        if (this.x > canvas.width - this.rad || this.x < this.rad) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height - this.rad || this.y < this.rad) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (pos.x - 50 < this.x && pos.x + 50 > this.x && pos.y - 50 < this.y && pos.y + 50 > this.y) {
            if(this.rad <= 30) {
                this.rad += 5;
            }
        } else if(this.rad >= rad) {
            this.rad -= 1;
        }

        this.draw();
    }
}

//set random parameter for each objekt
for (let index = 0; index < num; index++) {
    let rad = getRandomInt(3, 15);
    let x = getRandomInt(rad, 1000-rad);
    let y = getRandomInt(rad, 600-rad);
    let dx = getRandomInt(-1, 1);
    let dy = getRandomInt(-1, 1);
    let color = colorArr[getRandomInt(0, 4)];

    if(dx == 0 && dy == 0) {
        dx = 1;
        dy = -1;
    }
    allCircles.push(new Circle(x, y, dx, dy, rad, color));    
}

function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    allCircles.forEach(function(el) {
        el.update();
    });
}
animation();