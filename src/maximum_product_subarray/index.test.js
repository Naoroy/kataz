const func = require('./index')

describe('152.Maximum product subarray', function() {
  test('Func exists', function() {
    expect(func).toBeTruthy()
  })
  test('Find largest subarray, example 1', function() {
    expect(func([2,3,-2,4])).toEqual(6)
  })
  test('Find largest subarray, example 2', function() {
    expect(func([-2,0,-1])).toEqual(0)
  })
})
