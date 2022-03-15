const reshapeMatrix = require('./index')

test('Reshape matrix', function() {
  expect(reshapeMatrix([[1,2],[3,4]], 1, 4)).toEqual([[1,2,3,4]])
  expect(reshapeMatrix([[1,2],[3,4]], 4, 1)).toEqual([[1],[2],[3],[4]])
  expect(reshapeMatrix([[1,2,3,4]], 2, 2)).toEqual([[1,2],[3,4]])
})
test('Reshape matrix, should fail', function() {
  expect(reshapeMatrix([[1,2],[3,4]], 2, 4)).toEqual([[1,2],[3,4]])
})
