const { brute, maximumProductSubarray } = require('./index')
const longArray = require('./long_array')

xdescribe('152.Maximum product subarray', function() {
  test('Func exists', function() {
    expect(brute).toBeTruthy()
  })
  test('Find largest subarray, example 1', function() {
    expect(brute([2,3,-2,4])).toEqual(6)
  })
  test('Find largest subarray, example 2', function() {
    expect(brute([-2,0,-1])).toEqual(0)
  })
  test('Find largest subarray, with [-2]', function() {
    expect(brute([-2])).toEqual(-2)
  })
  test('Find largest subarray, with [0,2]', function() {
    expect(brute([0,2])).toEqual(2)
  })
  test('Find largest subarray, with [-2,3,-4]', function() {
    expect(brute([-2,3,-4])).toEqual(24)
  })
  test('Find largest subarray, with stupid long array...', function() {
    expect(brute(longArray)).toEqual(1)
  })
})

describe('152.Maximum product subarray, Kadane\s algorithm', function() {
  test('Func exists', function() {
    expect(maximumProductSubarray).toBeTruthy()
  })
  test.only('Find largest subarray, example 1', function() {
    expect(maximumProductSubarray([2,3,-2,4])).toEqual(6)
  })
  test('Find largest subarray, example 2', function() {
    expect(maximumProductSubarray([-2,0,-1])).toEqual(0)
  })
  test('Find largest subarray, with [-2]', function() {
    expect(maximumProductSubarray([-2])).toEqual(-2)
  })
  test('Find largest subarray, with [0,2]', function() {
    expect(maximumProductSubarray([0,2])).toEqual(2)
  })
  test('Find largest subarray, with [-2,3,-4]', function() {
    expect(maximumProductSubarray([-2,3,-4])).toEqual(24)
  })
  test('Find largest subarray, with stupid long array...', function() {
    expect(maximumProductSubarray(longArray)).toEqual(1)
  })
})
