var restEndAudio = null;
var restTimer = null;
var restTimeOffset = null;
var restSeconds = null;

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
	stopRestChrono();
	restEndAudio = null;
	restSeconds = null;
	tizen.power.release("SCREEN");
}

function stopRestChrono() {
	clearInterval(restTimer);
	restTimer = null;
}

function startRest() {
	tizen.power.request("SCREEN", "SCREEN_NORMAL");
	navigator.vibrate(500);
	restTimeOffset = -1;
	restSeconds = new Date(restTime);
	$("#currentSetCurrentRest").text(currentSet);
	$("#totalSetsCurrentRest").text(sets);
	startRestChrono();
}

function startRestChrono() {
	setTimer = setInterval(refreshRestMilliseconds, 1000);
}

function refreshRestMilliseconds() {
	restSeconds.setSeconds(restSeconds.getSeconds() + restTimeOffset);
	if (restSeconds.getMilliseconds() === 0 && restSeconds.getSeconds() === 0 && restSeconds.getMinutes() === 0) {
		restTimeOffset = 1;
		restEndAudio.load();
		restEndAudio.play();
	}
	setCurrentRestFormattedTime();
}

function setCurrentRestFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(restSeconds.getMinutes(), 2);
	$("#currentRestMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(restSeconds.getSeconds(), 2);
	$("#currentRestSeconds").text(formattedSeconds);
	var formattedMilliseconds = preprendZerosIfNeeded(restSeconds.getMilliseconds(), 3);
	$("#currentRestMilliseconds").text(formattedMilliseconds);
}