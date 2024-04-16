



// gsap.to('.textContainer',{
//   x(){
//     return -(this.targets()[0].offsetWidth - innerWidth)
//   },
//   scrollTrigger:{
//     trigger:'.demo-text',
//     start:'20% center',
//     end:'80% center',
//     markers:true,
//     scrub:1,
//   }
// })


// const textTween = gsap.to('.textContainer',{
//   x(){
//     return -(this.targets()[0].offsetWidth - innerWidth)
//   }
// })

// ScrollTrigger.create({
//   trigger:'.demo-text',
//   start:'20% center',
//   end:'80% center',
//   scrub:1,
//   animation: textTween
// })



// const imageTween = gsap.from('.imageContainer',{
//   x(){
//     return -(this.targets()[0].offsetWidth - innerWidth)
//   } 
// })


// ScrollTrigger.create({
//   trigger:'.demo-image',
//   start:'20% center',
//   end:'80% center',
//   markers:true,
//   animation: imageTween,
//   scrub:1
// })




gsap.utils.toArray('.section').forEach((section,index)=>{

  const w = section.querySelector('.wrapper');

  if(w){
    let [x,xEnd] = index % 2 ? ['100%', (w.offsetWidth - innerWidth) * -1] : [(w.offsetWidth) * -1 , 0]

    gsap.fromTo(w,{ x },{
      x:xEnd,
      scrollTrigger:{
        trigger:section,
        scrub:1,
        start:'20% center',
        end:'80% center',
        markers:true
      }
    })
  }
})


// Object shorthand property


function generateObject(name,age,gender){


  return { name, age, gender }
}



const persone1 = generateObject('범쌤',36,'male')


console.log( persone1 );









































