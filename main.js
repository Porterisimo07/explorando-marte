var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var roverwidth = 100;
var roverheight = 90;
var roverx = 10;
var rovery = 10;
var bg = new Image();
var rover = new Image();
function cargar() {
    bg.onload = uploadbg;
    bg.src = "mars.jpg";
    rover.onload = uploadrover;
    rover.src = "rover.png";
}
function uploadbg() {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
}
function uploadrover() {
    ctx.drawImage(rover, roverx, rovery, roverwidth, roverheight);
}

window.addEventListener("keydown", mover);
function mover(t) {
    console.log(t);
    keypress = t.keyCode;
    if (keypress == "38") {
        up();
    }
    if(keypress=="40"){
        down();
    }
    if(keypress=="39"){
        right();
    }
    if(keypress=="37"){
        left();
    }
}

function up() {
    if(rovery>=0){
        rovery = rovery - 10;
        uploadbg();
        uploadrover();   
    }
}

function down() {
    if(rovery<=500){
        rovery = rovery +10;
        uploadbg();
        uploadrover();   
    }
}

function right() {
    if(roverx<=700){
        roverx = roverx +10;
        uploadbg();
        uploadrover();   
    }
}

function left() {
    if(roverx>=0){
        roverx = roverx -10;
        uploadbg();
        uploadrover();   
    }
}