/* Value Class Declaration */

var Value = mongoose.model('Value', {
	sensorID: String,
	timestamp: { type : Date, default: Date.now },
	value: Number
});

/* Model Functions */

exports.index = function (callback) {

	Value.find(function (error, values) {
		if (error) {
			return console.error(error);
		}

		callback(values);
	}).select('-__v -_id');

}

exports.show = function (sensorID, callback) {

	Value.find({
		sensorID: sensorID
	}, function (error, values) {
		if (error) {
			return console.error(error);
		}

		callback(values);
	}).select('-__v -_id -sensorID');

}

exports.create = function (sensorID, value, callback) {

	var value = new Value({
		sensorID: sensorID,
		value: value
	});

	value.save(function (error) {
		if (error) {
			console.error(error);
		}

		callback();
	});

}