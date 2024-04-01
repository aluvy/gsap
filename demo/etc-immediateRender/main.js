GSDevTools.create();

const tl = gsap.timeline({ defaults: { duration: 2 } });

tl.from(".orange", { opacity: 0, y: 50 }) // opacity 0 -> 1
  .from(".pink", { opacity: 0, y: 50 })
  .from(".blue", { opacity: 0, scale: 1.2 })

  // 1. immediateRender의 글리치(Glitch) 발생: 사라짐, 여기에서는 5번째 줄의 상태를 기억해서 opacity가 0으로 멈춘다.
  // .from(".orange", { opacity: 0 })

  // 2. 이 문제는 immediateRender의 기본 속성이 true, 즉 true로 설정되어 있기 때문이다.
  // .from(".orange", { opacity: 0, immediateRender: true });

  // 3. immediateRender: false로 설정하게 되면, 5번줄의 0을 기억하는게 아니라 본래 .orange의 1을 기억하게 되어 제대로 작동한다.
  .from(".orange", { opacity: 0, immediateRender: false });

/**************************************************
 * GSAP 작동 방식 필수 개념 요소
 * from()과 fromTo() 트윈의 경우 GSAP은 **immediateRender를 true로 기본값을 가집니다.
 *
 * to: ~부터 : 현재 원래 위치에서 보내고싶은 이동 까지  -> 0부터 1까지
 * from: ~까지 : 시작위치부터 원래 값 까지  ->   1부터 0까지
 *
 * immediateRender 문제 -> 대부분 동일한 대상에게 동일한 from tween을 줬을때 발생이 많이한다. 글리치(Glitch)
 * 글리치 :  주로 정전기처럼 아주 짧은 순간 팍하고 일어나는 오류를 일컫는다.
 *
 * immediateRender: 즉시 렌더
 * from tween은 즉시 CSS 속성을 주고 시작하기 때문에 즉시렌더이다.
 * 이게 중첩으로 사용되었을때 글리치 에러가 발생한다.
 *
 * 5번줄: from트윈으로 opacity가 0에서 초기값 1로 변경되는 tween 실행 ( 0 ~ 1 )
 * 8번줄: 중첩 immediateRender로 글리치가 발생하여
 *       from트윈이 opacity 0 에서 초기값을 1로 변경하는게 아니라 5번줄의 0으로 인식하여 opacity:0에서 멈춤
 *       (0 ~ 0)
 */
