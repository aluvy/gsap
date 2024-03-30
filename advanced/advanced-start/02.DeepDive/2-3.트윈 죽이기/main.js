const $ = (node) => document.querySelector(node);

gsap.to(".orange, .blue", {
  rotation: 360,
  repeat: -1,
  ease: "linear",
  yoyo: true,
  scale: 1.2,
  duration: 1.5,
});

const button = $("button");

button.addEventListener("click", () => {
  // gsap.killTweensOf(".blue");
  gsap.killTweensOf(".blue", "scale");
});

/**
 * gsap.killTweensOf(선택자) : GSAP으로 생성된 트윈은 특정 대상의 애니메이션을 제거할 수 있을 뿐만 아니라, 특정대상의 속성까지 애니메이션을 제거할 수 있습니다.
 * 죽이면 되돌릴 수 없다. 정지의 개념과 다름
 */
