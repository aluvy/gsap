const $ = node => document.querySelector(node);

const map = $('.map');
const current = $('.current');
const mart = $('.mart');
const medi = $('.medi');

let isScale = false;
const handleCurrent = function () {
	isScale = true;
	const tl = gsap.timeline();
	tl.to(map, {
		x: 150,
		y: -200,
		scale: 2,
		duration: 2,
		ease: 'power2.inOut',
	}).to('#here', { y: -10, repeat: -1, yoyo: true });
};

const handleMart = function () {
	const length = Math.ceil($('#emart .path').getTotalLength());
	drawRoute('#emart', length);
};

const handleMedi = function () {
	const length = Math.ceil($('#medi .path').getTotalLength());
	drawRoute('#medi', length);
};

const drawRoute = function (target, length) {
	const tl = gsap.timeline({
		defaults: {
			duration: 2,
		},
	});

	tl.set(`${target} .pick`, { opacity: 0 })
		.to(map, { x: 0, y: 0, scale: 1, duration: isScale ? 2 : 0 })
		.set(`${target} .pick`, { opacity: 1 })
		.fromTo(`${target} .path`, { strokeDashoffset: length }, { strokeDashoffset: 0 })
		.to(
			`${target} .pick`,
			{
				motionPath: {
					path: `${target} .path`,
					align: `${target} .path`,
					alignOrigin: [0.5, 0.5],
				},
			},
			'<'
		);

	isScale = false;
};

current.addEventListener('click', handleCurrent);
mart.addEventListener('click', handleMart);
medi.addEventListener('click', handleMedi);

// SVG 길이 가져오기      : $0.getTotalLength()
