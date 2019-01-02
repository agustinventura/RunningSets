function showPauseScreen() {
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
	currentSetResume();
}