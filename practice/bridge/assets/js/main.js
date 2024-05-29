const animation = {
  init() {
    console.log('animation init');

    animation.intro();
  },
  intro() {
    const bridge = document.querySelector("#intro h1");
    const chars = front.spitText(bridge);
    const size = [
      { x: -1.8, y: 1.5, scale: 1 },
      { x: 3, y: -30, scale: 1 },
      { x: -0.6, y: 30, scale: 1 },
      { x: -3, y: -45, scale: 1 },
      { x: 15, y: -9, scale: 1 },
      { x: 3, y: 30, scale: 1 },
    ]

    const tl = gsap.timeline();
    chars.forEach((a,i)=>{
      tl.from(a, {
        
      })
    })

    console.log('splitText', chars);
  },
};

document.addEventListener("DOMContentLoaded", animation.init);