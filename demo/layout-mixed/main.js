gsap.defaults({ ease: 'none' });  // 가로 스르콜을 줄 때는 항상 가속도를 없애줘야 함

const sections = gsap.utils.toArray('.horizontal .section');
const end = document.querySelector('.last').getBoundingClientRect();  // 가로스크롤 마지막 자식 (.last)

const tween = gsap.to(sections, {
  x: () => {
    const wrapper = document.querySelector(".horizontal");
    // return -(wrapper.offsetWidth - innerWidth); // 계산방법 1
    return -(end.left); // 계산방법 2
  }
})

ScrollTrigger.create({
  trigger: '.section02',
  start: 'top top',
  end: '+=3000',
  animation: tween,
  pin: true,  // section02 고정
  scrub: true,
  // markers: true,
})




/** 부모 애니메이션이 pin 일때 자식도 pin 시키는 경우 */
// const boxEnd = document.querySelector('.h-section02').offsetWidth;
const boxEnd = gsap.getProperty('.h-section02', 'width');
const boxWidth = gsap.getProperty(".box", 'width');

ScrollTrigger.create({
  trigger: '.h-section02',
  start: 'left center',
  // end: 'right center',
  end: `+=${boxEnd - boxWidth}`,
  horizontal: true,
  containerAnimation: tween,              // 부모 트윈을 명시해줘야 정확하게 애니메이션이 들어옴
  animation: gsap.to('.box', {
    x: (_, t)=> boxEnd - t.offsetWidth,   // 밀리는 속도와 나아가는 속도가 같아야 고정되는 느낌이 남
    rotation: 360
  }),
  // pin: true,  // 부모, 자식이 pin 중첩일 때 여기에 pin 설정하면 안됨 --> .h-section02가 pin을받는게 아니라 .box가 pin을 받아야 함
  scrub: true,
  markers: true,
})




markers();

/**
 * 가로 스르콜을 줄 때는 항상 가속도를 없애줘야 함
 * 가로세로를 모두 사용할 때에는 markers를 제대로 확인하기 어렵다. (코드가 복잡해짐)
 */
