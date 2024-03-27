

gsap.from('.stage',{autoAlpha:0})  



gsap.registerEffect({
  name:'text3D',
  extendTimeline:true,
  defaults:{
    deg: 360,
  },
  effect:(target,config)=>{
    const split = new SplitText(target,{type:'chars'});
    gsap.set(split.chars,{transformPerspective:400})

    const tl = gsap.timeline();

    tl.to(split.chars,{
      duration:1.2,
      rotationY:config.deg,
      rotationX:360,
      ease:'back(3)',
      stagger:{
        amount:1
      }
    })

    return tl;

  }
})



const animation = gsap.timeline();

animation.text3D('h1',{deg:500})






GSDevTools.create()
