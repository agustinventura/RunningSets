function initDistances() {
	distances.set(DistancesEnum.METERS, 0);
	distances.set(DistancesEnum.DECAMETERS, 5);
	distances.set(DistancesEnum.HECTOMETERS, 0);
}

function showDistanceScreen() {
	$("#setsScreen").hide();
	setDistanceScreenListeners();
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
	/*setClickListener($("#distanceDone"), null);*/
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
    if (distance > 1) {
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