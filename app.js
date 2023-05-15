const bar = document.querySelector('.sub-bar')
const ul = document.querySelector('.ul');
console.log(bar);

bar.addEventListener('click',() => {
  bar.classList.toggle('active')
  ul.classList.toggle('active')
})