function initDistances() {
	distances[DistancesEnum.METERS] = 0;
	distances[DistancesEnum.DECAMETERS] = 5;
	distances[DistancesEnum.HECTOMETERS] = 0;
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
		$("#"+DistancesEnum[distance]).text(distances[DistancesEnum[distance]]);
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
	distance = distances[DistancesEnum.HECTOMETERS] + "" + distances[DistancesEnum.DECAMETERS] + "" + distances[DistancesEnum.METERS];
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
	var distance = distances[selectedDistance];
    if (distance > 0) {
        distance--;
        distances[selectedDistance] = distance;
        $("#"+selectedDistance).text(distances[selectedDistance]);
    }
}

function increaseDistance() {
	var distance = distances[selectedDistance];
    if (distance < 9) {
        distance++;
        distances[selectedDistance] = distance;
        $("#"+selectedDistance).text(distances[selectedDistance]);
    }
}