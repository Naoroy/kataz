const two_sum = require('./index')

test('LeetCode - Two Sum', function() {
  expect(two_sum([2,7,11,15,3], 10)).toEqual([1, 4])
  expect(two_sum([3,3], 6)).toEqual([0, 1])
  expect(two_sum([3,2,4], 6)).toEqual([1, 2])
})
