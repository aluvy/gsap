
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);





const container = document.querySelector('#container');


const options = {
  
    damping: 0.1,
    alwaysShowTracks: false,
    
  
}
const scrollbar = Scrollbar.init(container, {
  ...options
});

ScrollTrigger.scrollerProxy(container, {
  // fixedMarkers:true,
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value; // setter
    }
    return scrollbar.scrollTop; // getter
  },
});

scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: container });

