const db = require('./db.service');

async function getVehiclesByDriver(driverId){
  const rows = await db.query(
    `SELECT *
    FROM vehicle
    WHERE driver_id = '${driverId}'
    `
  );

  return {
    vehicles: rows
  }
}

async function createVehicle(driverId, vehicle){
  console.log(vehicle)
  const result = await db.query(
    `INSERT INTO vehicle (driver_id, plate, model, type, capacity)
    VALUES (${driverId}, '${vehicle.plate}', '${vehicle.model}', '${vehicle.type}', '${vehicle.capacity}')`
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Vehicle created successfully';
  }

  return {message};
}

module.exports = {
  getVehiclesByDriver,
  createVehicle
}
