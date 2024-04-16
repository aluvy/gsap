








// ScrollTrigger.create({
//   trigger: '.section02',
//   start: 'top center',
//   end: 'bottom center',
//   animation: lnbAnimation,
//   //              E     L    EB   LB
//   toggleActions:'restart reverse restart reverse',
// })



gsap.utils.toArray('.section').forEach((section,index)=>{


  let lnbAnimation = gsap.timeline()
  .to(`.lnb li:nth-child(${index + 1}) .dot`,{scale:2})
  .to(`.lnb li:nth-child(${index + 1}) span`,{
    opacity:1,
    x: 40,
    // color: index === 1 ? 'white' : 'black'
    color: index === 1  && 'white'

  },0)


  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: 'bottom center',
    animation: lnbAnimation,
    toggleActions: 'restart reverse restart reverse'
  })

})








ScrollTrigger.create({
  trigger: '.section02',
  start: 'top center',
  end: 'bottom center',
  // animation: gsap.to('.section02',{backgroundColor:'black'}),
  markers: true,
  // toggleActions:'restart reverse restart reverse'
  onToggle:({isActive,animation})=>{
    // console.log( self.animation );

    // if(isActive){
    //   animation.reversed(false)
    // }else{
    //   animation.reversed(true)
    // }

      // animation.reversed(!isActive)

      gsap.to('.section02',{backgroundColor: isActive ? 'black' : 'white'})

      // if(isActive){
      //   gsap.to('.section02',{backgroundColor:'black'})
      // }else{
      //   gsap.to('.section02',{backgroundColor:'white'})
      // }

  }
})
















ScrollTrigger.create({
  trigger: '.scroll-content',
  start: 'top top',
  end: 'bottom bottom',
  animation: gsap.from('.progress',{scaleY:0,transformOrigin:'center top',ease:'none'}),
  scrub: true,
})
















markers();




