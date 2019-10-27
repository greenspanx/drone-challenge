// import module
const { SinglePathDeduplication } = require('../SinglePathDeduplication');
// controller
const PartOneController = (req, res, next) => {
  console.log('req.body: ', req.body);
  const { instructions } = req.body;

  const partOne = new SinglePathDeduplication(instructions.toString());
  console.log(partOne.deduplicatePath().length);
  res.json(partOne.deduplicatePath().length);

}

module.exports = PartOneController;
