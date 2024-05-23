const $ = node => document.querySelector(node);
const $$ = nodes => document.querySelectorAll(nodes);

document.addEventListener('DOMContentLoaded', () => {
	setVh();
	window.addEventListener('resize', setVh);

	setDemo__SWP();
	setDemo__SCROLLTRIGGER();
	setDemo__TIMELINE();
	setDemo__MOTIONPATH();
	setDemo__3DTRANSFORM();
	setDemo__STAGGER();
	setDemo__KEYFRAMES();
	setDemo__UTIL();
	setDemo__ETC();

	handleFloatingIframe();
});

const setDemo__SWP = () => {
	setGroup('swp-area', 'ScrollTrigger with Plugin'); // class, title

	const area = $('.demogroup.swp-area ul');
	const item = [
		{
			title: 'Scroll Draw SVG',
			href: './demo/swp-scrolldrawsvg',
			hash: ['scrolltrigger', 'MotionPathPlugin', 'drawSVG', 'getTotalLength()'],
		},
		{
			title: 'Text Animation',
			href: './demo/swp-textanimation',
			hash: ['scrolltrigger', 'splitText plugin', 'resize', 'SplitText.revert()', 'ScrollTrigger.getAll()', 'ScrollTrigger.kill()', 'Throttle & Debounce', 'timer', 'apply()', '애니메이션 성능 이슈'],
		},
		{
			title: 'Video Controls',
			href: './demo/swp-videocontrols',
			hash: ['scrolltrigger', 'SnapPlugin', '객체에 애니메이션 걸기', '스크롤 시 비디오 재생시간 컨트롤', 'canvas', 'ctx', 'drawImage', 'render' ],
		},
	];
	setItem(area, item);

}

const setDemo__SCROLLTRIGGER = () => {
	setGroup('scrolltrigger-area', 'ScrollTrigger'); // class, title

	const area = $('.demogroup.scrolltrigger-area ul');
	const item = [
		{
			title: 'practice advanced - Light House',
			href: './demo/scrolltrigger-practiceAdvanced',
			hash: ['scrolltrigger', 'onUpdate(self)', 'scrolltrigger progress', 'timeline add()', 'endTrigger', 'end: max'],
		},
		{
			title: 'scroll animation toggle',
			href: './demo/scrolltrigger-animationToggle',
			hash: ['scrolltrigger', 'scroll active navigation', 'animation toggle 여러가지 방법', 'toggleActions', 'onToggle(self)'],
		},
		{
			title: 'scroll based progress',
			href: './demo/scrolltrigger-scrollbasedprogress',
			hash: ['scrolltrigger', 'endTrigger', 'progress', 'onUpdate', 'once: true', 'ScrollTrigger.getById(id)', 'svg 애니메이션 처리', 'getTotalLength()', 'strokeDashoffset', 'strokeDasharray', 'drawSVG'],
		},
		{
			title: 'Navigation Loop',
			href: './demo/scrolltrigger-NavigationLoop',
			hash: ['scrolltrigger', 'NavigationLoop', 'immediateRenter: false', '글리치', 'function based value', '$0.getBoundingClientRect()', 'ScrollTrigger.getAll()'],
		},
		{
			title: 'Fast Scroll End',
			href: './demo/scrolltrigger-FastScrollEnd',
			hash: ['scrolltrigger', 'FastScrollEnd', 'goToTop', 'toggleActions', 'toggleClass', 'scrollTo', 'easing js'],
		},
		{
			title: 'Prevent Scroll',
			href: './demo/scrolltrigger-PreventScroll',
			hash: ['scrolltrigger', 'tween, timeline callback', 'onComplete()', 'eventCallback()'],
		},
		{
			title: 'callback',
			href: './demo/scrolltrigger-callback',
			hash: ['scrolltrigger', 'callback', 'onEnter', 'onLeave', 'onEnterBack', 'onLeaveBack', 'onToggle (direction)', 'onRefresh', 'onUpdate (progress)'],
		},
		{
			title: 'smooth Scrollbar',
			href: './demo/scrolltrigger-proxy',
			hash: ['부드러운 스크롤', 'scrolltrigger', 'scrollerProxy', 'gsap.registerPlugin()', 'smooth scrollbar', 'scrollbar.addListener()', 'proxy', 'hijacking', '다중스크롤'],
		},
		{
			title: 'gsap ScrollSmoother',
			href: './demo/scrolltrigger-scrollsmoother',
			hash: ['scrolltrigger', 'scrollsmoother'],
		},
		{
			title: 'gsap ScrollSmoother test',
			href: './demo/scrollsmoother-test',
			hash: ['scrolltrigger', 'scrollsmoother'],
		},
		{
			title: 'practice',
			href: './demo/scrolltrigger-practice',
			hash: ['scrolltrigger', 'scrollWidth', 'loading', 'imagesLoaded'],
		},
		{
			title: 'parallax',
			href: './demo/scrolltrigger-parallax',
			hash: ['scrolltrigger', 'parallax', '시차', 'timeline in scrollTrigger'],
		},
		{
			title: 'basic',
			href: './demo/scrolltrigger-basic',
			hash: ['scrolltrigger', 'trigger', 'start', 'end', 'markers', 'id', 'animation', 'toggleActions'],
		},
		{
			title: 'basic - scrub',
			href: './demo/scrolltrigger-scrub',
			hash: ['scrolltrigger', 'onScrubComplete', 'gsap.utils.toArray()'],
		},
		{
			title: 'basic - pin',
			href: './demo/scrolltrigger-pin',
			hash: ['scrolltrigger', 'pin', 'pinType', 'pinSpacing', 'scrub'],
		},
	];
	setItem(area, item);
};

