(function() {
  const loading = document.querySelector("#loading");
  if ( is.none(loading) ) return;

  const bar = loading.querySelector("#loading .bar");

  function updateProgress( instance, image ) {
    const per = instance.progressedCount / instance.images.length * 100;
    bar.style.width = `${per}%`;
  }

  function init( instance ) {
    const tl = gsap.timeline()
      .to("#loading .ready .desc p", { yPercent: -100 })
      .to("#loading .ready .progress", { opacity: 0 }, "<")
      .set("#loading .ready", { autoAlpha: 0, display: "none" })
      .set("#loading .done", { autoAlpha: 1, display: "block" })
      .from("#loading .done .desc p", { yPercent: 100 }, "<")
      .from("#loading .done .arrow", { opacity: 0 }, "-=0.2")
    
      loading.addEventListener("click", ()=>{
        gsap.to(loading, { yPercent: -100, duration: 1, ease: 'power3.inOut' })
      })
  }

  function fail(instance) {
    throw new TypeError('FAIL - all images loaded, at least one is broken');
  }

  const imgLoad = imagesLoaded("#container", { background: true });
  imgLoad
    .on("progress", updateProgress)
    // .on("done", init)
    .on("fail", fail)
    .on("always", init)

})();
