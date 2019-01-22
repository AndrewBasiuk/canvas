let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let pos = {};
let num = 100;
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

function Circle(x, y, dx, dy, rad, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.color = color;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.update = function () {
        // set range for circle moving
        if (this.x > canvas.width - this.rad || this.x < this.rad) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height - this.rad || this.y < this.rad) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // change circle radius on hover
        if (pos.x - 50 < this.x && pos.x + 50 > this.x && pos.y - 50 < this.y && pos.y + 50 > this.y) {
            if (this.rad <= 30) {
                this.rad += 20;
            }
        } else if (this.rad >= rad) {
            this.rad -= 1;
        }

        this.draw();
    }
}

//set random parameter for each objekt
for (let index = 0; index < num; index++) {
    let rad = getRandomInt(3, 15);
    let x = getRandomInt(rad, 1000 - rad);
    let y = getRandomInt(rad, 600 - rad);
    let dx = getRandomInt(-1, 1);
    let dy = getRandomInt(-1, 1);
    let color = colorArr[getRandomInt(0, 4)];

    if (dx == 0 && dy == 0) {
        dx = 1;
        dy = -1;
    }
    allCircles.push(new Circle(x, y, dx, dy, rad, color));
}

function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    allCircles.forEach(function (el) {
        el.update();
    });
}
animation();




// canvas.addEventListener("mousemove", function (e) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     var coord = mousePos(e);
//     сircle(coord.x, coord.y, 15);
// });

// function bigCircle(x, y) {
//     circle.centerX = x;
//     circle.centerY = y;
//     circle.rad = 15;
//     circle.draw();
// }
// bigCircle(30, 30);


// let num  = 3;
// let arrX = [];
// let arrY = [];
// // let dx = 1;
// // let dy = 1;
// let myWidth = 1000;
// let myHeight = 600;

// function allCoord() {
//     let arrX = [];
//     let arrY = [];

//     for (let index = 0; index < num; index++) {
//         arrX.push(getRandomInt(0, 1000));
//         arrY.push(getRandomInt(0, 600));
//     }

//     return {
//         arrX: [150,100,50],
//         arrY: [20,200,300]
//     }
// }


// function buildManyCircles(dx, dy) {
//     for (let index = 0; index < num; index++) {
//         let x = allCoord().arrX[index];
//         let y = allCoord().arrY[index];
//         bigCircle(x, y);

//         if (x + circle.rad > myWidth || x - circle.rad < 0) {
//             dx = -dx;
//         }
//         if (y + circle.rad > myHeight || y - circle.rad < 0) {
//             dy = -dy;
//         }

//         x += dx;
//         y += dy;
//     }
// }
// buildManyCircles(0, 0);




// function animation() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     requestAnimationFrame(animation);
//     buildManyCircles(10, 10);
    
// }
// animation();



// canvas.addEventListener("mousemove", function(e) {
//     var coord = mousePos(e);

//     // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // bigCircle(coord.x, coord.y);
//     // manyCircles(100);
// });






















// // (function () {
// //     var lastTime = 0;
// //     var vendors = ['ms', 'moz', 'webkit', 'o'];
// //     for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
// //         window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
// //         window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
// //             || window[vendors[x] + 'CancelRequestAnimationFrame'];
// //     }

// //     if (!window.requestAnimationFrame)
// //         window.requestAnimationFrame = function (callback, element) {
// //             var currTime = new Date().getTime();
// //             var timeToCall = Math.max(0, 16 - (currTime - lastTime));
// //             var id = window.setTimeout(function () { callback(currTime + timeToCall); },
// //                 timeToCall);
// //             lastTime = currTime + timeToCall;
// //             return id;
// //         };

// //     if (!window.cancelAnimationFrame)
// //         window.cancelAnimationFrame = function (id) {
// //             clearTimeout(id);
// //         };
// // }());

// // var left = 100;
// // function animation() {
// //     var el = document.getElementById("box");
// //     if(left < 300) {
// //         left += 1; 
// //     }
// //     el.style.left = left + "px";
// //     requestAnimationFrame(animation);
// // }
// // animation();


