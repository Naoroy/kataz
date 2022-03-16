const func = require('./index')

test('Pascal\'s triangle', function() {
  expect(func(1)).toEqual([[1]])
  expect(func(2)).toEqual([[1], [1, 1]])
  expect(func(3)).toEqual([[1], [1, 1], [1, 2, 1]])
})
