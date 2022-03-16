function func(str) {
  function hashfunc(c) {
    return c.charCodeAt() - 'a'.charCodeAt()
  }
  let table = [] 
  for (let i = 0; i < str.length; i++) {
    let index = hashfunc(str[i])
    if (table[index]) table[index][1]++
    else table[index] = [i, 1]
  }
  table = table.sort((a,b) => a[0] - b[0])
  for (let i = 0; i < table.length; i++) {
    if (table[i] && table[i][1] == 1) return table[i][0]
  }
  return -1
}

module.exports = func
