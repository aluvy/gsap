const theme = {
  primary: "#6067f3",
  secondary: "#e8e2da",
};

const keywords = ['Jeju','Yang-yang','Mokpo','Busan'];

function fixedHeader() {
  ScrollTrigger.create({
    trigger: '.nav_container',
    start: 'top top',
    end: 'max',   // 최대스크롤 위치
    // endTrigger: '.footer',
    // end: 'bottom bottom', // .footer 의 bottom
    pin: true,
    pinSpacing: false,  // 영역 보존 여부
    // markers: true,
  })
}

function heroAnimation() {
  gsap.set('.logo', {
    width: '100%',
    yPercent: -90,
  });

  ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom 20%',  // 브라우저 상단에서 20% 떨어진 위치
    animation: gsap.to(".logo", {width: '12%', yPercent: 0}),
    scrub: true,
    // markers: true,
  })
}

function textAnimation() {
  gsap.utils.toArray(".header_text-wrap").forEach((a, i) => {
    const target = a.querySelector(".header_text-move");
    // const [x, xEnd] = index % 2 ? [innerWidth, 0] : [-innerWidth, 0];

    ScrollTrigger.create({
      trigger: a,
      start: 'top center',
      end: 'bottom center',
      animation: gsap.fromTo(a, { x: i % 2 ? innerWidth : -innerWidth }, { x: 0 }),
      scrub: true,
      // markers: true,
    })
  })
}

function maskAnimation() {

  const circleTween = gsap.timeline()
    .to(".circle_element", {
      borderRadius: 0,
      width: innerWidth,
      height: innerHeight,
    })
    // .to('body, .nav_container', {
    //   backgroundColor: theme.secondary,
    //   color: theme.primary
    // }, "<")
    .add(changeTheme(), "<")

  ScrollTrigger.create({
    trigger: '.circle_wrap',
    start: 'top top',
    end: '+=2000',
    animation: circleTween,
    pin: true,
    pinSpacing: true,
    scrub: true,
    // markers: true,
  })
}

function categoryAnimation() {

  const tween = gsap.from('.categories > a', {
    opacity: 0,
    filter: 'blur(3px)',  // 10을 넘기지 않는것이 좋다.
    stagger: {
      each: 0.1,
      from: "random"
    }
  })

  ScrollTrigger.create({
    trigger: '.catories_container',
    start: 'top top',
    end: '+=2000',
    animation: tween,
    pin: true,
    pinSpacing: true,
    scrub: true,
  })
}

function gallaryAnimation() {
  ScrollTrigger.create({
    trigger: '.text_container',
    start: 'top top',
    endTrigger: '.image_container',
    end: 'bottom bottom',
    animation: gsap.to(".front_image", { yPercent: -20 }),
    pin: true,
    pinSpacing: false,
    scrub: true,
    // markers: true,
    onUpdate: ({ progress }) => {
      const el = document.querySelector('.text_container span');
      const ratio = Math.round(progress * 100); // 0 ~ 100
      let idx =  Math.floor(ratio / (100 / 4)); // 0 ~ 3
      idx = idx >= 3 ? 3 : idx;
      
      const mode = idx % 2 ? 'dark' : 'light';
      changeTheme(mode);
      el.textContent = keywords[idx];
    }
  })
}

function changeTheme(mode = 'light') {
  const tween = gsap.to('body, .nav_container', {
    backgroundColor: mode === 'light' ? theme.secondary : theme.primary,
    color: mode === 'light' ? theme.primary : theme.secondary,
  });

  return tween;
}

fixedHeader();
heroAnimation();
textAnimation();
maskAnimation();
categoryAnimation();
gallaryAnimation();

markers();

/**
 * pin을 많이 주면 endTrigger의 위치를 못찾는다. 이럴 때에는 end: 'max
 */
