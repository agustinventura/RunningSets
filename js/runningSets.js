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
var distances = {
		meters: 0,
		decameters: 0,
		hectometers: 0,
};
var distance = 50;
var selectedDistance = DistancesEnum.DECAMETERS;
var times = {
		seconds: 0,
		decaseconds: 0,
		hectoseconds: 0,
};
var restTime = 60;
var selectedRestTime = TimesEnum.SECONDS;
var countdownSeconds = 3;
var currentSet = 0;
var training = null;

function init() {
	setBackKeyListener();
	tizen.humanactivitymonitor.start('HRM', hrmListener);
	initDistances();
	initRestTime();
	showSetsScreen();
}

function hrmListener(hrmInfo) {
	var currentHeartRate = preprendZerosIfNeeded(hrmInfo.heartRate, 3);
	$("#setBPM").text(currentHeartRate);
	$("#currentRestBPM").text(currentHeartRate);
}

function getNewTraining() {
	var training = {
		totalSetsTime: new Date(0),
		totalRestTime: new Date(0)
	};
	return training;
}

$(document).ready(init);