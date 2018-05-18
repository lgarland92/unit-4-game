function game() {

    var wins = 0;
    var losses = 0;


    $("#wins").html("Wins:" + wins);

    $("#losses").html("Losses:" + losses);

    function round() {

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

        

    };

    function check() {
        if (round.score === round.goal) {
            wins++;

            alert("You win!");

            round();
        };

        if (round.score > round.goal) {
            losses++;

            alert("You lose!");

            round();

        };
    }
    
    round();
};

game();