const $ = (node) => document.querySelector(node);
gsap.registerPlugin(ScrollTrigger);

const tween = gsap.fromTo(
  ".wrapper.text",
  {
    x: "100%",
  },
  {
    x: -innerWidth,
  }
);

ScrollTrigger.create({
  trigger: ".demo-text",
  // start: "top bottom",
  // end: "bottom top",
  animation: tween,
  marker: true,
  scrub: true,
});
