var setStartAudio = null;
var setTimer = null;
var setSeconds = null;

function showCurrentSetScreen() {
	hideAllScreens();
	loadSetStartAudio();
	setCurrentSetScreenListeners();
	stopSetChrono();
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
		showEndScreen();
	} else {
		showCurrentRestScreen();
	}
}

function clearCurrentSetState() {
	stopSetChrono();
	setStartAudio = null;
	setSeconds = null;
	tizen.power.release("SCREEN");
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
	setSeconds = new Date(0);
	currentSet++;
	$("#currentSet").text(currentSet);
	$("#totalSets").text(sets);
	startSetChrono();
}

function startSetChrono() {
	setTimer = setInterval(refreshSetMilliseconds, 10);
}

function refreshSetMilliseconds() {
	setSeconds.setMilliseconds(setSeconds.getMilliseconds()+10);
	setCurrentSetFormattedTime();
}

function setCurrentSetFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(setSeconds.getMinutes(), 2);
	$("#currentSetMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(setSeconds.getSeconds(), 2);
	$("#currentSetSeconds").text(formattedSeconds);
	var formattedMilliseconds = preprendZerosIfNeeded(Math.round(setSeconds.getMilliseconds()/10), 2);
	$("#currentSetMilliseconds").text(formattedMilliseconds);
}