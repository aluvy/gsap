const $ = (node) => document.querySelector(node);
gsap.registerPlugin(ScrollTrigger);

/** 화면에 고정시킨다.*/

function fn() {
  const split = new SplitText("h3", { type: "chars" });
  // console.log(split);

  const tl = gsap.timeline();
  tl.from(".tiger", {
    duration: 4, // scrub:true 인 상태에서 duration을 주게 되면 / 전체 스크럽 상태에서 몇%를 가져갈지로 설정된다.
    scale: 0,
    ease: "back(3)",
  }).from(split.chars, {
    duration: 1,
    y: 60,
    opacity: 0,
    ease: "back(3)",
    stagger: { each: 0.2 },
  });

  ScrollTrigger.create({
    trigger: ".banner",
    // start: "top center",
    // end: "bottom center",

    /**
     * 트리거 대상을 pin 시킨다.
     * 시작 포인트에서 고정, 엔드 포인트에서 고정해제
     * 고정위치 : 브라우저의 트리거 위치
     * 고정할 때 .pin-spacer 라는 엘리먼트로 해당 트리거를 감싸게 되고,
     * end point의 지점에 따라서 .pin-spacer영역을 padding 으로 잡아주게 된다.
     * pinSpacing: false로 설정하게 되면 .pin-spacer의 공간을 차지하지 않는다.
     */
    pin: true,

    /**
     * "fixed"(기본값) | "transform"
     * fixed: top 값으로 조절
     * transform: translateY 값으로 조절
     */
    pinType: "fixed",

    /**
     * true(기본값) | false
     * .pin-spacer의 공간을 잡지 않고 없앤다.
     * 보통 헤더에 많이 쓰임
     */
    // start: "top top",
    // end: "1000px center",
    // end: "+=1000", // 1000px 만큼 떨어진 곳
    // pinSpacing: false,

    // start: "top center",
    // end: "200% center",  // .pin-spacer 에 트리거의 높이 * 2한 값 만큼 패딩으로 밀어줌
    // end: "+=1000",  // .pin-spacer 에 트리거의 높이 + 1000 한 값 만큼 패딩으로 밀어줌

    start: "top center",
    end: "200% center",
    // pinSpacing: false,

    // markers: true,
    id: "tiger",
    animation: tl,
    scrub: 1,
  });

  ScrollTrigger.create({
    trigger: ".section03",
    start: "top top", // 두 값이 같으면  start: "top" 로 생략 가능
    end: "+=2000",
    markers: true,
    pin: true,
    // pinSpacing: true,

    /**
     * 고정된 요소[trigger]에 애니메이션을 적용하면 에러가 나기 때문에
     * 고정 영역과 애니메이션 영역을 따로 나누는게 좋다.
     */
    animation: gsap.to(".section03 h2", { rotation: 360 }),
    scrub: 1,
  });
}
fn();
