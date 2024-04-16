



const split = new SplitText('h3',{type:'chars'});

console.log( split.chars );

const tl = gsap.timeline()
.from('.tiger',{duration:1,scale:0,ease:'back(3)'})
.from(split.chars,{duration:4,y:60,opacity:0,ease:'back(3)',stagger:0.1})



ScrollTrigger.create({
  trigger:'.banner',
  start:'top center',
  // end:'+=1000',
  end:'200% center',
  // markers:true,
  pin:true,
  animation:tl,
  scrub:1,
  // pinSpacing:false
  // pinType:'fixed'
})




ScrollTrigger.create({
  trigger:'.section03',
  start:'top',
  end:'+=2000',
  // end:'bottom',
  animation: gsap.to('.section03 h2',{rotation:360}),
  scrub:1,
  markers:true,
  pin:true,
  // pinSpacing:false,
})






