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
//Country name
        for ( let university of UNIVERSITIES){
            if ( programmes[i].universityID == university.id){
                for( let city of CITIES){
                    if( university.cityID == city.id){
                        for ( let country of COUNTRIES){
                            if ( city.countryID == country.id){
                                countryInfo = country.name
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
        div.classList.add("utbBox");
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




/*

//a function that restores the website to its original
function rensaClick() {
    document.getElementById("filterSectionName").value = "";
    document.getElementById("filterSectionField").value = "";
    document.getElementById("filterSectionLevel").value = "";
    programmeName();
}*/ 


