const { func, divideAndConquer, binarySearch } = require('./index')

describe('Function', function() {
  test('Function exists', function() {
    expect(func).toBeTruthy()
  })
  test('Example 1', function() {
    const testCase = [-1,0,3,5,9,12]
    const testTarget = 9
    const expectetResult = 4

    const result = func(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Example 2', function() {
    const testCase = [-1,0,3,5,9,12]
    const testTarget = 2
    const expectetResult = -1

    const result = func(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Other examples', function() {
    const testCase = [5]
    const testTarget = 5
    const expectetResult = 0

    const result = func(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
})

describe('Divide and conquer', function() {
  test('Function exists', function() {
    expect(divideAndConquer).toBeTruthy()
  })
  test('Example 1', function() {
    const testCase = [-1,0,3,5,9,12]
    const testTarget = 9
    const expectetResult = 4

    const result = divideAndConquer(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Example 2', function() {
    const testCase = [-1,0,3,5,9,12]
    const testTarget = 2
    const expectetResult = -1

    const result = divideAndConquer(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Other examples', function() {
    const testCase = [5]
    const testTarget = 5
    const expectetResult = 0

    const result = divideAndConquer(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Other examples', function() {
    const testCase = [2,5]

    const testTarget = 2
    const expectetResult = 0

    const result = divideAndConquer(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
})

describe.only('Binary Search algorithm', function() {
  test('Function exists', function() {
    expect(binarySearch).toBeTruthy()
  })
  test('Example 1', function() {
    const testCase = [-1,0,3,5,9,12]
    const testTarget = 9
    const expectetResult = 4

    const result = binarySearch(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Example 2', function() {
    const testCase = [-1,0,3,5,9,12]
    const testTarget = 2
    const expectetResult = -1

    const result = binarySearch(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Other examples', function() {
    const testCase = [5]
    const testTarget = 5
    const expectetResult = 0

    const result = binarySearch(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
  test('Other examples', function() {
    const testCase = [2,5]

    const testTarget = 2
    const expectetResult = 0

    const result = binarySearch(testCase, testTarget)

    expect(result).toEqual(expectetResult)
  })
})
