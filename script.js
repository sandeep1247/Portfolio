
var tl = gsap.timeline();

tl.from(".nav-links li", {
  y: -50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});
tl.from(".main-text h1", {
  x: -300,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.2,
});
tl.from(".main-text p", {
  x: 300,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
  stagger: 0.2,
});

tl.from("#page1 img", {
  y: 100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",

});
tl.from("#page2 h1", {
  y: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
 scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 4,
  }
});

tl.from("#page2 .heading1", {
  x: -100,
  scale: 0.8,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 4,
  }

});

tl.from("#page2 .p1", {
  y: 50,
  scale: 0.5,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 4,
  }
});

tl.from("#page2 .heading2", {
  x: -100,
   scale: 0.8,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 4,
   }
});

tl.from("#page2 .p2", {
  y: 50,
  scale: 0.5,
  opacity: 0,
  duration: 3,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: 4,
  }
});

tl.from("#page3 h1", {
  y: -50,
  opacity: 0,
  duration: 3,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    scrub: 4,
  }
});

tl.from("#page3 .cards", {
  y:50,
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    scrub: 4,
  }
});
tl.from("#skills h1",{
    y:100,
  scale: 0.9,  
  opacity: 0,
  duration: 1,
  ease: "power2.out",
    scrollTrigger: {
    trigger: "#skills",
    scroller: "body",
    scrub: 2,
  }
})


tl.from("#skills .images",{
    x: 50,
  scale: 0.5,
  origin: "center",
  opacity: 0,
  duration: 3,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#skills",
    scroller: "body",
    scrub: 4,
  }
})

tl.from("#page4 h1", {
  y: -30,
  scale: 0.5,
  // rotate: -30,
  opacity: 0,
  duration: 1.1,
  ease: "power2.out",
    scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    scrub: 4,
  }
  
});
tl.from(".content p", {
  x: 300,
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    scrub: 4,
  }
});

tl.from(".contactpage .form-group", {
  y: 50,
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    scrub: 4,
  } 
});
tl.from(".contactpage .icons", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
   scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    scrub: 4,
  }

});

let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
let linkedin = document.querySelector("#linkedin");
let github = document.querySelector("#github");
let instagram = document.querySelector("#instagram");
let phone = document.querySelector("#phone");
let Email = document.querySelector("#Email");
let emailInput = document.querySelector("#email");
let nameInput = document.querySelector("#name");
let messageInput = document.querySelector("#message");

card1.addEventListener("click", function () {
  window.location.href = "https://github.com/sandeep1247/mordengallray";
});
card2.addEventListener("click", function () {
  window.location.href = "https://github.com/sandeep1247/gsap_project";
});

card3.addEventListener("click", function () {
  window.location.href = "https://github.com/sandeep1247/ReastFull-Api";
});
card4.addEventListener("click", function () {
  window.location.href = "https://github.com/sandeep1247/AlarmClock";
});

linkedin.addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/sandeep-gupta-74697a230";
});
github.addEventListener("click", function () {
  window.location.href = "https://github.com/sandeep1247";
});
instagram.addEventListener("click", function () {
  window.location.href =
    "https://www.instagram.com/_desi__dude_2.o?igsh=MWl0Y2xqbXQ2MmRiZg==";
});

phone.addEventListener("click", function () {
  window.location.href = "tel:+917860073299";
});
Email.addEventListener("click", function () {
  window.location.href = "mailto:jnpskgupta20@gmail.com";
});
// Toggle menu for mobile view
// Get the menu icon and nav links
const menu = document.querySelector("#menu");
  const navLinks = document.querySelector(".nav-links");
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

emailjs.init("e5ASsK2pAd_sQ48ej")
document.querySelector("#contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.getElementById("name").value);
emailjs.send("Sandy_123","template_ahnxne9",{
title: "Hello",
name: nameInput.value,
time: new Date().toLocaleDateString() + " " + (new Date()).toLocaleTimeString(),
message:  messageInput.value,
email:emailInput.value,
}).then((res)=>{
    alert("Message sent successfully!");
    nameInput.value="";
    emailInput.value="";
    messageInput.value="";
}); 
});








