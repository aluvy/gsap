const $ = (node) => document.querySelector(node);

gsap.registerPlugin(TextPlugin);

// gsap.to(".big", {
//   duration: 2,
//   // text: "HELLO",
//   text: {
//     value: "This is the new text",
//     newClass: "class2",
//     // delimiter: " ", // value의 빈 공간데로 글자를 끊어줌
//   },
//   repeat: 1,
//   yoyo: true,
//   repeatDelay: 1, // 1초 뒤에 지워짐
// });

/**
 * gsap textPlugin
 * https://gsap.com/docs/v3/Plugins/TextPlugin
 *
 */

gsap.to(".cursor", {
  opacity: 0,
  repeat: -1,
  yoyo: true,
  duration: 0.3,
  repeatDelay: 0.4,
});

function typing(arr) {
  const tl = gsap.timeline();
  tl.to(".big", {
    text: {
      value: arr[0],
      newClass: "class2",
    },
    duration: arr[0] === "javascript" ? 1 : 0.3,
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
  });

  arr.push(arr.shift()); // 배열 0 을 꺼내 제일 마지막에 추가한다.
  gsap.delayedCall(3, typing, [arr]); // 재귀
}

const text = ["html", "css", "javascript", "react", "gsap"];
typing(text);
