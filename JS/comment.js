
//function random comment city
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



//function random comment programme


function getAllCommentsProgramme() {
    const allCommentsProgramme = [];

    for (let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
        allCommentsProgramme.push(COMMENTS_PROGRAMME[i])
    }
    return allCommentsProgramme; 
}



function programComment(){
    let studentsComment = document.getElementById("commentBox1");
    studentsComment.innerHTML = "";
    let comments = getAllCommentsProgramme();
  
    let number = randomCommentProgramme(comments)

        let alias = comments[number].alias;
        let text = comments[number].text;
        let date = comments[number].date;
        let div = document.createElement("div");
        div.classList.add("commentProgramme");

        div.innerHTML = `
        <div id="name">${alias}, ${date.year}-${date.month}-${date.day}
        <p>"${text}"</p>
        `;

        studentsComment.appendChild(div);
        document.getElementById("newComment1").addEventListener("click", programComment);
}

getAllCommentsProgramme();

function randomCommentProgramme(comments){
    let nr = Math.floor(Math.random() * comments.length) + 1;
    console.log(nr);
    return nr
}







