var values = require("../models/values.js");

/*
 * Export an init method that will define a set of routes
 * handled by this file.
 * @param app - The Express app
 */

exports.init = function (app) {

	app.get("/values/:sensorID?", getValues);
	app.post("/values", postValue);

}

var getValues = function (request, response) {

	if (request.params.sensorID != undefined) {
		
		values.show(request.params.sensorID, function (values) {
			response.send(values);
		});
		
	} else {
		
		values.index(function(values) {
			response.send(values);
		});
	}

}

var postValue = function (request, response) {

	var sensorID = request.body.sensorID;
	var value = request.body.value;
	
	values.create(sensorID, value, function () {
		response.send("Added Value to the System");
	});

}