
var canvas = document.getElementById('drawingsurface');
var ctx = canvas.getContext('2d');

// draw diagonal line
// ctx.beginPath();
// ctx.moveTo(100, 150);
// ctx.lineTo(75, 100);
// ctx.moveTo(100, 150);
// ctx.lineTo(450, 50);
// ctx.lineWidth = 10;

// // set color
// ctx.strokeStyle = '#ff0000';
// ctx.stroke();

// draw a rectangle
// ctx.beginPath();
// ctx.rect(188, 50, 200, 100);
// ctx.fillStyle = 'yellow';
// ctx.fill();
// ctx.lineWidth = 3;
// ctx.strokeStyle = 'black';
// ctx.stroke();

// draw custom shape
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(70, 250);
ctx.lineTo(300, 200);
ctx.closePath();
ctx.fill();

// Assignment, Draw a star with 8 points
