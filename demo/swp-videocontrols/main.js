
function videoControl() {
  const video = document.querySelector("#video");

  ScrollTrigger.create({
    trigger: '.section03',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
    markers: true,
    onToggle: ({ isActive }) => {
      isActive ? video.play() : video.pause();
    }
  })
}

function boxAnimation() {
  gsap.to(".box", {
    x: 500,
    duration: 3,

    //.snap
    // snap: 'x',  // x의 값이 정수만 나온다.
    // snap: { x: 30 } // x의 값을 30씩 증가시킨다.
    // snap: { x: [0, 50, 150, 500] }, // x의 값 지정
    snap: { x: { values: [0, 50, 150, 500], radius: 20 } }, // radius의 근사치에 걸리면 snap을 한다 ( 130이면 150으로 만듦 )
  })
}

// gsap는 object에도 애니메이션을 넣을 수 있다.
function objectTween() {
  const value = { numaber: 0 }
  gsap.to(value, {
    number: 100,
    ease: 'none',
    snap: 'number', // number를 정수로만 반환
    duration: 3,
    onUpdate() {
      console.log(value.number);  // 값이 100까지 증가한다.
    }
  })
}

function canvasControl() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const img = new Image();
  img.src = '../../assets/images/videocontrols/ezgif-frame-001.jpg';

  console.log(img);

  setTimeout(()=>{
    render(ctx, img);
  }, 1);
}

function render(ctx, img) {
  ctx.drawImage(img, 0, 0);
}

// boxAnimation();
// objectTween();
// videoControl();
canvasControl();

markers();

/**
 * 동영상을 이미지화 해야한다. video to jpg 등으로 검색
 * 
 * 
 * Snap Plugin
 * 
 * tween에 snap 사용하기
 * 
 * 
 * 
 * gsap는 object에도 애니메이션을 넣을 수 있다.
 */
