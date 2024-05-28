const mm = gsap.matchMedia();



/**
 * 동작 줄이기 선택 UI 제공
 * matchMedia의 값이 바뀌면 matchMedia를 refresh 해줘야 한다.
 */
function fn2() {
  const options = {
    isMobile: '(max-width: 500px)',
    isDesktop: '(min-width: 501px)',
    reduceMotion: '(prefers-reduced-motion: reduce)',  // 시스템이 동작줄이기 모드일 경우: true,
  }

  const checkbox = document.querySelector('#motionToggle');
  checkbox.checked = window.matchMedia('(prefers-reduced-motion: reduce)').matches;  // 시스템의 동작 줄이기 모드 설정 여부로 초기 설정

  checkbox.addEventListener("change", gsap.matchMediaRefresh);  // matchMedia의 값이 바뀌면 matchMedia를 refresh 해줘야 한다.

  mm.add(options, (ctx)=>{
    let { isMobile, isDesktop, reduceMotion } = ctx.conditions;
    reduceMotion = checkbox.checked;  // checkbox의 상태로 재 할당

    if ( !reduceMotion ) {
      ScrollTrigger.create({
        trigger: '.section03',
        start: 'top center',
        end: 'bottom center',
        animation: gsap.to(".orange", {
          rotation: 360,
        }),
        scrub: true,
      })
    };

  })
}
fn2();











/**
 * 시스템 동작 줄이기 선택 옵션으로 제어
 */
function fn1() {
  const options = {
    isMobile: '(max-width: 500px)',
    isDesktop: '(min-width: 501px)',
    reduceMotion: '(prefers-reduced-motion: reduce)',  // 시스템이 동작줄이기 모드일 경우: true,
  }

  mm.add(options, (ctx)=>{
    const { isMobile, isDesktop, reduceMotion } = ctx.conditions;
  
    gsap.to(".box", {
      scale: reduceMotion ? 1 : isMobile ? 4 : 10,  // 동작줄이기 모드일 때는 1, 모바일일 때는 4, 그렇지 않으면 10
      rotation: isMobile ? 360 : -360,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: 'none'
    })
  })
}
// fn1();






markers();

/**
 * 모션 애니메이션은 기능 조작이나 정보 전달을 위해 반드시 필수적인 경우가 아니라면 애니메이션을 비활성화 할 수 있어야 한다.
 * 
 * 
 * 시스템 환경설정 > 손쉬운 사용 > 디스플레이 메뉴
 *  - 동작 줄이기 (reduced motion) : 애니메이션이 사라짐 (간소화 됨)
 *  - 대비 증가 (high contrast) : 
 * 
 * 
 * 사용자가 동작줄이기를 설정했을 때 애니메이션 제어
 */
