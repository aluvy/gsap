// tiger
gsap.to(".tiger > div", {
  y: 100,
  // repeat: 1, // tween 반복
  // yoyo: true, // ulternate
  stagger: {
    each: 0.5,
    repeat: -1, // stagger 반복
    yoyo: true, //
  },
});

/* stage *******************************/
// stage
const l = 8 * 13;
for (let i = 0; i <= l; i++) {
  let template = `<div class="box" data-index="${i}"></div>`;
  document.querySelector(".stage")?.insertAdjacentHTML("beforeend", template);
}

gsap.to(".stage .box", {
  duration: 1,
  scale: 0.2,
  // repeat: -1,
  // yoyo: true,
  ease: "poser1.inOut",
  stagger: {
    each: 0.1,
    from: "center", // edges, end, center
    grid: "auto", // auto, [8, 13],
    // axis: "y", // 축 설정 x, y
    repeat: -1,
    yoyo: true,
  },
});
