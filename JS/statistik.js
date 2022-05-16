let showMoreBtn = document.querySelectorAll(".showMoreBtn");
//let box = document.querySelectorAll(".UtbBox");
//showMoreBtn.addEventListener("click", showMore);

showMoreBtn.forEach(Btn => Btn.addEventListener("click", showMore));

function showMore (event ) {
    let box = event.target.parentElement;
    let div = document.createElement("div");
    console.log(event.target.parentElement);
    if (event.target.innerHTML == "Visa Mer") {
       
        div.style.height = "400px";
        div.style.width = "780px";
        box.appendChild (div);
        event.target.innerHTML = "";
        event.target.innerHTML = "Visa Mindre";
        event.target.style.margin = "357px 25px 0 0";
        event.target.style.padding = "12px 19px";
    }
    else 
    {
        
        //div.remove();
        event.target.style.margin = "0 25px 0 0";
        console.log (event.target.nextElementSibling);
        event.target.nextElementSibling.remove();
        event.target.innerHTML = "Visa Mer";
        //window.location.reload();
        event.target.style.padding = "12px 30px";
    }
}