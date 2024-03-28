const tl = gsap.timeline({
  defaults: { opacity: 0, duration: 0.2 }, // timeline 안에만 설정
});

function init() {
  tl.set(".stage", { opacity: 0, autoAlpha: 0 })
    .to(".stage", { opacity: 1, autoAlpha: 1, duration: 1 })
    // .from(".stage", { opacity: 1, autoAlpha: 0, duration: 1 }) // FOUC 해결 방법 step2 (from이기 때문에 0)
    .from(".contents h1", { x: 20, id: "h1" })
    .from(".contents h2", { x: -20, duration: 0.5, id: "h2" })
    .from(".contents p", { y: 30, id: "p" })
    .from(".contents button", { y: 30, id: "button" })
    .from(
      ".planet img",
      { duration: 0.6, scale: 0, ease: "back.out", stagger: { each: 0.1 } },
      "-=0.2"
    );
}

window.addEventListener("DOMContentLoaded", () => {
  init();
});
