gsap.registerPlugin(ScrollTrigger);

const navColor = ['#ebdec1', '#e9aab1', '#92e0d3', '#52becb', '#f17683'];
const section = gsap.utils.toArray('.section').map(o => o.getBoundingClientRect().top);

const nav = document.querySelector('.nav');
const navH = nav.clientHeight;

gsap.utils.toArray('.section').forEach((o, i) => {
	ScrollTrigger.create({
		trigger: o,
		start: () => `top ${nav.offsetHeight}px`,
		end: () => `bottom ${nav.offsetHeight}px`,
		animation: gsap.to(nav, { backgroundColor: navColor[i], immediateRender: false }), // immediateRender: false 꺼야함
		toggleActions: 'restart none none reverse', // enter, leave, enterback, leaveback
		markers: true,
	});
});

gsap.utils.toArray('.nav li a').forEach((o, i) => {
	o.addEventListener('click', () => {
		// const y = document.querySelectorAll('.section')[i].offsetTop;

		const y = ScrollTrigger.getAll()[i].start + nav.scrollHeight;
		scrollbar.scrollTo(0, y, 600);
	});
});

markers();

/**
 * ScrollTrigger는 루프를 실행하고 1개의 트윈을 사용하는 접근 방식을 사용하면 기본적으로 즉시 렌더가 immediateRender: true 로 설정되기 때문에 각 트윈이 시작 값을 작시 기록 하므로 약간의 "글리치"가 발생한다.
 *
 * 스크롤 트리거는 트리거가 생성되는 시점(처음 코드가 읽히는 시점)에 from의 위치를 미리 계산한다.
 * immediateRender: false 로 설정하여, from의 위치를 제어할 수 있다.
 *
 * 2. 클릭 이벤트
 * 스크롤 트리거는 스크롤에 관련된 값들을 전부 계산해놓고 있고, 브라우저 resize 이벤트도 적용되어 있기 때문에 section의 start 값을 가져와서 사용할 수 있다.
 * const y = ScrollTrigger.getAll()[i].start + nav.scrollHeight;
 */
