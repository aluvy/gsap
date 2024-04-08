// map  -> 배열의 능력 (새로운 배열을 반환)
// forEach -> 배열의 능력 (값을 반환하지 x)
// insertAdjacentHTML (dom 뿌려주는)

const $ = (node) => document.querySelector(node);

const planet = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
];

function render() {
  const temp = (planet) =>
    /* html */
    `<div class="solar_system" data-planet-name=${planet}>
      <div class="planet ${planet}">
        <div class="overlay"><h2>${planet}</h2></div>
      </div>
    </div>`;

  planet.forEach((a) => {
    $(".space").insertAdjacentHTML("beforeend", temp(a));
  });
}
render();

const gap = 2300;

const z = gsap.utils.distribute({
  // base: -18400, // 시작 값
  // amount: 18400, // 시작값 + 최대 증가 값 = 0
  base: gap * (planet.length - 1) * -1,
  amount: gap * (planet.length - 1),
  from: "end",
  // ease: "power3.inOut", // 가속도 사용 가능
});

gsap.set(".planet", {
  // z: (i, t) => i * 2300 * -1,
  z: z,
  scaleX: 0.8,
  rotateX: 4, // 살짝 눕히기
});

let count = 0;
let trigger = false;
const duration = 2;

const handelRight = function () {
  if (count > planet.length) return;
  if (trigger) return;

  count++;
  gsap.to(".planet", {
    z: `+=${gap}`,
    ease: "power3.inOut",
    duration: duration,
    onComplete: complete,
  });
  trigger = true;
};
const handelLeft = function () {
  if (count < 1) return;
  if (trigger) return;

  count--;
  gsap.to(".planet", {
    z: `-=${gap}`,
    ease: "power3.inOut",
    duration: duration,
    onComplete: complete,
  });
  trigger = true;
};

const complete = function () {
  trigger = false;
};

$(".left").addEventListener("click", handelLeft);
$(".right").addEventListener("click", handelRight);
