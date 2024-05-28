const markers = () => {
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    scrollbar.addListener(({ offset }) => {
      gsap.set(markers, {
        // marginTop: (_, t) => {
        marginLeft: (_, t) => {   // horizontal scroll: marginLeft로 변경
          // return  t.className.includes('scroller') || -offset.x
          // return -offset.y;
          return -offset.x;   // horizontal scroll: x값으로 변경

        },
      });
    });
  }
};
