function init() {
	hideNonVisibleDivs();
    setInitialListeners();
}

function hideNonVisibleDivs() {
	
}

function setInitialListeners() {
	setClickListener($("#setsDone"), showStyles);
	$(window).off('tizenhwkey');
    $(window).on('tizenhwkey', function(e) {
    	backPressed(e);
    });
	setRotaryListener(initialScreenNavigation);
}

function setClickListener(element, listener) {
	element.off("click");
	element.click(listener);
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