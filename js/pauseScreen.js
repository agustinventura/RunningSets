var originalScreen = null;

function showPauseScreen(screen) {
	originalScreen = screen;
	hideAllScreens();
	setPauseScreenListeners();
	$("#pauseScreen").show();
}

function setPauseScreenListeners() {
	setRotaryListener(null);
	setClickListener($("#exit"), exit);
	setClickListener($("#continue"), hidePauseScreen);
}

function hidePauseScreen() {
	$("#pauseScreen").hide();
	if (originalScreen === "currentRestScreen") {
		currentRestResume();
	} else if (originalScreen === "currentSetScreen") {
		currentSetResume();
	}
}