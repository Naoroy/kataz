const func = require('./index')

test('Product of Array Except Self', function() {
  expect(func).toBeTruthy()
  expect(func([1,2,3,4])).toEqual([24,12,8,6])
  expect(func([-1,1,0,-3,3])).toEqual([0,0,9,0,0])
})
