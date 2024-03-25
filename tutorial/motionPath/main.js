const $ = node => document.querySelector(node);
const $$ = node => document.querySelectorAll(node);

const tiger = $('#tiger');
const pause = $('#pause');
const progressBar = $('#progressBar');
const time = $('#time');

const setButtonText = () => {
	pause.textContent = animation.paused() || animation.progress() === 1 ? 'play' : 'pause';
};

const setProgress = () => {
	time.textContent = animation.time().toFixed(2);
	progressBar.value = animation.progress();
};

const animation = gsap.to(tiger, {
	duration: 6,
	motionPath: {
		path: '#route',
		align: tiger,
	},
	onUpdate: setProgress,
	onComplete: setButtonText,
});

pause.addEventListener('click', () => {
	if (animation.progress() === 1) {
		animation.restart();
	} else {
		animation.paused(!animation.paused());
	}
	setButtonText();
});

progressBar.addEventListener('input', e => {
	animation.paused(true);
	animation.progress(e.target.value);
	setButtonText();
	setProgress();
});

// animation.paused(); // getter
// animation.paused(false); // getter

// animation.reversed(true);

// animation.timeScale(0.2); // 배속

// animation.time();  // 0을 반환, 애니메이션이 실행 중이면 실행 초 반환
// animation.time(3); // 애니메이션의 시간을 3초로 이동

// animation.progress(); // 애니메이션의 진행률을 반환 (0부터 1까지)
// animation.progress(1); // 애니메이션 종료 지점에서 멈춰있다.
