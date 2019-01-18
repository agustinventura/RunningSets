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
	$("#averageSetTime").text(((training.totalSetsTime.getTime() / 1000) / currentSet).toFixed(2));
	if (currentSet > 1) {
		$("#averageRestTime").text((restTime - ((training.totalRestTime.getTime() / 1000) / (currentSet - 1))).toFixed(2));
	} else {
		$("#averageRestTime").text("0");
	}
}