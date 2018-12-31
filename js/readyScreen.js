function showReadyScreen() {
	hideAllScreens();
	setReadyScreenListeners();
	$("#totalSets").text(sets);
	$("#distancePerSet").text(parseInt(distance) + " m");
	$("#restTimePerSet").text(parseInt(restTime) + " s");
	$("#readyScreen").show();
}

function setReadyScreenListeners() {
	setClickListener($("#letsgo"), showCountdownScreen);
	setClickListener($("#notReady"), showRestTimeScreen);
}