$(document).ready(function() {
    
	$("#teamBuilder").click(function(e){
        e.preventDefault();
		showSelectedValues();
     });
});
function showSelectedValues()
{
	var playerArray = [];
	$("input[name=player]:checked").each(function() {
		playerArray.push($(this).val()); //push each val into the array
	});

	if (playerArray.length > 5) {
		buildTeams(playerArray);
	} 
}

function buildTeams(playerArray) {
	var damnYouStefanoMembers = [];
	var otherTeam = [];
	var usedNumbers = [];
	var cnt = 0;
	do {
		var randNum = getRandomInt(0, (playerArray.length - 1));
		if (!checkInArray(randNum, usedNumbers)) {
			usedNumbers[cnt] = randNum;
			damnYouStefanoMembers[cnt] = playerArray[randNum];
			cnt++;
		}
	} while (cnt < 5);
	
	var newCnt = 0;
	for (var x = 0; x < playerArray.length; x++) {
		if (!checkInArray(x, usedNumbers)) {
			otherTeam[newCnt] = playerArray[x];
			newCnt++;
		}
	}
	
	$("#stefano").html(damnYouStefanoMembers.toString());
	$("#stefani").html(otherTeam.toString());
	
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkInArray(value, theArray) {
	for (var y = 0; y < theArray.length; y++) {
		if (theArray[y] == value) {
			return true;
		}
	}
}