const setDemo__TIMELINE = () => {
	setGroup('timeline-area', 'Timeline'); // class, title

	const area = $('.demogroup.timeline-area ul');
	const item = [
		{
			title: 'TOYSTORY',
			href: './demo/timeline-toystory/',
			hash: ['timeline'],
		},
		{
			title: '함수 중심의 타임라인 설계',
			href: './demo/timeline-master2/',
			hash: ['master timeline2', 'TextPlugin', '배열 구조 분해 할당'],
		},
		{
			title: '타임라인 효율적으로 관리하기',
			href: './demo/timeline-master/',
			hash: ['master timeline', 'timeline.add()'],
		},
		{
			title: 'timeline addlabel',
			href: './demo/timeline-addlabel/',
			hash: ['add()', 'addPause()', 'timeline.play()', 'timeline.reverse()'],
		},
		{
			title: 'Van Cleef & Arpels',
			href: './demo/timeline-van-cleef-arpels/',
			hash: ['autoAlpha'],
		},
		{
			title: 'planet',
			href: './demo/timeline-planet/',
			hash: ['autoAlpha', 'timeline({defaults})'],
		},
		{
			title: 'timeline Visualizer',
			href: './demo/timeline-visualizer/',
			hash: ['timeline callback', 'eventCallback', 'draggable', 'drag', 'timeline.time()'],
		},
		{
			title: 'slide animation',
			href: './demo/timeline-slide/',
			hash: ['GSDevTools', 'gsap.registerEffect', 'SplitText', 'timeline.eventCallback'],
		},
	];
	setItem(area, item);
};

const setDemo__MOTIONPATH = () => {
	setGroup('motionpath-area', 'MotionPath'); // class, title

	const area = $('.demogroup.motionpath-area ul');
	const item = [
		{
			title: 'Tiger',
			href: './demo/motionpath-tiger/',
			hash: ['svg', 'motionPath', 'onUpdate', 'onComplete', 'tween callback', 'timeline.paused()', 'timeline.progress()', 'timeline.restart()', 'gsap.to(timeline, {})'],
		},
		{
			title: 'Map',
			href: './demo/motionpath-map/',
			hash: ['timeline', 'timeline.pause()', 'strokeDashoffset', 'path', 'align', 'alignOrigin', 'svg.getTotalLength()'],
		},
	];
	setItem(area, item);
};

