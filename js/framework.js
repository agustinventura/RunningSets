function hideAllScreens() {
	$("#setsScreen").hide();
	$("#distanceScreen").hide();
	$("#restTimeScreen").hide();
	$("#readyScreen").hide();
	$("#countdownScreen").hide();
	$("#currentSetScreen").hide();
	$("#pauseScreen").hide();
	$("#currentRestScreen").hide();
	$("#endScreen").hide();
}

function setClickListener(element, listener) {
	element.off("click");
	element.click(listener);
}

function setRotaryListener(listener) {
	$(document).off('rotarydetent');
	$(document).on('rotarydetent', listener);
}

function setBackKeyListener() {
	$(window).off('tizenhwkey');
    $(window).on('tizenhwkey', function(e) {
    	backPressed(e);
    });
}

function backPressed(e) {
    var activeDivId = $('.clock:visible').not(":hidden").prop("id")
    if (e.originalEvent.keyName === 'back') {
		goBack(activeDivId);
    }
}

function goBack(activeDivId) {
	switch (activeDivId) {
		case "setsScreen":
			exit();
			break;
		case "distanceScreen":
			showSetsScreen();
			break;
		case "restTimeScreen":
			showDistanceScreen();
			break;
		case "readyScreen":
			showRestTimeScreen();
			break;
		case "countdownScreen":
			showReadyScreen();
			break;
		case "currentSetScreen":
			currentSetPause();
			break;
		case "currentRestScreen":
			currentRestPause();
			break;
		case "pauseScreen":
			hidePauseScreen();
			break;
		case "endScreen":
			showSetsScreen();
			break;
	}
}

function exit() {
	tizen.power.release("SCREEN");
	tizen.humanactivitymonitor.stop('HRM');
    tizen.application.getCurrentApplication().exit();
}


function preprendZerosIfNeeded(number, size) {
	var numberLength = number.toString().length;
	var numberOfZeroes = size - numberLength;
	for (var i=0; i<numberOfZeroes; i++) {
		number = "0" + number;
	}
	return number;
}