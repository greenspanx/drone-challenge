// Deduplicate Array:
// [ [ 4, 2 ], [ 6, 2 ], [ 6, 4 ], [ 4, 4 ], [ 4, 2 ], [ 4, 0 ] ]
class DeduplicateArrayCoordinate {
  constructor(coordinateArray=[]){
    this.coordinateArray = coordinateArray;
  }

  DeduplicateArray () {
    const uniqueArray = Array.from(new Set(this.coordinateArray.map(JSON.stringify)), JSON.parse);
    return uniqueArray;
  }

}

//
class SinglePathDeduplication {
  constructor(instructionStr=''){
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
    let allCoordinate = [];

    for(let i = 0; i < indexValueOfx.length; i++){
      let fragmentRoute = this.instructionStr.slice(0,indexValueOfx[i]);
      let singleCoordinate = [];

      // count ^ v > <
      let northCounts = (String(fragmentRoute).match(/\^/g) || []).length;
      let southCounts = (String(fragmentRoute).match(/v/g) || []).length;
      let eastCounts = (String(fragmentRoute).match(/>/g) || []).length;
      let westCounts = (String(fragmentRoute).match(/</g) || []).length;

      let xCoordinate = northCounts - southCounts;
      let yCoordinate = eastCounts - westCounts;

      singleCoordinate = [xCoordinate, yCoordinate];
      allCoordinate.push(singleCoordinate);

    }

    // finally, deduplicate array allCoordinate
    console.log(allCoordinate);
    const newAllCoordinate = new DeduplicateArrayCoordinate(allCoordinate);
    let uniqueArray = newAllCoordinate.DeduplicateArray();

    console.log(uniqueArray);
    // return 
    return uniqueArray;
  }

}



module.exports = {
  DeduplicateArrayCoordinate,
  SinglePathDeduplication
};