const setDemo__3DTRANSFORM = () => {
	setGroup('transform-area', '3D Transform'); // class, title

	const area = $('.demogroup.transform-area ul');
	const item = [
		{
			title: '3D transform - box',
			href: './demo/3D-transform-perspective-box/',
			hash: ['3D', 'transformPerspective', 'transformOrigin', 'rotationY'],
		},
		{
			title: '3D transform - text',
			href: './demo/3D-transform-perspective-text/',
			hash: ['autoAlpha', 'registerEffect', 'extendTimeline', 'timeline', 'SplitText', 'transformPerspective', 'stagger', 'amount', 'rotation'],
		},
		{
			title: '3D text',
			href: './demo/3D-text/',
			hash: ['stagger 심화', '타임라인 재생시간 컨트롤', '< 0.5', 'rotationX', 'rotationY', 'transformOrigin', 'stagger.repeatDelay', 'stagger repeatDelay = stagger * (numberOfTargets - 1) + pause;'],
		},
	];
	setItem(area, item);
};

const setDemo__STAGGER = () => {
	setGroup('stagger-area', 'Stagger'); // class, title

	const area = $('.demogroup.stagger-area ul');
	const item = [
		{
			title: 'stagger space',
			href: './demo/stagger-space/',
			hash: ['insertAdjacentHTML'],
		},
		{
			title: 'stagger ease',
			href: './demo/stagger-ease/',
			hash: ['each', 'amount'],
		},
		{
			title: './demo/stagger-ease-interstellar/',
			href: 'stagger interstellar',
			hash: ['timeline', 'gsap.utils.distribute()', 'base', 'amount', 'SplitText', 'gsap.utils.wrap([])', 'delay'],
		},
		{
			title: 'stagger repeat',
			href: './demo/stagger-repeat/',
			hash: ['each', 'repeat', 'yoyo', 'grid'],
		},
		{
			title: 'stagger callback',
			href: './demo/stagger-callback/',
			hash: ['tween callback', 'stagger callback', 'onComplete', 'onStart', 'SplitText', 'stagger.from:random', 'gsap attr plugin', 'startTime'],
		},
	];
	setItem(area, item);
};

const setDemo__KEYFRAMES = () => {
	setGroup('keyframes-area', 'KeyFrames'); // class, title

	const area = $('.demogroup.keyframes-area ul');
	const item = [
		{
			title: 'keyframes1',
			href: './demo/keyframes1/',
			hash: ['among us', 'timeline', 'autoAlpha', 'keyframes', 'stagger', 'amount', 'each'],
		},
		{
			title: 'keyframes2',
			href: './demo/keyframes2/',
			hash: ['among us', 'timeline', 'autoAlpha', 'keyframes', 'easeEach', 'amount'],
		},
		{
			title: 'keyframes3',
			href: './demo/keyframes3/',
			hash: ['among us', 'timeline', 'autoAlpha', 'keyframes', 'amount'],
		},
	];
	setItem(area, item);
};

