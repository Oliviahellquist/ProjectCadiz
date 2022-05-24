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

function getFieldById(Id){
    let field = FIELDS.find(fields => {
        return fields.id == Id
    });
    return field;
}


function programmeName(){
    let programmeGrid = document.getElementById("utbBoxContainer");
    let programmes = getAllProgrammes();


    for (let i = 0; i < programmes.length; i++) {

        let name = programmes[i].name;
        let universityID = programmes[i].universityID;
        let uni = getUniversitiById(universityID);
        let level = getLevel(programmes[i].level);
        let subjectID = programmes[i].subjectID;
        let field = getFieldById(subjectID);

        let countryInfo;
        let programCountry;
        let programField;
        let programLevel;
//Country name
        for ( let university of UNIVERSITIES){
            if ( programmes[i].universityID == university.id){
                for( let city of CITIES){
                    if( university.cityID == city.id){
                        for ( let country of COUNTRIES){
                            if ( city.countryID == country.id){
                                countryInfo = country.name
                                programCountry = country.id
                                programField = field.id
                                programLevel = level
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

//Field name
    

       
        let div = document.createElement("div");
        div.className = `utbBox c-${programCountry} utbBox f-${programField} utbBox l-${programLevel}` ;
       
        //div.dataset.country = programmes[i].countryID
        //div.setAttribute("country", programCountry)
        //console.log(programCountry)
        // dataset ger egna attrebut 
        div.innerHTML = `
        <h1 class="title">${name}</h1>
        <h4>${level},(${field.name})</h4>
        <h4>${uni.name}, ${cityInfo}, ${countryInfo}</h4>
        <div id="infoText">${""} 
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
    countryGrid.innerHTML = ""

  
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
            // gemnfrö dataset country, med country id i knappen, sedan tar bort elementet  
            if (!element[i].classList.contains(`c-${id}`)){
        
                element[i].remove()
            }

        }

        });
    } 
}



function getAllFields() {
    const allFields = [];

    for (let i = 0; i < FIELDS.length; i++) {
        allFields.push(FIELDS[i])
    }
    return allFields; 
}

function fieldsName(){
    let countryGrid = document.getElementById("wrapper2");
    let fields = getAllFields();
    countryGrid.innerHTML = ""

  
    for (let i = 0; i < fields.length; i++) {
        let name = fields[i].name;
       
        let div = document.createElement("div");
        div.classList.add("filterSection");
        div.innerHTML = `
        <button id="${fields[i].id}" class="btn">${name}</button>
        `;
    
        countryGrid.appendChild(div);
        document.getElementById(fields[i].id).addEventListener("click",function(event){
        let id = event.target.id 
        let programmeGrid = document.getElementById("utbBoxContainer");
        programmeGrid.innerHTML = "";
        programmeName()
        var element = document.querySelectorAll(".utbBox")
        for (let i = 0; i < element.length; i++) { 
           
            // gemnfrö dataset country, med field id i knappen, sedan tar bort elementet  
            if (!element[i].classList.contains(`f-${id}`)){
        
                element[i].remove()
            }

        }

        });
    } 
}
fieldsName();



/*
function levelName(){
    let levelGrid = document.getElementById("wrapper3");
  
    for (let i = 0; i < LEVELS.length; i++) {
        
       
        let div = document.createElement("div");
        div.classList.add("filterSection3");
        div.innerHTML = `
        <button class="btn">${LEVELS[i]} </button>
         `;
     
        levelGrid.appendChild(div);
       
    }
}
*/
function getAllLevels() {
    const allLevels = [];

    for (let i = 0; i < LEVELS.length; i++) {
        allLevels.push(LEVELS[i])
    }
    return allLevels; 
}

function levelName(){
    let countryGrid = document.getElementById("wrapper3");
    let levels = getAllLevels();
    countryGrid.innerHTML = ""

    
    for (let i = 0; i < levels.length; i++) {
        let name = LEVELS[i];
       
        let div = document.createElement("div");
        div.classList.add("filterSection");
        div.innerHTML = `
        <button id="${levels[i]}" class="btn">${name}</button>
        `;
    
        countryGrid.appendChild(div);
        document.getElementById(levels[i]).addEventListener("click",function(event){
        let id = event.target.id 
        let programmeGrid = document.getElementById("utbBoxContainer");
        programmeGrid.innerHTML = "";
        programmeName()
        var element = document.querySelectorAll(".utbBox")
        for (let i = 0; i < element.length; i++) { 
           
            // gemnfrö dataset country, med field id i knappen, sedan tar bort elementet  
            if (!element[i].classList.contains(`l-${id}`)){
        
                element[i].remove()
            }

        }

        });
    } 
}
levelName();




//dirketkod

//levelName();
countryName();
programmeName();

let btnClear = document.querySelector(".btnClear")
let result = document.getElementById("utbBoxContainer")
 btnClear.addEventListener("click", function(){result.innerHTML=""; programmeName()});


