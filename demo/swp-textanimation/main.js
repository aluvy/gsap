
let split;

// SplitText, ScrollTrigger 생성 (초기화)
function init() {
  split = new SplitText('p', { type: 'lines'}); // p 안에 있는 태그들을 line으로 쪼갬 (애니메이션을 걸 자식)
  const splitCover = new SplitText('p', { type: 'lines', linesClass: 'cover'}); // split text를 한번 더 실행해서 2번 래핑한다. (부모 래퍼 생성)
  
  // console.log(split.lines); // line들의 배열
  
  split.lines.forEach((o, i)=>{
    ScrollTrigger.create({
      // trigger: o,
      trigger: splitCover.lines[i], // 트리거를 부모(cover)로 변경
  
      start: 'top 90%',
      end: 'bottom center',
      animation: gsap.from(o, {
        opacity: 0,
        // filter: 'blur(10px)',
  
        y: 300,   // scroll trigger 영역이 이상해짐, (300만큼 밀림)
  
        // // 3D 텍스트 효과
        // transformOrigin: '50% 50% -50',
        // rotateX: -180,
  
      }),
      // markers: true,
      scrub: true,
    })
  })

  markers();  // 실행 시점 차이로 위치 중요!!
}

// SplitText, ScrollTrigger 초기화
function killAll() {
  split.revert();   //
  ScrollTrigger.getAll().forEach( item => item.kill() )
  init()
}

// // debounce
// let timeout;
// // 기본 타임 0.5초 뒤에 callback 함수를 실행시킨다.
// const debounce = (callback, time = 500) => {
//   clearTimeout(timeout);      // 기존 타이머 삭제
//   timeout = setTimeout(()=>{  // 새 타이머 할당
//     callback();
//   }, time);
// }



// debounce, timeout 변수를 안에 넣기 위해 closer 사용
// 기본 타임 0.5초 뒤에 callback 함수를 실행시킨다.
const debounce = (callback, time = 500) => {
  let timeout;

  // closer
  return function(...args) {
    clearTimeout(timeout);      // 기존 타이머 삭제
    timeout = setTimeout(()=>{  // 새 타이머 할당
      // callback();
      callback.apply(this, args);   // this를 찾기 위해 apply() 이벤트 바인딩, apply()함수는 argument를 배열로 전달한다.
    }, time);
  }
}


// // 1초 뒤에 콘솔이 찍힘
// debounce(()=>{ console.log('debounce hi') }, 1000)



window.addEventListener('load', init);
// window.addEventListener('resize', killAll);
window.addEventListener('resize', debounce(killAll, 1000)); // debounce 적용



/**
 * from tween을 사용해서 line에게 '미리' 300만큼 떨어져라 라고 명령어를 주니까
 * line은 실제 위치보다도 300만큼 떨어진 지점을 기준으로 잡고있고, 거기에서 트리거가 생성이 되어있다.
 * 
 * 이런 문제를 해결하기 위해서,
 * 애니메이션을 줄 때에는 부모한테 주는 것 보다 그 안의 자식을 하나 더 만들어서 자식에게 애니메이션을 주는게 훨씬 더 안전하다.
 * ★★★ 트리거를 부모에게 걸고, 애니메이션을 자식에게 준다.
 * 
 * 
 * 
 * 
 * 창 크기를 줄이거나 창 크기가 커지면 라인이 변경되는데 우리는 이미 spliText를 실행했기 때문에 때문에 의도와 다르게 동작한다.
 * 이 문제를 해결하려면,
 * 
 * 1. resize 이벤트가 일어날 때 적용되어 있는 splitText를 전부 제거해야한다.  method: split.revert()
 * 2. ScrollTrigger도 제거해야 한다. ScrollTrigger.getAll(), ScrollTrigger.kill()
 * 3. splitText를, ScrollTrigger 재설정
 * 
 * 
 * 
 * 성능이슈
 * resize 이벤트 성능이슈 해결
 * (mousemove나 input 이벤트도 마찬가지)
 * 이 때 필요한게 Throttle & Debounce에 대한 개념이다.
 * Debounce는 튕겨주는걸 막아주는 개념이고, Throttle는 수도꼭지처럼 물을 잠궈줘서 찔끔찔끔 나오게 하는 개념이다.
 * 여기서 필요한 것은 Debounce 개념이다.
 * 
 * Throttle는 사용자가 이벤트를 실행시키는 중간 중간에, 모든 이벤트를 다 실행시키는게 아니라 해당 시간 초에 맞춰서 실행시킨다.
 * 시간 초를 정해놓고, 그 시간에 1번씩만 실행된다.
 * 
 * ★★★ Debounce는 주기적으로 호출하는게 아니라, 사용자가 이벤트를 실행하고 이벤트를 종료한 시점만 체크해서 한 번만 실행시킨다.
 * 
 * setTimeout()을 예로 들어보면,
 * const id = setTImeout(()=>{console.log('hi')}, 5000) 을 실행시켜 타이머를 등록하고
 * 5초가 되기 전에 clearTimeout(id)를 실행시켜 타이머를 삭제하면 'hi'라는 콘솔이 찍히지 않는다.
 * id라는 setTimeout이 삭제되었기 때문이다.
 * 타이머는 웹브라우저의 call stack이라는 곳에 타이머를 등록하게 되고, 일정 시간이 다 되면 그 타이머를 호출해서 쓰는게 setTimeout의 기능인 것이다.
 * 
 * 애니메이션의 성능을 올리기 위해서 Throttle & Debounce는 필수 개념이다.
 */
