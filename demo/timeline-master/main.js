const $ = (e) => document.querySelector(e);

const orange = $(".orange");
const blue = $(".blue");
const pink = $(".pink");
const green = $(".green");
const quote = $(".quote");

gsap.set([green, quote], { y: 120 });

gsap.defaults({ duration: 1 }); // 모든 timeline의 defaults 속성 설정

const orangeAnimation = gsap.timeline({ defaults: { duration: 1 } });
orangeAnimation
  .to(orange, { scale: 2 })
  .to(orange, { rotation: 360 })
  .to(orange, { scale: 1 })
  .to([green, quote], {
    y: 0,
    stagger: 0.2,
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
  });

const blueAnimation = gsap.timeline();
blueAnimation
  .to(blue, { y: 150 })
  .to(blue, { rotation: 360 })
  .to(blue, { y: 0 });

const pinkAnimation = gsap.timeline();
pinkAnimation
  .to(pink, { scale: 0.5 })
  .to(pink, { rotation: -360 })
  .to(pink, { scale: 1 })
  .to([green, quote], {
    y: 0,
    stagger: 0.2,
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
  });

// master timeline
const master = gsap.timeline();
master
  .add(orangeAnimation)
  // .add(blueAnimation, "-=1") // position parameter 사용 가능
  .add(blueAnimation)
  .to([green, quote], {
    y: 0,
    stagger: 0.2,
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
  })
  .add(pinkAnimation);

/**
 * https://gsap.com/docs/v3/GSAP/Timeline/add()
 */
