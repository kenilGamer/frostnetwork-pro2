const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillstle = "black";

ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.lineJoin = "round";
ctx.lineCap = "round"

ctx.lineWidth = 200;
ctx.globalCompositeOperation = "destination-out";
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    [lastX,lastY] = [e.offsetX,e.offsetY];
}

canvas.addEventListener("mousedown", e => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", e => {
    isDrawing = false;
});

canvas.addEventListener("mouseout", ()=>(isDrawing = false));

