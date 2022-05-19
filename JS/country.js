//Array of all countries
function getAllCountries() {
    const allCountries = [];
  
    for (let i = 0; i < COUNTRIES.length; i++) {
        allCountries.push(COUNTRIES[i])
    }
    return allCountries;
}


function renderCountry(){
    let countryTitle = document.getElementById("title");
    let countries = getAllCountries();
  
    let nameId = window.sessionStorage.getItem("land"); 

    let country = countries.find(country => {
    // Om det nuvarande landet vi är på är detsamma som det undansparade
        if (country.id == nameId) {
       // ... så har vi hittat rätt!
            return true;
        }
        return false;
    });
    
    let div = document.createElement("div");
    div.classList.add("name");
    div.innerHTML=`
    <h1>${country.name}</h1>
    `;
  
    countryTitle.appendChild(div);
}

function renderCountryInfo(){
    let countryInfo = document.getElementById("article");
    let countriesInfo = getAllCountries();
  
    let textId = window.sessionStorage.getItem("land"); 
    let country = countriesInfo.find(country => {
        // Om det nuvarande landet vi är på är detsamma som det undansparade
            if (country.id == textId) {
           // ... så har vi hittat rätt!
                return true;
            }
            return false;
        });
        
    let div = document.createElement("div");
    div.classList.add("info");
    div.innerHTML=`
    <h2>${country.name}</h2>
    <p>${country.text}</p>
   
    `;
    countryInfo.appendChild(div);
}

function renderCountryImage(){
    let countryImage = document.getElementById("article");
    let countriesImage = getAllCountries();
  
    let imageId = window.sessionStorage.getItem("land"); 
    let country = countriesImage.find(country => {
        // Om det nuvarande landet vi är på är detsamma som det undansparade
            if (country.id == imageId) {
           // ... så har vi hittat rätt!
                return true;
            }
            return false;
        });
        
    let div = document.createElement("div");
    div.classList.add("image");
    div.innerHTML=`
    <div id="images" style="background-image: url(../Images/${country.imagesNormal[1]});"></div>
    `;
    countryImage.appendChild(div);
}

function getAllCities() {
    const allCities = [];

    for (let i = 0; i < CITIES.length; i++) {
        allCities.push(CITIES[i])
    }
    return allCities; 
}

//Function to get city Id
function getCityById(Id){
    let cit = CITIES.find(city => {
        return city.id == Id
    });
    return cit;
}

function renderCititesByCountryID(i) {
    let cityArray = [];
    for (let city of DB.CITIES) {
        if (i == city.countryID) {
            cityArray.push(city.name);
        }
    }
    return cityArray
}


//Function to get the cities in the chosen country
function renderCity(){
    let article = document.getElementById("articleCity");
    let cities = getAllCities();
    let nameId = window.sessionStorage.getItem("land"); 
    let city = cities.find(city => {
        if (city.countryID == nameId) {
            return true;
        }
        return false;
    });


    for (let i = 0; i < renderCititesByCountryID(nameId).length; i++) {
        let div = document.createElement("div");
        div.classList.add("cityInfo");
        div.innerHTML = `
        <div class="image" style="background-image: url(../Images/${city.imagesNormal[1]});"></div>
        <div class="textbox">
            <h2 id="title">${city.name}</h2>
            <p>${city.text}</p>
        </div>

        <div id="commentAboutCity">
            <div class="commentStudent">Kommentar från studenter om staden</div>
            <div id ="commentBox"></div>
            <div id="newComment">Nästa Kommentar</div>
        </div>

        <div id="grade"></div>
        
        `;
        article.appendChild(div);
}
}

/* //function random comment city
function getAllComments() {
    const allComments = [];

    for (let i = 0; i < COMMENTS_CITY.length; i++) {
        allComments.push(COMMENTS_CITY[i])
    }
    return allComments; 
}


function cityComment(){
    let studentsComment = document.getElementById("commentBox");
    studentsComment.innerHTML = "";
    let comments = getAllComments();
  
    let number = randomCommentCity(comments)

        let alias = comments[number].alias;
        let text = comments[number].text;
        let date = comments[number].date;
        let div = document.createElement("div");
        div.classList.add("commentCity");

        div.innerHTML = `
        <div id="name">${alias}, ${date.year}-${date.month}-${date.day}
        <p>"${text}"</p>
        `;

        studentsComment.appendChild(div);
        document.getElementById("newComment").addEventListener("click", cityComment);
}

cityComment();



function randomCommentCity(comments){
    let nr = Math.floor(Math.random() * comments.length) + 1;
    console.log(nr);
    return nr

}

*/
//Direktkods

renderCity();
renderCountry();
renderCountryInfo();
renderCountryImage();




