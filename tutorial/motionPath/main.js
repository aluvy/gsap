const $ = node => document.querySelector(node);
const $$ = node => document.querySelectorAll(node);

const tiger = $('#tiger');
const pause = $('#pause');
const progressBar = $('#progressBar');
const time = $('#time');

const svg = $('svg');

const site = $$('#home, #mountain, #river, #company');

const path = [
	{ el: $('#home'), progress: 0 },
	{ el: $('#mountain'), progress: 0.22 },
	{ el: $('#river'), progress: 0.47 },
	{ el: $('#company'), progress: 1 },
];

const updateButtonText = () => {
	pause.textContent = animation.paused() || animation.progress() === 1 ? 'play' : 'pause';
};

const updateProgress = () => {
	time.textContent = animation.time().toFixed(2);
	progressBar.value = animation.progress();
};

const animation = gsap.to(tiger, {
	duration: 6,
	motionPath: {
		path: '#route',
		align: tiger,
	},
	onUpdate: updateProgress,
	onComplete: updateButtonText,
});

pause.addEventListener('click', () => {
	if (animation.progress() === 1) {
		animation.restart();
	} else {
		animation.paused(!animation.paused());
	}
	updateButtonText();
});

progressBar.addEventListener('input', e => {
	animation.progress(e.target.value).paused(true);
	updateButtonText();
	updateProgress();
});

path.forEach((item, i) => {
	item.el.addEventListener('click', () => {
		animation.pause();
		gsap.to(animation, { progress: item.progress, duration: 1 });
	});
});

// svg.addEventListener('click', e => {
// 	const target = e.target.closest('g');
// 	if (!target) return;

// 	const id = target.getAttribute('id');
// 	if (!id) return;

// 	let progress = 0;

// 	switch (id) {
// 		case 'home':
// 			break;
// 		case 'mountain':
// 			progress = 0.22;
// 			break;
// 		case 'river':
// 			progress = 0.47;
// 			break;
// 		case 'company':
// 			progress = 1;
// 			break;
// 		default:
// 			return;
// 		// break;
// 	}

// 	animation.pause();
// 	gsap.to(animation, { progress: progress, duration: 1 });
// 	updateButtonText();
// });

// animation.paused(); // getter
// animation.paused(false); // getter

// animation.reversed(true);

// animation.timeScale(0.2); // 배속

// animation.time();  // 0을 반환, 애니메이션이 실행 중이면 실행 초 반환
// animation.time(3); // 애니메이션의 시간을 3초로 이동

// animation.progress(); // 애니메이션의 진행률을 반환 (0부터 1까지)
// animation.progress(1); // 애니메이션 종료 지점에서 멈춰있다.
