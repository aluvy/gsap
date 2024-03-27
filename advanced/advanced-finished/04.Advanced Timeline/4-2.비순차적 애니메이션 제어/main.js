
const $ = node => document.querySelector(node);






const tl = gsap.timeline({
  defaults:{
    scale:0,
    opacity:0,
    duration:1
  }
});



tl
  .add('orange')
  .from('.tiger[data-name="a0"]',{})
  .addPause()

  .add('green')
  .from('.tiger[data-name="a1"]',{y:100,rotation:360})
  .addPause()

  .add('pink')
  .from('.tiger[data-name="a2"]',{y:-100,rotation:360})
  .addPause()

  .add('blue')
  .from('.tiger[data-name="a3"]',{scale:2,rotation:-360})



  

  const prev = $('.prev');
  const next = $('.next');



prev.addEventListener('click',()=>tl.reverse())

next.addEventListener('click',()=>tl.play())


// const getLabelsArray = timeline => Object.keys(timeline.labels).map((v)=> ({
//   name : v,
//   time : timeline.labels[v]
// })).sort((a,b)=> a.time - b.time);


Object.keys(tl.labels).forEach((label,index)=>{
  
  const template = /* html */ `
    <div class="dot" data-label="${label}"></div>
  `

  $('.dotNav').insertAdjacentHTML('beforeend',template)


  gsap.utils.toArray('.dot')[index].addEventListener('click',(e)=>{
      const label = e.target.dataset.label;

      // tl.play(label)
      gsap.to(tl,{time:index + 1})

  })

})




// Object.keys(tl.labels).forEach
































