const breakPoint = {
  isDesktop: '(min-width: 1025px)',
  isTablet: '(max-width:1024px) and (min-width:681px)',
  isMobile: '(max-width: 680px)',
  reduceMotion: '(prefers-reduced-motion)',
}

const intro = {
  init() {
    intro.animation();
    // window.addEventListener("resize", front.debounce(gsap.matchMediaRefresh, 100));
  },
  animation() {
    const bridge = document.querySelector("#intro h1");
    if ( is.none(bridge) ) return;

    front.spitText(bridge);
    const mm = gsap.matchMedia();

    const _el = {
      intro: document.querySelector("#intro"),
      desc: document.querySelector("#intro .desc"),
    }

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if (reduceMotion) return;

      if ( isDesktop )        intro.desktop(_el);
      else if ( isTablet )    intro.tablet(_el);
      else if ( isMobile )    intro.mobile(_el);
    });
  },
  desktop(_el) {
    const { intro, desc } = _el;

    const tl = gsap.timeline({ defaults: { scale: 10, transformOrigin: "50% 50%" } });
    tl.from(".char-b", { xPercent: -100, yPercent: 0 })
      .from(".char-r", { xPercent: 0, yPercent: -1000 }, 0.1)
      .from(".char-i", { xPercent: 1000, yPercent: -1000 }, 0.15)
      .from(".char-d", { xPercent: -1000, yPercent: -1000 }, 0.2)
      .from(".char-g", { xPercent: -1000, yPercent: 1500 }, 0.25)
      .from(".char-e", { xPercent: 1000, yPercent: 500 }, 0.3)
      .from(desc, { autoAlpha: 0, y: 30, scale: 1, duration: 0.1 })

    ScrollTrigger.create({
      trigger: intro,
      start: 'top top',
      end: `+=3000`,
      animation: tl,
      pin: true,
      scrub: 1,
      // markers: true,
    })
    // markers();
  },
  tablet(_el) {
    const { intro, desc } = _el;

    const tl = gsap.timeline({ defaults: { scale: 16, transformOrigin: "50% 50%" } })
      .from(".char-b", { xPercent: -150, yPercent: 0 })
      .from(".char-r", { xPercent: 0, yPercent: -2000 }, 0.1)
      .from(".char-i", { xPercent: 2000, yPercent: -1000 }, 0.15)
      .from(".char-d", { xPercent: -2000, yPercent: -1000 }, 0.2)
      .from(".char-g", { xPercent: -2000, yPercent: 1500 }, 0.25)
      .from(".char-e", { xPercent: 2000, yPercent: 500 }, 0.3)
      .from(desc, { autoAlpha: 0, y: 30, scale: 1, duration: 0.1 })

    ScrollTrigger.create({
      trigger: intro,
      start: 'top top',
      end: `+=3000`,
      animation: tl,
      pin: true,
      scrub: 1,
      // markers: true,
    })
    // markers();
  },
  mobile(_el) {
    const { intro, desc } = _el;

    const tl = gsap.timeline({ defaults: { scale: 20, transformOrigin: "50% 50%" } })
      .from(".char-b", { xPercent: -150, yPercent: 0 })
      .from(".char-r", { xPercent: 0, yPercent: -3000 }, 0.1)
      .from(".char-i", { xPercent: 3000, yPercent: -2000 }, 0.15)
      .from(".char-d", { xPercent: -3000, yPercent: -1000 }, 0.2)
      .from(".char-g", { xPercent: -3000, yPercent: 1500 }, 0.25)
      .from(".char-e", { xPercent: 3000, yPercent: 500 }, 0.3)
      .from(desc, { autoAlpha: 0, y: 30, scale: 1, duration: 0.1 })

    ScrollTrigger.create({
      trigger: intro,
      start: 'top top',
      end: `+=3000`,
      animation: tl,
      pin: true,
      scrub: 1,
      // markers: true,
    })
    // markers();
  }
};

