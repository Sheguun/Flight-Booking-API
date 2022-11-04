const express = require("express");

const router = express.Router();
const {
	getFlights,
	addFlight,
	getSingleFlight,
	deleteFlight,
	updateFlights,
} = require("../controllers/flightController.js");

router.get("/", getFlights);

router.post("/", addFlight);

router.get("/:id", getSingleFlight);

router.delete("/:id", deleteFlight);

router.put("/:id", updateFlights);

module.exports = router;