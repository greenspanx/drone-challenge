const SingleDrone = require('../SingleDrone');

describe('test class SingleDrone', () => {

  // input: 'x^^>>xvvx<<x<<x<<x^^x>>x'  [[0,0], [1,1], [1,0], [0,0], [-1,0],[-2,0],[-2,1], [-1,1]]
  // output: [[0,0], [1,1], [1,0], [-1,0],[-2,0],[-2,1], [-1,1]], length: 7
  it('will remove duplicate photos, return a unique coordinate of photo array.', () => {
    const singleDrone = new SingleDrone('x^^>>xvvx<<x<<x<<x^^x>>x');
    expect(singleDrone.deduplicatePath().length).toEqual(7);
  });



});
