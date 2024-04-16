gsap.registerPlugin(ScrollTrigger);




const scrollElement = [
  {
    target: document.querySelector('#container'),
    scrollName:null,
    marker:'main'
  },
  {
    target: document.querySelector('.deep'),
    scrollName:null,
    marker:'deep'
  },
]


const options = {
  damping:0.08,
  alwaysShowTracks:true
}

scrollElement.forEach((elem)=>{

  elem.scrollName = Scrollbar.init(elem.target, {...options})

  ScrollTrigger.scrollerProxy(elem.target, {
    scrollTop(value) {
      if (arguments.length) {
        elem.scrollName.scrollTop = value; // setter
      }
      return elem.scrollName.scrollTop;    // getter
    }
  });

  elem.scrollName.addListener(ScrollTrigger.update);

})





ScrollTrigger.create({
  trigger: '.section02',
  start: 'top center',
  end: 'bottom center',
  scroller:scrollElement[0].target,
  animation: gsap.to('.section02 h2',{x:500}),
  markers: true,
  scrub: true,
  id: scrollElement[0].marker
})







ScrollTrigger.create({
  trigger: '.d2',
  start: 'top center',
  end: 'bottom center',
  scroller:scrollElement[1].target,
  animation: gsap.to('.text',{x:200}),
  markers: true,
  scrub: true,
  id: scrollElement[1].marker
})







scrollElement.forEach((elem)=>{

  if(document.querySelector('.gsap-marker-scroller-start')){
    const markers = gsap.utils.toArray(`[class *= "marker-${elem.marker}"]`)
  
    elem.scrollName.addListener(({offset})=>{
      gsap.set(markers,{marginTop : -offset.y})
    })
    
  }

})




















