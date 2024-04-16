






let split;



function init(){
  split =  new SplitText('p',{type:'lines'})
  const splitCover = new SplitText('p',{type:'lines',linesClass:'cover'})

  split.lines.forEach((line,index)=>{
    
    ScrollTrigger.create({
      trigger: splitCover.lines[index],
      start: 'top 90%',
      end: 'bottom center',
      animation: gsap.from(line,{
        opacity:0,
        y:300,
        filter:'blur(10px)',
        // rotationX:-180,
        // transformOrigin:'50% 50% -50'
      }),
      // markers: true,
      scrub: true,
    })
  })

  markers()

}




const debounce = (callback,time = 500)=>{
  let timeOut;

  return function(){
    clearTimeout(timeOut);
    timeOut = setTimeout(()=>{
      callback.apply(this,arguments)
    },time)
  }
}




function killAll(){
  split.revert()
  ScrollTrigger.getAll().forEach(item=>item.kill());
  console.log('killAll!');
  init()
}


window.addEventListener('resize',debounce(killAll,1000))


window.addEventListener('load',init);


