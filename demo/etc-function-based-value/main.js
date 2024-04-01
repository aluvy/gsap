/********************************* stage **********************************/
function custom(idx, target, arr) {
  // return idx % 2 === 0 ? 100 : 0;
  // return idx * 30;

  return target.classList.contains("orange") ? 30 : idx * 20;
}

gsap.to(".stage .box", {
  // y: (idx, target, arr) => idx * 30,
  // y: (idx, target, arr) => (idx > 5 ? 0 : idx * 30),
  // y: (idx, target, arr) => (idx % 2 === 0 ? 100 : 0),
  y: custom,
  x: custom,
  rotation: (idx, target, arr) =>
    target.classList.contains("orange") ? 0 : 360,
  stagger: {
    each: 0.1,
  },
});

/**
 * 함수 기반의 값, 애니메이션 - function base value
 */

/********************************* wrap **********************************/
gsap.to(".wrap .blue, .wrap .pink", {
  rotation: (i, t, a) => (t.classList.contains("blue") ? 360 : -360),
  duration: (i, t, a) => (t.classList.contains("pink") ? 0.5 : 1),
  repeat: -1,
  ease: "none",
  stagger: 0.1,
});
