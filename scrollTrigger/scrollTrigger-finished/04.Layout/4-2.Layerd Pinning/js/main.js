


gsap.utils.toArray('.section').forEach((item,index)=>{
  
  ScrollTrigger.create({
    trigger: item,
    start: 'top top',
    pin: true,
    pinSpacing: false,
    markers: true,
    snap:{
      snapTo: 1,
      duration:0.3,
      ease: "power1.inOut"
    },
    // snap: section - 
    // scrub: true,
  })
})








markers()

