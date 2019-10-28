
// abstract class
class DroneInterface {
  constructor(instructionStr='', droneCount=1){
    if (new.target === DroneInterface) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this.instructionStr = String(instructionStr);
    this.droneCount = +droneCount;
  }
}


// allocate instructions to single or two drones
class AllocateInstructions extends DroneInterface {
  constructor(instructionStr='', droneCount=1){
    super(instructionStr, droneCount);
  }

  allocatInstructions () {
    if(+this.droneCount === 1){
      return this.instructionStr;
    }

    if(+this.droneCount === 2) {
      const droneOneInstructions = [];
      const droneTwoInstructions = [];
      for (let i = 0; i < this.instructionStr.length; i += 2) {
          droneOneInstructions.push(this.instructionStr[i]);
          this.instructionStr[i+1] && droneTwoInstructions.push(this.instructionStr[i + 1]);
      }
      //console.log('droneOne', droneOneInstructions);
      //console.log('droneTwo', droneTwoInstructions);

      return [droneOneInstructions.join().replace(/,/g, ''), droneTwoInstructions.join().replace(/,/g, '')];
    }
    // throw error
    throw new Error('Drone number must not greater than two');
  }
}

// Deduplicate Array:
// [ [ 4, 2 ], [ 6, 2 ], [ 6, 4 ], [ 4, 4 ], [ 4, 2 ], [ 4, 0 ] ]
// [ [ 4, 2 ], [ 6, 2 ], [ 6, 4 ], [ 4, 4 ], [ 4, 0 ] ]
class DeduplicateArrayCoordinate {
  constructor(coordinateArray=[]){
    this.coordinateArray = coordinateArray;
  }

  deduplicateArray () {
    const uniqueArray = Array.from(new Set(this.coordinateArray.map(JSON.stringify)), JSON.parse);
    return uniqueArray;
  }
}

module.exports = {
  DroneInterface,
  AllocateInstructions,
  DeduplicateArrayCoordinate
}
