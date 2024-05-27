const tl = gsap.timeline()

gsap.utils.toArray(".section").forEach((section, i) => {
  const section01 = section.classList.contains("section01");
  if (!section01) {
    tl.from(section, { xPercent: i % 2 ? -100 : 100 })
  }
})

ScrollTrigger.create({
  trigger: ".wrapper",
  start: 'top top',
  end: '+=4000',
  animation: tl,
  scrub: true,
  pin: true,
  markers: true,
})

markers();
