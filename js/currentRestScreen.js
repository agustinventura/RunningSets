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
	for (var i=0; i<3; i++) {
		navigator.vibrate(100);
	}
	restTimeOffset = -10;
	restSeconds = new Date(restTime*1000);
	$("#currentSetCurrentRest").text(currentSet);
	$("#totalSetsCurrentRest").text(sets);
	startRestChrono();
}

function startRestChrono() {
	setTimer = setInterval(refreshRestMilliseconds, 10);
}

function refreshRestMilliseconds() {
	restSeconds.setMilliseconds(restSeconds.getMilliseconds() + restTimeOffset);
	if (restSeconds.getMilliseconds() === 0 && restSeconds.getSeconds() === 0 && restSeconds.getMinutes() === 0) {
		restTimeOffset = 10;
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
	var formattedMilliseconds = preprendZerosIfNeeded(Math.round(restSeconds.getMilliseconds()/10), 2);
	$("#currentRestMilliseconds").text(formattedMilliseconds);
}