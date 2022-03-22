const { twoSum, _twoSum } = require('./index')

test('Two Sum', function() {
  expect(twoSum([2,7,11,15,3], 10)).toEqual([1, 4])
  expect(twoSum([3,3], 6)).toEqual([0, 1])
  expect(twoSum([3,2,4], 6)).toEqual([1, 2])
})
test('Two Sum, optimised', function() {
  expect(_twoSum([2,7,11,15,3], 10)).toEqual([1, 4])
  expect(_twoSum([3,3], 6)).toEqual([0, 1])
  expect(_twoSum([3,2,4], 6)).toEqual([1, 2])
})
