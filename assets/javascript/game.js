function game() {

    var wins = 0;
    var losses = 0;
    

    $("#wins").html("Wins:" + wins);

    $("#losses").html("Losses:" + losses);

    function round() {

        var score = 0;

        var goal = Math.floor(Math.random() * 31) + 50;
        console.log(goal);

        var crystalOne = Math.floor(Math.random() * 20) + 1;
        console.log(crystalOne);

        var crystalTwo = Math.floor(Math.random() * 20) + 1;
        console.log(crystalTwo);

        var crystalThree = Math.floor(Math.random() * 20) + 1;
        console.log(crystalThree);

        var crystalFour = Math.floor(Math.random() * 20) + 1;
        console.log(crystalFour);

        $("#crystalOne").on("click", function () {
            score = score + crystalOne;
            console.log(score);
            $("#score").html(score);
        });

        $("#crystalTwo").on("click", function () {
            score = score + crystalTwo;
            console.log(score);
            $("#score").html(score);
        });

        $("#crystalThree").on("click", function () {
            score = score + crystalThree;
            console.log(score);
            $("#score").html(score);
        });

        $("#crystalFour").on("click", function () {
            score = score + crystalFour;
            console.log(score);
            $("#score").html(score);
        });

    };

    if (score === round.goal) {
        wins++;

        alert("You win!");

        round();
    };

    if (score > round.goal) {
        losses++;


        alert("You lose!");

        round();

    };

    round();
};

game();