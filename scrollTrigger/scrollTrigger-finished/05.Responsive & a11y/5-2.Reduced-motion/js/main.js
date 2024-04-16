



const mm = gsap.matchMedia();


const options = {
  isMobile: '(max-width:500px)',
  isDesktop: '(min-width:501px)',
  reduceMotion : '(prefers-reduced-motion: reduce)'
  
}

const checkbox = document.querySelector('#motionToggle')

checkbox.checked = window.matchMedia('(prefers-reduced-motion:reduce)').matches

checkbox.addEventListener('change',gsap.matchMediaRefresh)


mm.add(options,(ctx)=>{
  
  let {isMobile,isDesktop,reduceMotion} = ctx.conditions;

  reduceMotion = checkbox.checked;


  if(!reduceMotion){
    ScrollTrigger.create({
      trigger: '.section03',
      start: 'top center',
      end: 'bottom center',
      animation: gsap.to('.orange',{rotation:360}),
      markers: true,
      scrub: true,
    })
  }


})



// mm.add(options,(ctx)=>{
  
//   const {isMobile,isDesktop,reduceMotion} = ctx.conditions;

  
//   gsap.to('.box',{
//     scale:()=>{
//       if(reduceMotion){
//         return 1
//       }else if(isMobile){
//         return 4
//       }else{
//         return 10
//       }
//     },
//     rotation:360,
//     yoyo:true,
//     repeat:-1,
//     duration:1,
//   })


  


// })


















markers()

