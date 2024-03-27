






const l = 8 * 13;

for(let i = 0; i < l; i++){
  let template = /* html */`
    <div class="box" data-index="${i}"></div>
  `
  document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)

}













