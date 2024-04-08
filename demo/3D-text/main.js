// GSDevTools.create();

const numberOfTargets = gsap.utils.toArray(".utils > div").length;
const duration = 0.5;
const pause = 1;
const stagger = duration + pause;
const repeatDelay = stagger * (numberOfTargets - 1) + pause;

const tl = gsap.timeline();

gsap.set(".utils > div", { transformOrigin: "50% 50% -50" });

tl.from(".utils > div", {
  duration: duration,
  rotationX: -90,
  rotationY: -50,
  opacity: 0,
  stagger: {
    each: stagger,
    repeat: -1,
    repeatDelay: repeatDelay,
  },
}).to(
  ".utils > div",
  {
    duration: duration,
    rotationX: 90,
    rotationY: 50,
    opacity: 0,
    stagger: {
      each: stagger,
      repeat: -1,
      repeatDelay: repeatDelay,
    },
  },
  // duration
  stagger
);

// stagger
/**
 * stagger 에 duration
 * 마지막 트윈에서는 연결되어 보이지 않는 문제가 있다.
 * 이 점을 개선하기 위해서는
 * stagger에
 * repeat: -1,
 * repeatDelay: 1
 * 을 줘서 각자 stagger에 repeat, repeatDelay를 줘야한다.
 *
 * repeatDelay 1 계산법
 * repeatDelay = duration * (numberOfTargets-1)
 * repeatDelay = 0.5 * ( 3-1 )
 */

/**
 * 중간에 잠깐 한번 쉬기
 * stagger repeatDelay를 기본 duration인 0.5보다 높게 잡는다면 애니메이션 버그가 발생한다.
 * duration과 pause 값을 따로 제어해야 한다.
 * stagger = duration + pause;
 * repeatDelay = stagger * (numberOfTargets - 1) + pause;
 */
