var countDownDate = new Date("Dec 25, 2025 00:00:01").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
        clearInterval(x);
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    var formattedHours = String(hours).padStart(2, '0');
    var formattedMinutes = String(minutes).padStart(2, '0');
    var formattedSeconds = String(seconds).padStart(2, '0');

    document.querySelector("#days p").textContent = days;
    document.querySelector("#hours p").textContent = formattedHours;
    document.querySelector("#minutes p").textContent = formattedMinutes;
    document.querySelector("#seconds p").textContent = formattedSeconds;

    if(distance < 0) {
        clearInterval(x);
        document.querySelector("#days p").textContent = "00";
    document.querySelector("#hours p").textContent = "00";
    document.querySelector("#minutes p").textContent = "00";
    document.querySelector("#seconds p").textContent = "00";
    }

}, 1000);