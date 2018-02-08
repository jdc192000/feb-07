//pseudocode
//===============================

//Need a wordArray for computer to randomly choose from
//take index of wordArray to get equal image from imageArray
//show image in html
//Converts picked word into equal length of "_"

//Need global variables

//Need A function that takes user input: keypresses
//Checks if user input is in random word
//If user input is in random word reveals the letter
//+1 to counter
//if counter is equal to random word.length add 1 to wins
//updates wins on html
//else user input is not in random word
//push userguess to letters guessed array
//-1 to guessesRemain
//updates guessesRemain on html
//if guessesRemain is equal to 0 add 1 to losses
//call reset function

//Need a function that resets variables:guessesRemain and 
//picks another word and switches images to the same as randomWord



var wordArray = ["cardinals", "falcons", "ravens", "bills", "panthers", "bears"
    , "bengals", "browns", "cowboys", "broncos", "lions", "packers", "texans", "colts"
    , "jaguars", "chiefs", "chargers", "rams", "dolphins", "vikings", " patriots"
    , "saints", "giants", "jets", "raiders", "eagles", "steelers", "fourtyniners"
    , "seahawks", "buccaneers", "titans", "redskins"]

var winCounter = 0;
var guessesRemain = 13;
var lettersGuessed = [];
var imgArray = [];
var answerArray = [];
var letterCounter = 0;
var userGuess = "";

//Function to pick a random word from wordArray and convert to equal length "_"
// function pickAndConvertWord() {

// Picks a random word from the word array
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(randomWord);

// Convert randomWord to equal length of "_"
for (var i = 0; i < randomWord.length; i++) {
    answerArray.push("_");
}

// Takes out commas of current word
document.getElementById("currentWord").innerHTML = answerArray.join(" ");
// }


//function that starts when key is pressed
document.onkeydown = function (event) {

    // sets the variable userGuess to the user key input
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //checks if userGuess is in randomWord array
    if (randomWord.indexOf(userGuess) > -1) {
        for (i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === userGuess) {
                answerArray[i] = userGuess;
                letterCounter++;
                document.getElementById("currentWord").innerHTML = answerArray.join(" ");

                if (letterCounter == randomWord.length) {
                    winCounter++;
                    document.getElementById("wins").innerHTML = winCounter;
                    reset();
                }
            }
        }
    }

    //If userGuess != randomWord array then lowers guesses remain and pushes
    //user guess to lettersGuessed array
    else {
        guessesRemain--;
        document.getElementById("guessesLeft").innerHTML = guessesRemain;
        lettersGuessed.push(userGuess);
        document.getElementById("lettersUsed").innerHTML = lettersGuessed;
    }


};

function reset() {
    guessesRemain = 13;
    lettersGuessed = [];
    imgArray = [];
    answerArray = [];
    letterCounter = 0;
    userGuess = "";
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(randomWord);

    // Convert randomWord to equal length of "_"
    for (var i = 0; i < randomWord.length; i++) {
        answerArray.push("_");
    };
    document.getElementById("currentWord").innerHTML = answerArray.join(" ");
}