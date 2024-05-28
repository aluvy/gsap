const sectionColors = ["#f2eee5", "#e5c1c5", "#c3e2dd", "#6eceda", "#8EB695", "#FCCCD4", "#FBDEA2", "#F2E2C6", "#FB9DA7"];

gsap.set(".section", {
  backgroundColor: gsap.utils.wrap(sectionColors),
});

gsap.utils.toArray(".section").forEach((item, index) => {
  let h2 = `<h2>section${index + 1}</h2>`;
  item.insertAdjacentHTML("beforeend", h2);
});

gsap.registerPlugin(ScrollTrigger);


/** ScrollbarPlugin setting */
class DisableScroll extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'disableScroll'

  transformDelta(delta) {
    delta['x'] = 0; // x에 대한 스크롤 막기
    return delta;
  }
}
Scrollbar.use(DisableScroll);
/** ScrollbarPlugin setting */


const container = document.querySelector("#container");
const options = {
  damping: 0.1,
  alwaysShowTracks: true,
};

const scrollbar = Scrollbar.init(container, {
  ...options,
});



scrollbar.track.xAxis.element.remove(); // 생성된 scrollbar의 x축의 좌표 제거



ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value; // setter
    }
    return scrollbar.scrollTop; // getter
  },
});

scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: container });


/**
 * Scrollbar의 가로스크롤 삭제 기본설정
 * 1. Scrollbar.ScrollbarPlugin transformDelta(delta) 값 수정
 * 2. scrollbar.track.xAxis.element.remove() --> 생성된 scrollbar의 x축 좌표 제거
 */
