const $ = (node) => document.querySelector(node);

const tl = gsap.timeline({
  defaults: {
    scale: 0,
    opacity: 0,
    duration: 1,
  },
});

tl.from(".tiger[data-name='a0']", {})
  .addPause() // 멈춤
  .from(".tiger[data-name='a1']", { y: 100, rotation: 360 })
  .addPause()
  .from(".tiger[data-name='a2']", { y: -100, rotation: 360 })
  .addPause()
  .from(".tiger[data-name='a3']", { scale: 2, rotation: -360 })
  .addPause();

const handlePrev = function () {
  tl.reverse();
};

const handleNext = function () {
  tl.play();
};
$(".prev").addEventListener("click", handlePrev);
$(".next").addEventListener("click", handleNext);
