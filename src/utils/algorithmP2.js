const { getIndexOfEachx, comparePhotos } = require('./algorithmP1');


const modeTwoCalculation = async (req, res) => {
  // extract instruction from request body, make sure if it's a string or object
  console.log('req.body: ', req.body);
  // let { instruction } = req.body;
  // turn instruction into a string

  // mock a string, split instruction string in even
  let instruction = 'x^^x>>xvvx<<x';
  const droneOne = [];
  const droneTwo = [];
  for (let i = 0; i < instruction.length; i += 2) {
      droneOne.push(instruction[i]);
      instruction[i+1] && droneTwo.push(instruction[i + 1]);
  }
  console.log('droneOne', droneOne);
  console.log('droneTwo', droneTwo);


  const droneOneIndexOfx = getIndexOfEachx(droneOne);
  const singleShotOfDroneOne = await comparePhotos(droneOneIndexOfx, droneOne);
  console.log('singleShotOfDroneOne: ', singleShotOfDroneOne);

  const droneTwoIndexOfx = getIndexOfEachx(droneTwo);
  const singleShotOfDroneTwo = await comparePhotos(droneTwoIndexOfx, droneTwo);
  console.log('singleShotOfDroneTwo: ', singleShotOfDroneTwo);

  // todo: compare two drones route: singleShotOfDroneOne and singleShotOfDroneTwo,
  // see function compareTwodroneRoutes
  let singleShotOfDrone = [];
  singleShotOfDrone = compareTwodroneRoutes(singleShotOfDroneOne, singleShotOfDroneTwo)
  // return an array with all single shots
  res.json({singlePhotos: singleShotOfDrone});

}

// todo
function compareTwodroneRoutes(singleShotOfDroneOne, singleShotOfDroneTwo){


  // extract movements from start point to each x

  // movements calculation
  let northCounts = (String(fragmentRoute).match(/\^/g) || []).length;
  let southCounts = -(String(fragmentRoute).match(/v/g) || []).length;
  let eastCounts = (String(fragmentRoute).match(/>/g) || []).length;
  let westCounts = -(String(fragmentRoute).match(/</g) || []).length;

  let ns = northCounts + southCounts;
  let ew = eastCounts + westCounts;
  // compare ns and ew of each x of singleShotOfDroneTwo with each x of singleShotOfDroneOne

  // step one: compare movements from start point of first x of singleShotOfDroneTwo to each x of singleShotOfDroneOne
  // if duplicate, replace this x with - in singleShotOfDroneTwo

  // step two: compare second x of singleShotOfDroneTwo to each x of singleShotOfDroneOne
  // if duplicate, replace this x with - in singleShotOfDroneTwo

  // and so on, untill all x in singleShotOfDroneTwo compared

  // combine / concat singleShotOfDroneTwo singleShotOfDroneOne
  // return a final concated array, frontend count the number of x
  return [concated array];
}

module.exports = {
  modeTwoCalculation
}







//
