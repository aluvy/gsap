




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



barba.hooks.leave(()=>{
  ScrollTrigger.getAll().forEach(t=>t.kill())
})

barba.hooks.after(()=>{
  scrollbar.update();
  scrollbar.scrollTo(0,0)
  markers()
})


barba.hooks.beforeEnter((data)=>{
  console.log( 'enter' );

  if(data.next.namespace !== 'main'){

    gsap.set('nav',{pointerEvents:'none'})
    gsap.set('nav li',{yPercent:innerHeight})
  }
})




