const {
  DroneInterface,
  AllocateInstructions,
  DeduplicateArrayCoordinate
} = require('./Basic');
const SingleDrone = require('./SingleDrone');
const DualDrone = require('./DualDrone');

//
class Deduplication  extends AllocateInstructions {
  constructor(instructionStr='', droneCount=1){
    super(instructionStr, droneCount);
  }

  deduplication () {
    let ins = this.allocatInstructions();
    if(this.droneCount === 1){
      const uniqueArr = new SingleDrone(ins);
      return uniqueArr.deduplicatePath();
    }else if(this.droneCount === 2){
      const uniqueArr = new DualDrone(ins);
      return uniqueArr.dualDroneDeduplicate();
    }else{
      throw new Error('Drone number must not greater than 2');
    }

  }
}


module.exports = {
  Deduplication
}
