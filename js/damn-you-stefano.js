function $(id) { return document.getElementById(id); }

function readInputs() {
	var theElementCount = $('elems').value;
	var theMaxValue = $('max').value;
	
	if (isNaN(theElementCount) || isNaN(theElementCount)) {return false;}
	else {
		theElementCount = parseFloat(theElementCount);
		theMaxValue = parseFloat(theMaxValue);
		
	}
		listedArray = generateArray(theElementCount,theMaxValue);
		writeArray(listedArray);
}

function generateArray(x,y) {
	var elementCount = x;
	var maxValue = y;
	
	var theNumbers = new Array();
	for (i = 0; i < elementCount; i++) {
				theNumbers[i] = parseInt(Math.random() * maxValue);
				$('overBWrite').innerHTML = theNumbers.join(" - ");
		}
	return theNumbers;
}

function writeArray(theNumbers) {
	var vals = new Array();
	vals = theNumbers;
	$('overBWrite2').innerHTML = "<ul>";
	for (i = 0; i < vals.length; i++) {
			$('overBWrite2').innerHTML += "<li>" + vals[i] + "</li>";
	}
	$('overBWrite2').innerHTML += "</ul>";	
}