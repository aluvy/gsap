gsap.registerPlugin(ScrollTrigger);

// progress
ScrollTrigger.create({
	trigger: '.scroll-content',
	start: 'top top',
	end: 'bottom bottom',
	animation: gsap.from('.progress', { scaleY: 0, transformOrigin: 'center top', ease: 'none' }),
	scrub: true,
});


// lnb animation
// const lnbAnimation = gsap.timeline({defaults: { ease: 'none' }})
// 	.to('.lnb li:nth-child(2) .dot', { scale: 2 })
// 	.to('.lnb li:nth-child(2) span', { opacity: 1, x: 40 }, 0);

// ScrollTrigger.create({
// 	trigger: '.section02',
// 	start: 'top center',
// 	end: 'bottom center',
// 	animation: lnbAnimation,
// 	toggleActions: 'restart reverse restart reverse',	// enter leave enterback leaveback
// 	// markers: true,
// });

gsap.utils.toArray('.section').forEach((a, i) => {
	const lnbAnimation = gsap.timeline({defaults: { ease: 'none' }})
		.to(`.lnb li:nth-child(${i+1}) .dot`, { scale: 2 })
		.to(`.lnb li:nth-child(${i+1}) span`, { opacity: 1, x: 40 }, 0);

	ScrollTrigger.create({
		trigger: a,
		start: 'top center',
		end: 'bottom center',
		animation: lnbAnimation,
		toggleActions: 'restart reverse restart reverse',	// enter leave enterback leaveback
		// markers: true,
	});
})

markers();
