let sideBarIcon = document.querySelector('.sidebar-icon');
let sideBarMobile = document.querySelector('.mobile-sidebar');
let close = document.querySelector('.close');
let link = document.querySelectorAll('.mobile-link');
sideBarIcon.onclick = function(){
    sideBarMobile.style.display = "block";
}
close.onclick = function(){
    sideBarMobile.style.display = "none";
}

for(let i=0;i<link.length;i++){
    link[i].onclick = function(){
        sideBarMobile.style.display = "none";
    }
}