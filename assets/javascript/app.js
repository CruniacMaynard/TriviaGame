// questions

var questions = [{
            ques: "What year did the Cavs win the NBA title?",
            ans: ["1986", "2007", "2016", "2017"],
            name: "title",
            correct: "2016",
            divClass: ".title"
        },
        {
            ques: "Who has the most points in a game as a Cav.",
            ans: ["LeBron James", "Kyrie Irving", "Kevin Love", "Kyrie and LeBron"],
            name: "record",
            correct: "Kyrie and LeBron",
            divClass: ".record"
        },
        {
            ques: "Which player was on the Cavs Championship roster",
            ans: ["Dwayne Wade", "Derrick Rose", "Kevin Love", "Dion Waiters"],
            name: "roster",
            correct: "Kevin Love",
            divClass: ".roster"
        },
        {
            ques: "What are the Cavs team colors?",
            ans: ["Orange & White", "Black & White", "Wine & Gold", "Blue & Red"],
            name: "colors",
            correct: "Wine & Gold",
            divClass: ".colors"
        },
        {
            ques: "Who is the current coach of the Cavs",
            ans: ["LeBron James", "David Blatt", "Ty Lue", "Mike Brown"],
            name: "coach",
            correct: "Ty Lue",
            divClass: ".coach"
        },
        {
            ques: "Who is the owner of the Cleveland Cavs?",
            ans: ["Jerry Jones", "Dan Gilbert", "Barack Obama", "Julius Caesar"],
            name: "owner",
            correct: "Dan Gilbert",
            divClass: ".owner"
        },
    ] 

var labels = ["first", "second", "third", "forth"];



var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});



var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
 

    for (var j = 0; j < 6; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
  

        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
       

            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

          
          
            clearInterval(timer);
            return;
        }
    }, 1000);


    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; 





var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

   

    for (var i = 0; i < 6; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    

    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz
