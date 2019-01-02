var setStartAudio = null;
var currentSet = 0;
var milliseconds = new Date(0);
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
	stopChrono();
	showPauseScreen();
}

function currentSetResume() {
	hideAllScreens();
	startChrono();
	$("#currentSetScreen").show();
}

function currentSetEnd() {
	clearCurrentSetState();
	//showRestScreen();
}

function clearCurrentSetState() {
	setStartAudio = null;
	milliseconds = null;
	stopChrono();
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
}

function stopChrono() {
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
	startChrono();
	tizen.humanactivitymonitor.start('HRM', hrmListener);
}

function startChrono() {
	setTimer = setInterval(refreshSetMilliseconds, 1);
}

function hrmListener(hrmInfo) {
	var currentHeartRate = preprendZerosIfNeeded(hrmInfo.heartRate, 3);
	$("#BPM").text(currentHeartRate);
}

function refreshSetMilliseconds() {
	milliseconds.setMilliseconds(milliseconds.getMilliseconds()+1);
	setFormattedTime();
}

function setFormattedTime() {
	var formattedMinutes = preprendZerosIfNeeded(milliseconds.getMinutes(), 2);
	$("#currentSetMinutes").text(formattedMinutes);
	var formattedSeconds = preprendZerosIfNeeded(milliseconds.getSeconds(), 2);
	$("#currentSetSeconds").text(formattedSeconds);
	var formattedMilliseconds = preprendZerosIfNeeded(milliseconds.getMilliseconds(), 3);
	$("#currentSetMilliseconds").text(formattedMilliseconds);
}

function preprendZerosIfNeeded(number, size) {
	var numberLength = number.toString().length;
	var numberOfZeroes = size - numberLength;
	for (var i=0; i<numberOfZeroes; i++) {
		number = "0" + number;
	}
	return number;
}