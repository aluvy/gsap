function pageLeave(target) {
  const tl = gsap.timeline();
  tl.to('h2', { y: 30 })
    .to(target, { opacity: 0 }, 0)

  return tl;
}

function pageEnter(target) {
  const tl = gsap.timeline();
  tl.from('h2', { y:-50 })
    .from(target, { opacity: 0 }, 0)
}

// home 페이지에서 처리 할 이벤트
function home() {
  ScrollTrigger.create({
    trigger: '.section03',
    start: 'top center',
    end: 'bottom center',
    animation: gsap.to('.box', { x: 300 }),
    scrub: true,
    markers: true,
  })
}
function about() {
  ScrollTrigger.create({
    trigger: '.section03',
    start: 'top center',
    end: 'bottom center',
    animation: gsap.to('.box', { x: 200, rotation: 360 }),
    scrub: true,
    markers: true,
  })
}
function contact() {
  ScrollTrigger.create({
    trigger: '.section03',
    start: 'top center',
    end: 'bottom center',
    animation: gsap.to('.box', { x: 200, rotation: 180, y: 100 }),
    scrub: true,
    markers: true,
  })
}



/**
 * barba Global Hook
 */
barba.hooks.leave((data) => {
  ScrollTrigger.getAll().forEach( a => a.kill() );  // 모든 ScrollTrigger 제거
})
barba.hooks.after((data) => {
  scrollbar.update();
  scrollbar.scrollTo(0,0);
  markers();  // markers 위치
})



barba.init({
  // 각 페이지 별로 javascript를 처리할 수 있는 구문
  views: [
    {
      namespace: "home",
      beforeEnter: () => home()
    },
    {
      namespace: "about",
      beforeEnter: () => about()
    },
    {
      namespace: "contact",
      beforeEnter: () => contact()
    }
  ],

  // 페이지 전환
  transitions: [{
    name: 'opacity-transition',
    leave: ({current}) => pageLeave(current.container), // return 필수
    enter({next}) {
      // create your amazing enter animation here
      pageEnter(next.container);  // return X
      
    },
    // 페이지 이동 시 1회 실행
    once: () => {
      markers();  // markers 위치
    }
  }]
});











/**
 * SPA: barba.js 이용 https://barba.js.org/
 * 
 */
