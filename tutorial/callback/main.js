const $ = node => document.querySelector(node);

//  callback -> 나중에 일어나는 일

// onComplete
// onUpdate
// onStart
// onRepeat

gsap.to('.orange', {
	duration: 2.5,
	y: 100,
	onComplete: onComplete,
	onCompleteParams: ['오렌지', 3],
});

function onComplete(color, number) {
	console.log(this);
	console.log(this.targets());

	$('h1').textContent = `${color} 애니메이션 끝`;
	gsap.to(this.targets()[0], { rotation: 360 });
}

class Tiger {
	// static method : 객체 생성 없이 사용할 수 있는 유틸 메서드
	static moveX(target, distance) {
		gsap.to(target, { x: distance });
	}

	constructor(target, name) {
		this.animation = gsap.to(target, {
			x: 100,
			onComplete: this.complete,
			callbackScope: this, //
		});
		this.animation.pause();
		this.name = name;
	}

	// instance method : 객체 생성으로만 사용할 수 있는 메서드
	start() {
		this.animation.play();
	}

	complete() {
		console.log(this);
		// 여기서 this는 Tiger가 아닌 Tween 이 나온다.
		// callbackScope: this 를 설정해 주면 Tiger가 this에 바인딩 된다.
		this.render();
	}

	render() {
		$('h1').textContent = `${this.name} 애니메이션 재생 끝`;
	}
}

const pink = new Tiger('.pink', '핑핑이');
const blue = new Tiger('.blue', '파랑이');
const green = new Tiger('.green', '초록이');

Tiger.moveX('.orange', 300); // 사용 가능
Tiger.render(); // 사용 불가능
