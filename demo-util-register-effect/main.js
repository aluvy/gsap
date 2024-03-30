/**
 * gsap plugin을 등록한다.
 * 번들링이나 빌드 시 발생하는 tree shaking의 이슈를 해결하기 위해 등록한다.
 */
gsap.registerPlugin(GSDevTools, SplitText);

gsap.set(".stage", { autoAlpha: 1 });

// const split = new SplitText("h1", { type: "chars" });

// const tl = gsap.timeline();
// tl.from(split.chars, {
//   y: -100,
//   opacity: 0,
//   stagger: {
//     each: 0.05,
//   },
// }).to(split.chars, {
//   color: gsap.utils.wrap(["red", "orange"]),
//   stagger: {
//     each: 0.05,
//   },
// });

// 위 코드를 registarEffect()를 이용해서~

// gsap.effects 안에 정의된다.
// gsap.effects.textEffect()가 사용 가능해진다.
gsap.registerEffect({
  name: "textEffect", // 객체이름
  effect: (target, config, regist) => {
    // console.log(target, config, regist);
    const split = new SplitText(target, { type: "chars" });

    const tl = gsap.timeline();
    tl.from(split.chars, {
      y: -100,
      opacity: 0,
      stagger: {
        each: 0.05,
      },
    }).to(split.chars, {
      color: gsap.utils.wrap(["red", "orange"]),
      stagger: {
        each: 0.05,
      },
    });
  },
});

// gsap.effects.textEffect("h1", { y: 100 }, 1); // ['h1'], { y:100 }, 1 리턴
gsap.effects.textEffect("h1");
gsap.effects.textEffect("h2");

/**
 * gsap.registerEffect()
 * 자주쓰는 효과를 등록한다.
 * 사이트의 일관성을 유지하는 방법. 재사용이 많은 애니메이션들을 등록해 놓고 쉽게 가져다 쓸 수 있다.
 *
 * gsap.registerPlugin();
 */
