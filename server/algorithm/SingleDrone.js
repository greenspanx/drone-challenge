const {
  DroneInterface,
  AllocateInstructions,
  DeduplicateArrayCoordinate
} = require('./Basic');



class SingleDrone extends DeduplicateArrayCoordinate {
   constructor(instructionStr='', coordinateArray=[]){
     super(coordinateArray);
     this.instructionStr = instructionStr;
  }

  // get index of each x in instruction
  getIndexOfEachx (instructionStr) {
    // store index value of each x in an array
    const indexValueOfx = [];
    for(let i = 0; i < instructionStr.length; i ++){
      if(instructionStr[i] == 'x' ){
        indexValueOfx.push(i);
      }
    }
    // return the array which stored index value of each x
    return indexValueOfx;
  };

  deduplicatePath () {
    const indexValueOfx = this.getIndexOfEachx(this.instructionStr);

    for(let i = 0; i < indexValueOfx.length; i++){
      let fragmentRoute = this.instructionStr.slice(0,indexValueOfx[i]);
      let singleCoordinate = [];

      // count ^ v > <
      let northCounts = (String(fragmentRoute).match(/\^/g) || []).length;
      let southCounts = (String(fragmentRoute).match(/v/g) || []).length;
      let eastCounts = (String(fragmentRoute).match(/>/g) || []).length;
      let westCounts = (String(fragmentRoute).match(/</g) || []).length;

      let xCoordinate = eastCounts - westCounts;
      let yCoordinate = northCounts - southCounts;

      singleCoordinate = [xCoordinate, yCoordinate];
      this.coordinateArray.push(singleCoordinate);

    }

    // finally, deduplicate array this.coordinateArray
    console.log(this.coordinateArray);

    let uniqueArray = this.deduplicateArray(this.coordinateArray);

    console.log(uniqueArray);
    // return
    return uniqueArray;
  }

}

module.exports = SingleDrone;
