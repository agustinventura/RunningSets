DistancesEnum = {
	METERS: "meters",
	DECAMETERS: "decameters",
	HECTOMETERS: "hectometers"
}

var sets = 6;
var distances = new Map();
var distance = 50;
var selectedDistance = DistancesEnum.DECAMETERS; 

function init() {
	setBackKeyListener();
	initDistances();
	showSetsScreen();
}

$(document).ready(init);