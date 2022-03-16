const func = require('./index')

describe('Valid anagram', function() {
  test('Should return true', function() {
    expect(func('anagram','naagram')).toEqual(true)
  })
  test('Should return false', function() {
    expect(func('car','rat')).toEqual(false)
  })
})

