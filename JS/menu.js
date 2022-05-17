const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const toTop = document.querySelector(".to-top");
 window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
         toTop.classList.add("active");
    } else {
         toTop.classList.remove("active");
    }
})