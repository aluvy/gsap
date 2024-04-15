const $ = (node) => document.querySelector(node);

const tl = gsap.timeline({
  defaults: {
    scale: 0,
    opacity: 0,
    duration: 1,
  },
});

tl.add("orange")
  .from(".tiger[data-name='a0']", {})
  .addPause() // 멈춤
  .add("green")
  .from(".tiger[data-name='a1']", { y: 100, rotation: 360 })
  .addPause()
  .add("pink")
  .from(".tiger[data-name='a2']", { y: -100, rotation: 360 })
  .addPause()
  .add("blue")
  .from(".tiger[data-name='a3']", { scale: 2, rotation: -360 });

/**
 * timeline에 label을 추가하게 되면 tl.lables에 객체로 수집이 된다.
 *
 * console.log(tl.labels)
 * ==> { orange: 0, geen: 1, pink: 2, blue: 3 }
 * ==> { key: 재생시간 }
 * tl.play('blue') 와 같이 실행이 가능하다.
 */

/* tl.labels 객체를 배열로 만들어 순환하기 */
const dotNav = $(".dotNav");
Object.keys(tl.labels).forEach((a, i) => {
  const templete = /* html */ `<button type="button" class="dot" data-label="${a}"></button>`;
  dotNav.insertAdjacentHTML("beforeend", templete);
});

/* event binding */
gsap.utils.toArray(".dot").forEach((a) => {
  a.addEventListener("click", () => {
    // tl.play(a.dataset.label);
    const label = a.dataset.label;
    gsap.to(tl, { time: tl.labels[label] + 1 });
  });
});

$(".prev").addEventListener("click", () => tl.reverse());
$(".next").addEventListener("click", () => tl.play());
