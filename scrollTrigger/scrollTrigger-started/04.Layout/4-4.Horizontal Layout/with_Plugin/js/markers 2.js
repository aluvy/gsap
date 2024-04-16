

const markers = () => {

  if (document.querySelector('.gsap-marker-scroller-start')) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    scrollbar.addListener(({ offset }) => {
      gsap.set(markers, { marginTop:(_,t)=>{
        // return  t.className.includes('scroller') || -offset.x 
        return -offset.y
      }});
    });
  }



}