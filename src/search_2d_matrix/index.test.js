const func = require('./index')

describe('Search a 2D matrix', function() {
  test('Should return true', function() {
    let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    expect(func(matrix, 3)).toEqual(true)
    matrix = [[1]]
    expect(func(matrix, 1)).toEqual(true)
  })
  test('Should return false', function() {
    let matrix = [[1,4,5,7],[10,11,16,20],[23,30,34,60]]
    expect(func(matrix, 3)).toEqual(false)
  })
})
