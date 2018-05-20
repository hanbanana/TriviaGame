$(document).ready(function () {
    $('.wrapper').hide();
    $('.restart').hide();
    $('.done').hide();

    $(".startGame").on("click", function (start) {
        $('.wrapper').show();
        $('.startGame').hide();
        $('.restart').hide();
        $('.done').show();

        var number = 30;

        function decrement() {
            number--;
            $('#timeLeft').text(number + ' seconds');

            if (number === 0) {
                stop();
                $('.message').text('times up!');
                $('.wrapper').hide();
                $('#doneButton').hide();
                $('.restart').show();
                checkAnswers();
            }
        }

        function run() {
            counter = setInterval(decrement, 1000);
        }
        function stop() {
            clearInterval(counter);
        }
        run();

        $('#doneButton').on('click', function () {
            stop();
            rSummary();
            $('.wrapper').hide();
            $('.restart').show();
            $('#doneButton').hide();
            resetQuestion();
        })

        function resetQuestion() {
            $('.question').reset();
        }

        var counter;
        var gcount = 0;
        var wcount = 0;
        var unanswered = 0;

        function rSummary() {
            var alldone = $('<h1>').html('All Done!');
            var canswers = $('<p>').html('Correct answers: ' + gcount);
            var wanswers = $('<p>').html('Incorrect answers: ' + wcount);
            var cunanswered = $('<p>').html('Unanswered: ' + unanswered);
            var newclass = $('<div class= "newResult">');
            newclass.append(canswers);
            newclass.append(wanswers);
            newclass.append(cunanswered);
            $('.results').append(newclass);
        }

        $('input[type=radio]').on("change", function () {
            gcount = $('input[value=goodanswer]:checked').length;
            wcount = $('input[value=wrong]:checked').length;
            unanswered = (7 - (gcount + wcount));
        });

        $('#restartButton').on('click', function () {
            location.reload();
        })

    });

});
