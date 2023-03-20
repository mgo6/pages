const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logo = document.getElementById("span")

hamburger.addEventListener("click", mobileMenu);
logo.addEventListener("click", view);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
 
function view(){
    
   var logoi = prompt("ENTER YOUR LOGO NAME :  ");
   var up = logoi.toUpperCase();
   document.getElementById("span").innerHTML = (up);
   var newcolor = prompt("SET COLOR : ");
   document.getElementById("span").style.color = (newcolor);
}