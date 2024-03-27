const $ = (node) => document.querySelector(node);

const svg = $("#svg");
const tiger = $("#tiger");
const button = $("#button");
const progressSlider = $("#progressSlider");
const time = $("#time");

const animation = gsap.to(tiger, {
  duration: 6,
  motionPath: {
    path: "#route",
    align: tiger,
    alignOrigin: [0.5, 0.5],
  },
  onUpdate: update,
  onComplete: complete,
});

function update() {
  progressSlider.value = animation.progress();
  time.textContent = animation.time().toFixed(2);
}
function complete() {
  updateButtonText();
}

function updateButtonText() {
  button.textContent =
    animation.paused() || animation.progress() === 1 ? "play" : "pause";
}

function handleButton() {
  if (animation.progress() === 1) {
    animation.restart();
  } else {
    animation.paused(!animation.paused());
  }
  updateButtonText();
}

function handleProgressSlider() {
  animation.pause();
  animation.progress(progressSlider.value);
  updateButtonText();
}

function handleSVG(e) {
  const target = e.target.closest("g");
  if (!target) return;

  const id = target.getAttribute("id");
  if (!id) return;

  let progress = 0;
  switch (id) {
    case "home":
      break;
    case "mountain":
      progress = 0.22;
      break;
    case "river":
      progress = 0.46;
      break;
    case "company":
      progress = 1;
      break;
    default:
      return;
  }

  animation.pause();
  gsap.to(animation, { progress: progress, duration: 2 });
  updateButtonText();
}

button.addEventListener("click", handleButton);
progressSlider.addEventListener("input", handleProgressSlider);
svg.addEventListener("click", handleSVG);
