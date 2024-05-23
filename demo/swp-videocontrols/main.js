
// function videoControl() {
//   const video = document.querySelector("#video");

//   ScrollTrigger.create({
//     trigger: '.section03',
//     start: 'top center',
//     end: 'bottom center',
//     scrub: true,
//     markers: true,
//     onToggle: ({ isActive }) => {
//       isActive ? video.play() : video.pause();
//     }
//   })
// }
// videoControl();

// function boxAnimation() {
//   gsap.to(".box", {
//     x: 500,
//     duration: 3,

//     //.snap
//     // snap: 'x',  // x의 값이 정수만 나온다.
//     // snap: { x: 30 } // x의 값을 30씩 증가시킨다.
//     // snap: { x: [0, 50, 150, 500] }, // x의 값 지정
//     snap: { x: { values: [0, 50, 150, 500], radius: 20 } }, // radius의 근사치에 걸리면 snap을 한다 ( 130이면 150으로 만듦 )
//   })
// }
// boxAnimation();

// gsap는 object에도 애니메이션을 넣을 수 있다.
// function objectTween() {
//   const value = { numaber: 0 }
//   gsap.to(value, {
//     number: 100,
//     ease: 'none',
//     snap: 'number', // number를 정수로만 반환
//     duration: 3,
//     onUpdate() {
//       console.log(value.number);  // 값이 100까지 증가한다.
//     }
//   })
// }
// objectTween();

function canvasControl() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  // src 반환
  const currentFrame = (idx) => `../../assets/images/videocontrols/ezgif-frame-${String(idx+1).padStart(3, 0)}.jpg`;

  const frameCount = 141;
  // const images = [];

  // for (let i=0; i<frameCount; i++) {
  //   const img = new Image();
  //   img.src = currentFrame(1);
  //   images.push(img);
  // }

  // img src 를 담고있는 배열 생성
  const images = Array(frameCount).fill(null).map((_,i)=>{
    const img = new Image();
    img.src = currentFrame(i);
    return img;
  })

  const videoSection = {
    frame: 0
  }

  const tl = gsap.timeline();

  tl.to(videoSection, { frame: frameCount - 1, snap: 'frame', ease: 'none' })
    .to(canvas, { filter: 'brightness(2)', scale: 3  }, 0);

  ScrollTrigger.create({
    trigger: '.section02',
    start: 'top top',
    end: '+=3000',
    animation: tl,
    pin: true,
    scrub: true,

    // tween에 있어도 됨
    onUpdate() {
      // console.log(videoSection.frame);
      render(ctx, images, videoSection.frame);
    }
  })

  // gsap.to(videoSection, {
  //   frame: frameCount - 1,
  //   snap: 'frame',    // 정수만
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '.section02',
  //     start: 'top top',
  //     end: '+=3000',
  //     pin: true,
  //     scrub: true,

  //     // tween에 있어도 됨
  //     onUpdate() {
  //       // console.log(videoSection.frame);
  //       render(ctx, images, videoSection.frame);
  //     }
  //   }
  // })

  // 1번 이미지 세팅
  setTimeout(()=>{
    images[0].onload = render(ctx, images, videoSection.frame);
  }, 1);

}

// canvas에 이미지 그리기
function render(ctx, images, idx) {
  ctx.drawImage(images[idx], 0, 0);
}



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
