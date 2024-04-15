const $ = (e) => document.querySelector(e);

const orange = $(".orange");
const blue = $(".blue");
const pink = $(".pink");
const green = $(".green");
const quote = $(".quote");

gsap.registerPlugin(TextPlugin);
gsap.set([green, quote], { y: 120 });
gsap.defaults({ duration: 1 }); // 모든 timeline의 defaults 속성 설정

function tigerAnimation() {
  const orangeAnimation = gsap.timeline({ defaults: { duration: 1 } });
  orangeAnimation
    .to(orange, { scale: 2 })
    .to(orange, { rotation: 360 })
    .to(orange, { scale: 1 });

  const blueAnimation = gsap.timeline();
  blueAnimation
    .to(blue, { y: 150 })
    .to(blue, { rotation: 360 })
    .to(blue, { y: 0 });

  const pinkAnimation = gsap.timeline();
  pinkAnimation
    .to(pink, { scale: 0.5 })
    .to(pink, { rotation: -360 })
    .to(pink, { scale: 1 });

  return [orangeAnimation, blueAnimation, pinkAnimation]; // Array type timeline return
}

/** timeline array 배열 구조 분해 할당 */
const [orangeA, blueA, pinkA] = tigerAnimation();

function quoteAnimation(message) {
  const tl = gsap.timeline();
  tl.set(quote, { text: message }).to([green, quote], {
    y: 0,
    stagger: 0.2,
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
  });

  return tl; // timeline return
}

// master timeline
const master = gsap.timeline();
master
  .add(orangeA)
  .add(quoteAnimation("orange tiger !"))
  .add(blueA)
  .add(quoteAnimation("blue tiger !"))
  .add(pinkA)
  .add(quoteAnimation("pink tiger !"));

/**
 * https://gsap.com/docs/v3/GSAP/Timeline/add()
 * https://gsap.com/docs/v3/Plugins/TextPlugin
 */
