const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav-items')

let options = {
  strings: ["and I like solving interesting problems^1000", "and I like to write software that helps other people^1000", "and I like Software Engineering, Competitive Programming and Data Analysis^1500", "and welcome to my website!", ],
  typeSpeed: 40,
  cursorChar: "|",
  backSpeed: 20

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
