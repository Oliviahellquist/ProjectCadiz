//Array of all programmes
function getAllProgrammes() {
    const allProgrammes = [];

    for (let i = 0; i < PROGRAMMES.length; i++) {
        allProgrammes.push(PROGRAMMES[i])
    }
    return allProgrammes; 
}

//Function to get university Id
function getUniversitiById(Id){
    let uni = UNIVERSITIES.find(university => {
        return university.id == Id
    });
    return uni;
}


function programmeName(){
    let programmeGrid = document.getElementById("utbBoxContainer");
    let programmes = getAllProgrammes();


    for (let i = 0; i < programmes.length; i++) {

        let name = programmes[i].name;
        let universityID = programmes[i].universityID;
        let uni = getUniversitiById(universityID);
        let level = getLevel(programmes[i].level);

        let countryInfo;
        let programCountry;
//Country name
        for ( let university of UNIVERSITIES){
            if ( programmes[i].universityID == university.id){
                for( let city of CITIES){
                    if( university.cityID == city.id){
                        for ( let country of COUNTRIES){
                            if ( city.countryID == country.id){
                                countryInfo = country.name
                                programCountry = country.id
                            }
                        }
                    }
                }
            }
        }

        let cityInfo;
//City name
        for ( let university of UNIVERSITIES){
            if ( programmes[i].universityID == university.id){
                for( let city of CITIES){
                    if( university.cityID == city.id){
                    
                        cityInfo = city.name
    
                    }
                }
            }
        }

        
        let div = document.createElement("div");
        div.className = `utbBox c-${programCountry}`;
        //div.dataset.country = programmes[i].countryID
        //div.setAttribute("country", programCountry)
        //console.log(programCountry)
        // dataset ger egna attrebut 
        div.innerHTML = `
        <h1 class="title">${name}</h1>
        <h4>${level}</h4>
        <div id="infoText">${uni.name}, ${cityInfo}, ${countryInfo}
        <button class="showMoreBtn">Visa Mer</button>
       
        </div>

        `;
        programmeGrid.appendChild(div);
    }

}

//Egentligen kan man göra en loop med det var bara tre objekt... 
function getLevel(resultat){
    if (resultat == 0){
        return "Bachelor"
    }
    if (resultat == 1){
        return "Master"
    }
    if (resultat == 2){
        return "Doctorate"
    }
}

programmeName();

function getAllCountries() {
    const allCountries = [];

    for (let i = 0; i < COUNTRIES.length; i++) {
        allCountries.push(COUNTRIES[i])
    }
    return allCountries; 
}

function countryName(){
    let countryGrid = document.getElementById("wrapper1");
    let countries = getAllCountries();
  
    for (let i = 0; i < countries.length; i++) {
        let name = countries[i].name;
       
        let div = document.createElement("div");
        div.classList.add("filterSection");
        div.innerHTML = `
        <button id="${countries[i].id}" class="btn">${name} </button>
         `;
    
        countryGrid.appendChild(div);
        document.getElementById(countries[i].id).addEventListener("click",function(event){
        let id = event.target.id 
        let programmeGrid = document.getElementById("utbBoxContainer");
        programmeGrid.innerHTML = "";
        programmeName()
        var element = document.querySelectorAll(".utbBox")
        for (let i = 0; i < element.length; i++) { 
            console.log(element[i].country)
            // gemnför dataset country, med country id i knappen, sedan tar bort elementet  
            if (!element[i].classList.contains(`c-${id}`)){
        
                element[i].remove()
            }
        }

        });
    }
}
 countryName();