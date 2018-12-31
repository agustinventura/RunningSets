function initRestTime() {
	times.set(TimesEnum.SECONDS, 0);
	times.set(TimesEnum.DECASECONDS, 6);
	times.set(TimesEnum.HECTOSECONDS, 0);
}

function showRestTimeScreen() {
	hideAllScreens();
	setRestTimeScreenListeners();
	setTimesText();
	$("#restTimeScreen").show();
}

function setTimesText() {
	for (var time in TimesEnum) {
		$("#"+TimesEnum[time]).text(times.get(TimesEnum[time]));
	}
}

function setRestTimeScreenListeners() {
	setRotaryListener(timeChange);
	setClickListener($("#decreaseRestTime"), decreaseTime);
	setClickListener($("#increaseRestTime"), increaseTime);
	setClickListener($("#upArrowRestTimeHectoseconds"), increaseHectoseconds);
	setClickListener($("#upArrowRestTimeDecaseconds"), increaseDecaseconds);
	setClickListener($("#upArrowRestTimeSeconds"), increaseSeconds);
	setClickListener($("#hectoseconds"), selectHectoseconds);
	setClickListener($("#decaseconds"), selectDecaseconds);
	setClickListener($("#seconds"), selectSeconds);
	setClickListener($("#downArrowRestTimeHectoseconds"), decreaseHectoseconds);
	setClickListener($("#downArrowRestTimeDecaseconds"), decreaseDecaseconds);
	setClickListener($("#downArrowRestTimeSeconds"), decreaseSeconds);
	setClickListener($("#restTimeDone"), setTime);
}

function increaseHectoseconds() {
	selectedRestTime = TimesEnum.HECTOSECONDS;
	increaseTime();
}

function increaseDecaseconds() {
	selectedRestTime = TimesEnum.DECASECONDS;
	increaseTime();
}

function increaseSeconds() {
	selectedRestTime = TimesEnum.SECONDS;
	increaseTime();
}

function selectHectoseconds() {
	selectedDistance = TimesEnum.HECTOSECONDS;
}

function selectDecaseconds() {
	selectedRestTime = TimesEnum.DECASECONDS;
}

function selectSeconds() {
	selectedRestTime = TimesEnum.SECONDS;
}

function decreaseHectoseconds() {
	selectedRestTime = TimesEnum.HECTOSECONDS;
	decreaseTime();
}

function decreaseDecaseconds() {
	selectedRestTime = TimesEnum.DECASECONDS;
	decreaseTime();
}

function decreaseSeconds() {
	selectedRestTime = TimesEnum.SECONDS;
	decreaseTime();
}

function setTime() {
	time = times.get(TimesEnum.HECTOSECONDS) + "" + times.get(TimesEnum.DECASECONDS) + "" + times.get(TimesEnum.SECONDS);
	showReadyScreen();
}

function timeChange(ev) {
	var direction = ev.detail.direction;
    if (direction === "CW") {
        increaseTime();
    } else {
        decreaseTime();
    }
}

function decreaseTime() {
	var time = times.get(selectedRestTime);
    if (time > 0) {
    	time--;
    	times.set(selectedRestTime, time);
        $("#"+selectedRestTime).text(times.get(selectedRestTime));
    }
}

function increaseTime() {
	var time = times.get(selectedRestTime);
    if (time < 9) {
        time++;
        times.set(selectedRestTime, time);
        $("#"+selectedRestTime).text(times.get(selectedRestTime));
    }
}