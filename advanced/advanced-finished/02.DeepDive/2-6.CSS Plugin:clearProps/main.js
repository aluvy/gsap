

const $ = node => document.querySelector(node);




// const boxes = document.querySelectorAll('.box');
// const boxArray = Array.prototype.slice.call(boxes);
const boxes = gsap.utils.toArray('.box');

boxes.forEach((item)=>{
  
  item.addEventListener('click',(e)=>{
    gsap.to(e.currentTarget,{
      backgroundColor:'gray',
      width:'300px',
      x:200,
      scale:0.3,
   
    })
  })
})


$('#reset').addEventListener('click',()=>{
  gsap.set('.box',{clearProps:'scale'})
})



