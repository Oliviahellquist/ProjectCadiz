//Array of all countries
//Återigen har jag tyckt att det varit enklare att få åtkomst...
//returnerar en array över alla länder
function getAllCountries() {
    const allCountries = [];
  
    for (let i = 0; i < COUNTRIES.length; i++) {
        allCountries.push(COUNTRIES[i])
    }
    return allCountries;
}

//tar det landet som man klickade på från countries.HTML
function renderCountry(){
    let countryTitle = document.getElementById("title");
    let countries = getAllCountries();
    //deklarerar countries med arrayen över alla städer
    let nameId = window.sessionStorage.getItem("land"); 
    // window.sessionStorage.getItem() Get saved data from sessionStorage
    let country = countries.find(country => {
    //Find hittar den FÖRSTA saken som matchar din jämförelse 
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
    //Här skapas titeln för det valda landet
}


//samma procedur som innan
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
    //här skapas infotexten
}

//går igenom alla länder och tar den första bilden eller den andra [1] bilden i imagesNormal
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
    //här skapas bilden till de valda landet
}

//En array över alla städer
function getAllCities() {
    const allCities = [];

    for (let i = 0; i < CITIES.length; i++) {
        allCities.push(CITIES[i])
    }
    return allCities; 
}

//functionen går igenom de städer som ingår i landet
function renderCity(){
    let article = document.getElementById("articleCity");
    let cities = getAllCities();
    
    let nameId = window.sessionStorage.getItem("land"); 
    let city = cities.filter(city => {
        //Filter hittar ALLT som matchar din jämförelse alltså istället för att ta det första som find gör tar filter allt som matchar 
        if (city.countryID == nameId) {
            return true;
        }
        return false;
    });
    //alltså alla städer som ingår i det valda landet

    //här skapas alla länder i innerHTML
    for (let i = 0; i < city.length; i++){
        let div = document.createElement("div");
        div.classList.add("cityInfo");
        div.innerHTML = `
        <div class="image" style="background-image: url(../Images/${city[i].imagesNormal[1]});"></div>
        <div class="textbox">
            <h2 id="title">${city[i].name}</h2>
            <p>${city[i].text}</p>
        </div>

        <div class="commentAboutCity">
            <div class="commentStudent">Kommentar från studenter om staden</div>
            <div class="commentBox">
                <h4>${renderCommentCityName(city[i].id)[0]} - ${renderCommentCityYear(city[i].id)[0]}</h4>
                <p>"${renderCommentCity(city[i].id)[0]}"</p>
                
            </div>
            
        </div>
        
        <div id="gradeWrapper">
            <h2 id="gradeTitle">Betyg</h2>
            <div class="grade">
                <div id="first">
                    <div>Antal Soldagar</div>
                    <div>${city[i].sun}/365</div>
                </div>
                <div id="second">
                    <div>Maten</div>
                    <div>${renderFoodGrade(city[i].id)}/5</div>
                </div>
                <div id="third">
                    <div>Boende</div>
                    <div>${renderHousingGrade(city[i].id)}/5</div>
                </div>
                <div id="fourth">
                    <div>Uteliv</div>
                    <div>${renderFunGrade(city[i].id)}/5</div>
                </div>
            </div>
        </div>
      
        `;
        article.appendChild(div);  
        //functionerna renderFoodGrade(), renderHousingGrade(), renderFunGrade(), renderCommentCity() anropas i innerHTML
    } 

}


//food grade
function renderFoodGrade(i) {
    let foodGradeArray = [];
    for (let grade of DB.COMMENTS_CITY) {
        if (i == grade.cityID) {
            foodGradeArray.push(grade.stars.food);
        }
    }
    let foodGrade = foodGradeArray.reduce((a, b) => a + b, 0) / foodGradeArray.length;
    if (isNaN(foodGrade) == true){
        return "Inget omdöme"
    }
    return gradeAvg(foodGradeArray)
}

//house grade
function renderHousingGrade(i) {
    let houseGradeArray = [];
    for (let grade of DB.COMMENTS_CITY) {
        if (i == grade.cityID) {
            houseGradeArray.push(grade.stars.accomodation);
        }
    }
    let housingGrade = houseGradeArray.reduce((a, b) => a + b, 0) / houseGradeArray.length;
    if (isNaN(housingGrade) == true){
        return "Inget omdöme"
    }
    
    return gradeAvg(houseGradeArray)
}

//function som tar emot parameter som ska motsvara cityid som returnar 
//medelvärde av alla nöjes/fritids betyg i COMMENTS_CITY med samma cityid.

function renderFunGrade(i) {
    let funGradeArray = [];
    for (let grade of DB.COMMENTS_CITY) {
        if (i == grade.cityID) {
            funGradeArray.push(grade.stars.out);
        }
    }
    let funGrade = funGradeArray.reduce((a, b) => a + b, 0) / funGradeArray.length;
    if (isNaN(funGrade) == true){
        return "Inget omdöme"
        //om funGrade är densamma som NaN returneras "Inget omdöme"
    }

    return gradeAvg(funGradeArray)
}


function gradeAvg(a) {
    var i = 0, sum = 0, arrayLength = a.length;
    while (i < arrayLength) {
        sum = sum + a[i++];
}
    return roundString(sum / arrayLength, 0);
}

function roundString(numberWithManyDecimals, decimals){
    var rounded = Math.pow(10, decimals);
    //Funktionen Math.pow() returnerar basen till exponentpotensen,
    //Basen 10, decimals används för att höja basen
    return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
    //.toFixed avrundas till 0 decimaler 
}



function renderCommentCity(i){
    let cityComment = [];
    //deklarerar en tom array
    //om i är densamma som cityidet 
    for (let comment of DB.COMMENTS_CITY) {
        if (i == comment.cityID) {
            cityComment.push(comment.text);  
            //Metoden push() lägger till ett eller flera element i slutet av en array och returnerar den nya längden på arrayen.
            //alltså comment.text är det som arrayen innehåller
        }
    }
    return cityComment;
}


//commentarer för landet 
function renderCommentCityName(i){
    let cityCommentName = [];
    for (let name of DB.COMMENTS_CITY) {
        if (i == name.cityID) {
            cityCommentName.push(name.alias);
        }
    }
    return cityCommentName;
}

function renderCommentCityYear(i){
    let cityCommentYear = [];
    for (let year of DB.COMMENTS_CITY) {
        if (i == year.cityID) {
            cityCommentYear.push(year.date.year);
        }
    }
    return cityCommentYear;
}


//Funktionen isNaN() avgör om ett värde är NaN eller inte.
//med hjälp av den kan vi returnera en text som "inget omdöme"
function noValue(value){
    if (isNaN(value) == false){
        return " "
    } else{
        return " "
    }
}



//Direktkod

renderCity();
renderCountry();
renderCountryInfo();
renderCountryImage();



