

const { wrap,toArray,wrapYoyo } = gsap.utils;

gsap.to('.stage',{autoAlpha:1})


// const list = gsap.utils.toArray('h1 > div') 


const split = new SplitText('h1',{type:'chars'})


const tl = gsap.timeline();

const y = wrap([100,-100]);
const c = wrap(['red','blue']);

tl.from(split.chars,{
  y: y,
  opacity:0,
  stagger:{
    each:0.02,
    from:'random'
  },
})
.to(split.chars,{
  x:10,
  y:wrap([0,200,0,200,200,0]),
  color:c,
  stagger:{
    each:0.02,
  }
})




GSDevTools.create()