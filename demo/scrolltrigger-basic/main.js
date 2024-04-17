const $ = (node) => document.querySelector(node);

gsap.registerPlugin(ScrollTrigger);

/**
 * https://gsap.com/docs/v3/Plugins/ScrollTrigger/
 * ScrollTrigger 사용방법 - 크게 2가지
 * 1. tween 안에 연결
 * 2. 생성자로 만들어서 사용
 */

/**
 * 1. tween 안에 연결
 */
function fn1() {
  gsap.to(".tiger", {
    x: 500,
    rotation: 360,
    duration: 3,
    scrollTrigger: {
      /**
       * 드리거 되는 대상 - 애니메이션이 누구를 기준으로 사용될 것인가
       * 스크롤을 이동해서 대상이 보이면 애니메이션이 실행된다.
       */
      trigger: ".tigerSection",
      /**
       * 트리거 되는 대상의 [start]의 위치와 웹 브라우저의 [scroller-start] 위치가 닿았을 시점에 애니메이션이 재생된다.
       * "top center"
       * top : 트리거 되는 대상 .tigerSection 의 top을 시작점으로 잡겠다.
       * center : 나의 웹 브라우저 뷰포트의 지점
       * 기본 값 : "top bottom"
       * 퍼센트도 사용 가능. 위가 기준
       * start: "top 30%" ==> 위에서부터 30% 만큼 떨어진 지점
       * start: "top 300px" ==> 위에서부터 300px 만큼 떨어진 지점
       */
      start: "top center", // 트리거 되는 대상의 시작 위치, 나의 웹 브라우저 뷰포트의 지점
      /**
       * 트리거 되는 대상의 [end]의 위치와 웹 브라우저의 [scroller-end] 위치가 닿았을 시점에 애니메이션이 재생된다.
       * 기본 값 : "bottom top"
       * 퍼센트도 사용 가능. 위가 기준
       * end: "bottom 10%" ==> 위에서부터 10% 만큼 떨어진 지점
       * end: "bottom 300px" ==> 위에서부터 300px 만큼 떨어진 지점
       */
      end: "bottom 10%", // 트리거 되는 대상의 끝 위치, 나의 웹 브라우저 뷰포트의 지점
      /** 마커가 표시됨 - 어디부터 시작을 하고 어디부터 애니메이션을 끝내야 되는지에 대한 내용들을 시각적으로 확인가능 */
      markers: true,
      /** 마커에 아이디를 부여함 */
      id: "tiger",
    },
  });
}
// fn1();

/**
 * 2. 생성자로 만들어서
 */
function fn2() {
  const tween = gsap.to(".tiger", {
    x: 500,
    rotation: 360,
    duration: 3,
  });

  // 생성자 (대문자 주의)
  ScrollTrigger.create({
    trigger: ".tigerSection",
    start: "top center",
    end: "bottom 25%",
    markers: true,
    id: "tiger",

    /**
     * 트윈을 연결
     * 변수에 넣어서 참조하거나, 트윈을 직접 작성
     */
    animation: tween,
    // animation: gsap.to(".tiger", {
    //   x: 500,
    //   rotation: 360,
    //   duration: 3,
    // }),

    /**
     * 애니메이션 각 시점에 동작 지정
     * toggleActions: 'none none none none' ==> 시점 : enter, leave, enterBack, leaveBack
     * toggleActions: 'restart pause none none' ==> "play", "pause", "resume", "reset", "restart", "complete", "reverse", "none"
     * enter : restart - enter 시점에 restart
     * leave: pause - leave 시점에 pause
     * enterBack: reverse - enterBack 시점에 reverse
     * leaveBack: pause - leaveBack 시점에 pause
     */
    toggleActions: "restart pause reverse pause",

    // pin: false,
    // pinSpacing: false,
    // scrub: true,
  });
}
fn2();
