function showSetsScreen() {
	hideAllScreens();
	setSetsScreenListeners();
	currentSet = 0;
    $("#setsNumber").text(sets);
    $("#setsScreen").show();
}

function setSetsScreenListeners() {
	setRotaryListener(setsChange);
	setClickListener($("#decreaseSets"), decreaseSets);
	setClickListener($("#increaseSets"), increaseSets);
	setClickListener($("#upArrowSets"), increaseSets);
	setClickListener($("#downArrowSets"), decreaseSets);
	setClickListener($("#setsDone"), showDistanceScreen);
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