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












function getAllCities() {
    const allCities = [];

    for (let i = 0; i < CITIES.length; i++) {
        allCities.push(CITIES[i])
    }
    return allCities; 
}



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
            <div class="commentBox${i}"></div>
            <div class="newComment">Nästa Kommentar</div>
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
                    <div>${renderFoodGrade(i)}/5</div>
                </div>
                <div id="third">
                    <div>Boende</div>
                    <div>${renderHousingGrade(i)}/5</div>
                </div>
                <div id="fourth">
                    <div>Uteliv</div>
                    <div>${renderFunGrade(i)}/5</div>
                </div>
            </div>
        </div>
      
        `;
        article.appendChild(div);
        cityComment(i);
    }
    
}

function renderSunGrade(i) {
    let SunnydaysArray = [];
    for (let city of DB.CITIES) {
        if (i == city.id) {
            SunnydaysArray.push(city.sun);
        }
    }
    return SunnydaysArray
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

function roundString(numberWithManyDecimals, decimals){
    var rounded = Math.pow(10, decimals);
    return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
  }




//function random comment city
//Det behövs egentligrn inte, men jag tycker det har vait enklare 
function getAllComments() {
    const allComments = [];

    for (let i = 0; i < COMMENTS_CITY.length; i++) {
        allComments.push(COMMENTS_CITY[i])
    }
    return allComments; 
}


function cityComment(i){
    let studentsComment = document.querySelector(`.commentBox${i}`);
    console.log(studentsComment)
    studentsComment.innerHTML = "";
    let comments = getAllComments();
  
    let number = randomCommentCity(comments)

        let alias = comments[number].alias;
        let text = comments[number].text;
        let date = comments[number].date;
        let div = document.createElement("div");
        div.classList.add("commentCity");

        div.innerHTML = `
        <div class="name">${alias}, ${date.year}-${date.month}-${date.day}
        <p>"${text}"</p>
        `;

        studentsComment.appendChild(div);
        document.querySelector(".newComment").addEventListener("click", cityComment);
       console.log(studentsComment); 
}

function randomCommentCity(comments){
    let nr = Math.floor(Math.random() * comments.length) + 1;
    console.log(nr);
    return nr

}


//Direktkods

renderCity();
renderCountry();
renderCountryInfo();
renderCountryImage();




