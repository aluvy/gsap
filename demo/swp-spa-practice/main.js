/** page transition animation */
function pageEnter() {
  const heading = gsap.timeline()
    .from(".heading .line", { scaleX: 0, transformOrigin: 'left center' })
    .from(".heading h3 span", { yPercent: 100 })
    .from(".heading p span", { yPercent: -100 }, "<")
}

function pageLeave(current) {
  const nav = gsap.timeline()
    .set("nav", { pointerEvents: 'none'})
    .to("nav li", { yPercent: innerHeight, duration: 1.5, ease: 'power4.inOut', stagger: { amount: 0.2, from: 'end' } })

  const scale = gsap.timeline()
  if( current.namespace === 'main' ) {
    scale
      .to(".image_container", { duration: 1.5, scale: 1, ease: 'power3.inOut' })
      .to(".image_container > div", { filter: 'brightness(1)' })
  }
  return scale;
}

function detailLeave() {
  const tl = gsap.timeline()
    .to(".visual", { filter: 'brightness(0.4)'})
    .to(".visual", { scale: 0.5, ease: 'power3.inOut', duration: 1.5 }, 0);
  
  const nav = gsap.timeline()
    .set("nav", { pointerEvents: 'initial'})
    .to("nav li", { yPercent: 0, duration: 1.5, ease: 'power4.inOut', stagger: { amount: 0.2, from: 'start' } })

  const heading = gsap.timeline()
  .to(".heading .line", { scaleX: 0, transformOrigin: 'left center' })
  .to(".heading h3 span", { yPercent: 100 })
  .to(".heading p span", { yPercent: -100 }, "<")

  return tl;
}




/** page animation */
function main() {
  let count = 5;
  gsap.utils.toArray("nav li").forEach((li, i)=>{

    li.addEventListener("mouseenter", ()=>{
      const me = `.image_container .cover:nth-child(${i+1})`;
      const exeptMe = `.image_container .cover:not(:nth-child(${i+1}))`;

      const navAnimation = gsap.timeline({defaults: { duration: 0.2 }})
        .to("nav li", { opacity:0.2 })
        .to(li, { opacity: 1 }, 0)
      
      gsap.defaults({ overwrite: 'auto' }); // 애니메이션 오버라이딩

      const imageAnimation = gsap.timeline()
        .to(exeptMe, { height: 0, onComplete:()=>{ gsap.set(me, { zIndex: ++count }) } })
        .set(me, { height: '100%' }, 0)
    })

    li.addEventListener("mouseleave", ()=>{
      gsap.to("nav li", { opacity: 1 });
    });
  })
}

function rome() {
  ScrollTrigger.create({
    trigger: '.section02',
    start: 'top top',
    end: '+=2000',
    animation: gsap.fromTo(".card_container", {
      x: '100%'
    }, {
      x: (_, t)=> -(t.offsetWidth - innerWidth),
    }),
    pin: true,
    scrub: true,
    // markers: true,
  })
}

function england() {
  const split = new SplitText('.section02 p',{ type: 'chars' });
  const tween = gsap.from(split.chars, { opacity: 0, stagger: 0.1 });

  // SPA의 경우 시작점이 잘못 잡혀지는 경우가 있다.
  ScrollTrigger.create({
    trigger: '.section01',
    start: 'bottom center',
    end: () => `+=${document.querySelector(".section02").offsetHeight}`,
    immediateRender: true,
    animation: tween,
    scrub: true,
    // markers: true,
  })
}

function india() {

  ScrollTrigger.create({
    trigger: '.section02',
    start: 'top top',
    end: '+=2000',
    animation: gsap.fromTo(".section02 h3", { letterSpacing: 0 }, { letterSpacing: 150 }),  // letterSpacing은 fromTo로 초기값 설정이 필요함
    pin: true,
    pinSpacing: false,  // 밑에있는 컨텐츠가 위로 올라가는게 보여야 함
    scrub: true,
    // markers: true,
  })
}

function peru() {

  gsap.utils.toArray("#peru .section").forEach((section)=>{
    const pic = section.querySelector(".pic");
    const desc = section.querySelector(".description");

    const tl = gsap.timeline()
      .from(pic, { opacity: 0, x: -200 })
      .from(desc, { opacity: 0, x: 200 }, 0);

    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      animation: tl,
      scrub: true,
      markers: true,
    })
  })

}




/** setting */
// barba global hooks
barba.hooks.leave((data) => {
  ScrollTrigger.getAll().forEach( o => o.kill() );
});
barba.hooks.after((data) => {
  scrollbar.update();
  scrollbar.scrollTo(0, 0);
  markers();
});
barba.hooks.beforeEnter((data) => {
  const name = data.next.namespace;
  if ( name !== 'main') {
    gsap.set("nav", { pointerEvents: 'none'})
    gsap.set("nav li", { yPercent: innerHeight })
  }
})

// barba init
function setImageOrder({current}) {
  const n = current.namespace;
  const tl = gsap.timeline()
    .set(".image_container .cover", { height: 0 })
    .set(`.image_container .cover[data-name="${n}"]`, { height: '100%', zIndex: 5 })
}
const commonOption = {
  sync: true, // sync: true 넘어갈 다음 페이지를 미리 로드한다.
  leave:() => {
    scrollbar.scrollTo(0,0, 600);
    return detailLeave()
  },
  beforeEnter:(data) => setImageOrder(data)
}

barba.init({
  // 각 페이지별 설정
  views: [
    { namespace: 'main', beforeEnter:() => main() },
    { namespace: 'rome', beforeEnter:() => rome() },
    { namespace: 'england', beforeEnter:() => england() },
    { namespace: 'india', beforeEnter:() => india() },
    { namespace: 'peru', beforeEnter:() => peru() },
  ],
  transitions: [
    {
      name: 'default-transition',
      once:() => markers(),
      leave: ({current}) => pageLeave(current),
      enter() {
        pageEnter();
      }
    },
    // 각 페이지 별 화면전환 설정, 우선순위가 높다
    { namespace: 'rome', ...commonOption },
    { namespace: 'england', ...commonOption },
    { namespace: 'india', ...commonOption },
    { namespace: 'peru', ...commonOption },
  ]
});

/**
 * 애니메이션 오버라이딩
 * tween이 끝나지 않은 상태에서 새로운 트윈이 걸리면 트윈중첩이 일어남
 * 이 문제를 해결하려면 overwrite: true 로 설정해준다.
 * 이렇게 설정하면 중복되어 있는 모든 트윈이 제거가 되고, 새로운 트윈이 부여된다.
 * overwrite: 'auto' : 자동으로 겹치는 애니메이션에 대해서만 애니메이션 제거
 * 
 * barba.transitions
 * sync: true 넘어갈 다음 페이지를 미리 로드한다.
 */
