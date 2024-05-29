const front = {
  init() {
    gsap.set(container, { autoAlpha: 1 });
    window.addEventListener("resize", front.debounce(front.setVh, 100));
    front.setVh();
  },

  setVh() {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
    document.documentElement.style.setProperty("--vw", `${window.innerWidth}px`);
  },

  debounce(callback, time = 500) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback.apply(this, args);
      }, time);
    };
  },

  throttle(callback, limit = 100) {
    let waiting = false;

    return function () {
      if (!waiting) {
        callback.apply(this, arguments);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  },

  spitText(el) {
    const texts = el.textContent.split('');
    let HTML = ``;
    texts.forEach((a, i)=>{ HTML += `<span class="chars" data-chars="${i}">${a}</span>` });
    el.textContent = ``;
    el.insertAdjacentHTML("afterbegin", HTML);

    return el.querySelectorAll(`.chars`);
  },
};

document.addEventListener("DOMContentLoaded", front.init);

/**
 * https://simseonbeom.github.io/Bridge/build/
 */
