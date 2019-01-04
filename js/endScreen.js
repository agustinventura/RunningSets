function showEndScreen() {
	hideAllScreens();
	setEndScreenListeners();
	setEndScreenTexts();
	$("#endScreen").show();
}

function setEndScreenListeners() {
	setRotaryListener(null);
}

function setEndScreenTexts() {
	$("#finishedSets").text(currentSet);
	$("#totalDistance").text(currentSet * distance);
	$("#averageSetTime").text((training.totalSetsTime.getTime() / 1000) / currentSet);
	if (currentSet > 1) {
		$("#averageRestTime").text((training.totalRestTime.getTime() / 1000) / (currentSet - 1));
	} else {
		$("#averageRestTime").text("0");
	}
}