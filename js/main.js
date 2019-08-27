const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav-items')

let options = {
  strings: ["I develop web applications with the purpose of enabling people to use the internet - one of the most impressive human creations - to do great things!"],
  typeSpeed: 45,
  cursorChar: "|"
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
