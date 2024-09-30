function findWord() {
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry + "\\b", "i");
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		for (let j=0; j < alltexts[i].lines.length;j++) {
			if (regex.test(alltexts[i].lines[j]) == true) {
				resultsArray.push(alltexts[i].lines[j]);
			}
		}
	}
	printLeft(resultsArray);
	console.log(resultsArray);
}

function countThisWord() {
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry + "\\b", "i");
	let count = 0;
	for (let i = 0; i < alltexts.length; i++) {
		for (let j=0; j < alltexts[i].lines.length;j++) {
			if (regex.test(alltexts[i].lines[j]) == true) {
				count = count + 1 ;
			}
		}
	}

	if( count == 1) {
		printLeft(count + ' ' + 'line');
	} else {
		printLeft(count + ' ' + 'lines');
	}
}

//solution 01 accessing the lines
function allTextWords() {
    let entry = document.getElementById("yourAnswer").value;
    let regex = new RegExp("\\b" + entry + "\\b", "i");
    let count = 0;
    for (let i = 0; i < alltexts.length; i++) {
        for (let j = 0; j < alltexts[i].lines.length; j++) {
            if (regex.test(alltexts[i].lines[j]) == true) {
                count++;
                break; 
            }
        }
	}
    if (count === 5) {
        printLeft('yes');
    } else {
        printLeft('no');
    }
}


/*
solution 02 accessing the full text

function allTextWords() {
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry + "\\b", "i");
	let count = 0;
	for (let i = 0; i < alltexts.length; i++) {
		if (regex.test(alltexts[i].full)) {
			count =  count + 1;
			console.log(regex.test(alltexts[i].full == true));
		}
	}
	if (count === 5) {
		printLeft('yes');
	} else {
		printLeft('no');
	}
}
*/ //end of the comment ––> second solution

function wordCountPerText() {
    let entry = document.getElementById("yourAnswer").value;
    let regex = new RegExp("\\b" + entry + "\\b", "i");
    let resultsArray = [];
    for (let i = 0; i < alltexts.length; i++) {
		let count = 0;
        for (let j = 0; j < alltexts[i].lines.length; j++) {
            if (regex.test(alltexts[i].lines[j]) == true) {
                count = count + 1;  
			}
        }
        resultsArray.push(count);
		console.log(count);
    }
    printLeft(resultsArray);
}

function mostPerText(){
	let entry = document.getElementById('yourAnswer').value;
    let regex = new RegExp("\\b" + entry + "\\b", "i");
	let resultsArray = [];
	let maxCount = 0;
    let maxCountAndTitle = '';
	for (let i = 0; i < alltexts.length; i++ ) {
		count = 0;
		for (j = 0; j < alltexts[i].lines.length; j++){
			if (regex.test(alltexts[i].lines[j]) == true){
				count = count + 1 ;
			}
		};
		resultsArray.push(count);
		// let max = Math.max(...resultsArray);
		if (count > maxCount){
            maxCount = count;
            maxCountAndTitle = `${count} ${alltexts[i].title}`;
        };

		let max = Math.max(...resultsArray);
		let titel = 
	printLeft(maxCountAndTitle);
};
};

function containingMultipleWords() {
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry + "\\b", "i");
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		for (let j=0; j < alltexts[i].lines.length;j++) {
			if (regex.test(alltexts[i].lines[j]) == true) {
				resultsArray.push(alltexts[i].lines[j]);
			}
		}
	}
	printLeft(resultsArray);
	console.log(resultsArray);
}



//right functions
function firstWord() {
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		for (let j=0; j < alltexts[i].lines.length;j++) {
			let wordsArray = alltexts[i].lines[j].split(" ");
			resultsArray.push(wordsArray[0]);
		}
	}
	printRight(resultsArray);
}

/*
trim() string method is used with 
remove the white space from the beginning and the end if the array it applys to.
*/

function lastWord() {
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		for (let j=0; j < alltexts[i].lines.length;j++) {
			let wordsArray = alltexts[i].lines[j].trim().split(" ");
			console.log(wordsArray);
			resultsArray.push(wordsArray[wordsArray.length - 1]);	
		}
	}
	printRight(resultsArray);
}

