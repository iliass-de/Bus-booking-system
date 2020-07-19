const express = require('express');
const router = express.Router();
const db  = require('../db/alltrips');


/* GET all Trips */
router.get('/all', async function (req, res) {
    const allTrips = await db.getAllItems();
    console.log(allTrips);
    res.send(allTrips);
});

module.exports = router;