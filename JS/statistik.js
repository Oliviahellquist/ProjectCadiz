let showMoreBtn = document.querySelectorAll(".showMoreBtn");

showMoreBtn.forEach(Btn => Btn.addEventListener("click", showMore));

function showMore (event ) {
    console.log ("Hello");
    let box = event.target.parentElement;
    let div = document.createElement("div");
    div.classList.add("newBox");
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
       
        div.style.height = "400px";
        div.style.width = "1000px";
        div.style.position = "relative";
        event.target.innerHTML = "";
        event.target.innerHTML = "Visa Mindre";
        event.target.style.padding = "12px 19px";
        box.append (div);
        programComment(event);
        statisticsTable (box);
        
    }
    else 
    {
       
        event.target.nextElementSibling.remove();
        event.target.innerHTML = "Visa Mer";
        event.target.style.padding = "12px 30px";
    }
     
}


//function random comment program
function getAllCommentsProgrammes() {
    const allCommentsProgrammes = [];

    for (let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
        allCommentsProgrammes.push(COMMENTS_PROGRAMME[i])
    }
    return allCommentsProgrammes; 
}


function programComment(){
    let studentsComment = document.getElementById("commentBox1");
    studentsComment.innerHTML = "";
    let comments = getAllCommentsProgrammes();
  
    let number = randomCommentProgramme(comments)

        let alias = comments[number].alias;
        let text = comments[number].text;
        let date = comments[number].date;
        let div = document.createElement("div");
        div.classList.add("commentProgremmes");

        div.innerHTML = `
        <div class="name">${alias}, ${date.year}-${date.month}-${date.day}</div>
        <p>"${text}"</p>
        `;

        studentsComment.appendChild(div);
        document.getElementById("newComment1").addEventListener("click", programComment);
}


function randomCommentProgramme(comments){
    let nr = Math.floor(Math.random() * comments.length) + 1;
    console.log(nr);
    return nr
}


/*</div>
    <div id="commentAboutProgramme">
        <div class="commentStudent">Kommentar från studenter om programmet</div>
        <div id ="commentBox1"></div>
        <div id="newComment1">Nästa Kommentar</div>
    </div>
    `;*/

   /* <div id="box-2">
    <div><h1 class="rubrik">Statistics</h1></div>
    <div class="rows-3">
        <div class="year"><p>Year</p></div>
        <div class="succes"><p>Succes Rate</p></div>
        <div class="entry"><p>Entry Grade</p></div>
    </div>
    <div class="siffror">
     <div class="Year">
        <div class="rad-1"></div>
        <div class="rad-2"></div>
        <div class="rad-3"></div>
        <div class="rad-4"></div>
        <div class="rad-5"></div>
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

</div>*/
function statisticsTable (element) {
    let utbBox = element.parentElement.querySelector("h1").innerHTML;
    let array = PROGRAMMES;
    let rate = document.querySelector(".Rate").children;
    let grade = document.querySelector(".Grade").children;
    let boxOne = document.getElementById("box-1").children;
    for (let i = 0; i < array.length; i++) {
        if (array [i].name == utbBox) {
            boxOne[0].firstChild.innerHTML = "Nivå: "+LEVELS[array[i].level];
            boxOne[1].firstChild.innerHTML = "Språk: "+LANGUAGES[array[i].language].name;
            boxOne[2].firstChild.innerHTML = "Utbytestudenter: "+array[i].exchangeStudents;
            boxOne[3].firstChild.innerHTML = "Lokala Studenter: "+array[i].localStudents;

            for(let n = 0; n < COUNTRIES.length; n++){
                if(COUNTRIES[n].languageID == array[i].language)
                boxOne[4].firstChild.innerHTML = "Visum Krav: "+COUNTRIES[n].visa;
            }

            boxOne[5].firstChild.innerHTML = "Lärare Medelbetyg: " + renderTeacherGrade (i);
            boxOne[6].firstChild.innerHTML = "Kurser Medelbetyg: " + renderCoursesGrade (i);
           
            
           
            
            for (let k = 0; k < array.length; k++){
                rate[k].innerHTML = array[i].successRate[k];
                grade[k].innerHTML = array[i].entryGrades[k];

            }
            
            
            

        }     
    }
    }