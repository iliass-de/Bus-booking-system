const express = require('express');
const router = express.Router();
const db  = require('../db/alltrips');
const bodyParser= require('body-parser');


/* GET all Trips */
router.get('/all', async function (req, res) {
    const allTrips = await db.getAllItems();
    console.log(allTrips);
    res.send(allTrips);
});

/* Get custom trips*/
// test url: http://localhost:3000/trips/departue/Mannheim/destination/Berlin/2020-10-01
router.get('/departue/:depart/destination/:dest/:date', async function (req, res) {
    const trip = await db.getFromToTrip(req.params.depart,req.params.dest,req.params.date);
    res.send(trip);
});

module.exports = router;