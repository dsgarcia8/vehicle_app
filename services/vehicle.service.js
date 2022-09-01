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

async function updateVehicle(vehicleId, vehicle){
  const result = await db.query(
    `UPDATE vehicle 
    SET plate='${vehicle.plate}', model='${vehicle.model}', type='${vehicle.type}', 
    capacity='${vehicle.capacity}'
    WHERE id=${vehicleId}` 
  );

  let message = 'Error in updating vehicle';

  if (result.affectedRows) {
    message = 'Vehicle updated successfully';
  }

  return {message};
}

async function removeVehicle(vehicleId){
  const result = await db.query(
    `DELETE FROM vehicle WHERE id=${vehicleId}`
  );

  let message = 'Error in deleting vehicle';

  if (result.affectedRows) {
    message = 'Vehicle deleted successfully';
  }

  return {message};
}

module.exports = {
  getVehiclesByDriver,
  createVehicle,
  updateVehicle,
  removeVehicle
}
