



// 1. [✅] 페이지별 enter / leave 애니메이션 구성
// 2. [✅] title enter / leave 애니메이션 
// 3. [✅] section 정렬하기
// 4. [✅] event 연결하기
// 5. [✅] next와 current구분 후 애니메이션 재생
// 6. [✅] playing 상태 변수 제어 
// 7. [✅] 시즌별 text 변경 



gsap.set('section',{
  opacity:0,
  zIndex: gsap.utils.distribute({
    base:1,
    amount:10,
    from:'end'
  })

})


function title(){

  const enter = gsap.timeline({
    defaults:{
      opacity:0,
      y:50
    },
    paused:true
  })
  .from('.title > h1',{})
  .from('.title > p',{},'-=0.3')
  .from('.title > button',{},'-=0.3')


  const leave = gsap.timeline({
    defaults:{
      opacity:0,
      y:50
    },
    paused:true
  })
  .to('.title > button',{},'-=0.3')
  .to('.title > p',{},'-=0.3')
  .to('.title > h1',{})


  return [enter,leave]
}


function page01(){
  const page = '#page01';
  const enter = gsap.timeline({
    defaults:{
      duration:1,
      opacity:0,
    },
    paused:true
  })
  .to(page,{opacity:1})
  .from(page + ' .bg',{scale:2},'<')
  .from(page + ' .woody',{y:30},'-=0.2')
  .from(page + ' .forky',{y:30},'-=0.2')
  .from(page + ' .chair',{x:-30},'<')
  .from(page + ' .bag',{x:-30},'-=0.5')
  .from(page + ' .jessie',{x:-30},'-=0.5')
  .from(page + ' .toy > div',{duration:0.1,y:30,stagger:0.05},'-=0.5')


  const leave = gsap.timeline({
    defaults:{
      duration:0.5,
      opacity:0
    },
    paused:true
  })
  .to(page + ' .toy > div',{duration:0.1,y:30,stagger:0.05})
  .to(page + ' .woody',{y:30},'-=0.2')
  .to(page + ' .forky',{y:30},'-=0.2')
  .to(page + ' .chair',{x:-30},'<')
  .to(page + ' .bag',{x:-30},'-=0.5')
  .to(page + ' .jessie',{x:-30},'<')
  .to(page + ' .bg',{duration:2,scale:2,opacity:1},'<')
  .to(page,{},'-=0.3')



  return [enter,leave];
}


function page02(){

  const page = '#page02';
  const enter = gsap.timeline({
    defaults:{
      duration:1,
      opacity:0,
    },
    paused:true
  })
  .to(page,{opacity:1})
  .from(page + ' .floor',{y:50},'<')
  .from(page + ' .left_bg',{x:-50},'<')
  .from(page + ' .right_bg',{x:50},'<')
  .from(page + ' .woody',{y:30})
  .from(page + ' .forky',{y:30},'-=0.5')
  



  const leave = gsap.timeline({
    defaults:{
      duration:1,
      opacity:0
    },
    paused:true
  })
  .to(page + ' .woody',{y:30})
  .to(page + ' .forky',{y:30},'-=0.5')
  .to(page + ' .floor',{y:50})
  .to(page + ' .left_bg',{x:-50},'<')
  .to(page + ' .right_bg',{x:50},'<')
  .to(page,{},'<')

  
  return [enter,leave];

}


function page03(){

  const page = '#page03';

  gsap.set(page + ' .toy > div',{transformPerspective:600})

  const enter = gsap.timeline({
    defaults:{
      duration:1,
      // opacity:0,
    },
    paused:true
  })
  .to(page,{opacity:1})
  .from(page + ' .bg',{scale:1.5},'<')
  .from(page + ' .toy > div',{
    stagger:{
      each:0.1,
      from:'edges'
    },
    ease:'back(1).inOut',
    y:800,
    z:500,
    x: gsap.utils.distribute({
      base:-200,
      amount:400
    })
  })



  const leave = gsap.timeline({
    defaults:{
      duration:1,
    },
    paused:true
  })
  .to(page + ' .toy > div',{
      stagger:{
        each:0.1,
        from:'center'
      },
      ease:'back(1).inOut',
      y:800,
      z:500,
      x: gsap.utils.distribute({
        base:-200,
        amount:400
      })
    })
    .to(page + ' .bg',{scale:1.5},'<')
    .to(page,{opacity:0},'-=0.5')


  return [enter,leave];

}



const [enter1,leave1] = page01();
const [enter2,leave2] = page02();
const [enter3,leave3] = page03();
const [titleEnter,titleLeave] = title();


const enter = [enter1,enter2,enter3];
const leave = [leave1,leave2,leave3];


const navList = gsap.utils.toArray('.nav  li');


let current = 0;
let next = 0;
let playing = true;

navList.forEach((li,index)=>{


  const roma = ['I','II','III'];
  const arabic = ['1','2','3'];
  

  li.addEventListener('click',()=>{
    
    if(!playing){

      next = index

      if(li.classList.contains('active')) return;

      for(let i = 0; i < navList.length; i++){
        navList[i].classList.remove('active');
      }

      li.classList.add('active');

      const tl = gsap.timeline()

      .add(leave[current].play())
      .add(titleLeave.play(),'-=1')
      .set('.title > h1',{text:`toystory ${roma[index]}`})
      .set('.title > p',{text:`토이스토리 시즌 ${arabic[index]}`},'<')
      .add(enter[next].play())
      .add(titleEnter.play())

  
      tl.eventCallback('onComplete',()=>{
        current = next;
        playing = false;
      })

      playing = true;

    }
    
    



  })


})





window.addEventListener('load',()=>{

  const tl = gsap.timeline()

  .add(enter1.play())
  .add(titleEnter.play())

  tl.eventCallback('onComplete',()=>{
    playing = false;
  })
  
})






















