const { DeduplicateArrayCoordinate } = require('./Basic');
const SingleDrone = require('./SingleDrone');
//
class DualDrone {
  constructor(insArray=['', '']){
    this.insArray = insArray;
  }

  dualDroneDeduplicate () {
    // process droneOne data
    const droneOne = new SingleDrone(this.insArray[0]);
    const droneOneUnique = droneOne.deduplicatePath();

    // process droneTwo data
    const droneTwo = new SingleDrone(this.insArray[1]);
    const droneTwoUnique = droneTwo.deduplicatePath();

    // concat droneOneUnique and droneTwoUnique
    const allPhotoPositions = droneOneUnique.concat(droneTwoUnique);
    // deduplicate allPhotoPositions
    const allUniquePositions = new DeduplicateArrayCoordinate(allPhotoPositions);
    let uniqueArray = allUniquePositions.deduplicateArray();
    console.log(uniqueArray);

    // return
    return uniqueArray;
  }

}

module.exports = DualDrone;
