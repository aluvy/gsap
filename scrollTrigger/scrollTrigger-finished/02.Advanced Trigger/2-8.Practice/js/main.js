const theme = {
  primary: "#6067f3",
  secondary: "#e8e2da",
};

const keywords = ['Jeju','Yang-yang','Mokpo','Busan']




function fixedHeader(){

  ScrollTrigger.create({
    trigger: '.nav_container',
    start: 'top top',
    // endTrigger:'.footer',
    end: 'max',
    pin: true,
    pinSpacing: false,
  })
}




function heroAnimation(){


  gsap.set('.logo',{
    width:'100%',
    yPercent:-90
  })

  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom 20%',
    animation: gsap.to('.logo',{width:'12%',yPercent:0}),
    scrub: true,
  })
}




function textAnimation(){

  gsap.utils.toArray('.header_text-wrap').forEach((text,index)=>{
    
    const target = text.querySelector('.header_text-move');
    // const [x,xEnd] = index % 2 ? [innerWidth , 0] : [-innerWidth, 0]

    ScrollTrigger.create({
      trigger: text,
      start: 'top center',
      end: 'bottom center',
      animation: gsap.fromTo(text,{ x: index % 2 ? innerWidth : -innerWidth },{ x:0 }),
      scrub: true,
    })
  })
}



function maskAnimation(){

  const circleTween = gsap.timeline()
  .to('.circle_element',{
    borderRadius:0,
    width: innerWidth,
    height: innerHeight
  })
  .add(changeTheme(),0)


  ScrollTrigger.create({
    trigger: '.circle_wrap',
    start: 'top top',
    end: '+=2000',
    animation: circleTween,
    pin: true,
    scrub: true,
  })
  

}


function categorieAnimation(){


  const tween = gsap.from('.categories > a',{
    opacity:0,
    filter:'blur(3px)',
    stagger:{
      each:0.1,
      from:'random'
    }
  })
  
  ScrollTrigger.create({
    trigger: '.catories_container',
    start: 'top top',
    end: '+=2000',
    animation: tween,
    pin: true,
    scrub: true,
  })
}



function changeTheme(themeMode = 'light'){


  const tween = gsap.to('body,.nav_container',{
    backgroundColor: themeMode === 'light' ? theme.secondary : theme.primary,
    color:themeMode === 'light' ? theme.primary : theme.secondary
  })

  return tween

}


function gallaryAnimation(){

  ScrollTrigger.create({
    trigger: '.text_container',
    start: 'top top',
    endTrigger:'.image_container',
    end: 'bottom bottom',
    animation: gsap.to('.front_image',{yPercent:-20}), 
    pin: true,
    pinSpacing: false,
    markers: true,
    scrub: true,
    onUpdate:({progress})=>{

      const ratio = Math.round(progress * 100);

      let index = 0;
      let mode = 'light'
      // console.log( ratio );
      
      

      if(ratio > 0 && ratio < 25){
        index = 0;
        mode = 'light'
      }
      if(ratio >= 25 && ratio < 50){
        index = 1;
        mode = 'dark'
      }
      if(ratio >= 50 && ratio < 75){
        index = 2;
        mode = 'light'
      }
      if(ratio >= 75 && ratio <= 100){
        index = 3;
        mode = 'dark'
      }
      

      changeTheme(mode);
      document.querySelector('.text_container span').textContent = keywords[index]


    }
  })
}




fixedHeader()
heroAnimation()
textAnimation()
maskAnimation()
categorieAnimation()
gallaryAnimation()













markers();
