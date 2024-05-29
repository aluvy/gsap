gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector("#container");

const defaultOptions = {
  damping: 0.1,
  alwaysShowTracks: true,
};
const scrollbar = Scrollbar.init(container, {
  ...defaultOptions,
});

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
