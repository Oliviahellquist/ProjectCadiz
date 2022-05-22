let showMoreBtn = document.querySelectorAll(".showMoreBtn");
//let box = document.querySelectorAll(".UtbBox");
//showMoreBtn.addEventListener("click", showMore);
showMoreBtn.forEach(Btn => Btn.addEventListener("click", showMore));

function showMore (event ) {
    let box = event.target.parentElement;
    let div = document.createElement("div");
    div.classList.add("newBox");
    div.innerHTML =`
    <div id="commentAboutProgramme">
        <div class="commentStudent">Kommentar från studenter om programmet</div>
        <div id ="commentBox1"></div>
        <div id="newComment1">Nästa Kommentar</div>
    </div>
    `;

    if (event.target.innerHTML == "Visa Mer") {
       
        div.style.height = "400px";
        div.style.width = "780px";
        event.target.innerHTML = "";
        event.target.innerHTML = "Visa Mindre";
        event.target.style.margin = "357px 25px 0 0";
        event.target.style.padding = "12px 19px";
        box.appendChild (div);
        programComment(event);
        console.log(event)
    }
    else 
    {
        
        //div.remove();
        event.target.style.margin = "0 25px 0 0";
        event.target.nextElementSibling.remove();
        event.target.innerHTML = "Visa Mer";
        //window.location.reload();
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