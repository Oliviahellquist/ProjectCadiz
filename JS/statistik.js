let showMoreBtn = document.querySelectorAll(".showMoreBtn");
//let box = document.querySelectorAll(".UtbBox");
//showMoreBtn.addEventListener("click", showMore);

showMoreBtn.forEach(Btn => Btn.addEventListener("click", showMore));

function showMore (event ) {
    let box = event.target.parentElement;
    let div = document.createElement("div");
    console.log(event.target.parentElement);
    if (event.target.innerHTML == "Visa Mer") {
        console.log("ÖPPNAR");
        div.style.height = "400px";
        div.style.width = "780px";
        box.appendChild (div);
        console.log ("Hello");
        event.target.innerHTML = "";
        event.target.innerHTML = "Visa Mindre";
        event.target.style.margin = "357px 0 0 0";
    }
    else 
    {
        console.log ("STÄNGER");
        //div.remove();
        event.target.style.margin = "0 0 0 0";
        console.log (event.target.nextElementSibling);
        event.target.nextElementSibling.remove();
        event.target.innerHTML = "Visa Mer";
        //window.location.reload();
    }
}