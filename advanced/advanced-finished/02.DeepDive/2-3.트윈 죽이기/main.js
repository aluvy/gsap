




gsap.to('.orange, .blue',{
  rotation:360,
  repeat:-1,
  ease:'linear',
  scale:1.2,
  duration:1.5,
  yoyo:true
})


const button = document.querySelector('button');


button.addEventListener('click',()=>{
  gsap.killTweensOf('.blue','scale')
})
