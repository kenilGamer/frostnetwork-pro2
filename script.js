const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "rgba(0, 0, 0, 0.98)";
// ctx.fillStyle = "#000000f5";
ctx.fillRect(0, 0, canvas.width, canvas.height ,10);

ctx.lineJoin = "round";
ctx.lineCap = "round";

// Adjust the line width based on the device type
ctx.lineWidth = isMobile() ? 80 : 200;

ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;

    // Use touch events for mobile devices
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(clientX, clientY);
    ctx.stroke();

    lastX = clientX;
    lastY = clientY;
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchmove", draw);

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

canvas.addEventListener("touchend", () => {
    isDrawing = false;
});

canvas.addEventListener("mouseout", () => {
    isDrawing = false;
});

// Function to check if the device is a mobile device
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
