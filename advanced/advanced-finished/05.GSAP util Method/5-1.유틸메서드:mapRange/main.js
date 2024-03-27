
const $ = node => document.querySelector(node);

let cursor = $('#cursor');
let intro = $('#intro');



let xTo = gsap.quickTo(cursor, "x", {duration: 0.4, ease: "power3"}),
    yTo = gsap.quickTo(cursor, "y", {duration: 0.4, ease: "power3"});


let widthToProgress = gsap.utils.mapRange(0,innerWidth,0,100)

intro.addEventListener('mousemove',({pageX:x,pageY:y})=>{

  // console.log( x, y);

  xTo(x - (cursor.offsetWidth * 0.5))
  yTo(y - (cursor.offsetHeight * 0.5))


  let value = widthToProgress(x);


  gsap.to('.left',{right:`${value}%`})



})


intro.addEventListener('mouseleave',()=>{
  gsap.to('.left',{right:`50%`})
})



window.addEventListener('resize',()=>{
  widthToProgress = gsap.utils.mapRange(0,innerWidth,0,100)
})




