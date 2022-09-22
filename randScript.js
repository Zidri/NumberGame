
var $min = 0;
var $max = 0;
var $rand = 0;

function randGen() {



    while ($min >= $max) {
        $min = Math.floor(Math.random() * (100 + 1));
        $max = Math.floor(Math.random() * (100 + 1));
    }

    console.log($min + " < " + $max);

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
    var $guess = document.forms["guessForm"]["guessNumber"].value;

    console.log("Your guess: "+$guess);

    if ($guess != null && $guess > $min && $guess < $max){
        if($guess > $rand){
            //update range

            //guess lower

            //up guess count
        }
        else if($guess < $rand){
            //update range

            //guess higher

            //up guess count
        }
        else if($guess === $rand){
            //display $rand

            //You win! play again? (display guess count)
        }
    }
    else{
        //number not in range
        document.getElementsByClassName("guessWarning").innerHTML = "Your guess is not in the given range";
    }
}