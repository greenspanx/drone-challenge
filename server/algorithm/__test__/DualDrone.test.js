const DualDrone = require('../DualDrone');

describe('test class DualDrone', () => {

  // input: ['x^^x>>xvvx<<x', 'x^^x<<xvvx>>x']
  // output: 
  it('will remove duplicate photos, return a unique coordinate of photo array.', () => {
    const dualDrone = new DualDrone(['x^^x>>xvvx<<x', 'x^^x<<xvvx>>x']);
    expect(dualDrone.dualDroneDeduplicate().length).toEqual(6);
  });



});
