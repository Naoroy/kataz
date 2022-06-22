const { func } = require('./index')

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
  
})
