const func = require('./index')

test('First unique character in a string', function() {
  expect(func('leetcode')).toEqual(0)
  expect(func('loveleetcode')).toEqual(2)
  expect(func('aabb')).toEqual(-1)
  expect(func('leetcodeleetcode')).toEqual(-1)
})
