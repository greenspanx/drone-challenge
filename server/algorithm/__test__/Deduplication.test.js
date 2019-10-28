const {
  Deduplication
} = require('../Deduplication');

describe('test class Deduplication', () => {

  it('Deduplicate single drone instructions', () => {
    const deduplication = new Deduplication('x^^x>>xvvx<<x', '1');
    expect(deduplication.deduplication().length).toEqual(4);
  });

  it('Deduplicate dual drone instructions', () => {
    const deduplication = new Deduplication('xx^^^^xx', '2');
    expect(deduplication.deduplication().length).toEqual(2);
  });

  it('Drone count greater than 2, throw error', () => {
    // if testing throw error, method should be wrapped in an anonymous function in expect
    expect(() => new Deduplication('^^>>^^x^^x>>xvvx<<x<<x', '3').deduplication()).toThrow('Drone number must not greater than two');
  });


});
