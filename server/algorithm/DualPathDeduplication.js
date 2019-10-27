
// split instructions to two drones in odd and even
// mock a string, split instruction string in odd and even
// let allInstructions = 'x^^x>>xvvx<<x';
//
class AllocateInstructions {
  constructor(instructionsStr=''){
    this.instructionsStr = instructionsStr;
  }

  AllocatByOddEven () {
    const droneOneInstructions = [];
    const droneTwoInstructions = [];
    for (let i = 0; i < this.instructionsStr.length; i += 2) {
        droneOneInstructions.push(this.instructionsStr[i]);
        this.instructionsStr[i+1] && droneTwoInstructions.push(this.instructionsStr[i + 1]);
    }
    console.log('droneOne', droneOneInstructions);
    console.log('droneTwo', droneTwoInstructions);

    return [droneOneInstructions.toString(), droneTwoInstructions.toString()];
  }


}

module.exports = {
  AllocateInstructions
};
