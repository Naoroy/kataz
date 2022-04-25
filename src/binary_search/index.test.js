const { binarySearchIterative, binarySearchRecursive } = require('./index')

describe('Binary search, iterative', function() {
  test('Function exists', function() {
    expect(binarySearchIterative).toBeTruthy()
  })
  test.only('Finds index of x in list n', function() {
    expect(binarySearchIterative([1,2,3,4,5], 4)).toEqual(3)
  })
  test('Finds index of x in list n', function() {
    expect(binarySearchIterative([1,2,3,4,5], 2)).toEqual(1)
  })
  test('Return -1 if x isn\'t in n', function() {
    expect(binarySearchIterative([1,2,3,4,5], 6)).toEqual(-1)
  })
})
describe('Binary search, recursive', function() {
  test('Function exists', function() {
    expect(binarySearchRecursive).toBeTruthy()
  })
})
