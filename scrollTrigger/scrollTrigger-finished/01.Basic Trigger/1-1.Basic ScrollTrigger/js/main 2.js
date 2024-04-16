

//  tween 안에 연결
//  생성자로 만들어서 


const tween = gsap.to('.tiger',{
  x:500,
  rotation:360,
  duration:3,
  // scrollTrigger:{
  //   trigger:'.tigerSection',
  //   start:'10% center',
  //   end:'30% 10%',
  //   markers:true,
  //   id:'tiger'
  // }
})



ScrollTrigger.create({
  trigger:'.tigerSection',
  start:'top center',
  end:'bottom center',
  markers:true,
  animation: tween,
          //       e       l     eb      lb
  toggleActions: 'restart pause reverse pause'
})








