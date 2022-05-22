//Array of all countries
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

//Function to get the cities in the chosen country
function renderCity(){
    let article = document.getElementById("articleCity");
    let cities = getAllCities();
    
    let nameId = window.sessionStorage.getItem("land"); 
    let city = cities.filter(city => {
        if (city.countryID == nameId) {
            return true;
        }
        return false;
    });


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
    } 

}





function renderFoodGrade(i) {
    let foodGradeArray = [];
    for (let grade of DB.COMMENTS_CITY) {
        if (i == grade.cityID) {
            foodGradeArray.push(grade.stars.food);
        }
    }
    return gradeAvg(foodGradeArray)
}


function renderHousingGrade(i) {
    let houseGradeArray = [];
    for (let grade of DB.COMMENTS_CITY) {
        if (i == grade.cityID) {
            houseGradeArray.push(grade.stars.accomodation);
        }
    }
    return gradeAvg(houseGradeArray)
}



function renderFunGrade(i) {
    let funGradeArray = [];
    for (let grade of DB.COMMENTS_CITY) {
        if (i == grade.cityID) {
            funGradeArray.push(grade.stars.out);
        }
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

function renderCommentCity(i){
    let cityComment = [];
    for (let comment of DB.COMMENTS_CITY) {
        if (i == comment.cityID) {
            cityComment.push(comment.text);
            
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


function roundString(numberWithManyDecimals, decimals){
    var rounded = Math.pow(10, decimals);
    return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
}



//Direktkods

renderCity();
renderCountry();
renderCountryInfo();
renderCountryImage();







