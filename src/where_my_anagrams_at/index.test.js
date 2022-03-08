const anagrams = require('./index');

test('tests', () => {
  let actual = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
  let expected = ['carer', 'racer'];

  expect(actual.sort()).toEqual(expected.sort());
})
test('tests', () => {
  let actual = anagrams('abba', ['baab', 'abab', 'abbba', 'baba', 'bbaaa']);
  let expected = ['baab', 'baba', 'abab'];

  expect(actual.sort()).toEqual(expected.sort());
})
