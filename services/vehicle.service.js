const db = require('./db.service');

async function getVehicles(driverId){
  console.log(driverId)
  const rows = await db.query(
    `SELECT *
    FROM vehicle
    WHERE driver_id = '${driverId}'
    `
  );

  return {
    rows
  }
}

module.exports = {
  getVehicles
}