function showReadyScreen() {
	hideAllScreens();
	setReadyScreenListeners();
	$("#totalSetsReview").text(sets);
	$("#distancePerSet").text(parseInt(distance) + " m");
	$("#restTimePerSet").text(parseInt(restTime) + " s");
	training = getNewTraining();
	$("#readyScreen").show();
}

function setReadyScreenListeners() {
	setClickListener($("#letsgo"), showCountdownScreen);
	setClickListener($("#notReady"), showRestTimeScreen);
}