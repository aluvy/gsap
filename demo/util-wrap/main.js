const $ = (node) => document.querySelector(node);
GSDevTools.create();

gsap.to(".stage", { autoAlpha: 1 });

const split = new SplitText("h1", { type: "chars" }); // splitText
// console.log(split); // SplitText Object
// console.log(split.chars); // 문자들의 배열

const tl = gsap.timeline();

// const y = gsap.utils.wrap([100, -100]);
// const c = gsap.utils.wrap(["red", "blue"]);

// 구조문에 할당
// const { utils } = gsap;
// const y = utils.wrap([100, -100]);
// const c = utils.wrap(["red", "blue"]);

const { wrap: w } = gsap.utils;
const y = w([100, -100]);
const c = w(["red", "blue"]);

tl.from(split.chars, {
  // y: 100,
  // y: gsap.utils.wrap([100, -100]),
  y: y,
  opacity: 0,
  stagger: {
    each: 0.02,
    from: "random", // edges, center ...
  },
}).to(split.chars, {
  x: 10,
  // y: () => {},
  y: gsap.utils.wrap([0, 100]),
  // color: "red",
  // color: gsap.utils.wrap(["red", "blue"]),
  color: c,
  stagger: {
    each: 0.02,
  },
});

/**
 * 유틸 메서드: gsap.utils.wrap()
 * 서로 다른 항목들이 다른 방향에서 등장하거나 색상의 배열을 사용하여 색을 지정하고 싶다면,
 * GSAP의 유틸 메서드인 wrap을 사용할 수 있다.
 *
 * splitText: 글자를 분리하여 배열로 만들어준다.
 * npm에 split text를 검색하면 무료 버전이 많이 있다. 또는 구글에 split text plugin 등으로 검색한다.
 *
 * gsap.utils.wrap([]); // 배열을 넣어준다. 배열이 하나씩 순환하며 적용된다.
 */

/**
 * split text 플러그인을 사용하고 싶지 않다면 문자를 전부 쪼개서 마크업 후
 *
 * const list = document.querySelectorAll('h1 > div);   // node list
 * node list는 배열이 아니기 때문에 배열로 만들어준다.
 * const listArray = Array.from(list);
 *
 * 또는 GSAP의 유틸메서드 중에서 toArray()를 사용한다.
 * const list = gsap.utils.toArrray('h1 > div);   // array
 */
