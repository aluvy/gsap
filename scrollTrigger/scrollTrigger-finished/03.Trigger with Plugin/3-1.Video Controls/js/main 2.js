


// const value = {
//   number:0
// }



// gsap.to(value,{
//   number:141,
//   duration:3,
//   ease:'none',
//   snap:'number',
//   onUpdate:()=>{
//     console.log(value.number);
//   }
// })






// gsap.to('.box',{
//   x:500,
//   duration:3,
//   snap:{
//     x: {values: [0, 50, 150, 500], radius: 20}
//   },
// })







// const video = document.querySelector('#video');


// ScrollTrigger.create({
//   trigger: '.section03',
//   start: 'top center',
//   end: 'bottom center',
//   markers: true,
//   onToggle:({isActive})=>{
//     console.log( isActive );

//     isActive ? video.play() : video.pause()
//   }
// })



const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


canvas.width = innerWidth;
canvas.height = innerHeight;


const frameCount = 141;


const currentFrame = (index)=>{
  return `./assets/frames/ezgif-frame-${(index + 1).toString().padStart(3,'0')}.jpg`
}

const videoSection = {
  frame:0
}


// const images = [];


// for(let i = 0; i < frameCount; i++){
//   const img = new Image();
//   img.src = currentFrame(i)
//   images.push(img)
// }


const images = Array(frameCount).fill(null).map((_,i)=>{
  const img = new Image();
  img.src = currentFrame(i);
  return img
})



const tl = gsap.timeline()
.to(videoSection,{frame: frameCount - 1, snap:'frame', ease:'none'})
.to('#canvas',{filter:'brightness(2)',scale:3},0)


ScrollTrigger.create({
  trigger: '.section02',
  start: 'top top',
  end: '+=3000',
  animation: tl,
  pin: true,
  scrub: true,
  onUpdate: render,
})
  


// console.log( images );


// gsap.to(videoSection,{
//   frame: frameCount - 1,
//   snap:'frame',
//   ease:'none',
//   onUpdate: render,
//   scrollTrigger:{
//     trigger:'.section02',
//     start:'top top',
//     pin: true,
//     end:'+=3000',
//     scrub:true,
  
//   }
// })



images[0].onload = render




function render(){
  ctx.drawImage(images[videoSection.frame],0,0)
}







































markers()