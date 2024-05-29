(function() {
  const loading = document.querySelector("#loading");
  const bar = loading.querySelector("#loading .bar");

  const updateProgress = ( instance, image ) => {
    const per = instance.progressedCount / instance.images.length * 100;
    bar.style.width = `${per}%`;
  }

  const init = ( instance ) => {
    const tl = gsap.timeline()
      .to("#loading .ready .desc p", { yPercent: -100 })
      .to("#loading .ready .progress", { opacity: 0 }, "<")
      .set("#loading .ready", { autoAlpha: 0, display: "none" })
      .set("#loading .done", { autoAlpha: 1, display: "block" })
      .from("#loading .done .desc p", { yPercent: 100 }, "<")
      .from("#loading .done .arrow", { opacity: 0 }, "-=0.2")
    
    tl.eventCallback("onComplete", ()=>{
      loading.addEventListener("click", ()=>{
        const tween = gsap.to(loading, { yPercent: -100, duration: 1, ease: 'power3.inOut' })
      })
    })
  }

  const imgLoad = imagesLoaded("#container", { background: true });
  imgLoad
    .on("progress", updateProgress)
    .on("done", init)

})();
