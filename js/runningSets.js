var sets = 6;

function init() {
	hideNonVisibleDivs();
	showSetsScreen();
}

function hideNonVisibleDivs() {
	
}

function showSetsScreen() {
	setSetsScreenListeners();
    $("#setsNumber").text(sets);
}

function setSetsScreenListeners() {
	setRotaryListener(setsChange);
	setClickListener($("#decreaseSets"), decreaseSets);
	setClickListener($("#increaseSets"), increaseSets);
	setClickListener($("#upArrowSets"), increaseSets);
	setClickListener($("#downArrowSets"), decreaseSets);
	setClickListener($("#setsDone"), setsChange);
	$(window).off('tizenhwkey');
    $(window).on('tizenhwkey', function(e) {
    	backPressed(e);
    });
}

function setsChange(ev) {
	var direction = ev.detail.direction;
    if (direction === "CW") {
        increaseSets();
    } else {
        decreaseSets();
    }
}

function decreaseSets() {
    if (sets > 1) {
        sets--;
        $("#setsNumber").text(sets);
    }
}

function increaseSets() {
    sets++;
    $("#setsNumber").text(sets);
}

function setClickListener(element, listener) {
	element.off("click");
	element.click(listener);
}

function setRotaryListener(listener) {
	$(document).off('rotarydetent');
	$(document).on('rotarydetent', listener);
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
	}
}

function exit() {
    tizen.application.getCurrentApplication().exit();
}

$(document).ready(init);