
const tl = gsap.timeline()

tl.from('#nav-l img',{
  y: -100,
  opacuty: 0,
  duration: 1,
  // delay: 0.2,
  stagger: 0.1
})
tl.from('#nav-l h1',{
  y: -100,
  opacuty: 0,
  duration: 1,
  // delay: 0.2,
  stagger: 0.1
})

tl.from('#nav-r a',{
    y: -100,
    opacuty: 0,
    duration: 1,
    // delay: 0.5,
    stagger: 0.2
  })

tl.from('#nav-r .login',{
  y: -100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  // stagger: 0.3
})

// tl.from("#contaner",{
//   opacity:0,
 
//   y: -100,
//   stagger: 0.5,
//   // rotate: 36
// })

gsap.from("#page2 .hfhf",{
  y: -100,
  duration: 2,
  opacity: 0,
  // stagger: 0.5,
  // rotate: 36

  scrollTrigger:{
      trigger:"#page2",
      scroll: "body",
      // markers: true,
      start: "top 30%",
      end: "top 130%",
      scrub: 5,
      // pin: true
  }

})


gsap.from("#page3 iframe",{
  y: -100,
  duration: 2,
  opacity: 0,
  // stagger: 0.5,
  // rotate: 36

  scrollTrigger:{
      trigger:"#page3",
      scroll: "body",
      // markers: true,
      start: "top 30%",
      end: "top 130%",
      scrub: 2,
      // pin: true
  }

})


// gsap.from("#main footer",{
//   y: -100,
//   duration: 2,
//   opacity: 0,
//   // stagger: 0.5,
//   // rotate: 36

//   scrollTrigger:{
//       trigger:"#main",
//       scroll: "body",
//       markers: true,
//       start: "top 130%",
//       end: "top -100%",
//       scrub: 2,
//       // pin: true
//   }

// })


gsap.from("#main footer",{
  y: -100,
  duration: 2,
  opacity: 0,
  // stagger: 0.5,
  // rotate: 36
  scrollTrigger:{
      trigger:"#main",
      scroll: "body",
      // markers: true,
      start: "top 90%",
      end: "top 100%",
      scrub: 2,
      // pin: true
  }
})  



function clickss(button) {
  let text;
  if (confirm("BUY NOW !") == true) {
    text = "Add To Card Successful!";
  } else {
    text = "You canceled!";
  }

  // Find the nearest parent with class "cards" and then select the ".result" element
  let resultElement = button.closest(".cards").querySelector(".result");
  resultElement.innerText = text; 
}

// clickss()
const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

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