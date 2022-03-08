module.exports = function anagrams(word, words) {
  return words.filter(w => {
    let a = w.split('').sort().join('');
    let b = word.split('').sort().join('');
    return a == b;
  })
}
