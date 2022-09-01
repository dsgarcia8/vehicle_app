const express = require('express');
const router = express.Router();
const vehicles = require('../services/vehicle.service');

router.get('/driver/:driverId/vehicles', async function(req, res, next) {
  try {
    res.json(await vehicles.getVehiclesByDriver(req.params.driverId));
  } catch (err) {
    console.error(`Error while getting vehicles `, err.message);
    next(err);
  }
});

router.post('/driver/:driverId', async function(req, res, next) {
  try {
    res.json(await vehicles.createVehicle(req.params.driverId, req.body));
  } catch (err) {
    console.error(`Error while creating vehicle`, err.message);
    next(err);
  }
});

router.put('/driver/:driverId/vehicle/:vehicleId', async function(req, res, next) {
  try {
    res.json(await vehicles.updateVehicle(req.params.vehicleId, req.body));
  } catch (err) {
    console.error(`Error while updating vehicle`, err.message);
    next(err);
  }
});

router.delete('/driver/:driverId/vehicle/:vehicleId', async function(req, res, next) {
  try {
    res.json(await vehicles.removeVehicle(req.params.vehicleId));
  } catch (err) {
    console.error(`Error while deleting vehicle`, err.message);
    next(err);
  }
});

module.exports = router;