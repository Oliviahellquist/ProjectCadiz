
//Array of all universities
function getAllUniversities() {
    const allUniversities = [];

    for (let i = 0; i < UNIVERSITIES.length; i++) {
        allUniversities.push(UNIVERSITIES[i])
    }
    return allUniversities; 
}

//Array of all programmes
function getAllProgrammes() {
    const allProgrammes = [];

    for (let i = 0; i < PROGRAMMES.length; i++) {
        allProgrammes.push(PROGRAMMES[i])
    }
    return allProgrammes; 
}


//Array of all cities
function getAllCities() {
    const allCities = [];

    for (let i = 0; i < CITIES.length; i++) {
        allCities.push(CITIES[i])
    }
    return allCities; 
}


//Function to get country Id

function getCountryById(idCountry){
    let cou = COUNTRIES.find(country => {
        return country.id == idCountry
    });
    return cou;
}


//Function to get university Id
function getUniversitiById(Id){
    let uni = UNIVERSITIES.find(university => {
        return university.id == Id
    });
    return uni;
}

//Function to get city Id
function getCityById(idCity){
    let cit = CITIES.find(city => {
        return city.id == idCity
    });
    return cit;
}


function programmeName(){
    let programmeGrid = document.getElementById("utbBoxContainer");
    let programmes = getAllProgrammes();
    let university = getAllUniversities();
    let cities = getAllCities();

    for (let i = 0; i < programmes.length; i++) {

        let name = programmes[i].name;

        let universityID = programmes[i].universityID;
        let uni = getUniversitiById(universityID);

        let cityID = university[i].cityID;
        let cit = getCityById(cityID);

        let countryID = cities[i].countryID;
        let cou = getCountryById(countryID);

        let level = programmes[i].level;
      
        let div = document.createElement("div");
        div.classList.add("utbBox");
        div.innerHTML = `
        <h1 class="title">${name}</h1>
        <h4>${level}</h4>
        <div id="infoText">${uni.name}, ${cit.name}, ${cou.name}
        <button class="showMoreBtn">Visa Mer</button>
       
        </div>

        `;
        programmeGrid.appendChild(div);
    }

}
programmeName();

