const $ = (node) => document.querySelector(node);
gsap.registerPlugin(ScrollTrigger);

/**
 * 시차 라는 뜻
 */

/* 1. timeline 으로 구현 */
function fn() {
  const tl = gsap.timeline();
  tl.to(".layer-bg", { y: -100 })
    .to(".layer-1", { y: -50 }, 0)
    .to(".layer-2", { y: -80 }, 0)
    .to(".layer-3", { y: -20 }, 0)
    .to(
      ".layer-4",
      {
        y() {
          return this.targets()[0].offsetHeight * -1;
        },
        ease: "none",
      },
      0
    ) // 레이어의 최대 높이
    .to(".layer-overlay", { y: -60 }, 0);

  ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    animation: tl,
    markers: true,
    scrub: true,
  });
}
// fn();

/* 2. timeline 으로 구현 2 */
function fn2() {
  gsap.utils.toArray(".parallax").forEach((a, i) => {
    const depth = a.dataset.depth;
    const height = a.offsetHeight;
    const y = -(height * depth);

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      animation: gsap.to(a, { y, ease: "none" }),
      markers: true,
      scrub: true,
    });
  });
}
// fn2();

/* 3. timeline 으로 구현 3 */
function fn3() {
  const tl = gsap.timeline();
  ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    animation: tl,
    markers: true,
    scrub: true,
  });

  gsap.utils.toArray(".parallax").forEach((a, i) => {
    const depth = a.dataset.depth;
    const height = a.offsetHeight;
    const y = -(height * depth);

    tl.to(a, { y, ease: "none" }, 0);
  });
}
// fn3();

/* 4. timeline 으로 구현 4 */
function fn4() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      // animation: tl,
      markers: true,
      scrub: true,
    },
  });

  gsap.utils.toArray(".parallax").forEach((a, i) => {
    const depth = a.dataset.depth;
    const height = a.offsetHeight;
    const y = -(height * depth);

    tl.to(a, { y, ease: "none" }, 0);
  });
}
fn4();
