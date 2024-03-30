GSDevTools.create();

const tl = gsap
  .timeline()
  .from(".stage", { autoAlpha: 0, duration: 0.2 })
  .to(".among", {
    keyframes: {
      "0%": { scale: 1 },
      "10%": { scale: 0.5, rotation: 0 },
      "70%": { scale: 3, rotation: 360 },
      "100%": { scale: 1 },
      easeEach: "sine.out",
    },
    duration: 1.5,
  });
