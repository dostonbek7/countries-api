const body = document.querySelector("body")
const darkMode = document.querySelector("#dark-icon");
const lightMode = document.querySelector("#light-icon");
const bottomBtn = document.querySelector('#bottom-btn');
const overlay = document.querySelector('#overlay');

const modeLocal = localStorage.getItem('mode');
if(modeLocal){
  body.classList.add('dark-mode')
  mode()
}

const toogleBtn = ()=> {
  mode()
  body.classList.toggle("dark-mode");
}

function mode(){
  lightMode.classList.toggle('hidden');
  darkMode.classList.toggle('hidden');
}
darkMode.addEventListener("click",()=>{
  toogleBtn()
  bottomBtn.src = '/image/bottom_icon.svg'
  localStorage.setItem('mode', "dark-mode")
})

lightMode.addEventListener("click",()=>{
   toogleBtn()
  bottomBtn.src = '/image/bottom-icon.svg'
  localStorage.setItem('mode', "")
})