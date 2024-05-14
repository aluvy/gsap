gsap.registerPlugin(ScrollTrigger);

// progress
(function () {
	const progress = document.querySelector('.progress');
	const percent = document.querySelector('.percent span');

	ScrollTrigger.create({
		trigger: '.progressHolder',
		start: `top ${document.querySelector('.section01').offsetHeight - document.querySelector('.progressHolder').offsetHeight}`,
		endTrigger: '.section03',
		end: 'bottom bottom', // endTrigger인 section03의 bottom이 된다.
		pin: true,
		animation: gsap.to(progress, { scaleX: 1, ease: 'none' }),
		onUpdate({ progress }) {
			percent.textContent = Math.round(progress * 100);
		},
		// pinSpacing: false,
		// markers: true,
		scrub: true,
		once: true, // 애니메이션이 끝난 후에는 스크롤 트리거가 kill 됨
		id: 'pro', // ScrollTrigger.getById('pro') 을 콘솔에 찍어보면 pro ScrollTrigger 값 확인 가능
	});
})();

// svg (Draw SVG 사용 X)
/*
(function () {
	const circle = document.querySelector('.circleContainer circle');
	const circleLenth = circle.getTotalLength() + 1; // 1 정도 더해준다.

	const rect = document.querySelector('.rectContainer rect');
	const rectLength = rect.getTotalLength() + 1;

	gsap.set(rect, {
		strokeDashoffset: rectLength,
		strokeDasharray: rectLength,
	});

	gsap.set(circle, {
		strokeDashoffset: circleLenth, // circleLenth ~ 0: 0으로 만들면 라인이 사라짐
		strokeDasharray: circleLenth,
	});

	const progressSVG = gsap
		.timeline({
			defaults: {
				strokeDashoffset: 0,
				duration: 2,
				ease: 'none',
			},
		})
		.to(circle, {})
		.to(rect, {}, '<');

	ScrollTrigger.create({
		trigger: '.scroll-content', // 전체에 대한 progress
		start: 'top top',
		end: 'bottom bottom',
		animation: progressSVG,
		scrub: true,
	});
})();
*/


// svg (Draw SVG 사용)
(function(){
	const circle = document.querySelector('.circleContainer circle');
	const rect = document.querySelector('.rectContainer rect');

	const progressSVG = gsap
		.timeline({ defaults: { drawSVG: 0, ease: 'none' } })
		.from(circle, {})
		.from(rect, {}, '<');

	ScrollTrigger.create({
		trigger: '.scroll-content', // 전체에 대한 progress
		start: 'top top',
		end: 'bottom bottom',
		animation: progressSVG,
		scrub: true,
	});

})();


markers();

/**
 * endTrigger: end 포인트의 타겟 지정
 * 
 * drawSVG: svg 선을 쉽게 그릴 수 있는 라이브러리
 * stroke-dashoffset, stroke-dasharray 를 사용한다.
 */
