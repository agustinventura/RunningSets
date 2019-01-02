var restEndAudio = null;
var restTimer = null;
var restTimeOffset = null;

function showCurrentRestScreen() {
	hideAllScreens();
	loadRestEndAudio();
	setCurrentRestScreenListeners();
	startRest();
    $("#currentRestScreen").show();
}

function loadRestEndAudio() {
    restEndAudio = document.createElement('audio');
    restEndAudio.src = 'snd/shipbell.mp3';
    restEndAudio.name = 'shipbell';
}

function setCurrentRestScreenListeners() {
	setRotaryListener(currentRestEnd);
	setClickListener($("#currentRestDone"), currentRestEnd);
}

function currentRestPause() {
	stopRestChrono();
	showPauseScreen("currentRestScreen");
}

function currentRestResume() {
	hideAllScreens();
	setCurrentRestScreenListeners();
	startRestChrono();
	$("#currentSetScreen").show();
}

function currentRestEnd() {
	clearCurrentSetState();
	showCountdownScreen();
}

function clearCurrentRestState() {
	restEndAudio = null;
	milliseconds = null;
	stopRestChrono();
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
}

function stopRestChrono() {
	clearInterval(restTimer);
	setTimer = null;
}

function startRest() {
	tizen.power.request("SCREEN", "SCREEN_NORMAL");
	navigator.vibrate(500);
	restTimeOffset = -1;
	milliseconds = new Date(restTime*1000);
	$("#currentSetCurentRest").text(currentSet);
	$("#totalSetsCurrentRest").text(sets);
	startRestChrono();
	tizen.humanactivitymonitor.start('HRM', restHrmListener);
}

function startRestChrono() {
	setTimer = setInterval(refreshRestMilliseconds, 1);
}

function restHrmListener(hrmInfo) {
	var currentHeartRate = preprendZerosIfNeeded(hrmInfo.heartRate, 3);
	$("#currentRestBPM").text(currentHeartRate);
}

function refreshRestMilliseconds() {
	milliseconds.setMilliseconds(milliseconds.getMilliseconds() + restTimeOffset);
	if (milliseconds.getMilliseconds() === 0 && milliseconds.getMinutes() === 0 && milliseconds.getHours() === 0) {
		restTimeOffset = 1;
		restEndAudio.load();
		restEndAudio.play();
	}
	setCurrentRestFormattedTime();
}

function setCurrentRestFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(milliseconds.getMinutes(), 2);
	$("#currentRestMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(milliseconds.getSeconds(), 2);
	$("#currentRestSeconds").text(formattedSeconds);
	var formattedMilliseconds = preprendZerosIfNeeded(milliseconds.getMilliseconds(), 3);
	$("#currentRestMilliseconds").text(formattedMilliseconds);
}