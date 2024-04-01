GSDevTools.create();

const tl = gsap.timeline({
  repeat: -1, // 반복
});
tl.set(".stage", { delay: 0.1, autoAlpha: 1 });

const disX = gsap.utils.distribute({
  base: -300,
  amount: 600, // (-200 - 400) = 200까지 가게 됨
  // ease: "power2.inOut",
});
const { chars } = new SplitText("h1", { type: "chars" });
tl.from(chars, {
  // y: (i) => (i % 2 === 0 ? -30 : 30),
  y: gsap.utils.wrap([-10, 10]),
  opacity: 0,
  filter: "blur(10px)", // blur는 최대 10까지만 주는게 좋다
  stagger: {
    each: 0.1,
    from: "center",
  },
})
  .to(chars, {
    delay: 1,
    x: disX,
    duration: 3,
    ease: "power3.inOut",
  })
  .to(chars, {
    delay: -1.5,
    opacity: 0,
    filter: "blur(10px)",
    stagger: {
      each: 0.1,
      from: "edges",
    },
  });
