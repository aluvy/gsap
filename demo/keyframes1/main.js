// console.log(gsap.version);
GSDevTools.create();

const tl = gsap
  .timeline()
  .to(".stage", { autoAlpha: 1 })
  .to(".among", {
    keyframes: {
      "0%": {},
      "25%": { y: 0 },
      "50%": { y: -100, ease: "sine.out" },
      "75%": { y: 0, ease: "sine.in" },
      "100%": { x: 500 },
      easeEach: "none",
    },
    duration: 2,
    stagger: { amount: 2 },
  });

// gsap.to('.among', {
//   keyframes: {
//     x: [0, 500],
//     y: [0, 0, -100, 0, 0],
//     easeEach: "sine.out"
//   },
//   duration: 2,
//   stagger: { each: 0.75 }
// })
