var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chosen = computerOptions[Math.floor(Math.random() * 26)];

var guess = 13;
var win = 0;
var previous = [];

var winText = document.querySelector("#win");
var guessText = document.querySelector("#guess");
var previousText = document.querySelector("#previous");

function reset() {
    guess = 13;
    chosen = computerOptions[Math.floor(Math.random() * 26)];
    guessText.innerHTML = guess;
    previous = ["..."];
    previousText.innerHTML = previous;

}



document.onkeyup = function(game){
    var userInput = game.key.toLowerCase();

    function check() {
        //removes filler text from the previous guesses
        if (guess > 12) {
            previous.pop();
        }

        for (i = 0; i < computerOptions.length; i++){
           
            // Check to validate input from user
            if (userInput === computerOptions[i]) {
                var validOption = userInput;
                // console.log(validOption);
                
                // on win
                if (chosen === userInput) {
                    win ++;
                    winText.innerHTML = win;
                    alert("You win! Congratulations!");
                    if(confirm("Did you want to play again?")===true){
                        reset();
                    }
                    else {
                        alert("Fine, I wasn't gonna tell you my number anyways");
                    }
                }

                // on incorrect guess
                else {

                    //checks to see if you've guessed this before
                    for(var j = 0; j < previous.length; j++) {
                        if (userInput === previous[j]) {
                            alert("You already guessed that one, doofus!");
                            var testStorage = userInput;
                        }
                        
                    }
                    //logs previous guess and decreases guesses
                    if (testStorage !== userInput) {
                        previous.push(userInput);
                        previousText.innerHTML = previous;
                        guess --;
                    }

                    //guesses are displayed
                    guessText.innerHTML = guess;
                    
                }    
            }
        }
        //sassiness if you don't hit a letter key
        if (validOption !== userInput) {
            alert("Hit a letter key, ya dummy!");
        }
        //on loss, asks user if they want to play again
        if(guess < 1) {
            if(confirm("Did you want to play again?")===true){
                reset();
            }
            else {
                alert("Fine, I didn't wanna play with you anyways");
            }
        }
    }
    
    check();        
}


