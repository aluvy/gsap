GSDevTools.create();
const $ = (node) => document.querySelector(node);

gsap.set(".bg > div", { xPercent: -10, opacity: 0 });

gsap.registerEffect({
  name: "textEffect",
  extendTimeline: true,
  defaults: {
    y: 30,
    opacity: 0,
  },
  effect: (target, { y, opacity }) => {
    const idx = target[0].dataset.index;

    const { chars } = new SplitText(target[0], { type: "chars" }); // Destructuring Assignment
    const tl = gsap.timeline();
    tl.from(chars, { opacity: opacity, y: y, stagger: { amount: 1 } })
      .to(`.bg > div:nth-child(${idx})`, { xPercent: 0, opacity: 1 }, "<")
      .to(chars, { delay: 1, opacity: 0, stagger: { amount: 0.5 } })
      .to(`.bg > div:nth-child(${idx})`, { xPercent: 10, opacity: 0 }, "<");

    return tl;
  },
});

// repeat
function textAnimation() {
  const animation = gsap.timeline();
  animation
    .textEffect(".ex1")
    .textEffect(".ex2")
    .textEffect(".ex3")
    .textEffect(".ex4");

  animation.eventCallback("onUpdate", () => {
    if (animation.progress() === 1) animation.restart();
  });
}
textAnimation();
