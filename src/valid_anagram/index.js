function func(s, t) {
  if (s.length != t.length) return false
  let a = s.split('').sort()
  let b = t.split('').sort()
  
  for (let i in a) {
    if (a[i] != b[i]) return false
  }

  return true
}

module.exports = func
