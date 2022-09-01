const express = require('express');
const router = express.Router();
const vehiclesByClient = require('../services/vehicle.service');

router.get('/driver/:driverId/vehicles', async function(req, res, next) {
  try {
    const response = res.json(await vehiclesByClient.getVehicles(req.params.driverId));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;