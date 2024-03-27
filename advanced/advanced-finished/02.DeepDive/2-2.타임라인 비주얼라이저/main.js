const $ = node => document.querySelector(node);



gsap.to('svg',{autoAlpha:1})


const pixelPerSecond = 200;

const animation = gsap.timeline();

animation.to('#star',{duration:1,x:1150})
         .to('#circle',{duration:2,x:1150})
         .to('#square',{duration:1,x:1150})



const children = animation.getChildren();
// const childrenList = children.length


children.forEach((tween,index)=>{
  gsap.set('#tween' + index,{x:tween.startTime() * pixelPerSecond})
  gsap.set('#rect' + index,{width:tween.duration() * pixelPerSecond})
})

// for(let i = 0; i < childrenList; i++){
//   // console.log( children[i].startTime() );
//   gsap.set('#tween' + i,{x:children[i].startTime() * pixelPerSecond})
//   gsap.set('#rect' + i,{width:children[i].duration() * pixelPerSecond})
//   // console.log( children[i].duration() );
// }



const time = $('#time');
const maxX = animation.duration() * pixelPerSecond



function handleMoveHead(){
  time.textContent = animation.time().toFixed(1);
  gsap.set('#playhead',{x:animation.progress() * maxX})
}

animation.eventCallback('onUpdate',handleMoveHead)



const dragger = Draggable.create('#playhead',{
  type:'x',
  cursor:'pointer',
  trigger:'#timeline',
  bounds: {minX:0, maxX:maxX},
  onDrag(event){
    animation.pause();
    animation.progress(this.x / maxX)
    // console.log(  );
  }

})





$('#play').addEventListener('click',()=>{animation.play()})
$('#pause').addEventListener('click',()=>{animation.pause()})
$('#reverse').addEventListener('click',()=>{animation.reverse()})



























