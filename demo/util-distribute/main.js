/**
 * 유틸 메서드: gsap.utils.distribute()
 * distribute 유틸 메서드는 배열 또는 그리드의 항목 전체에 값을 배포할 때 사용됩니다.
 * 값을 알아서 분배해준다.
 */

GSDevTools.create();

const value = gsap.utils.distribute({
  base: 0, // 시작 값
  amount: 300, // 최대 증가 값
  ease: "power3.inOut", // 가속도 사용 가능
  from: "center",
});
gsap.to(".bar", {
  // height: gsap.utils.distribute({}),
  height: value,
  duration: 2,
  stagger: {
    each: 0.1,
    ease: "power3.inOut",
    from: "center",
  },
});
