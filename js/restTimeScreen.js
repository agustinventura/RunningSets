function initRestTime() {
	times.set(TimesEnum.SECONDS, 0);
	times.set(TimesEnum.DECASECONDS, 6);
	times.set(TimesEnum.HECTOSECONDS, 0);
}

function showRestTimeScreen() {
	hideAllScreens();
	//setTimesScreenListeners();
	setTimesText();
	$("#restTimeScreen").show();
}

function setTimesText() {
	for (var time in TimesEnum) {
		$("#"+TimesEnum[time]).text(times.get(TimesEnum[time]));
	}
}

/*function setDistanceScreenListeners() {
	setRotaryListener(distanceChange);
	setClickListener($("#decreaseDistance"), decreaseDistance);
	setClickListener($("#increaseDistance"), increaseDistance);
	setClickListener($("#upArrowDistanceHectometers"), increaseHectometers);
	setClickListener($("#upArrowDistanceDecameters"), increaseDecameters);
	setClickListener($("#upArrowDistanceMeters"), increaseMeters);
	setClickListener($("#hectometers"), selectHectometers);
	setClickListener($("#decameters"), selectDecameters);
	setClickListener($("#meters"), selectMeters);
	setClickListener($("#downArrowDistanceHectometers"), decreaseHectometers);
	setClickListener($("#downArrowDistanceDecameters"), decreaseDecameters);
	setClickListener($("#downArrowDistanceMeters"), decreaseMeters);
	setClickListener($("#distanceDone"), setDistance);
}

function increaseHectometers() {
	selectedDistance = DistancesEnum.HECTOMETERS;
	increaseDistance();
}

function increaseDecameters() {
	selectedDistance = DistancesEnum.DECAMETERS;
	increaseDistance();
}

function increaseMeters() {
	selectedDistance = DistancesEnum.METERS;
	increaseDistance();
}

function selectHectometers() {
	selectedDistance = DistancesEnum.HECTOMETERS;
}

function selectDecameters() {
	selectedDistance = DistancesEnum.DECAMETERS;
}

function selectMeters() {
	selectedDistance = DistancesEnum.METERS;
}

function decreaseHectometers() {
	selectedDistance = DistancesEnum.HECTOMETERS;
	decreaseDistance();
}

function decreaseDecameters() {
	selectedDistance = DistancesEnum.DECAMETERS;
	decreaseDistance();
}

function decreaseMeters() {
	selectedDistance = DistancesEnum.METERS;
	decreaseDistance();
}

function setDistance() {
	distance = distances.get(DistancesEnum.HECTOMETERS) + "" + distances.get(DistancesEnum.DECAMETERS) + "" + distances.get(DistancesEnum.METERS);
	showRestScreen();
}

function distanceChange(ev) {
	var direction = ev.detail.direction;
    if (direction === "CW") {
        increaseDistance();
    } else {
        decreaseDistance();
    }
}

function decreaseDistance() {
	var distance = distances.get(selectedDistance);
    if (distance > 0) {
        distance--;
        distances.set(selectedDistance, distance);
        $("#"+selectedDistance).text(distances.get(selectedDistance));
    }
}

function increaseDistance() {
	var distance = distances.get(selectedDistance);
    if (distance < 9) {
        distance++;
        distances.set(selectedDistance, distance);
        $("#"+selectedDistance).text(distances.get(selectedDistance));
    }
}*/