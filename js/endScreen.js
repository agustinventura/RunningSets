function showEndScreen() {
	hideAllScreens();
	setEndScreenListeners();
	$("#endScreen").show();
}

function setEndScreenListeners() {
	setRotaryListener(null);
}