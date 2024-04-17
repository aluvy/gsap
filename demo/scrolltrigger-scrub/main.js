const $ = (node) => document.querySelector(node);
gsap.registerPlugin(ScrollTrigger);

/** 가로 방향의 오버스크롤이 생기지 않도록 주의한다. */

/** tween inline */
function textFn1() {
  gsap.to(".textContainer", {
    // x: -500,
    // x: ($(".textContainer").offsetWidth - innerWidth) * -1,
    // x: () => ($(".textContainer").offsetWidth - innerWidth) * -1,
    x() {
      return (this.targets()[0].offsetWidth - innerWidth) * -1;
    },
    scrollTrigger: {
      trigger: ".demo-text",
      start: "20% center", // 시작지점 : trigger의 위에서부터 20% / 뷰포트 center
      end: "80% center", // 엔드지점 : trigger의 위에서부터 80% / 뷰포트 center

      /**
       * 손가락으로 문질문질 하는 효과
       * start 지점에서 애니메이션이 재생되고 끝나는게 아니라
       * 스크롤 값에 따라 애니메이션이 동작한다. 스타트 지점~엔드지점 == 0 ~ -500
       *
       * ** Boolean ** - `scrub: true` 애니메이션의 진행 상황을 ScrollTrigger의 진행 상황에 직접 연결합니다.
       * ** Number ** - 재생 헤드가 ‘tracking’ 하는데 걸리는 시간(초)으로 `scrub:0.5` 애니메이션의 재생 헤드가 스크롤 막대의 위치를 따라잡는데 0.5초의 시간이 걸립니다.
       */
      scrub: 1,
      /**
       * 숫자 스크럽이 적용된 경우에만 적용 - 숫자 스크럽이 완료될 때 호출된다.
       */
      onScrubComplete() {
        console.log("scrub Complete");
      },

      markers: true,
    },
  });
}
// textFn1();

/** 생성자 */
function textFn2() {
  const textTween = gsap.to(".textContainer", {
    x() {
      return (this.targets()[0].offsetWidth - innerWidth) * -1;
    },
  });

  ScrollTrigger.create({
    trigger: ".demo-text",
    start: "20% center",
    end: "80% center",
    animation: textTween,
    scrub: 1,
    onScrubComplete() {
      console.log("scrub Complete");
    },
    markers: true,
    id: "textTween",
  });
}
// textFn2();

function imageFn() {
  const imageTween = gsap.from(".imageContainer", {
    x() {
      return (this.targets()[0].offsetWidth - innerWidth) * -1;
    },
  });

  ScrollTrigger.create({
    trigger: ".demo-image",
    start: "20% center",
    end: "80% center",
    animation: imageTween,
    scrub: 1,
    marker: true,
    id: "imageTween",
  });
}
// imageFn();

function ArrayFn() {
  gsap.utils.toArray(".section").forEach((a, i) => {
    const w = a.querySelector(".wrapper");
    if (!w) return;

    const wWidth = (w.offsetWidth - innerWidth) * -1;

    // const [x, xEnd] = i % 2 ? ["0", wWidth] : [wWidth, "0"]; // 시작점, 끝점
    const [x, xEnd] = i % 2 ? ["100%", wWidth] : [wWidth, 0]; // 시작점, 끝점

    gsap.fromTo(
      w,
      { x }, // shorthand property
      {
        x: xEnd,
        scrollTrigger: {
          trigger: a,
          start: "20% center",
          end: "80% center",
          scrub: 1,
          markers: true,
        },
      }
    );
  });
}
ArrayFn();
