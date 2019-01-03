function initDistances() {
	distances.set(DistancesEnum.METERS, 0);
	distances.set(DistancesEnum.DECAMETERS, 5);
	distances.set(DistancesEnum.HECTOMETERS, 0);
}

function showDistanceScreen() {
	hideAllScreens();
	setDistanceScreenListeners();
	distance = 50;
	setDistancesText();
	$("#distanceScreen").show();
}

function setDistancesText() {
	for (var distance in DistancesEnum) {
		$("#"+DistancesEnum[distance]).text(distances.get(DistancesEnum[distance]));
	}
}

function setDistanceScreenListeners() {
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
	showRestTimeScreen();
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
}