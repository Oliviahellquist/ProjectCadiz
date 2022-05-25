//Sparar in elementen med klassnament ".showMoreBtn" i en variabel
let showMoreBtn = document.querySelectorAll(".showMoreBtn");
//Denna variabel setts därefter in som en forloop för varje gemensamma "knapp" och kommer utföra funktionen "showmore"
showMoreBtn.forEach(Btn => Btn.addEventListener("click", showMore));

//Den här funktionen skapar strukturen för innehållet efter att knappen ("showMoreBtn") är aktiv
function showMore (event) {
    //får tillgång till föräldern som knappen är inuti
    let box = event.target.parentElement;
    //skapar div

//för varje knapp .btn ska man kunna klicka på visa mer
//Det gåt dock inte vid filtrering av någon anlednig
function showMore (event) {
    let box = event.target.parentElement;
    //Egenskapen event.target kan användas för att implementera händelse

    let div = document.createElement("div");
    //skapar classnamn till nya div
    div.classList.add("newBox");
    //Strukturen och innehållet för hur det ska se ut efter knapppen tryckts
    div.innerHTML =`
    <div id="box-1">
                <div><p>Nivå:</p></div>
                <div><p>Språk:</p></div>
                <div><p>Utbytestudenter:</p></div>
                <div><p>Lokala Studenter:</p></div>
                <div><p>Visum Krav:</p></div>
                <div><p>Lärare Medelbetyg:</p></div>
                <div><p>Kurser Medelbetyg:</p></div>
    </div>
    <div id="box-2">
                <div><h1 class="rubrik">Statistics</h1></div>
                <div class="rows-3">
                    <div class="year"><p>Year</p></div>
                    <div class="succes"><p>Succes Rate</p></div>
                    <div class="entry"><p>Entry Grade</p></div>
                </div>
                <div class="siffror">
                 <div class="Year">
                    <div class="rad-1">2018</div>
                    <div class="rad-2">2019</div>
                    <div class="rad-3">2020</div>
                    <div class="rad-4">2021</div>
                    <div class="rad-5">2022</div>
                 </div>
                 <div class="Rate">
                    <div class="rad-1"></div>
                    <div class="rad-2"></div>
                    <div class="rad-3"></div>
                    <div class="rad-4"></div>
                    <div class="rad-5"></div>
                 </div>
                 <div class="Grade">
                    <div class="rad-1"></div>
                    <div class="rad-2"></div>
                    <div class="rad-3"></div>
                    <div class="rad-4"></div>
                    <div class="rad-5"></div>
                 </div>
               
                </div>

            </div>
    <div id="commentAboutProgramme">
        <div class="commentStudent">Kommentar från studenter om programmet</div>
        <div id ="commentBox1"></div>
        <div id="newComment1">Nästa Kommentar</div>
    </div>

    
    `;

    if (event.target.innerHTML == "Visa Mer") {

        div.style.backgroundColor = "#C4C4C4"
        div.style.height = "420px";
        div.style.width = "1000px";
        div.style.margin ="0px"
        div.style.paddingLeft = "10px"
        div.style.position = "relative";
        event.target.innerHTML = "";
        event.target.innerHTML = "Visa Mindre";
        
        box.append (div);
        programComment(event);
        statisticsTable (box);
        //om man trycker på knappen kommer detta ske divven få en height och width osv
        
    }
    else 
    {
        event.target.nextElementSibling.remove();
        event.target.innerHTML = "Visa Mer";
        //annars tas rutan bort
        
    }
     
}


//En array över alla kommentarer
function getAllCommentsProgrammes() {
    const allCommentsProgrammes = [];

    for (let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
        allCommentsProgrammes.push(COMMENTS_PROGRAMME[i])
    }
    return allCommentsProgrammes; 
}

//fuktionen är inte kopplad till rätt ämne tyvärr
//anropas i funktionen ovan
//kommentarsboxen skapas i innerHTML
function programComment(){
    let studentsComment = document.getElementById("commentBox1");
    studentsComment.innerHTML = "";
    let comments = getAllCommentsProgrammes();
  
    let number = randomCommentProgramme(comments)
    //här anropas random funktionen 

        let alias = comments[number].alias;
        let text = comments[number].text;
        let date = comments[number].date;
        let div = document.createElement("div");
        div.classList.add("commentProgremmes");
        //här syns det i innerHTML
        div.innerHTML = `
        <div class="name">${alias}, ${date.year}-${date.month}-${date.day}</div>
        <p>"${text}"</p>
        `;
        //en EventListener på knappen nästa kommentar som slumpar en random kommentar
        studentsComment.appendChild(div);
        document.getElementById("newComment1").addEventListener("click", programComment);
}


function randomCommentProgramme(comments){
    let nr = Math.floor(Math.random() * comments.length) + 1;
    //random kommentar 
    //avrundar alltid neråt
    console.log(nr);
    return nr
}



//En funktion som fyller innehållet med data ifrån databasen
function statisticsTable (element) {
    // få tillgång till programmets namn och sparas in i variabeln
    let utbBox = element.parentElement.querySelector("h1").innerHTML;

    let array = PROGRAMMES;
    // Får åtkomst åt barnen för vardera klasser
    let rate = document.querySelector(".Rate").children;
    let grade = document.querySelector(".Grade").children;
    let boxOne = document.getElementById("box-1").children;
    // denna forloop ittererar över alla program 
    for (let i = 0; i < array.length; i++) {
        // ifall programnamnet är dennsamma som "utbBox huvudtitel"
        //(vilket är namnet på programmet användaren har valt att trycka på)
        //så kommer det att hämtas relaterad data för programmet
        if (array [i].name == utbBox) {
            // boxOne får tillgång till boxOnes barn därefter manipuleras innerHTML för respektive programinfo
            boxOne[0].firstChild.innerHTML = "Nivå: "+LEVELS[array[i].level];
            boxOne[1].firstChild.innerHTML = "Språk: "+LANGUAGES[array[i].language].name;
            boxOne[2].firstChild.innerHTML = "Utbytestudenter: "+array[i].exchangeStudents;
            boxOne[3].firstChild.innerHTML = "Lokala Studenter: "+array[i].localStudents;
            boxOne[5].firstChild.innerHTML = "Lärare Medelbetyg: " + renderTeacherGrade (i);
            boxOne[6].firstChild.innerHTML = "Kurser Medelbetyg: " + renderCoursesGrade (i);
            //Eftersom vi inte hade en referens till programmets respektive land var jag tvungen att få tillgång till programmets språk
            //därefter få tillgång ti språkets respektive land
            for(let n = 0; n < COUNTRIES.length; n++){
                if(COUNTRIES[n].languageID == array[i].language)
                boxOne[4].firstChild.innerHTML = "Visum Krav: "+COUNTRIES[n].visa;
            }
            

           
            // Vi fick tillgång till "Rate" och "Grade" innerHTML därefter fyllde vi i programmets respektive succesgrade och entrygrade.
            for (let k = 0; k < array.length; k++){
                rate[k].innerHTML = array[i].successRate[k];
                grade[k].innerHTML = array[i].entryGrades[k];

            }
        }     
    }
}


