// 타임라인 자체를 멈추고 다시 재생 시키는 방법은?

/* delay */
// let tl = gsap
//   .timeline()
//   .to(".orange", { duration: 2, x: 300 })
//   .to(".blue", { delay: 2, duration: 2, x: 300 });

/* position parameter */
// let tl = gsap
//   .timeline()
//   .to(".orange", { duration: 2, x: 300 })
//   .addPause(1)
//   .addPause("+=2")
//   .to(".blue", { duration: 2, x: 300 }, "+=2");

/**
 * 위의 두 방법은 타임라인의 초가 늘어난다.
 * 타임라인을 강제로 멈추고 원하는 시점에 재생하는 방법은?
 */
// let tl = gsap
//   .timeline()
//   .to(".orange", { duration: 2, x: 300 })
//   .addPause(">", wait, [2]) // animation이 끝나는 시점에 맞춰서 정확히 pause 실행
//   .to(".blue", { duration: 2, x: 300 });

// function wait(sec) {
//   gsap.delayedCall(sec, () => tl.play());
// }

let tl = gsap
  .timeline()
  .to(".orange", { duration: 2, x: 300 })
  .addPause(">", gsap.delayedCall, [2, () => tl.play()]) // animation이 끝나는 시점에 맞춰서 정확히 pause 실행
  .to(".blue", { duration: 2, x: 300 });

/** 설명 */

// const t = gsap.delayedCall(2, () => {
//   console.log("hello");
// });
/**
 * https://gsap.com/docs/v3/GSAP/gsap.delayedCall()
 * https://gsap.com/docs/v3/GSAP/Timeline/addPause()
 *
 * delayedCall()은 tween을 생성하여 return한다.
 * console.log(t); // tween이 return된다.
 *
 * tween.vars Object에서 확인 가능
 * gsap.to(???, { delay: 2, duration: 0, onComplete: ()=>{ //... }})
 */

/**
 * tween 제거 방법
 * tl.kill()
 */

GSDevTools.create({ animation: tl });
