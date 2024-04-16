




const h2 = document.querySelector('.section02 h2');


gsap.to(h2,{
  x:()=>{
    // console.log('x value');
    return 100
  },
  scrollTrigger:{
    trigger:'.section02',
    start:()=>{
      // console.log('start~!!');
      return '20% center'
    },
    end:'80% center',
    markers:true,
    scrub:true,
    onEnter:(self)=>{
      // console.log('enter');
      h2.textContent = 'Enter';
    },
    onLeave:()=>{
      // console.log('leave');
      h2.textContent = 'Leave';
    },
    onEnterBack:()=>{
      // console.log('enterBack');
      h2.textContent = 'EnterBack';
    },
    onLeaveBack:()=>{
      // console.log('leaveBack');
      h2.textContent = 'LeaveBack';
    },
    onToggle:({direction})=>{
      
      if(direction === 1){ // down
        h2.style.color = 'red'
      }else{  // up
        h2.style.color = 'blue'
      }
    },
    onRefresh:()=>{ // resize
      // console.log('refresh!!!');
    },
    onUpdate:({progress})=>{
      let percentage = Math.round(progress * 100);
      
      h2.textContent = `${percentage}%`


      if(percentage >= 50){
        gsap.set('.section02',{backgroundColor:'orange'})
      }else{
        gsap.set('.section02',{backgroundColor:'hotpink'})
      }
    }

  }
})






















markers()
