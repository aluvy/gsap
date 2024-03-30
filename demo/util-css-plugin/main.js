const $ = (node) => document.querySelector(node);

// document.querySelectorAll('.box'); // nodeList, 유사배열, forEach()정도는 쓸 수 있음
const boxes = gsap.utils.toArray(".box"); // Array return

boxes.forEach((o, i) => {
  o.addEventListener("click", () => {
    gsap.to(o, {
      backgroundColor: "gray",
      width: "300px",
      x: 200,
      // clearProps: "width", // 이렇게도 가능
      scale: 0.3,
    });
  });
});

$("#reset").addEventListener("click", () => {
  gsap.set(".box", {
    // clearProps: "width, backgroundColor",  // 초기화 하고 싶은 속성을 전달
    // clearProps: "all", // 전체 속성 초기화
    clearProps: "x",
  });
});

/**
 * CSS Plugin: clearProps
 * https://gsap.com/docs/v3/GSAP/CorePlugins/CSS#clearprops
 *
 * 자바스크립트를 통해 css 속성을 만질 경우 인라인 스타일로 적용되기 때문에 기존의 css 설정 값이 우선순위에 밀리게 된다.
 * 다시 이전 상황으로 돌아가려면 인라인 스타일 자체를 없애는 것 뿐만 아니라, 기존의 css 스타일까지 입혀줘야 하는 번거로움이 발생한다.
 * 이럴 경우 CSS plugin 기능 중 clearProps를 사용할 수 있다.
 *
 * 주의사항
 * transform으로 제어되는 속성 중 하나만 clearProps로 리셋 할 경우, transform 값이 전부 리셋된다.
 * transform: translate(x, y) scale(0.3) ==> clearProps: "x", ==> transform속성 자체가 삭제됨
 */
