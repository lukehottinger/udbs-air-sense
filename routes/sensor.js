var sensors = require("../models/sensors.js");

exports.init = function (app) {

	app.get("/sensors/:sensorID?", getSensors);
	app.post("/sensors", postSensor);

}

var getSensors = function (request, response) {

	if (request.params.sensorID != undefined) {
		
		sensors.show(request.params.sensorID, function (sensors) {
			response.send(sensors);
		});
		
	} else {
		
		sensors.index(function (sensors) {
			response.send(sensors);
		});
		
	}

}

var postSensor = function (request, response) {

	var name = request.body.name;
	var description = request.body.description;
	var active = request.body.active;
	
	sensors.create(name, description, active, function () {
		response.send("Added Sensor to the System");
	});

}