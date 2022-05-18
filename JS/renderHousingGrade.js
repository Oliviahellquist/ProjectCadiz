//Tar emot city id som en parameter och sedan tar alla kommentarer med paramternsvärde och returnerar deras medelvärde avrundat
function renderHousingGrade(i) {
    let houseGradeArray = [];
    for (let grade of DB.COMMENTS_CITY) {
        if (i == grade.cityID) {
            houseGradeArray.push(grade.stars.accomodation);
        }
    }
    return gradeAvg(houseGradeArray)
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