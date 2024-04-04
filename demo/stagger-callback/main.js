const $ = (node) => document.querySelector(node);

/* tiger ************************************************/
function tiger() {
  gsap.to(".tiger > div", {
    y: 100,
    // callback
    onComplete: () => {
      // console.log("tween complete!");
    },
    stagger: {
      each: 0.2,
      repeat: 1,
      yoyo: true,
      // callback
      // onComplete: () => {
      //   console.log("stagger complete!");
      //   console.log(this);  //  window
      // },
      onComplete() {
        // console.log("stagger complete!");
        // console.log(this); // tween
        console.log(this.targets()[0]); // Element Array
        gsap.to(this.targets()[0], {
          rotation: 360,
        });
      },
      // onCompleteParams: ,
      onRepeat: () => {
        console.log("stagger repeat!");
      },
    },
  });
}
tiger();
// 무한반복 상태에는 onComplete callback을 받을 수 없다.

/* word ************************************************/
function word() {
  const { chars, lines, words } = new SplitText(".word > div"); // 구조분해할당
  const tl = gsap.timeline();

  tl.from(chars, {
    opacity: 0,
    duration: 2,
    stagger: {
      each: 0.1,
      from: "random",
      ease: "power1", // 가속도
      // timeline은 callback을 기다리진 않는다.
      onComplete() {
        const target = this.targets()[0];
        // console.log(target);
        gsap.to(target, {
          delay: 0.5,
          duration: 0,
          color: "#51ff00",
        });
      },
    },
  });
  tl.to(lines, {
    delay: 1,
    y: 30,
    opacity: 0,
    stagger: {
      each: 0.2,
      from: "end", // 아래에서 부터
    },
  });
}
word();

/* stage ************************************************/
function stage() {
  const l = 8 * 13;

  for (let i = 0; i < l; i++) {
    let template = `<div class="box" data-idx="${i}"></div>`;
    document.querySelector(".stage")?.insertAdjacentHTML("beforeend", template);
  }

  const animation = gsap.to(".stage .box", {
    scale: 0.3,
    stagger: {
      each: 0.5,
      onStart() {
        // console.log("start");
        const target = this.targets()[0];

        if (target.dataset.stop === "1") {
          const startTime = this.startTime(); // 움찔거림 제거, animation 전체 애니메이션에서 this의 시작 시간
          animation.pause(startTime);
        }
      },
    },
  });

  $(".stage").addEventListener("click", (e) => {
    const target = e.target;
    if (!target.matches(".box")) return;

    gsap.to(target, {
      backgroundColor: "red",
      attr: { "data-stop": true }, // gsap attr plugin
    });
  });
}
stage();
