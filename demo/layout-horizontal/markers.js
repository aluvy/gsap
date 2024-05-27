const markers = () => {
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
    // const markers = gsap.utils.toArray('[class *= "gsap-marker-scroller"]');

    const scrollers = markers.filter( a => a.className.includes('scroller'));

    console.log(scrollers);

    scrollbar.addListener(({ offset }) => {
      // gsap.set(markers, { marginTop: -offset.y });
      gsap.set(scrollers, { marginLeft: -offset.y });
    });
  }
};
