var countdownInterval = null;

function showCountdownScreen() {
	hideAllScreens();
	countdownSeconds = 3;
	countdown(countdownSeconds);
	$("#countdownScreen").show();
}

function countdown(seconds) {
    if (seconds === 1) {
    	stopInterval();
        //showSerieScreen();
    } else {
        countdownInterval = setInterval(function () {
            refreshSeconds();
        }, 1000);
    }
}

function stopInterval() {
    clearInterval(countdownInterval);
    countdownInterval = null;
}

function refreshSeconds() {
    countdownSeconds--;
    if (countdownSeconds === 0) {
    	stopInterval();
        //showSerieScreen();
    } else {
    	$("#countdownSeconds").text(countdownSeconds);
    }
}