function randomLine() {
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let linesArray = alltexts[i].lines;
		let randomLine = Math.floor(Math.random() * linesArray.length)
		resultsArray.push(linesArray[randomLine]);
	}
	printRight(resultsArray);
}

function randomReverse(){
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let linesArray = alltexts[i].lines;
		let randomLine = Math.floor(Math.random() * linesArray.length)
		let randomLineIndex = linesArray[randomLine];
		let spiltLine = randomLineIndex.split(" ");
		let reveresedline = '';
		console.log('spiltLine',spiltLine);
		//another solution is to reverse join()
		// let reveresed = spiltLine.revers().join(" ");
		for (let j = spiltLine.length - 1; j >= 0; j--) {
			reveresedline += spiltLine[j] + ' ';
			// reveresedline += `${spiltLine[j]} `;
			console.log('reveresedline',reveresedline);
		}
		resultsArray.push(reveresedline);	
		console.log(resultsArray);
	}
	printRight(resultsArray);
};

function randomLongWord(){
	let resultsArray = [];

	for (let i = 0; i < alltexts.length; i++) {
		let linesArray = alltexts[i].lines;
		let randomLine = Math.floor(Math.random() * linesArray.length)
		let randomLineIndex = linesArray[randomLine];
		let spiltLine = randomLineIndex.split(" ");
		console.log('Line Splited',spiltLine);
		let wordsLength = 0;
		let longestWord = 0;
		let result = "";
		for (let j = 0; j < spiltLine.length; j++) {
			wordsLength = spiltLine[j].length;
			if (wordsLength > longestWord) {
				longestWord = wordsLength;
				result =  spiltLine[j];
			};
		}
		console.log('Longest Word',longestWord);
		if (result == 0) {
			console.log('Result:', 'No Words in this line');
		} else {
			console.log('Result:',result);
		}
		resultsArray.push(result);
	}
	printRight(resultsArray);
};


function longestText(){
	let resultsArray = [];
	let count = 0; 
	for ( let i = 0; i < alltexts.length; i++ ){
		let fullText = alltexts[i].full;
		console.log("This is the Full Text",fullText);
		let lettersCount = fullText.length; 
		console.log("Letters Count", lettersCount);
		let wordsCount = fullText.split(" ").length;
		console.log("Words Count", wordsCount);

		if (lettersCount > count ){
			count = lettersCount;
			resultsArray.push(alltexts[i].title)
		}
		console.log("Compairing/Longest Text", count)
	};	
	printRight(resultsArray);

};


/*
7. averageLineLength() Show me the average 
line-length (by character) across all of text: 
so add up all the line lengths for each text
and divide by (what?).
*/ 
function averageLineLength(){
	let resultsArray = [];
	let average = 0;
	for ( let i = 0; i < alltexts.length; i++ ){
		let linesCount = alltexts[i].lines.length;
		console.log(`${alltexts[i].title} Lines count = `,linesCount)
		let sum = 0;
		for (let j = 0; j < alltexts[i].lines.length; j++){
			let charactersCount = alltexts[i].lines[j].length;
			console.log(`Line Charachter Count = `, charactersCount)
			sum += charactersCount;
			console.log(`Summing all charachters `, sum)
		}
		average = sum / linesCount;
		console.log(`This is the average line length`, average);
		resultsArray.push(`${alltexts[i].title} Average line-length by character <br> ${average}`)
	};	
	printRight(resultsArray);

};


function wordsEndingWithE() {
	let resultsArray = [];
	let regex = /\b\w*e\b/;
	for (let i = 0; i < alltexts.length; i++) {
		for (let j=0; j < alltexts[i].lines.length;j++) {
			let wordsArray = alltexts[i].lines[j].split(" ");
			console.log ("Those are all the words", wordsArray)
			console.log ("This is the first word", wordsArray[0])
			console.log ("Does the first word ends with E?",regex.test(wordsArray[0]))
			if (regex.test(wordsArray[0]) == true) {
				resultsArray.push(wordsArray[0]);
			} else {
				resultsArray.push("No 'E' at the end of the words");
			}
		}
			console.log(resultsArray)
		}
	printRight(resultsArray);
}



//---------------------------------------
// DO NOT EDIT ANYTHING BELOW THIS LINE!
// THESE JUST PRINT OUT THE RESULTS!!

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

