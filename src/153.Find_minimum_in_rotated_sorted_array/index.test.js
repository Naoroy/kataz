const func = require('./index')

describe('153. Find Minimum in Rotated Sorted Array', function() {
  test('function exists',function() {
    expect(func).toBeTruthy();
  });
  test('Example 1', function() {
    const useCase = [3,4,5,1,2];
    expect(func(useCase)).toEqual(1);
  });
  test('Example 2', function() {
    const useCase = [4,5,6,7,0,1,2];
    expect(func(useCase)).toEqual(0);
  });
});
