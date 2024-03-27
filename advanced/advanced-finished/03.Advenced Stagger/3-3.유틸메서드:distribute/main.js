





const value = gsap.utils.distribute({
    base:0,
    amount:400,
    ease:'power3',
    from:'center'
})



gsap.to('.bar',{
  height:value,
  duration:2,
  stagger:{
    each: 0.1,
    // ease:'power3'
    from:'center'
  },
})




GSDevTools.create()




