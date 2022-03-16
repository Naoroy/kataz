const func = require('./index')

describe('Ransom Note', function() {
  test('Should return true', function() {
    expect(func('aa', 'aab')).toEqual(true)
  })
  test('Should return true', function() {
    expect(func('bb', 'aab')).toEqual(false)
  })
})
