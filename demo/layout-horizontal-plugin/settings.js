const sectionColors = ["#f2eee5", "#e5c1c5", "#c3e2dd", "#6eceda", "#FB9DA7", "#FCCCD4", "#FBDEA2", "#F2E2C6", "#8EB695"];

gsap.set(".section", { backgroundColor: gsap.utils.wrap(sectionColors) });

gsap.utils.toArray(".section").forEach((item, index) => {
  let h2 = `<h2>section${index + 1}</h2>`;
  item.insertAdjacentHTML("beforeend", h2);
});

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector("#container");
const options = {
  damping: 0.1,
  alwaysShowTracks: true,
};

const pluginOptions = {};



/** Scrollbar Plugin 정의 및 사용 */
class hori extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'hori-scroller'

  transformDelta(delta, fromEvent) {
    console.log(delta, fromEvent);

    // 기본적으로 위아래를 기준으로 스크롤되는 이벤트를 좌우로 바꿔줘야 한다.
    const { x, y } = delta;

    // 실제 스크롤에 반영될 값 리턴
    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y, // x값이 있다면 x값을 그대로 쓰고, y값이 있다면 y를 x값으로 바꾼다. (맥 트랙패드 등 대응)
    }
  }
}
Scrollbar.use(hori, OverscrollPlugin);
/** Scrollbar Plugin 정의 및 사용 */


const scrollbar = Scrollbar.init(container, {
  ...options,
  plugins: {
    // Overscroll Plugin Option setting 
    overscroll: {
      effect: 'glow',
      glowColor: '#ff0000',
      damping: 0.1,
      maxOverscroll: 100,
      // onScroll(position) {
      //   console.log(position);
      // }
    }
  }
});

ScrollTrigger.scrollerProxy(container, {
  // scrollTop(value) {
  //   if (arguments.length) {
  //     scrollbar.scrollTop = value; // setter
  //   }
  //   return scrollbar.scrollTop; // getter
  // },

  // horizontal scroll: scrollTop --> scrollLeft 변경
  scrollLeft(value) {
    if (arguments.length) {
      scrollbar.scrollLeft = value; // setter
    }
    return scrollbar.scrollLeft; // getter
  },
});

scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: container });


/**
 * smooth scrollbar github > plugin.md
 * https://github.com/idiotWu/smooth-scrollbar/blob/66c67b85d35c14486bd25a73806c0ab13ffeb267/docs/plugin.md
 * 
 * 플러그인 시스템의 transformDelta(); 사용
 * 
 * 플러그인 시스템은 정의한 후에 꼭 use를 써야 함
 * Scrollbar.use(InvertDeltaPlugin);
 * 
 * Overscroll Plugin
 * 스크롤 끝에 닿으면 퉁 튕기는 효과
 * https://github.com/idiotWu/smooth-scrollbar/blob/66c67b85d35c14486bd25a73806c0ab13ffeb267/docs/overscroll.md
 * 스크립트 연결: https://github.com/idiotWu/smooth-scrollbar/blob/66c67b85d35c14486bd25a73806c0ab13ffeb267/dist/plugins/overscroll.js
 * 
 * 
 * 
 * horizontal scroll 설정
 * ScrollTrigger.scrollerProxy: scrollTop --> scrollLeft 값으로 변경
 * markers.js: scrollbar.addListener: scrollTop --> scrollLeft 값으로 변경
 * ScrollTrigger에 horizontal: true, 옵션 추가
 * 
 */
