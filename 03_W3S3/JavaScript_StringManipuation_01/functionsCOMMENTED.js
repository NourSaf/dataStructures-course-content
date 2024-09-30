///THIS IS A SIMPLE FIND/WORD OF PHRASE FUNCTION
function findWord() {
//This gets what you entered in the input field
//And sets the "entry" variable
let entry = document.getElementById("yourAnswer").value;
//This sets the entry variable as a Regular Expression (you do not need to understand this line)
//Regular Expressions tell the program to look for patterns in a string of text
//Here it looks for whatever you entered with a space other non-letter character of before and after it
//This isolates the word or phrase in the string
// you will ALWAYS need this line in the word search functions
let regex = new RegExp("\\b" + entry+"\\b","i");
//This is an empty array that will be filled with all of the lines that contain the word
//Look in the inner loop where the push happens
// this is how you "save" information within loops 
let resultsArray = [];

//This is the for-loop that loops through the five texts
for (let i = 0; i < alltexts.length; i++) {
	// now the INNER LOOP begins
	// it loops through the array of lines in the .lines property and searches for the word
	//yes, this is a loop inside a loop
	for (let j=0; j < alltexts[i].lines.length;j++) {
	//this uses the Regular expression test() method to see if the line contains the word
	// you will never change this line, just trust that is just testing if the word that was entered
	// is in the current line being a looped through
		if (regex.test(alltexts[i].lines[j]) == true) {
		//if the test returns a "true" then it puts that line into the resultsArray
			resultsArray.push(alltexts[i].lines[j]);
		}
	} //end of inner loop
}//end of outside loop (it's gone through all of the texts)

//now all the results have been entered in resultsArray
//we send that array into the printLeft function
printLeft(resultsArray);
}

	

//This function pulls out all of the lines and prints out all of the first words of the lines
function firstWord() {
//Again, an empty resultsArray that will be filled during the loop
//There will be times when you want a variable, like a "let counter=0" to go here
let resultsArray = [];
//This is the main/ outside loop. It loops through all five texts
for (let i = 0; i < alltexts.length; i++) {
	//This inner for loop, loops through each line in the .lines property of the object
	for (let j=0; j < alltexts[i].lines.length;j++) {
		//here the line is split up into an array of words
		let wordsArray = alltexts[i].lines[j].split(" ");
		//here the first word of the line / first [0] member of the array 
		//is pushed into the results
		resultsArray.push(wordsArray[0]);
	}//end inner loop
}//end outer  loop

//send the result to printRight()
//because this function is for a right-hand side function
printRight(resultsArray);
}

	
//BELOW ARE THE printLeft() and printRight() functions
//DON'T TOUCH THEM. THEY CONTROL DISPLAYING THE RESULTS ON THE LEFT AND RIGHT HAND SIDE OF THE PAGE
function printLeft(results) {
let thestring = "";
if (results.constructor === Array) {
for (let i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}
document.getElementById("inputResults").innerHTML = thestring; 
}

function printRight(results) {
let thestring = "";
if (results.constructor === Array) {
for (let i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}

document.getElementById("clickResults").innerHTML = thestring; 
}