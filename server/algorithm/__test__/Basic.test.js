const {
  DroneInterface,
  AllocateInstructions,
  DeduplicateArrayCoordinate
} = require('../Basic');

describe('test class DroneInterface', () => {

  it('test abstract class DroneInterface', () => {
    expect(() => new DroneInterface(['^^>>^^x^^x>>xvvx<<x<<x'], '2')).toThrow("Cannot construct Abstract instances directly");
  });

});

describe('test class AllocateInstructions', () => {

  it('allocate single drone instructions', () => {
    const allocatedIns = new AllocateInstructions('^^>>^^x^^x>>xvvx<<x<<x', 1);
    expect(allocatedIns.allocatInstructions()).toEqual('^^>>^^x^^x>>xvvx<<x<<x');
  });

  it('allocate two drones instructions in INT', () => {
    const allocatedIns = new AllocateInstructions('^^>x>^x^x', 2);
    expect(allocatedIns.allocatInstructions()[0]).toEqual('^>>xx');
    expect(allocatedIns.allocatInstructions()[1]).toEqual('^x^^');
  });

  it('allocate instructions numbers in string', () => {
    const allocatedIns = new AllocateInstructions('^^>x>^x^x', '2');
    expect(allocatedIns.allocatInstructions()[0]).toEqual('^>>xx');
    expect(allocatedIns.allocatInstructions()[1]).toEqual('^x^^');
  });

  it('allocate instructions numbers greater than 2 in string', () => {
    const allocatedIns = new AllocateInstructions('^^>x>^x^x', '3');
    // if testing throw error, method should be wrapped in an anonymous function in expect
    expect(() => allocatedIns.allocatInstructions()).toThrow('Drone number must not greater than two');
  });

});

describe('test class DeduplicateArrayCoordinate', () => {

  it('removes duplicate coordinates in an array', () => {
    const coordinateArray = new DeduplicateArrayCoordinate([ [ 4, 2 ], [ 6, 2 ], [ 4, 2 ], [ 4, 4 ], [ 4, 2 ], [ 4, 0 ] ]);
    expect(coordinateArray.deduplicateArray().length).toEqual(4);
  });

  it('removes duplicate coordinates in an array', () => {
    const coordinateArray = new DeduplicateArrayCoordinate([ [ 4, 1 ], [ 6, 2 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ], [ 4, 1 ] ]);
    expect(coordinateArray.deduplicateArray().length).toEqual(2);
  });

  it('removes duplicate coordinates in an array', () => {
    const coordinateArray = new DeduplicateArrayCoordinate([ [ 1, 1 ], [ 6, 2 ], [ 4, 1 ], [ 6, 2 ], [ 4, 1 ], [ 4, 1 ] ]);
    expect(coordinateArray.deduplicateArray().length).toEqual(3);
  });

});
