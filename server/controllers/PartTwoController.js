// import modules
const { DeduplicateArrayCoordinate, SinglePathDeduplication } = require('../algorithm/SinglePathDeduplication');
const { AllocateInstructions } = require('../algorithm/DualPathDeduplication');

// controller
const PartTwoController = (req, res, next) => {
  // extract instructions data from request
  console.log('req.body: ', req.body);
  const { instructions } = req.body;
  // allocate instructions to two drones: droneOne and droneTwo
  const partTwo = new AllocateInstructions(instructions.toString());
  // process droneOne data
  const droneOne = new SinglePathDeduplication(partTwo[0]);
  const droneOneUnique = droneOne.deduplicatePath();
  // process droneTwo data
  const droneTwo = new SinglePathDeduplication(partTwo[1]);
  const droneTwoUnique = droneTwo.deduplicatePath();
  // concat droneOneUnique and droneTwoUnique
  const allPhotoPositions = droneOneUnique.concat(droneTwoUnique);
  // deduplicate allPhotoPositions
  const allUniquePositions = new DeduplicateArrayCoordinate(allPhotoPositions);
  let uniqueArray = allUniquePositions.DeduplicateArray();
  console.log(uniqueArray);

  // reponse to client 
  res.json(uniqueArray.length);

}

module.exports = PartTwoController;
