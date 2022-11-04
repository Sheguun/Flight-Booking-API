const flight = require("../models/Flight.js");
let flightDetails = flight.exampleModel;

exports.example = (req, res) => {
	console.log("example");
	res.send("Flight example");
};

exports.getFlights = (req, res) => {
	res.json(flightDetails);
};

exports.addFlight = (req, res) => {
	const { title, time, price, date, id } = req.body;

	flightDetails.push({
		title,
		time,
		price,
		date,
		id: title.slice(10),
	});

	res.json(flightDetails);
};

exports.getSingleFlight = (req, res) => {
	const flightId = req.params.id;

	const singleFlight = flightDetails.find((flight) => {
		return flight.id.toString() === flightId;
	});

	res.json(singleFlight);
};

exports.deleteFlight = (req, res) => {
	const flightId = req.params.id;

	deletedFlight = flightDetails.filter((flight) => {
		return flight.id !== flightId;
	});

	res.json(deletedFlight);
};

exports.updateFlights = (req, res) => {
	const flightId = req.params.id;
	let { title, time, price, date } = req.body;

	flightDetails = flightDetails.map((flight) => {
		if (flight.id === flightId) {
			return {
				title,
				time,
				price,
				date,
				id: flight.id,
			};
		}
		return flight;
	});

	res.json(flightDetails);
};
