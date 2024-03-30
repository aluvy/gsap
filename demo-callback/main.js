const $ = (node) => document.querySelector(node);

gsap.to(".orange", {
  y: 100,
  duration: 1,
  onComplete: complete,
  onCompleteParams: ["orange"],
});

function complete(color) {
  console.log(this);
  console.log(this.targets()[0]);
  $("h1").textContent = `${color} 애니메이션 끝`;
  gsap.to(this.targets()[0], { rotation: 360 });
}

// class 에서의 gsap this 바인딩
class Tiger {
  // static method : 객체 생성 없이 사용할 수 있는 유틸 메서드
  static moveX(target, distance) {
    gsap.to(target, { x: distance });
  }

  constructor(target, name) {
    this.animation = gsap.to(target, {
      x: 100,
      onComplete: this.complete,
      callbackScope: this, // this binding
    });
    this.animation.pause();
    this.name = name;
  }

  // instance method : 객체 생성으로만 사용할 수 있는 메서드
  start() {
    this.animation.play();
  }

  complete() {
    console.log(this);
    // 여기서 this는 Tiger가 아닌 Tween이 나온다,
    // Tiger를 바인딩 하기 위해서는 callbackScope: this 속성이 필요하다.
    this.render();
  }

  render() {
    $("h1").textContent = `${this.name} 애니메이션 재생 끝`;
  }
}

const pink = new Tiger(".pink", "핑핑이");
const blue = new Tiger(".blue", "파랑이");
const green = new Tiger(".green", "초록이");

Tiger.moveX(".orange", 300); // 사용 가능
// Tiger.render(); // 사용 불가능
