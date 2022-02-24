function disemvowel(str) {
  return str.split('')
    .filter(s => !['a', 'e', 'i', 'o', 'u'].includes(s.toLowerCase()))
    .join('');
}

module.exports = disemvowel;
