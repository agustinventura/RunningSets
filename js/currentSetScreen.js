var setStartAudio = null;

function showCurrentSetScreen() {
	hideAllScreens();
	loadSetStartAudio();
	startSet();
    $("#currentSetScreen").show();
}

function loadSetStartAudio() {
    setStartAudio = document.createElement('audio');
    setStartAudio.src = 'snd/gunshot.mp3';
    setStartAudio.name = 'gunshot';
}

function startSet() {
	tizen.power.request("SCREEN", "SCREEN_NORMAL");
	navigator.vibrate(500);
	setStartAudio.load();
	setStartAudio.play();
}