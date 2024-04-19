const h2 = document.querySelector(".section02 h2");

gsap.to(h2, {
  x: 200,
  scrollTrigger: {
    trigger: ".section02",
    start: "20% center",
    end: "80% center",
    scrub: true,
    markers: true,
    id: "main",
    /**
     * onEnter: 시작점을 지날 때
     */
    onEnter() {
      h2.textContent = "enter!";
    },
    /**
     * onLeave: 종료점을 지날 때
     */
    onLeave() {
      console.log("leave!");
    },
  },
});

markers(); // 위치 중요!

/**
 * https://productive-printer-b81.notion.site/ScrollTrigger-2ffb9690a0c2461eb596b8ce6d09ff21#02bc95d1255141318dfcdf51e4d4edae
 */
