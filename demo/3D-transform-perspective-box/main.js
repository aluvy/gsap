GSDevTools.create();

// 단위 없이, transform 자체에 perspective 심기
// CSS속성 { transform: perspective(600) } 과 동일하다.
gsap.set(".center .box, .bottom .box", { transformPerspective: 600 });

gsap.to(".box", {
  rotationY: 360,
  duration: 5,
  ease: "none", // == linear
  repeat: -1,
  yoyo: true,
});
gsap.to(".center .box", { transformOrigin: "50% 50% -400" }); // x, y, z

/**
 * 3D Transform
 * 원근감
 * css 애니메이션에서 3d를 시각적으로 보여주려면 perspective 속성이 필요합니다.
 * perspective속성은 누구에게 주느냐에 따라 소실점이 다르게 잡혀 전혀 다른 애니메이션을 생성합니다.
 *
 * 1.
 * 부모 요소에 원근감 부여 : CSS 속성 .stage { perspective: 600px; }
 * ==> 소실점이 부모에 맞춰져있어서 모두 동일한 사이즈로 돌지 않는다.
 *
 * 2.
 * 자식들에게 perspective 주는 법 (CSS에서 자식에게 주면 안됨)
 * perspective를 transform안에 심어줘야 하는데, 이 역할을 gsap에서 해줄 수 있다.
 * gsap.set(".box", { transformPerspective: 600 });
 * 단위 없이, transform 자체에 perspective 심기
 * ==> 모두 동일한 사이즈로 회전함 (소실점이 모두 동일해 짐)
 * CSS속성 { transform: perspective(600) } 과 동일하다.
 *
 * 3.
 * transformOrigin: "50% 50% -400", // x, y, z
 */
