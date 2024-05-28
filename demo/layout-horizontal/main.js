

// 첫 번째 방법: wrapper에게 애니메이션 주기
// function type1() {
//   gsap.defaults({ease: 'none'});
//   const horizontal = gsap.to(".wrapper", {
//     x:(i, t) => {
//       return -( t.scrollWidth - innerWidth );
//     },
//   })

//   ScrollTrigger.create({
//     trigger: '.hero',
//     start: 'top top',
//     end: () => `+=${innerHeight * 2}`,
//     animation: horizontal,
//     pin: true,
//     scrub: true,
//     markers: true,
//   })
// }
// type1();


// 두 번째 방법: 각각의 대상에게 애니메이션 주기
function type2() {
  gsap.defaults({ease: 'none'});

  const sections = gsap.utils.toArray(".section");

  const tween = gsap.to(sections, {
    xPercent: -100 * (sections.length-1),
    scrollTrigger: {
      trigger: '.hero',
      scrub: 1,
      pin: true,
      end: () => `+=${innerWidth * 2}`,
    }
  })

  ScrollTrigger.create({
    trigger: '.section02',
    start: 'left center',
    end: 'right center',

    horizontal: true,           // 가로 애니메이션 처리
    containerAnimation: tween,  // 가로 애니메이션 처리시 부모를 설정해줘야 한다

    animation: gsap.to(".box", { rotation: 360 }),
    scrub: true,
    markers: true,
  })
}
type2();



markers();
