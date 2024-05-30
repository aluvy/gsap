const intro = {
  init() {
    intro.animation();
  },
  animation() {
    const bridge = document.querySelector("#intro h1");
    if ( is.none(bridge) ) return;

    const chars = front.spitText(bridge);
    const size = [
      { x: -1.8, y: 1.5, scale: 1 },
      { x: 3, y: -30, scale: 1 },
      { x: -0.6, y: 30, scale: 1 },
      { x: -3, y: -45, scale: 1 },
      { x: 15, y: -9, scale: 1 },
      { x: 3, y: 30, scale: 1 },
    ]

    const tl = gsap.timeline({
      // scrollTrigger: {
      //   trigger: '#intro',
      //   start: 'top top',
      //   end: 'bottom bottom',
      //   scrub: true,
      //   markers: true,
      //   onUpdate() {
      //     console.log('test')
      //   }
      // }
    });
    gsap.utils.toArray("#intro .chars").forEach((a,i)=>{
      tl.to(a, {
        scale: 2,
        duration: 5
      }, 0)
    });

    ScrollTrigger.create({
      trigger: '#intro',
      start: 'top top',
      end: 'bottom bottom',
      animation: tl,
      scrub: true,
      markers: true,
    })
    markers();
  },
};



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
  elements.init();
}

document.addEventListener("DOMContentLoaded", init);