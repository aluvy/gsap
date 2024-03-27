const $ = node => document.querySelector(node);


//  callback -> 나중에 일어나는 일 


const h1 = $('h1');

// onComplete
// onUpdate
// onStart
// onRepeat


const tl = gsap.timeline();
let count = 0;

gsap.to('.orange',{
  duration:1.5,
  y:100,
  // repeat:3,
  onComplete: complete,
  onCompleteParams:['오렌지',3],
  onUpdate(){
    h1.textContent = `애니메이션 재생 중`
  },
  onStart(){
    // console.log('start!');
  },
  // onRepeat(){
  //   ++count

  //   if (count > 5){
      
  //   }
  //   console.log('반복중');
  // }
})




function complete(color,number){
  // console.log(color);

  // console.log(this);

  h1.textContent = `${color} 애니메이션 재생 끝`

  gsap.to(this.targets()[0],{rotation:360})

  
}






// const user = {
//   name : 'tiger',
//   age : '33',
//   sayHi: function (){ // 일반 함수 
//     console.log(this.name);
//   },
//   sayBye: ()=>{ // 화살표 함수 
//     console.log(this);
//     this.name
//   },
//   sayGood(){ // concise method
//     console.log(this);
//   }
// }


// user.sayGood()




class Tiger{
  
  static moveX(target,distance){
    gsap.to(target,{x:distance})
  }


  constructor(target,name){
    this.animation = gsap.to(target,{
      x:100,
      onComplete: this.complete,
      callbackScope:this
    })
    this.animation.pause();
    this.name = name;
  }

  start(){
    this.animation.play()
  }

  complete(){
    console.log(this);
    this.render()
  }

  render(){
    h1.textContent = `${this.name} 애니메이션 재생 끝`
  }
  
}







const pink = new Tiger('.pink','핑핑이');
const blue = new Tiger('.blue','파랑이');
const green = new Tiger('.green','초록이');






























