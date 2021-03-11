const progressBar = document.querySelector('.progress-bar')
window.onscroll = function(){
  //to get the total height of the document you should use scrollHeight on document and subtract the height of the window!
  let bodyScroll = document.body.scrollHeight-window.innerHeight
  let scrollPos = window.scrollY
  let progress = (scrollPos/bodyScroll)*100
  progressBar.style.width = progress+'%'
}
