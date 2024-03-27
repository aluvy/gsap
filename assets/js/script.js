const setVh = () => {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
};

setVh();
window.addEventListener("resize", setVh);
