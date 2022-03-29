const func = require('./index')

test('Func exists', function() {
  let s = '()'
  expect(func(s)).toEqual(true)

  s = '([]{})'
  expect(func(s)).toEqual(true)

  s = '([{]})'
  expect(func(s)).toEqual(false)

  s = '['
  expect(func(s)).toEqual(false)
})
