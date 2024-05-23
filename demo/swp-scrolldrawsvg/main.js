const $ = node => document.querySelector(node);

gsap.defaults({ ease: 'none' })

// 무료: svg 선의 총 길이 구하는 함수
function drawSVG(target) {
  const pathLength = target.getTotalLength();  // svg 선의 총 길이
  gsap.set(target, {
    strokeDashoffset: pathLength,
    strokeDasharray: pathLength,
  });
  return pathLength;
}

drawSVG($('.path'));
gsap.utils.toArray('.line').forEach((a, i) => {
  drawSVG(a);
})

// 유료
// const line = gsap.timeline({ defaults: {drawSVG: 0} });
// line
//   .from('.line01', {}, 0.87)
//   .from('.line02', {}, 1.31)
//   .from('.line03', {}, 1.92)
//   .from('.line04', {}, 2.46)
//   .from('.line05', {}, 3.08)
  
// 무료
const line = gsap.timeline({ defaults: {strokeDashoffset: 0} });
line
  .to('.line01', { }, 0.87)
  .to('.line02', { }, 1.31)
  .to('.line03', { }, 1.92)
  .to('.line04', { }, 2.46)
  .to('.line05', { }, 3.08)


const palse = gsap.timeline({
  defaults: { autoAlpha: 1, scale: 2, transformOrigin: 'center', ease: 'elastic(2.5, 1)' }
})
palse
  .to('.ball02, .text01', { }, 0.87)
  .to('.ball03, .text02', { }, 1.31)
  .to('.ball04, .text03', { }, 1.92)
// GSDevTools 에 시간을 보고 포지션 파라미터 설정




const master = gsap.timeline();
master
  .to('.ball01', { autoAlpha: 1, duration: 0.05 })
  // .from('.path', { drawSVG: 0, duration: 4 }, 0) // 유료
  .to('.path', { strokeDashoffset: 0, duration: 4 }, 0) // 무료
  .to('.ball01', {
    duration: 4,  // path duration과 같아야 함
    // transformOrigin: "50% 50%",
    motionPath: {
      path: '.path',  // 따라갈 경로
      align: '.path',
      // autoRotate: true,
      // alignOrigin: [0.5, 0.5],
      offsetX: -20,
      offsetY: -20,
    }
  }, 0)
  .add(palse, 0)
  .add(line, 0)


ScrollTrigger.create({
  trigger: '#svg',
  start: 'top center',
  end: 'bottom center',
  animation: master,
  scrub: true,
})

GSDevTools.create()
markers()
