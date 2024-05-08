gsap.registerPlugin(ScrollTrigger);

const goToTop = gsap.timeline();
goToTop
  .to(".goToTop img", { y: 0, opacity: 1, ease: "back(3)" })
  .to(".goToTop a", { y: 0, opacity: 1, ease: "back(3)" }, "-=0.3");

ScrollTrigger.create({
  trigger: ".scroll-content", // smooth scroll 사용 시, 컨텐츠 전체 높이를 가진 컨테이너
  start: "75% center",
  end: "bottom center",
  animation: goToTop,
  markers: true,

  // enter leave enterback leaveback
  toggleActions: "play none none reverse",

  // toggleClass: "active", // 트리거 요소에 추가할 클래스 명
  // toggleClass: { targets: ".goToTop", className: "active" }, // goToTop에 active 넣기
  toggleClass: {
    targets: [".goToTop", ".scroll-content"],
    className: "active",
  },
  fastScrollEnd: 2500, // fast scroll end : 스크롤을 빠르게 올리면 애니메이션이 적용되지 않음 ( true, 2500 ... ), scrub 애니메이션에는 동작하지 않음
});

const topBtn = document.querySelector(".goToTop");

topBtn.addEventListener("click", () => {
  scrollbar.scrollTo(0, 0, 600, {
    callback() {
      console.log("done!");
    },
    easing: easing.easeInBack,
  }); // x, y, 속도
});

markers(); // 위치 중요!

/**
 * easing js : https://github.com/danro/easing-js
 */
