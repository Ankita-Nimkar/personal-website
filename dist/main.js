const menuBtn=document.querySelector('.menu-btn')
const hamburgwr=document.querySelector('.menu-btn__burger')
const nav=document.querySelector('.nav')
const menuNav=document.querySelector('.menu-nav')

let showMenu=false;
menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
 if(!showMenu){
  hamburgwr.classList.add('open')
  nav.classList.add('open')
  menuNav.classList.add('open')
showMenu=true;
 }else{
  hamburgwr.classList.remove('open')
  nav.classList.remove('open')
  menuNav.classList.remove('open')
showMenu=false;
 }
}