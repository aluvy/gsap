const $ = (node) => document.querySelector(node);
const $$ = (nodes) => document.querySelectorAll(nodes);

const setVh = () => {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
};

setVh();
window.addEventListener("resize", setVh);

// $("#float")
// console.log(Array.from($$(".demogroup a")));
const float = $("#float");
const iframe = $("#float iframe");
const a = Array.from($$(".demogroup a"));

a.forEach((elem) => {
  elem.addEventListener("mouseenter", (e) => {
    console.log(e);

    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    const layerX = e.layerX;
    const layerY = e.layerY;
    const screenX = e.screenX;
    const screenY = e.screenY;

    const url = elem.getAttribute("href");
    // console.log(url);
    iframe.setAttribute("src", url);
    float.style.display = "block";
  });

  elem.addEventListener("mousemove", (e) => {
    const screenX = e.x + 20;
    const screenY = e.y + 20;

    console.log(screenX, screenY);
    float.style.left = `${screenX}px`;
    float.style.top = `${screenY}px`;
  });

  elem.addEventListener("mouseleave", () => {
    float.style.display = "none";
  });
});
