// LOGO SECTION
gsap.from("#logo", {
  y: -160,
  scale: 8,
  scrollTrigger: {
    trigger: ".navbar",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});

// CONTENT SECTION
gsap.from(".content h1", {
  scrollTrigger: {
    trigger: ".content",
    start: "top 50%",
    toggleActions: "play reverse play reverse",
  },
  y: 80,
  opacity: 0,
  stagger: 0.4,
  ease: "power3.out",
});

// Horizontal scroll animation
let photos = document.querySelector(".photos");
let photosWidth = photos.scrollWidth;
let viewportWidth = window.innerWidth;
let scrollDistance = photosWidth - viewportWidth + 300;

gsap.to(photos, {
  x: -scrollDistance,
  ease: "none",
  scrollTrigger: {
    trigger: ".photos-wrapper",
    start: "40% 40%",
    end: () => `+=${scrollDistance}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

// TAGS SECTION
gsap.from(".tags li", {
  scrollTrigger: {
    trigger: ".tags",
    start: "top 60%",
    toggleActions: "play reverse play reverse",
  },
  y: 40,
  rotate: 10,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
});

// Footer SECTION
gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "bottom 60%",
    toggleActions: "play reverse play reverse",
  },
  y: 150,
  duration: 5,
  opacity: 0,
  ease: "elastic.out(1,0.3)",
});
