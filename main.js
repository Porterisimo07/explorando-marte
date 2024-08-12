var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverwidth=100;
var roverheight=90;
var roverx=10;
var rovery=10;
var bg = new Image();
var rover = new Image();
function cargar(){
    bg.onload=uploadbg;
    bg.src="mars.jpg";
    rover.onload=uploadrover;
    rover.src="rover.png";
}
function uploadbg(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover,roverx,rovery,roverwidth,roverheight);
}