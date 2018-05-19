

var wins = 0;
var losses = 0;

function round() {
    //unsure if I should be using this function
    // function setScore(){
    var score = 0;

    var goal = Math.floor(Math.random() * 100) + 20;
    console.log(goal);

    var crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log(crystalOne);

    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log(crystalTwo);

    var crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log(crystalThree);

    var crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log(crystalFour);
    // };

    $("#crystalOne").on("click", function () {
        score = score + crystalOne;
        console.log(score);
        $("#score").html("Current Score: " + score + "Goal: " + goal);
        check();
    });

    $("#crystalTwo").on("click", function () {
        score = score + crystalTwo;
        console.log(score);
        $("#score").html("Current Score: " + score + "Goal: " + goal);
        check();
    });

    $("#crystalThree").on("click", function () {
        score = score + crystalThree;
        console.log(score);
        $("#score").html("Current Score: " + score + "Goal: " + goal);
        check();
    });

    $("#crystalFour").on("click", function () {
        score = score + crystalFour;
        console.log(score);
        $("#score").html("Current Score: " + score + "Goal: " + goal);
        check();
    });

    function check() {
        if (score === goal) {
            wins++;

            alert("You win!");
            console.log(score);
            score= 0;
            $("#wins").html("Wins:" + wins);

            round();
        }

        else if (score > goal) {
            losses++;

            alert("You lose!");

            console.log(score);
            score= 0;

            $("#losses").html("Losses:" + losses);

            round();

        }

        else if (score < goal) {
            console.log("Keep going!");
        }
    };



};



round();
