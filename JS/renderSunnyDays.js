//Tar emot city id som en parameter och sedan tar sun dagar från staden med samma paramternsvärde som id och returnerar en array antal soldagar
function renderSunGrade(i) {
    let SunnydaysArray = [];
    for (let city of DB.CITIES) {
        if (i == city.id) {
            SunnydaysArray.push(city.sun);
        }
    }
    return SunnydaysArray
}
