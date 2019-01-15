
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mousePos(e) {
    let pos = {};
    pos.y = e.pageY - e.target.getBoundingClientRect().top;
    pos.x = e.pageX - e.target.getBoundingClientRect().left;
    return pos;
}

// function Circle(x, y, rad) {
//     this.centerX = x;
//     this.centerY = y;
//     this.rad = rad;
//     this.draw = function() {
//         ctx.beginPath();
//         ctx.arc(this.centerX, this.centerY, this.rad, 0, 2 * Math.PI, true);
//         ctx.fillStyle = "rgb(0, 0, 0)";
//         ctx.fill();
//         ctx.closePath();
//     };
// }

function сircle(x, y, rad) {
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI, true);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();
    ctx.closePath();
}

let num = 1;
let randomBall = [];
for (let index = 0; index < num; index++) {
    randomBall.push(
        {
            x: getRandomInt(0, 1000),
            y: getRandomInt(0, 600)
        }
    );
}

// canvas.addEventListener("mousemove", function (e) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     var coord = mousePos(e);
//     сircle(coord.x, coord.y, 15);
// });

function Render() {
    requestAnimationFrame(Render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    randomBall.forEach(function(el) {
        сircle(el.x, el.y, 10);
    });
}
Render();
canvas.addEventListener("mousemove", function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var coord = mousePos(e);
    сircle(coord.x, coord.y, 15);
});




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


