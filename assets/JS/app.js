$(function() {
    /*Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId=$this.data('scroll'), 
            blockOffset= $(blockId).offset().top; 

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Sider */
    $("[data-slider]").slick({
        Infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /* Countdown */
    let timeLeft = 30 * 60; 

        function updateTimer() {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

            document.getElementById('countdown').innerText = `${minutes}:${formattedSeconds}`;

            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                document.getElementById('timer').innerText = 'Время вышло!';
            }
        }

        const timerInterval = setInterval(updateTimer, 1000);
});

