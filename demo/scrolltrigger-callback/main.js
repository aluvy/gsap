const h2 = document.querySelector(".section02 h2");

gsap.to(h2, {
  x: 200,
  scrollTrigger: {
    trigger: ".section02",
    // start: "20% center",
    start: () => {
      console.log("start"); // scrollTrigger는 resize 할 때 마다 start 값을 갱신한다.
      return "20% center";
    },
    end: "80% center",
    scrub: true,
    markers: true,
    id: "main",
    /**
     * onEnter: 시작점을 지날 때
     */
    onEnter(self) {
      h2.textContent = "Enter!";
      console.log(self);
    },
    /**
     * onLeave: 종료점을 지날 때
     */
    onLeave(self) {
      h2.textContent = "Leave!";
      console.log(self);
    },
    /**
     * onEnterBack: 다시 들어올 때
     */
    onEnterBack(self) {
      h2.textContent = "EnterBack!";
      console.log(self);
    },
    /**
     * onLeaveBack: 다시 나갈 때
     */
    onLeaveBack(self) {
      h2.textContent = "LeaveBack!";
      console.log(self);
    },
    /**
     * onToggle: onEnter, onLeave, onEnterBack, onLeaveBack 콜백들이 실행될 때 마다 실행됨
     * direction: 스크롤 방향 체크 (내리면 양수, 올리면 음수)
     */
    onToggle({ direction }) {
      // console.log("toggle", direction);
      if (direction === 1) {
        h2.style.color = "red";
      } else {
        h2.style.color = "blue";
      }
    },
    /**
     * onRefresh: resize 됐을 때
     */
    onRefresh(self) {
      console.log("onRefresh");
    },
    /**
     * onUpdate: 스크롤이 되는 동안 지속적으로 값을 업데이트 시키고 찍어줌
     * progress: 0 ~ 1
     */
    onUpdate({ progress }) {
      let percentage = Math.round(progress * 100);
      h2.textContent = `${percentage}%`;
      if (percentage > 50) {
        gsap.set(".section02", { backgroundColor: "orange" });
      } else {
        gsap.set(".section02", { backgroundColor: "hotpink" });
      }
    },
  },
});

markers(); // 위치 중요!

/**
 * https://productive-printer-b81.notion.site/ScrollTrigger-2ffb9690a0c2461eb596b8ce6d09ff21#02bc95d1255141318dfcdf51e4d4edae
 */
