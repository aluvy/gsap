const $ = (node) => document.querySelector(node);

const current = $(".current");
const mart = $(".mart");
const medi = $(".medi");
let isZoom = false;

// const map = gsap.timeline();
// map
//   .to(".map", {
//     duration: 2,
//     ease: "power2.inOut",
//     scale: 2,
//     x: 150,
//     y: -200,
//   })
//   .to("#here", { y: -10, repeat: -1, yoyo: true })
//   .pause();

const map = gsap.timeline();
map
  .to(".map", {
    duration: 2,
    ease: "power2.inOut",
    scale: 2,
    x: 150,
    y: -200,
  })
  .to("#here", { y: -10, repeat: -1, yoyo: true })
  .pause();

const handleCurrent = function () {
  if (!isZoom) map.restart();
  isZoom = true;
};

const drawPath = function (target, length) {
  const tl = gsap.timeline({
    defaults: {
      duration: 2,
    },
  });

  map.pause();
  tl.set(`${target} .pick`, { opacity: 0 })
    // .to(map, { reverse: true, duration: 2 })
    .to("#here", { y: 0, duration: 0.5 })
    .to(".map", {
      duration: isZoom ? 1 : 0,
      scale: 1,
      x: 0,
      y: 0,
    })
    .set(`${target} .pick`, { opacity: 1 })
    .fromTo(
      `${target} .path`,
      { strokeDashoffset: length },
      { strokeDashoffset: 0 }
    )
    .to(
      `${target} .pick`,
      {
        motionPath: {
          path: `${target} .path`,
          align: `${target} .path`,
          alignOrigin: [0.5, 0.5],
        },
      },
      "<"
    );
  isZoom = false;
};

const handleMart = function () {
  const length = Math.ceil($("#emart .path").getTotalLength());
  drawPath("#emart", length);
};
const handleMedi = function () {
  const length = Math.ceil($("#medi .path").getTotalLength());
  drawPath("#medi", length);
};

current.addEventListener("click", handleCurrent);
mart.addEventListener("click", handleMart);
medi.addEventListener("click", handleMedi);
