




gsap.registerPlugin(ScrollTrigger);



const container = document.querySelector('#container');


const options = {
  
    damping: 0.1,
    alwaysShowTracks: true,
    
  
}


const scrollbar = Scrollbar.init(container, {
  ...options
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


