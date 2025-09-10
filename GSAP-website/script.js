gsap.from("#logo", {
  y: -160,
  scale: 8,
  color: "white",
  scrollTrigger: {
    trigger: ".navbar",
    start: "top bottom",
    end: "top top",
    scrub: true,
  },
});

gsap.to(".content h1", {
  y: 200,
  scale: 0.5,
  opacity: 0,
  stagger: true,
  scrollTrigger: {
    trigger: ".content",
    start: "50% 50%",
    end: "50% 50%",
    scrub: 2,
    markers: true,
  },
});
