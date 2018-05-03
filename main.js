
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
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(70, 250);
// ctx.lineTo(300, 200);
// ctx.closePath();
// ctx.fill();

// Assignment, Draw a star with 8 points


// draw a circle
// var centerX = canvas.width / 2;
// var centerY = canvas.height / 2;
// var radius = 70;
// ctx.beginPath();
// ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// ctx.fillStyle = 'green';
// ctx.fill();
// ctx.lineWidth = 5;
// ctx.strokeStyle = '#003300';
// ctx.stroke();

// draw text
// ctx.font = "30px Arial";
// ctx.fillStyle = 'red';
// ctx.fillText('Hello World', 10, 50);

// linear gradient
// ctx.rect(0, 0, canvas.width, canvas.height);
// // add linear gradient
// var grd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// // light blue
// grd.addColorStop(0, '#8ED6FF');
// // dark blue
// grd.addColorStop(1, '#004cb3');
// ctx.fillStyle = grd;
// ctx.fill();

// radial gradient
ctx.rect(0, 0, canvas.width, canvas.height);
// add linear gradient
var grd = ctx.createRadialGradient(238, 50, 10, 238, 50, 300);
// light blue
grd.addColorStop(0, '#8ED6FF');
// dark blue
grd.addColorStop(1, '#004cb3');
ctx.fillStyle = grd;
ctx.fill();