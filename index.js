
const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
const main = document.querySelector("#main")
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y, size, color) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speedX = Math.random() * 4 - 2;
                this.speedY = Math.random() * 4 - 2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.2) this.size -= 0.1;

                this.draw();
            }
        }

        const particles = [];

        function createParticle(e) {
            const mouseX = e.touches ? e.touches[0].clientX : e.clientX;
            const mouseY = e.touches ? e.touches[0].clientY : e.clientY;

            const size = Math.random() * 5 + 2;
            const color = `hsl(${Math.random() * 360}, 50%, 50%)`;

            particles.push(new Particle(mouseX, mouseY, size, color));
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                if (particle.size > 0.2) {
                    particle.update();
                } else {
                    particles.splice(index, 1);
                }
            });
        }

        window.addEventListener('mousemove', createParticle);
        window.addEventListener('touchmove', createParticle);

        animate();
        // Add this script after your existing JavaScript code

// Update canvas size on window resize
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Add an event listener for window resize
window.addEventListener('resize', resizeCanvas);

// Initial canvas size setup
resizeCanvas();

function clickss(element) {
    // Your custom logic for handling the click event
    console.log("Button clicked!");

    // Example: Redirect to a different URL on click
    window.location.href = "https://minecraftpocket-servers.com/server/126575/vote/";
}

