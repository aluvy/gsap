




function custom (i,t,arr){
    
  // if( i % 2 !== 0){
  //   return 100
  // }
  
  if(t.classList.contains('orange')){
    return 0
  }

  return i * 30

}






// gsap.to('.box', {
//   y: custom,
//   x: custom,
//   rotation: (i,t)=>{
//     if(t.classList.contains('orange')){
//       return 0
//     }
//     return 360
//   },
//   stagger:0.1
// });








gsap.to('.blue,.pink',{
  rotation:(i,t)=>{

    if(t.classList.contains('pink')){
      return -360
    }

    return 360
  },
  repeat:-1,
  duration:(i,t)=>{
    if(t.classList.contains('pink')){
      return 0.5
    }
    return 1
  },
  ease:'none',
  stagger:0.1
})