const wall = {
  init() {
    wall.animation();
    // window.addEventListener("resize", front.debounce(gsap.matchMediaRefresh, 100));
  },
  animation() {
    if ( is.none(document.querySelector("#wall .wall-item")) ) return;

    const items = document.querySelectorAll("#wall .wall-item:not(.show)");
    items.forEach( a => front.spitText(a) );

    const _el = {
      wall: document.querySelector("#wall"),
      wallWrapper: document.querySelector("#wall .wall-wrapper"),
      wallFront: document.querySelector("#wall .wall-front"),
      wallFrontChars: document.querySelectorAll("#wall .wall-front .chars"),
      wallSide: document.querySelector("#wall .wall-side"),
      wallSideChars: document.querySelectorAll("#wall .wall-side .chars"),
      number: document.querySelector("#wall .wall-front .number"),
    }

    const mm = gsap.matchMedia();

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if (reduceMotion)         wall.reduceMotion(_el);
      else if ( isDesktop )     wall.desktop(_el);
      else if ( isTablet )      wall.tablet(_el);
      else if ( isMobile )      wall.mobile(_el);
    });
  },
  desktop(_el) {
    const { wall, wallWrapper, wallFront, wallFrontChars, wallSide, wallSideChars, number } = _el;

    const mousePosition = { x: 0, y: 0 };
    function handleMouseMove(e) {
      mousePosition.x = -1 + e.clientX / document.documentElement.clientWidth * 2,
      mousePosition.y = 1 - e.clientY / document.documentElement.clientHeight * 2,
      gsap.to(wallWrapper, { rotationZ: mousePosition.x * 5, rotationX: mousePosition.y * 5 }),
      gsap.to(wallWrapper, { rotationZ: 0, rotationX: 0 })
    }

    gsap.set(wallSide, { x: wallFront.offsetWidth / 2, rotationY: "90deg" })
    gsap.set(wallFront, { z: wallSide.offsetWidth / 2 })

    const numberCount = gsap.from(number, {
      textContent: 177000,
      duration: 2,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: wall,
        start: "top bottom",
        toggleActions: "play none none reset",
      }
    })

    const tl = gsap.timeline()
      .from(wallFrontChars, {
        opacity: 0,
        stagger: { each: 0.1, from: "random" },
        onUpdate: () => {
          numberCount.progress(1),
          wall.removeEventListener("mousemove", handleMouseMove),
          gsap.to(wallWrapper, { rotationZ: 0, rotationX: 0 })
        },
        onComplete: () => wall.addEventListener("mousemove", handleMouseMove),
      })
      .to(wallWrapper, { rotationY: -90, duration: 15 })
      .to(wallSideChars, {
        opacity: 0,
        stagger: { each: 0.1, from: "random" },
        onStart: () => {
          wall.removeEventListener("mousemove", handleMouseMove),
          gsap.to(wallWrapper, { rotationZ: 0, rotationX: 0 })
        },
        onReverseComplete: () => wall.addEventListener("mousemove", handleMouseMove),
      });

    ScrollTrigger.create({
      trigger: wall,
      start: 'top top',
      end: `+=2000`,
      animation: tl,
      pin: true,
      scrub: true,
      // markers: true
    })
    // markers();
  },
  tablet(_el) {
    const { wall, wallWrapper, wallFront, wallFrontChars, wallSide, wallSideChars, number } = _el;

    gsap.set(wallSide, { x: wallFront.offsetWidth / 2, rotationY: "90deg" })
    gsap.set(wallFront, { z: wallSide.offsetWidth / 2 })
    
    // number count
    gsap.from(number, {
      textContent: 177000,
      duration: .8,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: wall,
        start: "top bottom",
        toggleActions: "play none none reset"
      }
    })

    const tl = gsap.timeline()
      .from(wallFrontChars, {
        opacity: 0,
        stagger: { each: .1, from: "random" },
        onUpdate: () => gsap.to(wallWrapper, { rotationZ: 0, rotationX: 0 }),
      })
      .to(wallWrapper, { rotationY: -90, duration: 15 })
      .to(wallSideChars, {
        opacity: 0,
        stagger: { each: .1, from: "random" },
        onStart: () => gsap.to(wallWrapper, { rotationZ: 0, rotationX: 0 }),
      });
    
    ScrollTrigger.create({
      trigger: wall,
      start: "top top",
      end: "+=2000",
      animation: tl,
      pin: true,
      pinSpacing: true,
      scrub: true,
    })
  },
  mobile(_el) {
    const { wall, wallWrapper, wallFront, wallFrontChars, wallSide, wallSideChars, number } = _el;

    gsap.set(wallSide, { x: wallFront.offsetWidth / 2, rotationY: "90deg" })
    gsap.set(wallFront, { z: wallSide.offsetWidth / 2 })

    // numberCount
    gsap.from(number, {
      textContent: 177000,
      duration: .8,
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: wall,
        start: "top bottom",
        toggleActions: "play none none reset"
      }
    })

    const tl = gsap.timeline()
      .from(wallFrontChars, {
        opacity: 0,
        stagger: { each: .1, from: "random" },
        onUpdate: () => gsap.to(".wall-wrapper", { rotationZ: 0, rotationX: 0 }),
      })
      .to(wallWrapper, { rotationY: -90, duration: 15 })
      .to(wallSideChars, {
        opacity: 0,
        stagger: { each: .1, from: "random" },
        onStart: () => gsap.to(wallWrapper, { rotationZ: 0, rotationX: 0 }),
      });

    ScrollTrigger.create({
      trigger: wall,
      start: "top top",
      end: "+=2000",
      animation: tl,
      pin: true,
      pinSpacing: true,
      scrub: true,
      // markers: true
    })
    // markers();
  },
  reduceMotion (_el) {
    const { wall, wallWrapper, wallFront, wallFrontChars, wallSide, wallSideChars, number } = _el;

    let tl = gsap.timeline()
      .to(wallFront, { autoAlpha: 0, delay: 1 })
      .from(wallSide, { autoAlpha: 0, duration: 2 }, "-=0.3");

    ScrollTrigger.create({
      trigger: wall,
      start: "top top",
      end: "+=2000",
      animation: tl,
      pin: true,
      scrub: true
    }) 
  }
}

