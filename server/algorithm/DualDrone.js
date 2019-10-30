const { DeduplicateArrayCoordinate } = require('./Basic');
const SingleDrone = require('./SingleDrone');
//
class DualDrone extends DeduplicateArrayCoordinate {
  constructor(insArray=['', ''], coordinateArray=[]){
    super(coordinateArray=[]);
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
    this.coordinateArray = droneOneUnique.concat(droneTwoUnique);
    // deduplicate allPhotoPositions
    let uniqueArray = this.deduplicateArray(this.coordinateArray);
    console.log(uniqueArray);

    // return
    return uniqueArray;
  }

}

module.exports = DualDrone;
