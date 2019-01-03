var restEndAudio = null;
var restTimer = null;
var restTimeOffset = null;
var restSeconds = null;

function showCurrentRestScreen() {
	hideAllScreens();
	loadRestEndAudio();
	setCurrentRestScreenListeners();
	stopRestChrono();
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
	$("#currentRestScreen").show();
}

function currentRestEnd() {
	clearCurrentSetState();
	updateTrainingRest();
	showCountdownScreen();
}

function updateTrainingRest() {
	training.totalRestTime.setTime(training.totalRestTime.getTime() + restSeconds.getTime());
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
	restTimeOffset = -10;
	restSeconds = new Date(restTime*1000);
	$("#currentSetCurrentRest").text(currentSet);
	$("#totalSetsCurrentRest").text(sets);
	startRestChrono();
}

function startRestChrono() {
	restTimer = setInterval(refreshRestMilliseconds, 10);
}

function refreshRestMilliseconds() {
	restSeconds.setMilliseconds(restSeconds.getMilliseconds() + restTimeOffset);
	if (restSeconds.getMilliseconds() === 0 && restSeconds.getSeconds() === 0 && restSeconds.getMinutes() === 0) {
		restTimeOffset = 10;
		restEndAudio.load();
		restEndAudio.play();
		navigator.vibrate([1000, 1000, 1000]);
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