const $ = (node) => document.querySelector(node);
gsap.registerPlugin(ScrollTrigger);

function fn1() {
  // const tween = gsap.fromTo(
  //   ".wrapper.text",
  //   { x: "100%" },
  //   {
  //     x() {
  //       return -(this.targets()[0].scrollWidth - innerWidth);
  //     },
  //   }
  // );

  // 반대방향
  const tween = gsap.fromTo(
    ".wrapper.text",
    {
      x() {
        return -(this.targets()[0].scrollWidth - innerWidth);
      },
    },
    { x: 0 }
  );

  ScrollTrigger.create({
    trigger: ".demo-text",
    // start: "top bottom",
    // end: "bottom top",
    animation: tween,
    marker: true,
    scrub: true,
  });
}
// fn1();

const loaderFinish = () => {
  gsap.to(".loader", { autoAlpha: 0 });
  document.body.style.overflow = "auto";
  document.scrollingElement.scrollTo(0, 0);
};

const showDemo = () => {
  gsap.utils.toArray("section").forEach((a, i) => {
    const w = a.querySelector(".wrapper");
    if (!w) return;

    const [x, xEnd] =
      i % 2 ? ["100%", -(w.scrollWidth - innerWidth)] : [-w.scrollWidth, 0];

    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: a,
          scrub: 0.5,
        },
      }
    );
  });
};

const awsome = () => {
  const tl = gsap.timeline({ defaults: { ease: "none" } });
  tl.from(".awsome .text", { x: innerWidth })
    .to(".awsome .text", {
      scale: 50,
      xPercent: -200, // 폰트의 까만부분이 더 많이 보이게 하기 위해
    })
    .to("body", { duration: 0.3, backgroundColor: "#000" }, "-=0.5");

  ScrollTrigger.create({
    trigger: ".awsome",
    start: "top top",
    end: "+=3000", // 지속 스크롤
    animation: tl,
    pin: true,
    scrub: 1, // 부드럽게
  });
};

const tryNow = () => {
  const tween = gsap.from(".try .text", {
    y: 50,
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: ".try",
    start: "top top",
    end: "+=2000",
    animation: tween,
    pin: true,
    scrub: true,
  });
};

const init = () => {
  loaderFinish();
  showDemo();
  awsome();
  tryNow();
};

const imgs = [...document.querySelectorAll("img")]; // Array like ==> Array
const loader = document.querySelector(".loader--text");

const updateProgress = (instance) => {
  const per = Math.round((instance.progressedCount * 100) / imgs.length);
  loader.textContent = `${per}%`;
};

imagesLoaded(imgs).on("progress", updateProgress).on("always", init);

/**
 * imagesLoaded
 * https://imagesloaded.desandro.com/
 */
