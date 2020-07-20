const express = require('express');
const router = express.Router();
const db  = require('../db/alltrips');


/* GET all Trips */
router.get('/all', async function (req, res) {
    const allTrips = await db.getAllItems();
    console.log(allTrips);
    res.send(allTrips);
});

/* Get custom trips*/
router.get('/trip', async function (req, res) {
    const trip = await db.getFromToTrip("Mannheim","Frankfurt",'2020-10-01 00:00:00');
    console.log(trip);
    res.send(trip);
});

module.exports = router;