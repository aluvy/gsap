gsap.registerPlugin(ScrollTrigger); // 필수, ScrollTrigger를 잘 찾도록

// smooth scroller에 사용할 객체
const scrollElement = [
  {
    target: document.querySelector("#container"),
    scrollName: null,
    marker: "main", // marker name
  },
  {
    target: document.querySelector(".deep"),
    scrollName: null,
    marker: "deep", // marker name
  },
];

const options = {
  damping: 0.08, // 낮을수록 많이 미끄러짐 보통 0.1 ~ 0.5 사이를 많이 넣음
  // thumbMinSize: 20,
  // renderByPixels: true,
  // alwaysShowTracks: false, // true: scroll bar가 항상 보이게 한다.
  // continuousScrolling: true,
  // wheelEventTarget: ,
  // plugins: {},
};

scrollElement.forEach((elem) => {
  elem.scrollName = Scrollbar.init(elem.target, { ...options }); // Scrollbar 생성

  // scrollerProxy 스크롤 값 우회
  ScrollTrigger.scrollerProxy(elem.target, {
    scrollTop(value) {
      if (arguments.length) {
        elem.scrollName.scrollTop = value; // setter
      }
      return elem.scrollName.scrollTop; // getter
    },
  });

  elem.scrollName.addListener(ScrollTrigger.update); // 스크롤 값 업데이트
});

// scrollbar.addListener((e) => {
//   console.log(e.offset.y); // scroll 값
// });

ScrollTrigger.create({
  trigger: ".section02",
  start: "top center",
  end: "bottom center",
  scroller: scrollElement[0].target,
  animation: gsap.to(".section02 h2", { x: 500, rotation: 350 }),
  markers: true,
  scrub: true,
  id: scrollElement[0].marker,
});

ScrollTrigger.create({
  trigger: ".d2",
  start: "top center",
  end: "bottom center",
  scroller: scrollElement[1].target,
  animation: gsap.to(".d2 .text", { x: 200 }),
  markers: true,
  scrub: true,
  id: scrollElement[1].marker,
});

// marker 위치 찾기 ( 순서 중요! ScrollTrigger 밑에 있어야 함 )
scrollElement.forEach((elem) => {
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray(`.marker-${elem.marker}`); // marker 수집
    elem.scrollName.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y, marginLeft: -offset.x }); // markers의 위치를 margin-top 마이너스 값으로 계속 밀어준다.
    });
  }
});

/**
 * ScrollSmoother는 유료 플랜이기 때문에..
 *
 * scrollTrigger.scrollerProxy
 * https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()
 * https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()#demo-smooth-scrollbar
 *
 * Smooth Scrollbar
 * https://idiotwu.github.io/smooth-scrollbar/
 */
