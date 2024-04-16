


const progress = document.querySelector('.progress');


ScrollTrigger.create({
  trigger: '.progressHolder',
  start: 'top ' + (document.querySelector('.section01').offsetHeight - 150),
  endTrigger:'.section03',
  end: 'bottom bottom',
  animation: gsap.to(progress,{scaleX:1,ease:'none'}),
  once:true,
  onUpdate:({progress})=>{
    document.querySelector('.percent span').textContent = Math.round(progress * 100 )
  },
  pin: true,
  // markers: true,
  scrub: true,
  id:'pro'
})




const circle = document.querySelector('.circleContainer circle')
const rect = document.querySelector('.rectContainer rect')

// const circleLength = circle.getTotalLength() + 1
// const rectLength = rect.getTotalLength() + 1




// console.log( rectLength );



// gsap.set(circle,{
//   strokeDashoffset: circleLength,
//   strokeDasharray: circleLength
// })

// gsap.set(rect,{
//   strokeDashoffset: rectLength,
//   strokeDasharray: rectLength
// })



// gsap.to(circle,{
//   strokeDashoffset: 0,
//   duration:2,
// })



// const progressSVG = gsap.timeline({
//   defaults:{
//     strokeDashoffset:0,
//     ease:'none'
//   }
// })
// .to(circle,{})
// .to(rect,{},0)



const progressSVG = gsap.timeline({
  defaults:{
    ease:'none'
  }
})
.from(circle,{drawSVG:0})
.from(rect,{drawSVG:0},0)


ScrollTrigger.create({
  trigger: '.scroll-content',
  start: 'top top',
  end: 'bottom bottom',
  animation: progressSVG,
  markers: true,
  scrub: true,
})


































markers()


