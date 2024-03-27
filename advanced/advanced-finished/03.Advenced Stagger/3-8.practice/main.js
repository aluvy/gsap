
const $ = node => document.querySelector(node);

const planet = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
  'pluto'
]




// map  -> 배열의 능력 (새로운 배열을 반환)
// forEach -> 배열의 능력 (값을 반환하지 x)
// insertAdjacentHTML (dom 뿌려주는)


const list = planet.map((planetName)=>{
  return /* html */ `
    <div class="solar_system" data-planet-name="${planetName}">
      <div class="planet ${planetName}">
        <div class="overlay"></div>
        <h2>${planetName}</h2>
      </div>
    </div>
  `
})





function render(){

  const space = $('.space')

  list.forEach((planet)=>{
    space.insertAdjacentHTML('beforeend',planet)
  })



}




render();






const z = gsap.utils.distribute({
  base:-18400,
  amount:18400,
  from:'end'
})



gsap.set('.planet',{
  z:z,
  scaleX:0.8,
  rotateX:4,
})



const rightButton = $('.right');

let count = 0;
let trigger = false;

rightButton.addEventListener('click',()=>{

  

  if(count > 7) return;
  

  if(!trigger){
    ++count

    gsap.to('.planet',{
      z:'+=2300',
      ease:'power3.inOut',
      duration:2,
      onComplete(){
        trigger = false;
      }
    })

    trigger = true;
  }

 
})



const leftButton = $('.left');


leftButton.addEventListener('click',()=>{


  if(count < 1) return;

  if(!trigger){

    --count;

    gsap.to('.planet',{
      z:'-=2300',
      ease:'power3.inOut',
      duration:2,
      onComplete(){
        trigger = false;
      }
    })
    trigger = true;
  }
 




})












