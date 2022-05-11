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
        let div = document.createElement("div");
        div.classList.add("land");
        div.innerHTML = `
        <div class="blueBox">${name}
            <p>${text} </p>
        </div>
        
        `;
        countryGrid.appendChild(div);

    }

}

countryName();










