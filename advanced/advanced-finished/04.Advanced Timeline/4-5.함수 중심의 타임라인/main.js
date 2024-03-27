
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


function tigerAnimation(){
  const orangeAnimation = gsap.timeline()
  .to(orange,{scale:2})
  .to(orange,{rotation:360})
  .to(orange,{scale:1})
  
  
  const blueAnimation = gsap.timeline()
  .to(blue,{y:150})
  .to(blue,{rotation:360})
  .to(blue,{y:0})
  
  const pinkAnimation = gsap.timeline()
  .to(pink,{scale:0.5})
  .to(pink,{rotation:-360})
  .to(pink,{scale:1})

  return [orangeAnimation,blueAnimation,pinkAnimation]
  
}


const [orangeA,blueA,pinkA] = tigerAnimation();

// const orangeA = tigerAnimation()[0]
// const blueA = tigerAnimation()[1]
// const pinkA = tigerAnimation()[2]



function quoteAnimation(message){
  const tl = gsap.timeline()
  .set(quote,{text:message})
  .to([green,quote],{y:0,stagger:0.2,repeat:1,yoyo:true,repeatDelay:1})

  return tl 
}







const master = gsap.timeline()
.add(orangeA)
.add(quoteAnimation('orange tiger!'))
.add(blueA)
.add(quoteAnimation('blue tiger!'))
.add(pinkA)
.add(quoteAnimation('pink tiger!'))




