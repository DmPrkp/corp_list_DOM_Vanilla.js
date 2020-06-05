let hoursPlaceNY = document.getElementById("hoursNY");
let minutesPlaceNY = document.getElementById("minutesNY");
let daysPlaceNY = document.getElementById("daysNY");

function timetoNY() {
    let setWatch = new Date();
    let setNYdate = new Date(2021, 0, 1, 0, 0, 0, 0);
    setWatch = setNYdate - setWatch;
    let days = "";
    let hours = "";
    let minutes = "";
    let arrDay = ["день", "дня", "дней"];
    let arrHour = ["час", "часа", "часов"];
    let arrMin = ["минута", "митнуты", "минут"];
    let lastWordDay = '';
    let lastWordHour = '';
    let lastWordMin = '';        


    if (+setWatch < 86400000) {

    } else if (+setWatch < (86400000 * 2)) {
        days = 1;
        setWatch = setWatch - 86400000;
    } else if (+setWatch < (86400000 * 5)) {
        days = Math.floor(setWatch / 86400000)
        setWatch = setWatch - (86400000 * days);
    } else {
        days = Math.floor(setWatch / 86400000)
        setWatch = setWatch - (86400000 * days);
    };

    if (days > 4 && days < 21) {
        lastWordDay = arrDay[2];
    } else {
        lastWordDay = lastWorld(days, arrDay, lastWordDay);
    }
    days = days + " " + lastWordDay;       


    if (+setWatch < 3600000) {

    } else if (+setWatch < (3600000 * 2)) {
        hours = 1;
        setWatch = setWatch - 3600000;
    } else if (+setWatch < (3600000 * 5)) {
        hours = Math.floor(setWatch / 3600000)
        setWatch = setWatch - (3600000 * hours);
    } else {
        hours = Math.floor(setWatch / 3600000)
        setWatch = setWatch - (3600000 * hours);
    };

    if (hours > 4 && hours < 21) {
        lastWordHour = arrHour[2];
    } else {
        lastWordHour = lastWorld(hours, arrHour, lastWordHour);
    }
    hours = hours + " " + lastWordHour;       


    if (+setWatch < 60000) {

    } else if (+setWatch < (60000 * 2)) {
        minutes = 1;
    } else if (setWatch < 240001) {
        minutes = Math.floor(+setWatch / 60000)
    } else if (setWatch < 3600000) {
        minutes = Math.floor(setWatch / 60000)
    };       

    if (minutes > 4 && minutes < 21) {
        lastWordMin = arrMin[2];
    } else {
        lastWordMin = lastWorld(minutes, arrMin, lastWordMin);
    }
    minutes = minutes + " " + lastWordMin;


    daysPlaceNY.innerHTML = days;
    hoursPlaceNY.innerHTML = hours;
    minutesPlaceNY.innerHTML = minutes;


    function lastWorld(prop, arr, answer) {
        if (prop >= 1) {
            prop = "" + prop;
            let lastNum = prop.substring(prop.length - 1)
            if (lastNum == 1) {
                answer = arr[0]
            } else if (lastNum < 5 && lastNum > 1) {
                answer = arr[1]
            } else { answer = arr[2]}
        } return answer;
    }
}

setInterval(timetoNY(), 1000); 