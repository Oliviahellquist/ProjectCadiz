//Tar emot city id som en parameter och sedan tar alla kommentarer med paramternsvärde och returnerar en array med deras medelvärde avrundat
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