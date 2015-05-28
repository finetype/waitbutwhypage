

	function newUser() {
		var ageGuess = prompt("How many years do you think you'll live?"), userName = prompt("Pick a username?"), lifeTable = [];

		for (i=0; i<ageGuess; i++) {
		    
			lifeTable['year'+i] = []
			for (b=1; b<13; b++) {
			    
			    lifeTable['year'+i].push("month"+b)
			    
			}
			
		}
		console.log(lifeTable)
	}
	
	//newUser()
	console.log(lifeTable)

	


	function tableMaker() {
		if (timeScale === "years") {
		}
		else if (timeScale === "months") {
		}
		

	}

	tableMaker(user, timeScale); */


	//document.getElementById("table").innerHTML = line + " " + row + " " + ageGuess + " " + timeScale;
	//var type = 'article';
	//this[type+'_count'] = 1000;  
	//alert(article_count);
	

})