const demo = {
  init() {
    demo.animation();
  },
  animation() {
    if ( is.none(document.querySelector("#demo")) ) return;

    const mm = gsap.matchMedia();
    const _el = {
      demo: document.querySelector("#demo"),
      front: document.querySelector("#demo .demo-front"),
      back: document.querySelector("#demo .demo-back"), 
    }

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      demo.desktop(_el);

      // if (reduceMotion)       demo.reduceMotion(_el);
      // else if ( isDesktop )   demo.desktop(_el);
      // else if ( isTablet )    demo.desktop(_el);
      // else if ( isMobile )    demo.desktop(_el);
    });
  },
  desktop(_el) {
    const { demo, front, back } = _el;
    let tl = gsap.timeline()
      .to(front, { yPercent: -50 })
      .to(back, { yPercent: -20 }, 0)

    ScrollTrigger.create({
      trigger: demo,
      start: "top top",
      end: "+=3000",
      animation: tl,
      pin: true,
      pinSpacing: false,
      scrub: true
    })
  }
}

const shop = {
  init() {
    shop.animation();
  },
  animation() {
    if ( is.none(document.querySelector("#shop")) ) return;

    const _el = {
      shop: document.querySelector("#shop"),
      inner: document.querySelector("#shop .shop-inner"),
      ttl: document.querySelector("#shop .shop-ttl"),
      hScroll: document.querySelector("#shop .h-scroll"),
      hSections: document.querySelectorAll("#shop .h-section"),
      hSectionLast: document.querySelector("#shop .h-section.last"),

      cover: document.querySelector("#shop .shop-cover"),
      coverBg: document.querySelector("#shop .shop-cover .bg"),
      coverLeft: document.querySelector("#shop .shop-cover .left-lnb"),
      coverRight: document.querySelector("#shop .shop-cover .right-cont"),
      coverRightInner: document.querySelector("#shop .shop-cover .right-inner"),
      coverSlogan: document.querySelector("#shop .shop-cover .right-slogan"),
      coverCenterImg: document.querySelector("#shop .shop-cover .center-img"),
    }

    const mm = gsap.matchMedia();

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if (reduceMotion) {
        if ( isDesktop ) {
          shop.reduce_desktop(_el);
        } else if ( isTablet || isMobile ) {
          shop.reduce_tablet(_el);
        }
      } else {
        if ( isDesktop ) {
          shop.desktop(_el);
        } else if ( isTablet || isMobile ) {
          shop.tablet(_el);
        }
      }
    });
  },
  reduce_desktop(_el) {
    const { shop, inner, ttl, hScroll, hSections, hSectionLast } = _el;
    const { cover, coverBg, coverLeft, coverRight, coverRightInner, coverSlogan, coverCenterImg } = _el;

    let last = hSectionLast.getBoundingClientRect().left;

    gsap.set("#shop, #shop .shop-inner", { backgroundColor: 'transparent' })

    let shopCover = gsap.timeline()
      .to("#shop .h-scroll .bg", { xPercent: -20 })
      .from("#shop .left-lnb", { xPercent: -100 }, 0)
      .from("#shop .right-cont", { xPercent: 100 }, 0)
      .from("#shop .right-inner > div", { xPercent: 50 }, 0)
      .from("#shop .right-cont .center-img > img", { xPercent: 100 }, 0)
      .set("#shop, #shop .shop-inner", { backgroundColor: "#d5d1c6" })
      .to("#shop .shop-cover", { scale: .4 })
      .from(".shop-ttl", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2")
    
    let tl = gsap.timeline()
      .from("#shop .h-scroll", { xPercent: 100 })
      .from("#shop .h-scroll .bg", { scale: 1.4 }, 0)
      // .add(shopCover)
      .from("#shop .h-section:nth-child(2)", { xPercent: 50 }, "-=0.35")
      .to("#shop .h-scroll", { x: -last, duration: 3 });

      ScrollTrigger.create({
        trigger: shop,
        start: "top top",
        end: "+=5000",
        animation: tl,
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
  },
  reduce_tablet(_el) {
    const { shop, inner, ttl, hScroll, hSections, hSectionLast } = _el;
    const { cover, coverBg, coverLeft, coverRight, coverRightInner, coverSlogan, coverCenterImg } = _el;

    let last = hSectionLast.getBoundingClientRect().left;

    gsap.set("#shop, #shop .shop-inner", { backgroundColor: 'transparent' })

    let shopCover = gsap.timeline()
      .to("#shop .h-scroll .bg", { xPercent: -20 })
      .from("#shop .left-lnb", { xPercent: -100 }, 0)
      .from("#shop .right-cont", { xPercent: 100 }, 0)
      .from("#shop .right-inner > div", { xPercent: 50 }, 0)
      .from("#shop .right-cont .center-img > img", { xPercent: 100 }, 0)
      .set("#shop, #shop .shop-inner", { backgroundColor: "#d5d1c6" })
      .to("#shop .shop-cover", { scale: .65 })
      .to("#shop .bg", { height: "57vw" }, "<")
      .from("#shop .shop-ttl", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2")
    
    let tl = gsap.timeline()
      .from("#shop .h-scroll", { xPercent: 100 })
      .from("#shop .h-scroll .bg", { scale: 1.4 }, 0)
      // .add(shopCover)
      .from("#shop .h-section:nth-child(2)", { xPercent: 150 }, "-=0.35")
      .from("#shop .h-section:nth-child(3)", { xPercent: 150 }, "<")
      .to("#shop .h-scroll", { x: -last, duration: 3 });

      ScrollTrigger.create({
        trigger: shop,
        start: "top top",
        end: "+=5000",
        animation: tl,
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
  },
  desktop(_el) {
    const { shop, inner, ttl, hScroll, hSections, hSectionLast } = _el;
    const { cover, coverBg, coverLeft, coverRight, coverRightInner, coverSlogan, coverCenterImg } = _el;

    let last = hSectionLast.getBoundingClientRect().left;

    gsap.set("#shop, #shop .shop-inner", { backgroundColor: 'transparent' })

    let shopCover = gsap.timeline()
      .to("#shop .h-scroll .bg", { xPercent: -20 })
      .from("#shop .left-lnb", { xPercent: -100 }, 0)
      .from("#shop .right-cont", { xPercent: 100 }, 0)
      .from("#shop .right-inner > div", { xPercent: 50 }, 0)
      .from("#shop .right-cont .center-img > img", { xPercent: 100 }, 0)
      .set("#shop, #shop .shop-inner", { backgroundColor: "#d5d1c6" })
      .to("#shop .shop-cover", { scale: .4 })
      .from(".shop-ttl", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2")
    
    let tl = gsap.timeline()
      .from("#shop .h-scroll", { xPercent: 100 })
      .from("#shop .h-scroll .bg", { scale: 1.4 }, 0)
      .add(shopCover)
      .from("#shop .h-section:nth-child(2)", { xPercent: 50 }, "-=0.35")
      .to("#shop .h-scroll", { x: -last, duration: 3 });

      ScrollTrigger.create({
        trigger: shop,
        start: "top top",
        end: "+=5000",
        animation: tl,
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
  },
  tablet(_el) {
    const { shop, inner, ttl, hScroll, hSections, hSectionLast } = _el;
    const { cover, coverBg, coverLeft, coverRight, coverRightInner, coverSlogan, coverCenterImg } = _el;

    let last = hSectionLast.getBoundingClientRect().left;

    gsap.set("#shop, #shop .shop-inner", { backgroundColor: 'transparent' })

    let shopCover = gsap.timeline()
      .to("#shop .h-scroll .bg", { xPercent: -20 })
      .from("#shop .left-lnb", { xPercent: -100 }, 0)
      .from("#shop .right-cont", { xPercent: 100 }, 0)
      .from("#shop .right-inner > div", { xPercent: 50 }, 0)
      .from("#shop .right-cont .center-img > img", { xPercent: 100 }, 0)
      .set("#shop, #shop .shop-inner", { backgroundColor: "#d5d1c6" })
      .to("#shop .shop-cover", { scale: .65 })
      .to("#shop .bg", { height: "57vw" }, "<")
      .from(".shop-ttl", { autoAlpha: 0, y: 60, duration: .2 }, "-=0.2")
    
    let tl = gsap.timeline()
      .from("#shop .h-scroll", { xPercent: 100 })
      .from("#shop .h-scroll .bg", { scale: 1.4 }, 0)
      .add(shopCover)
      .from("#shop .h-section:nth-child(2)", { xPercent: 150 }, "-=0.35")
      .from("#shop .h-section:nth-child(3)", { xPercent: 150 }, "<")
      .to("#shop .h-scroll", { x: -last, duration: 3 });

      ScrollTrigger.create({
        trigger: shop,
        start: "top top",
        end: "+=5000",
        animation: tl,
        pin: true,
        pinSpacing: false,
        scrub: true,
      })
  },
}

const pp = {
  init() {
    pp.animation();
  },
  animation() {
    if ( is.none(document.querySelector("#portfolio")) ) return;

    const _el = {

    };

    const mm = gsap.matchMedia();

    mm.add(breakPoint, (ctx) => {

      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if (reduceMotion) {
        if (isDesktop) {
          pp.reduce_desktop(_el);
        } else {
          pp.reduce_tablet(_el);
        }
      } else {
        if (isDesktop) {
          pp.desktop(_el)
        } else {
          pp.tablet(_el);
        }
      }
    })
  },
  reduce_desktop(_el) {
    let o = document.querySelector("#portfolio .p-section.last").getBoundingClientRect().left;
    let s = gsap.timeline()
      .to("#portfolio .pp-cover .bg", { scale: .2 })
      .from("#portfolio .portfolio-cover-center", { scale: .4 }, "-=0.3")
      .from("#portfolio .portfolio-cover-top", { duration: .2, opacity: 0, y: -50 }, "-=0.1")
      .from("#portfolio .portfolio-cover-bottom", { duration: .2, opacity: 0, y: 50 }, "<")
      .from("#portfolio .portfolio-cover-copyright", { duration: .2, opacity: 0, x: -50 }, "<")
      .from("#portfolio .portfolio-cover-artwork", { duration: .2, opacity: 0, x: 50 }, "<");
    
    let x = gsap.timeline()
      .from("#portfolio .portfolio-inner", { xPercent: 100 })
      .from("#portfolio .pp-cover .bg img", { scale: 1.4 }, 0)
      .add(s)
      .to("#portfolio .pp-cover", { scale: .46 }, "+=0.4")
      .from("#portfolio .p-section:nth-child(2) .pp-item", { xPercent: 50 }, "-=0.2")
      .from("#portfolio .pp-ttl", { autoAlpha: 0, y: 30 }, "-=0.1")

    let tl = gsap.timeline()
      .to("#portfolio .h-scroll", { duration: 3, x: -(o - document.querySelector("#portfolio .last").offsetWidth) });
    
    ScrollTrigger.create({
      trigger: "#portfolio",
      start: "top top",
      end: "+=10000",
      animation: tl,
      pin: true,
      scrub: true
    })
  },
  reduce_tablet(_el) {
    let o = document.querySelector("#portfolio .p-section.last").getBoundingClientRect().left;
    let s = gsap.timeline()
      .to("#portfolio .pp-cover .bg", { scale: .2 })
      .from("#portfolio .portfolio-cover-center", { scale: .4 }, "-=0.3")
      .from("#portfolio .portfolio-cover-top", { duration: .2, opacity: 0, y: -50 }, "-=0.1")
      .from("#portfolio .portfolio-cover-bottom", { duration: .2, opacity: 0, y: 50 }, "<")
      .from("#portfolio .portfolio-cover-copyright", { duration: .2, opacity: 0, x: -50 }, "<")
      .from("#portfolio .portfolio-cover-artwork", { duration: .2, opacity: 0, x: 50 }, "<");
    
    let tl = gsap.timeline()
      .from("#portfolio .portfolio-inner", { xPercent: 100 })
      .from("#portfolio .pp-cover .bg img", { scale: 1.4 }, 0)
      .add(s)
      .to("#portfolio .pp-cover", { scale: .65, height:"60vw" }, "+=0.4")
      .from("#portfolio .pp-ttl", { opaicty: 0, duration: .1 })
      .from("#portfolio .p-section:nth-child(2) .pp-item", { xPercent: 200 }, "-=0.2")
      .from("#portfolio .p-section:nth-child(3) .pp-item", { xPercent: 200 }, "<")
      .to("#portfolio .pp-ttl", { yPercent: -300 })
      .to("#portfolio .pp-cover", { duration: 3, y: -document.querySelector("#portfolio .last").offsetWidth * 3 }, "<");
    
    ScrollTrigger.create({
      trigger: "#portfolio",
      start: "top top",
      end: "+=10000",
      animation: tl,
      pin: true,
      scrub: true
    })
  },
  desktop(_el) {
    let o = document.querySelector("#portfolio .p-section.last").getBoundingClientRect().left;
    let s = gsap.timeline()
      .to("#portfolio .pp-cover .bg", { scale: .2 })
      .from("#portfolio .portfolio-cover-center", { scale: .4 }, "-=0.3")
      .from("#portfolio .portfolio-cover-top", { duration: .2, opacity: 0, y: -50 }, "-=0.1")
      .from("#portfolio .portfolio-cover-bottom", { duration: .2, opacity: 0, y: 50 }, "<")
      .from("#portfolio .portfolio-cover-copyright", { duration: .2, opacity: 0, x: -50 }, "<")
      .from("#portfolio .portfolio-cover-artwork", { duration: .2, opacity: 0, x: 50 }, "<");
    
    let tl = gsap.timeline()
      .from("#portfolio .portfolio-inner", { xPercent: 100 })
      .from("#portfolio .pp-cover .bg img", { scale: 1.4 }, 0)
      .add(s)
      .to("#portfolio .pp-cover", { scale: .46 }, "+=0.4")
      .from("#portfolio .p-section:nth-child(2) .pp-item", { xPercent: 50 }, "-=0.2")
      .from("#portfolio .pp-ttl", { autoAlpha: 0, y: 30 }, "-=0.1")
      .to("#portfolio .h-scroll", { duration: 3, x: -(o - document.querySelector("#portfolio .last").offsetWidth) });
    
    ScrollTrigger.create({
      trigger: "#portfolio",
      start: "top top",
      end: "+=10000",
      animation: tl,
      pin: true,
      scrub: true
    })
  },
  tablet(_el) {
    let o = document.querySelector("#portfolio .p-section.last").getBoundingClientRect().left;
    let s = gsap.timeline()
      .to("#portfolio .pp-cover .bg", { scale: .2 })
      .from("#portfolio .portfolio-cover-center", { scale: .4 }, "-=0.3")
      .from("#portfolio .portfolio-cover-top", { duration: .2, opacity: 0, y: -50 }, "-=0.1")
      .from("#portfolio .portfolio-cover-bottom", { duration: .2, opacity: 0, y: 50 }, "<")
      .from("#portfolio .portfolio-cover-copyright", { duration: .2, opacity: 0, x: -50 }, "<")
      .from("#portfolio .portfolio-cover-artwork", { duration: .2, opacity: 0, x: 50 }, "<");
    
    let tl = gsap.timeline()
      .from("#portfolio .portfolio-inner", { xPercent: 100 })
      .from("#portfolio .pp-cover .bg img", { scale: 1.4 }, 0)
      .add(s)
      .to("#portfolio .pp-cover", { scale: .65, height:"60vw" }, "+=0.4")
      .from("#portfolio .pp-ttl", { opaicty: 0, duration: .1 })
      .from("#portfolio .p-section:nth-child(2) .pp-item", { xPercent: 200 }, "-=0.2")
      .from("#portfolio .p-section:nth-child(3) .pp-item", { xPercent: 200 }, "<")
      .to("#portfolio .pp-ttl", { yPercent: -300 })
      .to("#portfolio .pp-cover", { duration: 3, y: -document.querySelector("#portfolio .last").offsetWidth * 3 }, "<");
    
    ScrollTrigger.create({
      trigger: "#portfolio",
      start: "top top",
      end: "+=10000",
      animation: tl,
      pin: true,
      scrub: true
    })
  }
}

const letters = {
  init() {
    letters.animation();
  },
  animation() {
    if ( is.none(document.querySelector("#letters")) ) return;

    const _el = {
    }

    const mm = gsap.matchMedia();

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if (reduceMotion)     letters.reduceMotion(_el);
      else                  letters.desktop(_el);
    });
  },
  reduceMotion(_el) {
    gsap.set("#canvas", { display: "none" });
    let tl = gsap.timeline()
      // .from("#canvas .letters-ttl", { delay: 0.5, duration: 1, opacity: 0, y: 50 })
      .to("#canvas", { xPercent: 100 })
      .from("#awards", { xPercent: -100 }, "<")
      .to("#awards .bg", { width: "100%" });
    
    ScrollTrigger.create({
      trigger: "#letters",
      start: "top top",
      end: "+=3000",
      animation: tl,
      pin: true,
      scrub: true
    })
  },
  desktop(_el) {
    gsap.set("#canvas", { display: "block" });
    let tl = gsap.timeline()
      .from("#canvas .letters-ttl", { delay: 0.5, duration: 1, opacity: 0, y: 50 })
      .to("#canvas", { xPercent: 100 })
      .from("#awards", { xPercent: -100 }, "<")
      .to("#awards .bg", { width: "100%" });
    
    ScrollTrigger.create({
      trigger: "#letters",
      start: "top top",
      end: "+=3000",
      animation: tl,
      pin: true,
      scrub: true
    })
  }
}

const elements = {
  init() {
    elements.setChars();
    elements.animation();
  },
  setChars() {
    const chars = document.querySelector("#elements #chars");
    if ( is.none(chars) ) return;
    const SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="136.978px" height="191.953px" viewBox="0 0 136.978 191.953" enable-background="new 0 0 136.978 191.953" xml:space="preserve" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><path d="M0,191.953V0h65.786c21.708,0,38.232,4.351,49.57,13.052s17.007,21.667,17.007,38.892c0,8.79-2.373,16.7-7.119,23.73 c-4.746,7.033-11.69,12.481-20.83,16.348c10.37,2.814,18.391,8.108,24.06,15.886s8.503,17.118,8.503,28.015 c0,18.018-5.78,31.861-17.336,41.528c-11.558,9.669-28.104,14.502-49.636,14.502H0z M33.354,80.815H66.05 c10.37,0,18.478-2.351,24.324-7.053c5.844-4.701,8.767-11.358,8.767-19.973c0-9.492-2.703-16.348-8.108-20.566 s-13.822-6.328-25.247-6.328H33.354V80.815z M33.354,105.337v59.985H70.4c10.458,0,18.632-2.591,24.521-7.778 c5.887-5.185,8.833-12.393,8.833-21.621c0-19.951-10.197-30.145-30.586-30.586H33.354z" data-svg-origin="-24.54869270862605 -104.69015240585156"></path></svg>`;

    const row = 5;
    const item = 11;
    // chars-row1 5, 안에  chars-item1 11 개

    let HTML = ``;
    for (let i=0; i<row; i++) {
      HTML += `<div class="chars-row${i+1}">`;
      for (let j=0; j<item; j++) HTML += `<div class="chars-item${j+1}">${SVG}</div>`;
      HTML += `</div>`;
    }

    chars.insertAdjacentHTML("afterbegin", HTML);
  },
  animation() {
    if ( is.none(document.querySelector("#elements")) ) return;

    const _el = {
      elements: document.querySelector("#elements"),
      
      elV: document.querySelector("#elements .el-v"),
      elVttl: document.querySelector("#elements .el-v .el-ttl"),
      elVWrap: document.querySelectorAll("#elements .el-v-wrap"),
      
      elH: document.querySelector("#elements .el-h"),
      elHttl: document.querySelector("#elements .el-h .el-ttl"),
      elHWrap: document.querySelectorAll("#elements .el-h-wrap"),

      elModule: document.querySelector("#elements .el-module"),
      elModuleScreen: document.querySelectorAll("#elements .module-screen"),
      elModuleScreenBg: document.querySelector("#elements .module-screen-bg"),
      elModuleTtl: document.querySelectorAll("#elements .module-ttl"),
    }

    const mm = gsap.matchMedia();

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if (reduceMotion)         elements.reduceMotion(_el);
      else                      elements.desktop(_el);
    });
  },
  desktop(_el) {
    const { elements, elV, elVttl, elVWrap, elH, elHttl, elHWrap, elModule, elModuleScreen, elModuleScreenBg, elModuleTtl } = _el;

    gsap.set(elVWrap, { display: "block" })
    gsap.set(elHWrap, { display: "flex" });
    
    let o = gsap.timeline()
      .to("#elements .-l, #elements .-r", { y: "-650vh", duration: 2.5, ease: "none" });
    
    let s = gsap.timeline()
      .to("#elements .-c", { y: "650vh", duration: 2.5, ease: "none" });
    
    let l = gsap.timeline({ defaults: { ease: "none" } })
      .to("#elements .module-screen:nth-child(1)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(1) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(2)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(2) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(3)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(3) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(4)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(4) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(5)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(5) .module-screen-inner", { yPercent: 100 }, "<");
    
    let f = gsap.timeline()
      .from(elModuleScreenBg, { scaleX: 0, ease: "none", duration: .3 })
      .from(elModuleTtl, { y: 30, opacity: 0, duration: .2 })
      .set(elModuleScreen, { autoAlpha: 1 })
      .add(s)
      .add(o, "<")
      .add(l, "<");
    
    let u = gsap.timeline()
      .to("#elements .chars-row3 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } })
      .to("#elements .chars-row2 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, .2)
      .to("#elements .chars-row4 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, .2)
      .to("#elements .chars-row1 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, .4)
      .to("#elements .chars-row5 path", { x: 0, y: 0, rotation: 0, stagger: { amount: 1, from: 6 } }, .4);
    
    let p = gsap.timeline({ defaults: { scale: 0 } })
      .to("#elements .chars-item1 svg", {})
      .to("#elements .chars-item2 svg", {}, "-=0.3")
      .to("#elements .chars-item3 svg", {}, "-=0.3")
      .to("#elements .chars-item4 svg", {}, "-=0.3")
      .to("#elements .chars-item5 svg", {}, "-=0.3")
      .to("#elements .chars-item6 svg", {}, "-=0.3")
      .to("#elements .chars-item7 svg", {}, "-=0.3")
      .to("#elements .chars-item8 svg", {}, "-=0.3")
      .to("#elements .chars-item9 svg", {}, "-=0.3")
      .to("#elements .chars-item10 svg", {}, "-=0.3")
      .to("#elements .chars-item11 svg", {}, "-=0.3");
    
    let tl = gsap.timeline()
      .from(elVttl, { xPercent: 3, opacity: 0, duration: .2 })
      .to(elVttl, { yPercent: 3, opacity: 0, duration: .05 })
      .fromTo("#elements .el-v-wrap:nth-child(odd)", { yPercent: -100 }, { yPercent: 100 }, "<")
      .fromTo("#elements .el-v-wrap:nth-child(even)", { yPercent: 100 }, { yPercent: -100 }, "<")
      .from(elHttl, { xPercent: 1, opacity: 0, duration: .2 }, "-=0.2")
      .to(elHttl, { yPercent: 1, opacity: 0, duration: .05 })
      .fromTo("#elements .el-h-wrap:nth-child(odd)", { xPercent: -100 }, { xPercent: 100 }, "<")
      .fromTo("#elements .el-h-wrap:nth-child(even)", { xPercent: 100 }, { xPercent: -100 }, "<")
      .add(f, "-=0.25")
      .add(u)
      .add(p);
      
    ScrollTrigger.create({
      trigger: elements,
      start: "top top",
      end: "+=15000",
      animation: tl,
      pin: true,
      scrub: true
    }) 
  },
  reduceMotion(_el) {
    const { elements, elV, elVttl, elVWrap, elH, elHttl, elHWrap, elModule, elModuleScreen, elModuleScreenBg, elModuleTtl } = _el;

    let o = gsap.timeline({ defaults: { ease: "none" } })
      .to("#elements .module-screen:nth-child(1)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(1) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(2)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(2) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(3)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(3) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(4)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(4) .module-screen-inner", { yPercent: 100 }, "<")
      .to("#elements .module-screen:nth-child(5)", { yPercent: -100 })
      .to("#elements .module-screen:nth-child(5) .module-screen-inner", { yPercent: 100 }, "<");

    let s = gsap.timeline()
      .from(elModuleScreenBg, { scaleX: 0, ease: "none", duration: .3 })
      .from(elModuleTtl, { y: 30, opacity: 0, duration: .2 })
      .set(elModuleScreen, { autoAlpha: 1 })
      .add(o, "<")
    
    gsap.set(elVWrap, elHWrap, { display: "none" });

    let tl = gsap.timeline()
      .from(elVttl, { xPercent: 3, opacity: 0, duration: .2 })
      .to(elVttl, { opacity: 0, duration: .05 }, "+=1")
      .from(elHttl, { opacity: 0, duration: .2 })
      .to(elHttl, { opacity: 0, duration: .05 }, "+=1")
      .add(s);

    ScrollTrigger.create({
      trigger: elements,
      start: "top top",
      end: "+=15000",
      animation: tl,
      pin: true,
      scrub: true
    })
  },
}

const qode = {
  init() {
    qode.animation();
  },
  animation() {
    if ( is.none(document.querySelector("#qode")) ) return;

    const _el = {
      qode: document.querySelector("#qode"),
      ttl: document.querySelector("#qode .qode-ttl"),
      logoSvg: document.querySelector("#qode .qode-logo svg"),
      logoLine: document.querySelector("#qode .qode-logo svg #line"),
      logoText: document.querySelector("#qode .qode-logo-text"),
    }

    const mm = gsap.matchMedia();

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if (reduceMotion)         qode.reduceMotion(_el);
      else                      qode.desktop(_el);
    });
  },
  desktop(_el) {
    const { qode, ttl, logoSvg, logoLine, logoText } = _el;

    let tl = gsap.timeline()
      .fromTo(ttl, { transformOrigin: "50% 200%", rotation: 50 }, { transformOrigin: "50% 200%", rotation: -50 }, "-=0.3")
      .from(logoSvg, { yPercent: 100, rotation: 360, scale: .9, duration: 1 }, "<")
      .to(logoText, { yPercent: 0, opacity: 1 })
      .to(logoLine, { strokeDashoffset: 0, duration: 3 });

    ScrollTrigger.create({
      trigger: qode,
      start: "top top",
      end: "+=15000",
      animation: tl,
      pin: true,
      scrub: true
    })
  },
  reduceMotion(_el) {
    const { qode, ttl, logoSvg, logoLine, logoText } = _el;
    let tl = gsap.timeline()
      .fromTo(ttl, { transformOrigin: "50% 200%", rotation: 50 }, { transformOrigin: "50% 200%", rotation: -50 }, "-=0.3")
      .from(logoSvg, { yPercent: 100, rotation: 360, scale: .9, duration: 1 }, "<")
      .to(logoText, { yPercent: 0, opacity: 1 })
      .to(logoLine, { strokeDashoffset: 0, duration: 3 });
  
    ScrollTrigger.create({
      trigger: qode,
      start: "top top",
      end: "+=15000",
      animation: tl,
      pin: true,
      scrub: true
    });
  },
}

function init() {
  intro.init();       // 완료
  wall.init();        // 완료
  demo.init();        // 완료
  shop.init();        // 완료
  pp.init();          // 완료
  letters.init();     // 완료
  elements.init();    // 완료
  qode.init();        // 완료

  window.addEventListener("resize", front.debounce(gsap.matchMediaRefresh, 100));
}

document.addEventListener("DOMContentLoaded", init);