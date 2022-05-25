//returnerar en array över alla länder 
//den behövs inte jag personligen tyckte det var enklare att komma åt dem såhär

function getAllCountries() {
    const allCountries = [];
  
    for (let i = 0; i < COUNTRIES.length; i++) {
        allCountries.push(COUNTRIES[i])
    }
    return allCountries;
 }
  
 //Info text and the name of the country
 //sakpar en grid med alla länder
 //genom en for loop får vi för varje land ut namnet, "infotexten", idet och en bild
 function countryName(){
    let countryGrid = document.getElementById("grid");
    let countries = getAllCountries();
  
    for (let i = 0; i < countries.length; i++) {
        let name = countries[i].name;
        let text = countries[i].text;
        let id = countries[i].id;
        let images = countries[i].imagesNormal;
       
        //Här skapar vi innerHTML där varje land kommer att innehålla det nedan.
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
        //images[0] därför att vi väljer den första bilden i arrayen av bilder "imagesNormal"

        div.addEventListener("click", function clickOnDivLand(){
        window.sessionStorage.setItem("land", id);
        window.location.href = "country.html"
        });
        //här skapar vi en EventListener alla länder och skapar en funktion som sparar idet på landet i sessionStorage
        //setItem (Save data to sessionStorage) alltså landests Id med nyckeln "land" och värdet "id"
        //window.location.href = "country.html" skickar vidare den sparade informationen alltså landets id till "country.html"
        countryGrid.appendChild(div);
       
    }
  
}

//Direktkod
countryName();











