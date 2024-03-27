
const $ = e => document.querySelector(e)



const orange = $('.orange')
const blue = $('.blue')
const pink = $('.pink')
const green = $('.green')
const quote = $('.quote')




gsap.set([green,quote],{y:120})


gsap.defaults({
  duration:1
})

// const tl = gsap.timeline({
//   defaults:{
//     duration:1
//   }
// })


const orangeAnimation = gsap.timeline()
.to(orange,{scale:2})
.to(orange,{rotation:360})
.to(orange,{scale:1})
.to([green,quote],{y:0,stagger:0.2,repeat:1,yoyo:true,repeatDelay:1})


const blueAnimation = gsap.timeline()
.to(blue,{y:150})
.to(blue,{rotation:360})
.to(blue,{y:0}) 
.to([green,quote],{y:0,stagger:0.2,repeat:1,yoyo:true,repeatDelay:1})


const pinkAnimation = gsap.timeline()
.to(pink,{scale:0.5}) 
.to(pink,{rotation:-360}) 
.to(pink,{scale:1}) 
.to([green,quote],{y:0,stagger:0.2,repeat:1,yoyo:true,repeatDelay:1})





const master = gsap.timeline()
.add(orangeAnimation)
.add(blueAnimation)
.add(pinkAnimation)












