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


console.log('working');

var wordArray = ["cardinals", "falcons", "ravens", "bills", "panthers", "bears"
    , "bengals", "browns", "cowboys", "broncos", "lions", "packers", "texans", "colts"
    , "jaguars", "chiefs", "chargers", "rams", "dolphins", "vikings", "patriots"
    , "saints", "giants", "jets", "raiders", "eagles", "steelers", "fourtyniners"
    , "seahawks", "buccaneers", "titans", "redskins"]

var winCounter = 0;
var letterCounter = 0;
var guessesRemain = 13;
var lettersGuessed = [];
var imgArray = [];  //Stores pathway to img src and index is equal wordArray[i]
var answerArray = [];
var userGuess = "";
var randomWord = "";
var allLettersPicked = [];

//Function to pick a random word from wordArray and convert to equal length "_"
function pickAndConvertWord() {

    // Picks a random word from the word array
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(randomWord);

    // Convert randomWord to equal length of "_"
    for (var i = 0; i < randomWord.length; i++) {
        answerArray.push("_");
    }

    // Takes out commas of current word
    document.getElementById("currentWord").innerHTML = answerArray.join(" ")
 
}

function letterCollection(userGuess) {
    if (allLettersPicked.indexOf(userGuess) > -1) {
        console.log('we found a letter already guessed');
        return true;
    } else {
        console.log('did not find letter guessed');
        return false;
    }
}

// function reset() {
//     winCounter++;
//     document.getElementById("wins").innerHTML = winCounter;
//     answerArray = [];
//     allLettersPicked = [];
//     letterCounter = 0;
//     guessesRemain = 13;
//     document.getElementById("guessesLeft").innerHTML = guessesRemain;
//     lettersGuessed = [];
//     document.getElementById("lettersUsed").innerHTML = lettersGuessed;
//     pickAndConvertWord();
// }

pickAndConvertWord();

//function gameLoop()
//function that starts when key is pressed
document.onkeydown = function (event) 
{

    // sets the variable userGuess to the user key input
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    letterCollection(userGuess);
    
    
    if (letterCollection(userGuess)) {
        alert("can't guess same letter twice")
    } else if (randomWord.indexOf(userGuess) >-1) {
        allLettersPicked.push(userGuess);
        for(i=0; i<randomWord.length; i++) {
            if (randomWord[i] === userGuess) {
                console.log("guess correctly")
                answerArray[i] = userGuess;
                letterCounter++;
                console.log('about to display answer' , answerArray)
                document.getElementById("currentWord").innerHTML = answerArray.join(" ");

                if (letterCounter === randomWord.length) {
                    //reset();
                    winCounter++;
                    document.getElementById("wins").innerHTML = winCounter;
                    //call reset function
                    answerArray = [];
                    allLettersPicked = [];
                    letterCounter = 0;
                    guessesRemain = 13;
                    document.getElementById("guessesLeft").innerHTML = guessesRemain;
                    lettersGuessed = [];
                    document.getElementById("lettersUsed").innerHTML = lettersGuessed;
                    pickAndConvertWord();
                    return;
                }
            }
        }
    } else {
        console.log("we hit else statement")
        guessesRemain--;
        document.getElementById("guessesLeft").innerHTML = guessesRemain;
        lettersGuessed.push(userGuess);
        document.getElementById("lettersUsed").innerHTML = lettersGuessed;
        if (guessesRemain === 0) {
            answerArray = [];
            allLettersPicked = [];
            letterCounter = 0;
            guessesRemain = 13;
            document.getElementById("guessesLeft").innerHTML = guessesRemain;
            lettersGuessed = [];
            document.getElementById("lettersUsed").innerHTML = lettersGuessed;
            pickAndConvertWord();
            return;
        }
    }   
}