

const sectionColors = ['#f2eee5','#e5c1c5','#c3e2dd','#6eceda','#FB9DA7','#FCCCD4','#FBDEA2','#F2E2C6','#8EB695']


gsap.set('.section',{backgroundColor:gsap.utils.wrap(sectionColors)})





gsap.utils.toArray('.section').forEach((item,index)=>{

  let h2 = `
  <h2>section${index + 1}</h2>
  `
  item.insertAdjacentHTML('beforeend',h2);

})




gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('#container');


const defaultOptions = {
  
    damping: 0.1,
    alwaysShowTracks: true,
    
  
}
const scrollbar = Scrollbar.init(container, {
  ...defaultOptions
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

