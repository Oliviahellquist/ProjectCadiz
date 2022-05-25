const hamburger = document.querySelector(".hamburger");
//Kommer åt classen i html 
const navMenu = document.querySelector(".nav-menu");
//Kommer åt classen i html 

hamburger.addEventListener("click", () => {
    //adderar en EventListener på classen 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    //Metoden toggle() växlar mellan hide() och show() för de valda elementen. När man klickar synd den 
})

document.querySelectorAll(".nav-link").forEach(n => n.
    //för varje nav-link ska samma sak utföras alltså remove
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    //klickar man en till gång är den inte längre aktiv
}))



