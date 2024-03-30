GSDevTools.create();

gsap.to(".among", {
  keyframes: {
    "0%": {},
    "30%": { x: 420 },
    "50%": { scale: 2 },
    "60%": { x: 0 },
    "70%": { scale: 1 },
    "100%": { x: 420 },
    // easeEach: "sine.out",
  },
  duration: 3,
});
