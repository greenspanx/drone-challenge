const { SinglePathDeduplication } = require('../SinglePathDeduplication');

let instruction = '^^>>^^x^^x>>xvvx<<x<<x';

const partOne = new SinglePathDeduplication(instruction);

console.log(partOne.deduplicatePath().length);
