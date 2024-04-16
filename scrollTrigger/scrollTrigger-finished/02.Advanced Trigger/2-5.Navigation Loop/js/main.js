const navColor = ["#ebdec1", "#e9aab1", "#92e0d3", "#52becb", "#f17683"];

const nav = document.querySelector(".nav");

// ScrollTrigger.create({
//   trigger: '.section02',
//   start: ()=> `top ${nav.offsetHeight}px`,
//   end: ()=> `bottom ${nav.offsetHeight}px`,
//   animation: gsap.to(nav,{backgroundColor:navColor[1]}),
//   markers: true,
//   //                E      L    EB   LB
//   toggleActions: 'restart none none reverse'

// })



// const section = gsap.utils.toArray('.section').map((section) => section.getBoundingClientRect().top)




gsap.utils.toArray(".section").forEach((section, index) => {

  ScrollTrigger.create({
    trigger: section,
    start: () => `top ${nav.offsetHeight}px`,
    end: () => `bottom ${nav.offsetHeight}px`,
    animation: gsap.to(nav, { backgroundColor: navColor[index],immediateRender:false }),
    markers: true,
    //                E      L    EB   LB
    toggleActions: "restart none none reverse",
  });

});




gsap.utils.toArray('.nav li').forEach((li,index)=>{
    
  li.addEventListener('click',()=>{
    
    let sectionTop = ScrollTrigger.getAll()[index].start + nav.offsetHeight;
    scrollbar.scrollTo(0, sectionTop ,600);

  })

})
















markers();
