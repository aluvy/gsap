const $ = (node) => document.querySelector(node);

let cursor = $("#cursor");
let intro = $("#intro");

// intro.addEventListener("mousemove", ({ pageX: x, pageY: y }) => {
//   gsap.to(cursor, {
//     x: x - cursor.offsetWidth * 0.5,
//     y: y - cursor.offsetHeight * 0.5,
//   });
// });

/* quickTo() */
// x, y값을 지속적으로 변경한다.
let xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
let yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

/**
 * gsap.utils.mapRange()
 * 범위를 원하는 크기로 맵핑한다.
 * 0부터 innerwidth를 ==> 0~100%으로 맵핑한다.
 */
let widthToProgress = gsap.utils.mapRange(0, innerWidth, 0, 100); // 0~100%

intro.addEventListener("mousemove", ({ pageX: x, pageY: y }) => {
  xTo(x - cursor.offsetWidth * 0.5);
  yTo(y - cursor.offsetHeight * 0.5);
  // leftTo(x - cursor.offsetWidth * 0.5);

  let value = widthToProgress(x);
  gsap.to(".left", { right: `${value}%` });
});

intro.addEventListener("mouseleave", () => {
  gsap.to(".left", { right: `50%` });
});

// resize 시 다시 계산
window.addEventListener("resize", () => {
  widthToProgress = gsap.utils.mapRange(0, innerWidth, 0, 100); // 0~100%
});

/**
 * https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()
 * https://gsap.com/docs/v3/GSAP/gsap.quickTo()
 */
