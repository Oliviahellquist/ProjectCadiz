
//function som tar emot parameter som ska motsvara programid som returnar medelvärde av alla Lärarebetyg i COMMENTS_PROGRAMME med samma programid.
function renderTeacherGrade(i) {

    let teacherGradeArray = [];

    for (let grade of COMMENTS_PROGRAMME) {

        if (i == grade.programmeID) {

            teacherGradeArray.push(grade.stars.teachers);

        }
    }

    return gradeAvg(teacherGradeArray)

}

//function som tar emot parameter som ska motsvara programid som returnar medelvärde av alla kursbetyg i COMMENTS_PROGRAMME med samma programid.
function renderCoursesGrade(i) {

    let coursesGradeArray = [];

    for (let grade of COMMENTS_PROGRAMME) {

        if (i == grade.programmeID) {

            coursesGradeArray.push(grade.stars.courses);

        }
    }

    return gradeAvg(coursesGradeArray)

}

//Function som tar emot en array som parameter och sedan ger ut medelvärde på alla värden i arrayen.
function gradeAvg(a) {
    var i = 0, sum = 0, arrayLength = a.length;
    while (i < arrayLength) {
        sum = sum + a[i++];
}
    return roundString(sum / arrayLength, 0);
}
//function som avrundar till närmsta heltal.
function roundString(numberWithManyDecimals, decimals){
    var rounded = Math.pow(10, decimals);
    return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
  }