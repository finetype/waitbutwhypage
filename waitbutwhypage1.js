$(document).ready(function(){
	var ageGuess = prompt("How many years do you think you'll live?")
	alert(ageGuess)
	var timeScale = prompt("Show in hours, days, weeks, months, or years?")
	alert(timeScale)

	function tableMaker(howLong, timeIncrement) {
		if (timeScale === "years") {
			var line = 10
			var row = ageGuess / 10
		}
		else if (timeScale === "months") {
			var line = 12
			var row = ageGuess / 10 / 12
		}
		
		for (i=0; i<row; i++){
			document.getElementById("table").innerHTML = line + row;
		}
	}

	tableMaker(ageGuess, timeScale);





})