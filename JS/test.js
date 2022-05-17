function getAllProgrammes() {
    const allProgrammes = [];

    for (let i = 0; i < PROGRAMMES.length; i++) {
        allProgrammes.push(PROGRAMMES[i])
    }
    return allProgrammes; 
}



function getAllUniversities() {
    const allUniversities = [];

    for (let i = 0; i < UNIVERSITIES.length; i++) {
        allUniversities.push(UNIVERSITIES[i])
    }
    return allUniversities; 
}




function programmeName(){
    let programmeGrid = document.getElementById("utbBoxContainer");
    let programmes = getAllProgrammes();

    for (let i = 0; i < programmes.length; i++) {

        let name = programmes[i].name;

        let div = document.createElement("div");
        div.classList.add("utbBox");
        div.innerHTML = `
        <h1 class="title">${name}</h1>
        `;
        programmeGrid.appendChild(div);
    }

}

programmeName();
/*


function getProgramUniversity(result){
    let programUniversity ="";

    for (let program of PROGRAMMES){
        if (result.id == program.id) {
            for (let university of UNIVERSITIES){

                if(result.universityID == university.id){
                    programUniversity += university.name;
                }
            }
        }
    }
}
*/