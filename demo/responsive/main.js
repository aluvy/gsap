const box = document.querySelector('.box');
const mm = gsap.matchMedia();



function fn1() {
  // 500 이하
  mm.add("(max-width: 500px)", (ctx) => {

    // ctx.name = 'tiger';
    // ctx.hello = function() {
    //   return 'hello'
    // }
    // console.log(ctx);

    // ctx.spin2 = function Tiger() {
    //   return 'tiger'
    // }



    // gsap에서 안내한 방식으로 spin 메서드 추가
    ctx.add('spin', () => {
      gsap.to(box, { rotation: 360, duration: 2, repeat: -1, ease: 'none' });
    })
    box.addEventListener("click", ctx.spin);

    /**
     * tween을 ctx 내부 함수로 추가해서 클릭이벤트를 만들면, matchMedia 구간이 아닐 때 gsap가 알아서 tween을 초기화한다.
     * 하지만, tween은 초기화 되었어도 클릭이벤트는 살아 있기 때문에 matchMedia 구간이 아닐 때 클릭을 하면 tween이 재생된다.
     * 
     * 이 때 필요한 것이 cleanUp함수이다.
     * cleanUp은 matchMedia 구간을 벗어날 때 실행된다. 이 곳에서 click event를 제거해준다.
     */

    // cleanUp
    return () => {
      // console.log('clean up');
      box.removeEventListener("click", ctx.spin);
    }

  })
};
// fn1();







/**
 * 조건부 문법: 조건을 객체로 전달하기
 */
const options = {
  isMobile: '(max-width: 500px)',
  isDesktop: '(min-width: 501px)',
}

function fn2() {

  mm.add(options, (ctx) => {

    const { isMobile, isDesktop } = ctx.conditions;
    console.log(isMobile, isDesktop);

    gsap.to(box, {
      rotation: isMobile ? 360 : -360,
      duration: 2,
    })

  })
}
// fn2();








/**
 * scope: 범위를 한번에 지정해준다.
 * 3번째 파라미터로 scope범위 전달
 */
const wrapper = document.querySelector('.wrapper');

function fn3() {

  mm.add(options, (ctx)=>{
    const { isMobile, isDesktop } = ctx.conditions;
    gsap.to(".green", {
      rotation: isMobile ? 360 : -360,
      repeat: -1,
      ease: 'none'
    });
  }, wrapper);  // scope

}
fn3();



/**
 * 기본 스코프 설정하기
 * const wrapper = document.querySelector(".wrapper");
 * const mm = gsap.matchMedia(wrapper);
 * 
 * mm.add(options, (ctx)=>{
 *    // ...
 * }, scopeElement); // 기본 스코프를 설정 했더라도 3번째 매개변수로 스코프엘리먼트를 전달하면, 오버라이드된다.
 */









/**
 * 모바일에서는 애니메이션을 단순화 하는것이 사용자경험에 좋은 이점을 가져올수있다.
 * https://gsap.com/docs/v3/GSAP/gsap.matchMedia()
 * https://productive-printer-b81.notion.site/gsap-matchMedia-e4fee00b4b4c4b9eb31672c5e0b35500
 */
