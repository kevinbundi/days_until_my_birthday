function daysUntillMyBirthday(Y){
	var DUMB = Y
	if(DUMB>30){
		while(Y>30){
			console.log(Y + " days until my birthday. Such a long time")
			Y--
		}
	}
	 if(DUMB<=30){
		while(DUMB>5){
			console.log(DUMB + " days until my birthday!!!")
			DUMB--
		}
	}
	if(DUMB<=5){
		while(DUMB>=1){
			console.log(DUMB + " DAYS UNTIL MY BIRTHDAY!!!! ")
			DUMB--
		}
	}
	if(DUMB==0){
		console.log("HAPPY BIRTHDAY")
	}
}
daysUntillMyBirthday(60) 