const setDemo__UTIL = () => {
	setGroup('util-area', 'Util'); // class, title

	const area = $('.demogroup.util-area ul');
	const item = [
		{
			title: 'gsap.utils.mapRange()',
			href: './demo/util-maprange/',
			hash: ['gsap.utils.mapRange()', '중복된 트윈을 지속적으로 만들어야 할 때는 gsap.quickTo() 사용하는게 좋다', 'x-ray 효과'],
		},
		{
			title: 'gsap.utils.getUnit()',
			href: './demo/util-getunit/',
			hash: ['gsap.utils.getUnit()', '단위가 반환된다'],
		},
		{
			title: 'gsap.utils.wrap()',
			href: './demo/util-wrap/',
			hash: ['gsap.utils.wrap([])', 'stagger', 'each', 'timeline', 'SplitText'],
		},
		{
			title: 'gsap.utils.distribute()',
			href: './demo/util-distribute/',
			hash: ['gsap.utils.distribute({}): 값을 알아서 분배해준다.', 'base', 'amount', 'ease', 'stagger', 'each'],
		},
		{
			title: 'gsap.registerEffect()',
			href: './demo/util-register-effect/',
			hash: ['gsap.registerPlugin()', 'gsap.registerEffect({})', 'extendTimeline', 'SplitText', 'stagger', 'each', 'gsap.utils.wrap()'],
		},
		{
			title: 'css plugin: clearProps',
			href: './demo/util-css-plugin/',
			hash: ['gsap.utils.toArray()', 'clearProps'],
		},
	];
	setItem(area, item);
};

const setDemo__ETC = () => {
	setGroup('etc-area', 'ETC'); // class, title

	const area = $('.demogroup.etc-area ul');
	const item = [
		{
			title: 'gsap.delayedCall()',
			href: './demo/etc-delayedcall/',
			hash: ['몇 초 뒤에 다른 함수를 호출해야 될 경우', 'setTimeout과 유사하지만 다름', 'addPause()'],
		},
		{
			title: 'textplugin',
			href: './demo/etc-textplugin/',
			hash: ['delayedCall()', 'array.push(array.shift())'],
		},
		{
			title: 'callback',
			href: './demo/etc-callback/',
			hash: ['onComplete', 'onCompleteParams', 'static method', 'class'],
		},
		{
			title: 'runtime rendering - immediateRender',
			href: './demo/etc-immediateRender/',
			hash: ['timeline', 'immediateRender: false'],
		},
		{
			title: 'function based value',
			href: './demo/etc-function-based-value/',
			hash: ['함수 기반의 값', 'stagger'],
		},
		// {
		//   title: "title",
		//   href: "href",
		//   hash: ["hash"],
		// },
	];
	setItem(area, item);
};

const setGroup = (area, ttl) => {
	// class, title
	const demoArea = $('.demo-area');
	const HTML = `<div class="demogroup ${area}"><h3>${ttl}</h3><ul></ul></div>`;
	demoArea.insertAdjacentHTML('beforeend', HTML);
};

const setItem = (area, item) => {
	// dom, Object
	item.forEach(a => {
		const HTML = `
      <li>
        <a href="${a.href}" target="_blank" title="새 창 열림">
          <strong>${a.title}</strong>
          <p class="hash">${a.hash.map(hash => `<span>${hash}</span>`).join('')}</p>
        </a>
      </li>
    `;
		area.insertAdjacentHTML('beforeend', HTML);
	});
};

const handleFloatingIframe = () => {
	const float = $('#float');
	const iframe = $('#float iframe');
	const a = Array.from($$('.demogroup a'));

	a.forEach(elem => {
		elem.addEventListener('mouseenter', e => {
			const url = elem.getAttribute('href');
			if (url === 'href') return;
			iframe.setAttribute('src', url);
			float.style.display = 'block';
		});

		elem.addEventListener('mousemove', e => {
			const gap = 20;
			const screenX = e.x + gap;
			const screenY = e.y + gap;

			float.style.left = `${screenX}px`;
			float.style.top = `${screenY}px`;
		});

		elem.addEventListener('mouseleave', () => {
			float.style.display = 'none';
		});
	});
};

const setVh = () => {
	document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
};

/**
 * notion
 * https://productive-printer-b81.notion.site/GSAP-Basic-4c37387fe8254db4a7d14c883f8baa2d
 * https://productive-printer-b81.notion.site/GSAP-Advanced-249a1a7075db43b48ef6f62896e79c46
 * https://productive-printer-b81.notion.site/GSAP-ScrollTrigger-1fc38d08c3c045a1b8e6362660d32e72
 */
