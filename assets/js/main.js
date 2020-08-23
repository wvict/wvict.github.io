const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav-items')

let options = {
  strings: ["and I like solving interesting problems^1000", "and I like to create things that help other people using software^1000", "and I like Computer Science, Physics and Maths 💻 &#128301; &#128218; ^1500", "Welcome to my website!", ],
  typeSpeed: 50,
  cursorChar: "|",
  backSpeed: 30

}

let typed = new Typed(".type", options)


window.onscroll = function(){
  let position = window.scrollY
  if(position != 0){
    nav.style.backgroundColor = 'rgba(0,0,0,.9)'
    for(let i=0;i<navItems.length;i++){
        navItems[i].style.fontSize = '18px'
    }

  }
  else{
    nav.style.backgroundColor = 'transparent'
    for(let i=0;i<navItems.length;i++){
        navItems[i].style.fontSize = '20px'
    }
  }
}

const item = document.querySelectorAll('.item')
const videos = document.querySelector('.videos')
