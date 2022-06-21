const { func } = require('./index')

describe('49. Group Anagrams', function() {
  test('Function exists', function() {
    expect(func).toBeTruthy()
  })
  test('Example 1', function() {
    const testCase = ["eat","tea","tan","ate","nat","bat"]
    const expectedArray = [["bat"],["nat","tan"],["ate","eat","tea"]]

    const result = helper.sortArrLength(func(testCase))
    expect(result.length).toEqual(expectedArray.length)

    for (let i = 0; i < result.length; i++) {
      const resArr = result[i].sort()
      const expArr = expectedArray[i].sort()

      expect(resArr).toEqual(expArr)
    }
  })
  test('Example 2', function() {
    const testCase = [""]
    const expectedArray = [[""]]

    const result = func(testCase)
    expect(result.length).toEqual(expectedArray.length)

    for (let i = 0; i < result.length; i++) {
      const resArr = result[i].sort()
      const expArr = expectedArray[i].sort()

      expect(resArr).toEqual(expArr)
    }
  })
  test('Example 3', function() {
    const testCase = ["a"]
    const expectedArray = [["a"]]

    const result = func(testCase)
    expect(result.length).toEqual(expectedArray.length)

    for (let i = 0; i < result.length; i++) {
      const resArr = result[i].sort()
      const expArr = expectedArray[i].sort()

      expect(resArr).toEqual(expArr)
    }
  })
})


const helper = {
  sortArrLength: (arr) => arr.sort((a, b) => a.length - b.length),
}
