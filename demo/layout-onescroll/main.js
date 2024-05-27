
const state = {
  isPlaying: true,
};

let currentPageIndex = 1; // 현재페이지
const sections = gsap.utils.toArray(".section");

// callback method
const pages = {
  page01: {
    enter: () => {
      console.log('enter page01');
    },
    leave:() => {
      console.log('leave page01');
    }
  },
  page02: {
    enter: () => {
      console.log('enter page02');
    },
    leave:() => {
      console.log('leave page02');
    }
  },
  page03: {
    enter: () => {
      console.log('enter page03');

      if( !ScrollTrigger.getById("section03") ) { // ScrollTrigger 중복생성 방지
        ScrollTrigger.create({
          trigger: '.depth_wrapper',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
          id: 'section03',
  
          // 스크롤이 첫 지점을 찍었을 때
          onLeaveBack: () => transition(2, 'up'),
  
          // 스크롤이 끝 지점을 찍었을 때
          onLeave:() => transition(4, 'down'),
        });
        markers();  // 위치 중요

      }
      
    },
    leave:() => {
      console.log('leave page03');
    }
  },
  page04: {
    enter: () => {
      console.log('enter page04');
    },
    leave:() => {
      console.log('leave page04');
    }
  }
}

function globalEnter() {
  gsap.to("h2", { opacity: 1, y: 0 })
}

function globalLeave() {
  gsap.to("h2", { opacity: 0, y: 30 })
}


// 전체 화면 전환에 대한 애니메이션
function transition(index, dir) {
  const {page01, page02, page03, page04} = pages;
  currentPageIndex = index;

  gsap.to('.wrapper', {
    y: -innerHeight * (index-1),
    duration: 1.5,
    ease: 'expo.inOut',
    onStart() {
      globalLeave();
      // leave callback
      switch ( dir === 'up' ? index + 1 : index - 1 ) {
        case 1: page01.leave(); break;
        case 2: page02.leave(); break;
        case 3: page03.leave(); break;
        case 4: page04.leave(); break;
      }
    },
    onComplete() {
      state.isPlaying = true;
      globalEnter();
      
      // enter callback
      switch (index) {
        case 1: page01.enter(); break;
        case 2: page02.enter(); break;
        case 3: page03.enter(); break;
        case 4: page04.enter(); break;
      }

    }
  })
}

function handleWheel(e) {
  if ( !state.isPlaying ) return;  
  if ( currentPageIndex === 3 ) return; // section03 예외처리
  
  const direction = e.deltaY < 0 ? 'up' : 'down';

  if (direction === 'up') {

    if (currentPageIndex <= 1) return;

    state.isPlaying = false;
    --currentPageIndex;

  } else {

    if (currentPageIndex >= sections.length) return;

    state.isPlaying = false;
    ++currentPageIndex;

  }

  transition(currentPageIndex, direction);
}

container.addEventListener("wheel", handleWheel)

markers();

/**
 * 휠 이벤트
 * e.deltaY
 * : 휠을 내리면 양수, 올리면 음수
 * : 숫자는 휠의 세기
 */
