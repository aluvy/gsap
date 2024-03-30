const $ = (node) => document.querySelector(node);

gsap.to("svg", { autoAlpha: 1 });

const animation = gsap.timeline({
  // 애니메이션 콜백 방법 1
  // onUpdate() { console.log("update") },
});
animation
  .to("#star", { duration: 1, x: 1150 })
  .to("#circle", { duration: 2, x: 1150 })
  .to("#square", { duration: 1, x: 1150 });

const pixelPerSecond = 200;
const children = animation.getChildren(); // [Tween, Tween, tween] 모든 트윈들의 값을 담고있는 배열이 반환된다
const childrenList = children.length;

children.forEach((o, i) => {
  gsap.set(`#tween${i}`, { x: o.startTime() * pixelPerSecond }); // 시작지점
  gsap.set(`#rect${i}`, { width: o.duration() * pixelPerSecond }); // 가로값
});

const time = $("#time");
const maxX = animation.duration() * pixelPerSecond;

function handleMoveHead() {
  time.textContent = animation.time().toFixed(1);
  gsap.set("#playhead", { x: animation.progress() * maxX }); // 전체 애니메이션의 duration * pixelPerSecond = max (재생시간)
}

// 애니메이션 콜백 방법 2
animation.eventCallback("onUpdate", handleMoveHead);

// gsap draggable plugin
const dragger = Draggable.create("#playhead", {
  type: "x",
  cursor: "pointer",
  trigger: "#timeline", // 기준
  bounds: { minX: 0, maxX: maxX }, // 바운더리 설정 (최소, 최대)
  onDrag(e) {
    // console.log(e);
    // console.log(this);
    animation.paused(true);
    animation.progress(this.x / maxX);
  },
});

$("#play").addEventListener("click", () => {
  animation.play();
});
$("#pause").addEventListener("click", () => {
  animation.pause();
});
$("#reverse").addEventListener("click", () => {
  animation.reverse();
});

/**
 * visibility와 opacity까지 조절해주는 autoAlpha: 1, css로 visibility: hidden을 줘야 한다.
 * .getChildren() 메서드는 타임라인에서 모든 자식 트윈 및 타임라인의 배열을 가져올 수 있습니다.
 * .startTime() 메서드는 부모의 타임라인에서 시작되는 시간을 가져오거나 설정합니다.
 * .duration() 메서드는 자신이 재생되는 시간을 가져옵니다.
 * animation.time() : 시간 가져오기
 * onUpdate() { animation.time() } : 지속적으로 시간 가져오기
 * gsap drag를 위한 plugin : Draggable
 * gsap plugin 버전은 코어와 맞아야 한다.
 */
