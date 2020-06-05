
let hoursPlace = document.getElementById("hours");
let minutesPlace = document.getElementById("minutes");
let secondsPlace = document.getElementById("seconds");


setInterval(function () {
	let setWatch = new Date();

	let hours = setWatch.getHours();
	if (hours < 10) {
		hours = '0' + hours + ' : ';
	} else {
		hours = hours + ' : ';
	}
	let minutes = setWatch.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes + ' : ';
	} else { 
		minutes = minutes + ' : ';
	}
	let seconds = setWatch.getSeconds();
	if (seconds < 10) {
		seconds = '0' + seconds + '.';
	} else {
		seconds = seconds + '.';
	}

	hoursPlace.innerHTML = hours;
	minutesPlace.innerHTML = minutes;
	secondsPlace.innerHTML = seconds;
}, 1000);


