// import module
const { Deduplication } = require('../algorithm/Deduplication');

// controller
module.exports = (req, res, next) => {
  console.log('req.body: ', req.body);
  const { instructions, drone_number } = req.body;

  if(!instructions || !drone_number || +drone_number > 2){
    next(new Error('no valid instructions or drone number'));
  }

  let uniqueArr = new Deduplication(instructions, +drone_number);
  return res.send(uniqueArr.deduplication().length);
}
