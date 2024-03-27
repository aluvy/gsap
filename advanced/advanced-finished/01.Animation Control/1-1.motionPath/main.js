const $ = (node) => document.querySelector(node);

// function $(node){
//   return document.querySelector(node)
// }


const tiger = $('#tiger');
const button = $('#button');
const time = $('#time');
const progress = $('#progressSlider');






const animation = gsap.to(tiger,{
  duration:6,
  motionPath:{
    path:'#route',
    align:tiger,
  },
  onUpdate: update,
  onComplete: ()=> button.textContent = 'play'
})


function update(){
  time.textContent = animation.time().toFixed(2);
  progress.value = animation.progress();
  
  

}






progress.addEventListener('input',(e)=>{

  const target = e.currentTarget;
  button.textContent = 'play';
  
  animation.progress(target.value).pause();
  
})


function setButtonState(){
  button.textContent = animation.paused() ? 'play' : 'pause';
}


button.addEventListener('click', ()=>{
  
  animation.paused(!animation.paused()) // getter true / false

  if(animation.progress() === 1){
    animation.restart();
  }

  // if(animation.paused()){
  //   button.textContent = 'play'
  // }else{
  //   button.textContent = 'pause'  
  // }

 
  setButtonState()

  
})



const home = $('#home');
const mountain = $('#mountain');
const river = $('#river');
const company = $('#company');
const svg = $('svg');





//  이벤트 위임 event delegation
/* 
home.addEventListener('click',()=>{
  animation.pause();
  gsap.to(animation,{progress:0,duration:3})
})

mountain.addEventListener('click',()=>{
  animation.pause();
  gsap.to(animation,{progress:0.21,duration:3})
})

river.addEventListener('click',()=>{
  animation.pause();
  gsap.to(animation,{progress:0.47,duration:3})
})

company.addEventListener('click',()=>{
  animation.pause();
  gsap.to(animation,{progress:1,duration:3})
})
  */
 


svg.addEventListener('click',(e)=>{
  
  const target = e.target.closest('g');
  if(!target) return;

  const id = target.getAttribute('id');
  if(!id) return;

  if(id === 'svg') return;

  let progress = 0;
  animation.pause();

  switch (id) {
    case 'home': progress = 0; break;
    case 'mountain': progress = 0.21; break;
    case 'river': progress = 0.47; break;
    case 'company': progress = 1; break;
  }

  gsap.to(animation,{progress:progress,duration:1});
  setButtonState();


})











// 이벤트의 버블링

// 인접한 대상 찾기 closest

// 속성 가져오기 getAttribute


// if 
// switch case 문




/* 
if(animal === 'tiger'){
  console.log('떡 하나 주면 안잡아 먹지!');

}else if(animal === 'lion'){
  console.log('하~즈벤야 발바리 치와와');

}else if(animal === 'monkey'){
  console.log('우끼끼')

}else{
  console.log('사람입니다.')
}
 */

/* 
let animal = 'tiger';

switch (animal) {
  case 'tiger':
    console.log('떡 하나 주면 안잡아 먹지!');
    break;

  case 'lion':
    console.log('하~즈벤야 발바리 치와와');
    break;

  case 'monkey':
    console.log('우끼끼')
    break;

  default:
    console.log('사람입니다.')
    break;
}


 */



// gsap.to(animation,{time:3,duration:5});
// gsap.to(animation,{progress:1,duration:1});
// gsap.to(animation,{timeScale:2,duration:1});












