
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