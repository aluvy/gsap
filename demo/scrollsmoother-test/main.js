ScrollTrigger.config({ ignoreMobileResize: true });

gsap.utils.toArray('.section').forEach((a, i) => {
	const w = document.querySelector('#container');
	const E = a.querySelector('.item');

	const [x, xEnd] = i % 2 ? [-(E.scrollWidth - innerWidth), 0] : [0, -(E.scrollWidth - innerWidth)];
	gsap.fromTo(
		E,
		{
			x,
		},
		{
			x: xEnd,
			scrollTrigger: {
				trigger: w,
				start: 'top top',
				end: 'bottom bottom',
				scrub: 0.5,
				markers: true,
			},
		},
	);
});
