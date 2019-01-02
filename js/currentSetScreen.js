var setStartAudio = null;
var setTimer = null;

function showCurrentSetScreen() {
	hideAllScreens();
	loadSetStartAudio();
	setCurrentSetScreenListeners();
	startSet();
    $("#currentSetScreen").show();
}

function loadSetStartAudio() {
    setStartAudio = document.createElement('audio');
    setStartAudio.src = 'snd/gunshot.mp3';
    setStartAudio.name = 'gunshot';
}

function setCurrentSetScreenListeners() {
	setRotaryListener(currentSetEnd);
	setClickListener($("#currentSetDone"), currentSetEnd);
}

function currentSetPause() {
	stopSetChrono();
	showPauseScreen("currentSetScreen");
}

function currentSetResume() {
	hideAllScreens();
	setCurrentSetScreenListeners();
	startSetChrono();
	$("#currentSetScreen").show();
}

function currentSetEnd() {
	clearCurrentSetState();
	if (currentSet === sets) {
		//showEndScreen();
	} else {
		showCurrentRestScreen();
	}
}

function clearCurrentSetState() {
	setStartAudio = null;
	milliseconds = null;
	stopSetChrono();
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
}

function stopSetChrono() {
	clearInterval(setTimer);
	setTimer = null;
}

function startSet() {
	tizen.power.request("SCREEN", "SCREEN_NORMAL");
	navigator.vibrate(500);
	setStartAudio.load();
	setStartAudio.play();
	milliseconds = new Date(0);
	currentSet++;
	$("#currentSet").text(currentSet);
	$("#totalSets").text(sets);
	startSetChrono();
	tizen.humanactivitymonitor.start('HRM', setHrmListener);
}

function startSetChrono() {
	setTimer = setInterval(refreshSetMilliseconds, 1);
}

function setHrmListener(hrmInfo) {
	var currentHeartRate = preprendZerosIfNeeded(hrmInfo.heartRate, 3);
	$("#setBPM").text(currentHeartRate);
}

function refreshSetMilliseconds() {
	milliseconds.setMilliseconds(milliseconds.getMilliseconds()+1);
	setCurrentSetFormattedTime();
}

function setCurrentSetFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(milliseconds.getMinutes(), 2);
	$("#currentSetMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(milliseconds.getSeconds(), 2);
	$("#currentSetSeconds").text(formattedSeconds);
	var formattedMilliseconds = preprendZerosIfNeeded(milliseconds.getMilliseconds(), 3);
	$("#currentSetMilliseconds").text(formattedMilliseconds);
}