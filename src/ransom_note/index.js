function func(ransomNote, magazine) {
  const table = {}
  for (let i = 0; i < magazine.length; i++) {
    let char = table[magazine[i]]
    table[magazine[i]] = char ? char+1 : 1
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i]
    if (!table[char] || table[char] < 1) return false
    table[char]--
  }
  return true
}

module.exports = func
