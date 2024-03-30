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

// 위 코드를 registarEffect()를 이용해서 재사용이 가능하게 작성해보자.

// gsap.effects 안에 정의된다.
// gsap.effects.textEffect()가 사용 가능해진다.
gsap.registerEffect({
  name: "textEffect", // 객체이름
  extendTimeline: true, // 3차 - 가독성 높히기, 확장
  defaults: {
    y: -100,
    colors: ["red", "orange"],
  },
  effect: (target, config, regist) => {
    // console.log(target, config, regist);
    // console.log(config); // defaults 에 등록한 값이 리턴

    const split = new SplitText(target, { type: "chars" });

    const tl = gsap.timeline();
    tl.from(split.chars, {
      // y: -100,
      y: config.y, // defaults의 y값
      opacity: 0,
      stagger: {
        each: 0.05,
      },
    }).to(split.chars, {
      color: gsap.utils.wrap(config.colors),
      stagger: {
        each: 0.05,
      },
    });

    return tl; // 2차 - 각 이펙트에도 타임라인을 적용하고 싶다면 timeline을 리턴해야 한다.
  },
});

/********************************************************
 * 1차 - registerEffect 만들기
 *******************************************************/
// gsap.effects.textEffect("h1", { y: 100 }, 1); // ['h1'], { y:100 }, 1 리턴

// gsap.effects.textEffect("h1");
// gsap.effects.textEffect("h2", { y: 100, colors: ["blue", "green"] }); // defaults에 설정되어 있는 값을 override한다.

/********************************************************
 * 2차 - registerEffect에 timeline 적용
 * animation이라는 큰 타임라인 안에 textEffect를 (add) 추가한다.
 ********************************************************/
// console.log(gsap.effects.textEffect("h1")); // timeline을 리턴 한 후 값을 찍어보면 timeline이 리턴되어있다.
// const animation = gsap.timeline();
// animation
//   .add(gsap.effects.textEffect("h1"))
//   .add(gsap.effects.textEffect("h2", { y: 100, colors: ["blue", "green"] }));

/********************************************************
 * 3차 - 가독성 높히기
 ********************************************************/
const animation = gsap.timeline();
animation
  .textEffect("h1")
  // .textEffect("h2", { y: 100, colors: ["blue", "green"] });
  .textEffect("h2", { y: "random(-100, 100)", colors: ["blue", "green"] }); // random도 사용 가능

/**
 * gsap.registerEffect()
 * 자주쓰는 효과를 등록한다.
 * 사이트의 일관성을 유지하는 방법. 재사용이 많은 애니메이션들을 등록해 놓고 쉽게 가져다 쓸 수 있다.
 *
 * gsap.registerPlugin();
 */
