


const box = document.querySelector('.box');

// gsap.to(box,{
//   x:'100vw',
//   xPercent:-100,
//   yoyo:true,
//   repeat:-1,
//   duration:2,
//   ease:'power3.inOut'
// })



const wrapper = document.querySelector('.wrapper');

const mm = gsap.matchMedia(wrapper);



// mm.add('(max-width:500px)',(context)=>{

//   context.add('spin',()=>{
//     gsap.to(box,{
//       rotation:360,
//       duration:2,
//       repeat:-1,
//       ease:'none'
//     })
//   })
  
//   box.addEventListener('click', context.spin)

//   return ()=>{
//     box.removeEventListener('click', context.spin)
//   }

//   console.log( context );
// })



// mm.add('(min-width:501px)',()=>{

//   gsap.to(box,{
//     rotation:-360,
//     duration:2,
//   })

// })



const options = {
  isMobile: '(max-width:500px)',
  isDesktop: '(min-width:501px)',
}



// mm.add(options,(ctx)=>{

//   const {isMobile,isDesktop} = ctx.conditions;

//     gsap.to(box,{
//       rotation:()=>{
//         if(isMobile){
//           return 360
//         }else{
//           return -360
//         }
//       },
//       duration:2,
//     })
  
// })




mm.add(options,(ctx)=>{

  const {isMobile,isDesktop} = ctx.conditions;

  gsap.to('.green',{
    rotation:isMobile ? 360 : -360
  })

})













