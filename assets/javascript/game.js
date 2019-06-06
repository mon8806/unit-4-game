

//JQUery is fuckn ready
$(function () {
    var randomNum;
    var redGem;
    var blueGem;
    var yellowGem;
    var greenGem;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    resetNumbers();
    traceLog('ResentNumber called')


    $("#red").on('click', function () {
        totalScore += redGem // shorthand for totalScore = totalScore +redgem

        //call evaluate here
        evaluate()
        traceLog("green button click")
    });
    $("#blue").on('click', function () {
        totalScore += blueGem // shorthand for totalScore = totalScore + blueGem

        //call evaluate here
        evaluate()
        traceLog("blue button click")
    });
    $("#yellow").on('click', function () {
        totalScore += yellowGem // shorthand for totalScore = totalScore + yellowGem

        //call evaluate here
        evaluate()
        traceLog("yellow button click")
    });
    $("#green").on('click', function () {
        totalScore += greenGem // shorthand for totalScore = totalScore +greenGem

        //call evaluate here
        evaluate()
        traceLog("green button click")
    });



    //Functions
    // function addGemAndEvalute(gem) {
    //     totalScore += gem
    //     evaluate()
    //     traceLog(`${gem} button click`)
    // }

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function resetNumbers() {
            randomNum = randomIntFromInterval(19, 120);
            redGem = randomIntFromInterval(1, 12);
            blueGem = randomIntFromInterval(1, 12);
            yellowGem = randomIntFromInterval(1, 12);
            greenGem = randomIntFromInterval(1, 12);
            totalScore = 0;
            $("#banner").hide();
            $("#score").text(0);
        }

        function traceLog(action) {
            console.log(`${action} randomNum=${randomNum} redGem=${redGem} blueGem=${blueGem} yellowGem=${yellowGem} greenGem=${greenGem} Wins:${wins} Losses:${losses} totalScore=${totalScore}`)
        }

        function evaluate() {
            //add logic to check if totalScore is correct or not

            $("#score").text(`totalScore=${totalScore}`)
            $("#random").text(`randomNum=${randomNum}`)
            if (totalScore === randomNum) {
                wins++;
                $("#banner").text("You Win!")

                $("#banner").show(function () {

                });
                $("#Winner").text(`Wins: ${wins}`);

                setTimeout(function () { resetNumbers(); }, 3000);


            } else if (totalScore > randomNum) {
                losses++;
                $("#banner").text("You Lose!")

                $("#banner").show(function () {

                });
                $("#Loser").text(`Losses: ${losses}`);


                setTimeout(function () { resetNumbers(); }, 3000);




            }
            else {
                console.log("not equals");
            }
        }



        ////End
    });
