gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2, // seconds it takes to "catch up" to native scroll position
  effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
});



gsap.to('.section02 h2', {
  x: 300,
  scrollTrigger: {
    trigger: '.section02',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
    markers: true,
  },
});
