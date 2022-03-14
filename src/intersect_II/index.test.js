const intersect = require('./index')

test('Intersection of two arrays II', function() {
  expect(intersect([1,2,2,1], [2])).toEqual([2])
  expect(intersect([3,2,1], [1,1])).toEqual([1])
  expect(intersect([4,9,5], [9,4,9,8,4])).toEqual([4,9])
})
