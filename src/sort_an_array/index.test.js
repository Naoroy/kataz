const func = require('./index')

describe('912.Sort an array', function() {
  test('Func exists', function() {
    expect(func).toBeTruthy()
  })
  test('Example 1', function() {
    expect(func([5,2,3,1])).toEqual([1,2,3,5])
  })
  test('Example 2', function() {
    expect(func([5,1,1,2,0,0])).toEqual([0,0,1,1,2,5])
  })
})
