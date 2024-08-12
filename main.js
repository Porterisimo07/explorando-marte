var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 10;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", dibujar);

function dibujar(e) {
    color = document.getElementById("color").value;
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    circulo(x, y);
}

function circulo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function Borrar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}