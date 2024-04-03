const $ = (node) => document.querySelector(node);
const $$ = (nodes) => document.querySelectorAll(nodes);

const setVh = () => {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
};

setVh();
window.addEventListener("resize", setVh);

function handleFloatingIframe() {
  const float = $("#float");
  const iframe = $("#float iframe");
  const a = Array.from($$(".demogroup a"));

  a.forEach((elem) => {
    elem.addEventListener("mouseenter", (e) => {
      const url = elem.getAttribute("href");
      iframe.setAttribute("src", url);
      float.style.display = "block";
    });

    elem.addEventListener("mousemove", (e) => {
      const gap = 20;
      const screenX = e.x + gap;
      const screenY = e.y + gap;

      float.style.left = `${screenX}px`;
      float.style.top = `${screenY}px`;
    });

    elem.addEventListener("mouseleave", () => {
      float.style.display = "none";
    });
  });
}
handleFloatingIframe();
