const sectionColors = [
  '#f2eee5',
  '#e5c1c5',
  '#c3e2dd',
  '#6eceda',
  '#8EB695',
  '#FCCCD4',
  '#FBDEA2',
  '#F2E2C6',
  '#FB9DA7',
  
];

gsap.set('.section', {
  backgroundColor: gsap.utils.wrap(sectionColors),
});

gsap.utils.toArray('.section').forEach((item, index) => {
  let h2 = `
  <h2>section${index + 1}</h2>
  `;

  item.insertAdjacentHTML('beforeend', h2);
});












gsap.registerPlugin(ScrollTrigger);


class DisableScroll extends Scrollbar.ScrollbarPlugin{
  static pluginName = 'DisableScroll'

  transformDelta(delta){

    delta['x'] = 0;

    return delta;

  }
}

Scrollbar.use(DisableScroll)



const container = document.querySelector('#container');

const options = {
  damping: 0.1,
  alwaysShowTracks: true,
};
const scrollbar = Scrollbar.init(container, {
  ...options,
});


scrollbar.track.xAxis.element.remove();




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
