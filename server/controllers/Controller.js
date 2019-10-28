// import module
const { Deduplication } = require('../algorithm/Deduplication');

// controller
module.exports = (req, res, next) => {
  console.log('req.body: ', req.body);
  const { instructions, drone_counts } = req.body;

  if(!instructions || !drone_counts || +drone_counts > 2){
    next(new Error('no valid instructions or drone number'));
  }

  let uniqueArr = new Deduplication(instructions, +drone_counts);
  // return res.send(uniqueArr.deduplication().length);
  res.json({uniqueShots: `${uniqueArr.deduplication().length}`});
}
