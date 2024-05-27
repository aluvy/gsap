gsap.utils.toArray(".section").forEach((section, i)=>{
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false,
    scrub: true,
    markers: true,

    snap: {
      snapTo: 1,
      duration: 1,
      ease: 'power2.inOut'
    },
  })
})

markers()
