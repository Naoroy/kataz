const func = require('./index')
const { LinkedList } = require('../../helpers')

test('Func exists', function() {
  let a = new LinkedList([1, 1, 2])
  let b = new LinkedList([1, 2])
  expect(func(a)).toEqual(b)

  a = new LinkedList([1, 1, 2, 3, 3])
  b = new LinkedList([1, 2, 3])
  expect(func(a)).toEqual(b)
})
