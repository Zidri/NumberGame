
var $min = 0;
var $max = 100;
var $rand = 0;
var $guessCnt = 5;
var $gameStart = false;


function randGen() {

    $gameStart = true;

    // resetGame();

    //start with random range
    // while ($min >= $max) {
    //     $min = Math.floor(Math.random() * (100 + 1));
    //     $max = Math.floor(Math.random() * (100 + 1));
    // }


    if ($min != null && $max != null && $min < $max) {

        //display range
        document.getElementById("rangeMin").innerHTML = $min;
        document.getElementById("rangeMax").innerHTML = $max;

        //random number with min and max
        $rand = Math.floor(Math.random() * (parseInt($max) - parseInt($min))) + parseInt($min) + 1;

        document.getElementById("randNumber").innerHTML = $rand;

        // document.getElementById("randList").innerHTML = $list += ($rand + ' ');
    }


}

function guessCheck() {
    if ($gameStart) {
        var $guess = document.forms["guessForm"]["guessNumber"].value;

        //for debugging
        // console.log("min: " + $min + " max: " + $max);
        // console.log("Answer: " + $rand);
        // console.log("Your guess: " + $guess + " Cnt: " + $guessCnt);


        if ($guess > $min && $guess < $max) {
            if ($guess > $rand) {
                //update range
                $max = $guess;
                document.getElementById("rangeMax").innerHTML = $guess;
                //guess lower
                document.getElementById("guessWarning").innerHTML = "Too high! Guess Lower";
                //up guess count
                if ($guessCnt > 1) {

                    document.getElementById("life" + $guessCnt).style.color = "#85706E";
                    $guessCnt--;
                }
                else if ($guessCnt == 1) {
                    //remove last life
                    document.getElementById("life" + $guessCnt).style.color = "#85706E";

                    //display $rand
                    document.getElementById("randNumber").style.display = "block";
                    
                    //You lose! play again? (display guess count)
                    document.getElementById("guessWarning").innerHTML = "You lost!";
                    document.getElementById("startBtn").style.display = "block";
                    document.getElementById("guessBtn").style.display = "none";
                }

            }
            else if ($guess < $rand) {
                //update range
                $min = $guess;
                document.getElementById("rangeMin").innerHTML = $guess;
                //guess higher
                document.getElementById("guessWarning").innerHTML = "Too low! Guess Higher";
                //up guess count
                if ($guessCnt > 1) {

                    document.getElementById("life" + $guessCnt).style.color = "#85706E";
                    $guessCnt--;
                }
                else if ($guessCnt == 1) {
                    //remove last life
                    document.getElementById("life" + $guessCnt).style.color = "#85706E";

                    //display $rand
                    document.getElementById("randNumber").style.display = "block";

                    //You lose! play again? (display guess count)
                    document.getElementById("guessWarning").innerHTML = "You lost!";
                    document.getElementById("startBtn").style.display = "block";
                    document.getElementById("guessBtn").style.display = "none";
                }
            }
            else if ($guess == $rand) {
                //display $rand
                document.getElementById("randNumber").style.display = "block";
                //You win! play again? (display guess count)
                document.getElementById("guessWarning").innerHTML = "You got it!";
                document.getElementById("startBtn").style.display = "block";

                document.getElementById("guessBtn").style.display = "none";
            }
        }
        else{
            //number not in range
            document.getElementById("guessWarning").innerHTML = $guess + " is not in the given range";
        }
    }
    else {
        randGen();
    }

}

function resetGame() {
    for ($guessCnt = 1; $guessCnt < 6; $guessCnt++) {
        document.getElementById("life" + $guessCnt).style.color = "#B71515";
    }
    $guessCnt = 5;
    $min = 0;
    $max = 100;
    document.getElementById("randNumber").style.display = "none";
    document.getElementById("guessWarning").innerHTML = "";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("guessBtn").style.display = "block";
    document.forms["guessForm"]["guessNumber"].value = "";

    randGen();
}