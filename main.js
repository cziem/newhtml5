
var canvas = document.getElementById('drawingsurface');
var ctx = canvas.getContext('2d');

// draw diagonal line
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(75, 100);
ctx.moveTo(100, 150);
ctx.lineTo(450, 50);
ctx.lineWidth = 10;

// set color
ctx.strokeStyle = '#ff0000';
ctx.stroke();