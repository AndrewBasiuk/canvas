let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let pos = {x:500, y:300};
let num = 5;
let allCircles = [];
let colorArr = ["#0d0f11", "#61000d", "#d2374a", "#5d9700", "#092a3a"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mousePos(e) {
    pos.y = e.pageY - e.target.getBoundingClientRect().top;
    pos.x = e.pageX - e.target.getBoundingClientRect().left;
}

canvas.addEventListener("mousemove", function (e) {
    mousePos(e);
});

function Circle(x, y, dx, dy, rad, radians) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    // this.color = color;
    this.radians = radians;
    this.velocity = 0.03;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.update = function () {
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians)*100;
        this.y = y + Math.sin(this.radians)*100;

        this.draw();
    }
}

//set random parameter for each objekt
// for (let index = 0; index < num; index++) {
//     let rad = getRandomInt(3, 15);
//     let x = getRandomInt(rad, 1000 - rad);
//     let y = getRandomInt(rad, 600 - rad);
//     let dx = getRandomInt(-1, 1);
//     let dy = getRandomInt(-1, 1);
//     let color = colorArr[getRandomInt(0, 4)];

//     if (dx == 0 && dy == 0) {
//         dx = 1;
//         dy = -1;
//     }
//     allCircles.push(new Circle(x, y, dx, dy, rad, color));
// }

let count = 0;
for (let index = 1; index <= num; index++) {
    let radians = Math.PI + count;
    count += 2 * Math.PI / num;
    allCircles.push(new Circle(500, 300, 1, 2, 15, radians));
}


function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    allCircles.forEach(function (el) {
        el.update();
    });
}
animation();