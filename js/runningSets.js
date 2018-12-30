DistancesEnum = {
	METERS: "meters",
	DECAMETERS: "decameters",
	HECTOMETERS: "hectometers"
}

TimesEnum = {
	SECONDS: "seconds",
	DECASECONDS: "decaseconds",
	HECTOSECONDS: "hectoseconds"
}

var sets = 6;
var distances = new Map();
var distance = 50;
var selectedDistance = DistancesEnum.DECAMETERS;
var times = new Map();
var restTime = 60;
var selectedRestTime = TimesEnum.SECONDS;

function init() {
	setBackKeyListener();
	initDistances();
	initRestTime();
	showSetsScreen();
}

$(document).ready(init);