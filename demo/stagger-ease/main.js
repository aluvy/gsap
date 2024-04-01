/**
 * 가속도 기반의 Stagger
 * stagger에 가속도를 추가하면 가속도에 기반한 값을 가지고 대상이 애니메이션을 진행하게 됩니다.
 * https://codepen.io/kindtigerr/pen/abYBjRe?editors=0011
 */

gsap.from(".stage > div", {
  duration: 2,
  opacity: 0,
  scale: 0,
  // ease: 'power3.inOut', // stagger의 ease와는 다름
  stagger: {
    each: 0.2,
    ease: "power3.inOut",
    // from: "center",
  },
});
