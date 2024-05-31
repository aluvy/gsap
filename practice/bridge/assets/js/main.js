const breakPoint = {
  isDesktop: '(min-width: 1025px)',
  isTablet: '(max-width:1024px) and (min-width:681px)',
  isMobile: '(max-width: 680px)',
  reduceMotion: '(prefers-reduced-motion)',
}

const intro = {
  init() {
    intro.animation();
  },
  animation() {
    const bridge = document.querySelector("#intro h1");
    if ( is.none(bridge) ) return;

    const chars = front.spitText(bridge);
    const mm = gsap.matchMedia();

    mm.add(breakPoint, (ctx) => {
      const { isDesktop, isTablet, isMobile, reduceMotion } = ctx.conditions;

      if(reduceMotion) return;
      if ( isDesktop )        ST_desktop();
      else if ( isTablet )    ST_tablet();
      else if ( isMobile )    ST_mobile();

    });

    // desktop
    function ST_desktop() {
      const tl = gsap.timeline({ defaults: { scale: 13, transformOrigin: "50% 50%" } });
      tl.from(".char-b", { xPercent: -250, yPercent: 0 })
        .from(".char-r", { xPercent: 0, yPercent: -1000 }, 0.1)
        .from(".char-i", { xPercent: 1000, yPercent: -1000 }, 0.15)
        .from(".char-d", { xPercent: -1000, yPercent: -1000 }, 0.2)
        .from(".char-g", { xPercent: -1000, yPercent: 1500 }, 0.25)
        .from(".char-e", { xPercent: 1000, yPercent: 500 }, 0.3)
        .from("#intro .desc", { autoAlpha: 0, y: 30, scale: 1, duration: 0.1 })

      ScrollTrigger.create({
        trigger: '#intro',
        start: 'top top',
        end: `+=3000`,
        animation: tl,
        pin: !0,
        scrub: 1,
        // markers: true,
      })
      markers();
    }

    // tablet
    function ST_tablet() {
      const tl = gsap.timeline({ defaults: { scale: 16, transformOrigin: "50% 50%" } })
        .from(".char-b", { xPercent: -150, yPercent: 0 })
        .from(".char-r", { xPercent: 0, yPercent: -2000 }, 0.1)
        .from(".char-i", { xPercent: 2000, yPercent: -1000 }, 0.15)
        .from(".char-d", { xPercent: -2000, yPercent: -1000 }, 0.2)
        .from(".char-g", { xPercent: -2000, yPercent: 1500 }, 0.25)
        .from(".char-e", { xPercent: 2000, yPercent: 500 }, 0.3)
        .from("#intro .desc", { autoAlpha: 0, y: 30, scale: 1, duration: 0.1 })

      ScrollTrigger.create({
        trigger: '#intro',
        start: 'top top',
        end: `+=3000`,
        animation: tl,
        pin: !0,
        scrub: 1,
        // markers: true,
      })
      markers();
    }

    // mobile
    function ST_mobile() {
      const tl = gsap.timeline({ defaults: { scale: 20, transformOrigin: "50% 50%" } })
        .from(".char-b", { xPercent: -150, yPercent: 0 })
        .from(".char-r", { xPercent: 0, yPercent: -3000 }, 0.1)
        .from(".char-i", { xPercent: 3000, yPercent: -2000 }, 0.15)
        .from(".char-d", { xPercent: -3000, yPercent: -1000 }, 0.2)
        .from(".char-g", { xPercent: -3000, yPercent: 1500 }, 0.25)
        .from(".char-e", { xPercent: 3000, yPercent: 500 }, 0.3)
        .from("#intro .desc", { autoAlpha: 0, y: 30, scale: 1, duration: 0.1 })

      ScrollTrigger.create({
        trigger: '#intro',
        start: 'top top',
        end: `+=3000`,
        animation: tl,
        pin: !0,
        scrub: 1,
        // markers: true,
      })
      markers();
    }
  },
};


const wall = {
  init() {
    wall.animation();
  },
  animation() {
    const wallItem = document.querySelector("#wall .wall-item");
    if ( is.none(wallItem) ) return;

    const items = document.querySelectorAll("#wall .wall-item:not(.show)");
    items.forEach( a => front.spitText(a) );

    gsap.set("#wall .wall-side .chars", { opacity: 0 });

    const tl = gsap.timeline();
    tl.from("#wall .wall-front .wall-item .chars", {
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.1,
        from: "random",
        easel: "power1",
      }
    });

    ScrollTrigger.create({
      trigger: '#wall',
      start: 'top top',
      end: `+=2000`,
      animation: tl,
      pin: true,
      scrub: true,
      markers: true
    })
    markers();




  }

}


const elements = {
  init() {
    elements.setChars();
  },

  setChars() {
    const chars = document.querySelector("#elements #chars");
    if ( is.none(chars) ) return;
    const SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="136.978px" height="191.953px" viewBox="0 0 136.978 191.953" enable-background="new 0 0 136.978 191.953" xml:space="preserve" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><path d="M0,191.953V0h65.786c21.708,0,38.232,4.351,49.57,13.052s17.007,21.667,17.007,38.892c0,8.79-2.373,16.7-7.119,23.73 c-4.746,7.033-11.69,12.481-20.83,16.348c10.37,2.814,18.391,8.108,24.06,15.886s8.503,17.118,8.503,28.015 c0,18.018-5.78,31.861-17.336,41.528c-11.558,9.669-28.104,14.502-49.636,14.502H0z M33.354,80.815H66.05 c10.37,0,18.478-2.351,24.324-7.053c5.844-4.701,8.767-11.358,8.767-19.973c0-9.492-2.703-16.348-8.108-20.566 s-13.822-6.328-25.247-6.328H33.354V80.815z M33.354,105.337v59.985H70.4c10.458,0,18.632-2.591,24.521-7.778 c5.887-5.185,8.833-12.393,8.833-21.621c0-19.951-10.197-30.145-30.586-30.586H33.354z" data-svg-origin="-24.54869270862605 -104.69015240585156"></path></svg>`;
    // transform="matrix(0.92628,0.37684,-0.37684,0.92628,10.22983,112.59127)

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
  }
}




function init() {
  intro.init();
  wall.init();
  elements.init();
}

document.addEventListener("DOMContentLoaded", init);