

const markers = () => {

  if (document.querySelector('.gsap-marker-scroller-start')) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    
    
    const scrollMarkers = markers.filter((m)=> m.className.includes('scroller'))

    console.log( scrollMarkers );

    
    // const arr = [];
    // markers.forEach((m)=>{
    //   if(m.className.includes('scroller')){
    //     arr.push(m)
    //   }
    // })

    // console.log( arr );

    scrollbar.addListener(({ offset }) => {
      gsap.set(scrollMarkers, { marginLeft: -offset.y });
    });
  }
}



const arr = [
  'hi-sim',
  'hi-beom',
  'hello-sim',
  'hello-beom',
  'hi-tiger',
  'hello-tiger'
]

// forEach : 배열을 순환하는 메서드 -> 반환값이 없음.
// filter : 배열을 순환하는 메서드 -> 반환값이 배열 
// map : 배열을 순환하는 메서드 -> 반환값이 배열 


// const newArr = [];
// const aa = arr.forEach((str)=>{
//   // if(str.includes('hi')){
//     // newArr.push(str)
//   // }

//   return 'hello'
// })


// console.log( aa );


// const filter = arr.filter((str)=>{
//   return str.includes('hi')
// })



// console.log( filter );













