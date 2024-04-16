

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

const options = { damping: 0.1, }

const section03 = document.querySelector('.section03')

const scrollbar = Scrollbar.init(section03, {
  ...options
});

ScrollTrigger.scrollerProxy(section03, {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value; // setter
    }
    return scrollbar.scrollTop; // getter
  },
});
scrollbar.track.yAxis.hide();
scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: section03 });

