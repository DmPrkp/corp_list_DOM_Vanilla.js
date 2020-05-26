
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

	//can't define values of color by DOM

	/*let div = document.createElement('div');
	let span  = document.createElement('span');
	div.style.color = "orange";
	div.appendChild(hoursPlaceNY);
	minutesPlace.style.color = "green";
	//seconds.style.color = "blue";
	//minutesPlace.classList.add("mr-5");*/
}, 1000);


