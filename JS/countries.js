function getAllCountries() {
    const allCountries = [];
  
    for (let i = 0; i < COUNTRIES.length; i++) {
        allCountries.push(COUNTRIES[i])
    }
    return allCountries;
 }
  
 //Info text and the name of the country
 function countryName(){
    let countryGrid = document.getElementById("grid");
    let countries = getAllCountries();
  
    for (let i = 0; i < countries.length; i++) {
        let name = countries[i].name;
        let text = countries[i].text;
        let id = countries[i].id;
        let images = countries[i].imagesNormal;
       
        let div = document.createElement("div");
        div.classList.add("land");
        div.innerHTML = `
        <a id="images" style="background-image: url(../Images/${images[0]});">
            <div class="blueBox">
                <h3>${name}</h3>
                <h6>${text}</h6>
            </div>
        </a>
        
        `;
    
        div.addEventListener("click", function clickOnDivLand(){
        window.sessionStorage.setItem("land", id);
        window.location.href = "country.html"
        });


        countryGrid.appendChild(div);
       
    }
  
}
countryName();

/*
function getImages(){
    let image = document.getElementById("grid");
    let countries = getAllCountries();

    for (let i = 0; i < countries.length; i++) {
        let images = countries[0].imagesNormal;
       
        let div = document.createElement("img");
        div.classList.add("img");
        div.innerHTML.src = `../Images${images};
        `;
    }
}

getImages();

*/