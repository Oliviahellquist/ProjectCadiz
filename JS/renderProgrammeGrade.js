

function renderTeacherGrade(i) {

    let teacherGradeArray = [];

    for (let grade of COMMENTS_PROGRAMME) {

        if (i == grade.programmeID) {

            teacherGradeArray.push(grade.stars.teachers);

        }
    }

    return gradeAvg(teacherGradeArray)

}


function renderCoursesGrade(i) {

    let coursesGradeArray = [];

    for (let grade of COMMENTS_PROGRAMME) {

        if (i == grade.programmeID) {

            coursesGradeArray.push(grade.stars.courses);

        }
    }

    return gradeAvg(coursesGradeArray)

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