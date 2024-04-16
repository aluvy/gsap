


const goToTop = gsap.timeline()
.to('.goToTop img',{y:0,opacity:1,ease:'back(3)'})
.to('.goToTop a',{y:0,opacity:1,ease:'back(3)'},'-=0.3')




ScrollTrigger.create({
  trigger: '.scroll-content',
  start: '75% center',
  end: 'bottom center',
  animation: goToTop,
  markers: true,
  //              E     L    EB    LB
  toggleActions:'play none none reverse',
  toggleClass:{
    targets:['.goToTop','.scroll-content'],
    className:'active'
  },
  fastScrollEnd: 1500
})




const topButton = document.querySelector('.goToTop');

topButton.addEventListener('click',()=>{

  scrollbar.scrollTo(0,0,600,{
    callback:()=>{
      console.log('done!');
    }
  })
})


















markers()