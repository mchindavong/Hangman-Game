// WELCOME PROMPT BOX
var kingdom = prompt("Greetings, young dragon slayer! What enchanted land are you from?");
// ALERTS THE USER'S INPUT
  if (kingdom == null || kingdom == 0) {
     alert("Not from around here, I see.. Show us what you're made of!");
  }   else {
         alert("Ah! good ol' " + kingdom + " I know a couple of trolls from there!");
      }

// STARTS GAME AND RUNS THE FOLLOWING FUNCTIONS
document.onkeyup = function(event){
	var userGuess = event.key;

	// PHRASES TO CHOOSE FROM
	var words = ["dragon",
	             "ogre",
	             "stepsisters",
	             "basilisk",
	             "wizard"];

	// PICKS RANDOM PHRASE 
	var phrase = words[Math.floor(Math.random() * words.length)];

	// AVAILABLE LETTERS
	// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 
	                // 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
	                // 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

	// ANSWER PLACEHOLDER
	var answerArray = [0];
	  for (var i = 0; i < phrase.length; i++) {
	    answerArray[i] = "_";
	  } 

	// LETTERS REMAINING
	var remainingLetters = phrase.length;

	// # OF GUESSES REMAINING
	var lives = 10;

	// LETTERS ALREADY GUESSED
	var usedLetters = 0;

	// # OF TIMES USER GUESSED CORRECTLY
	var wins = 0;



}

