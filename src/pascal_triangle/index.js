function func(rows) {
  let r = [[1]]

  for (let i = 1; i < rows; i++) {
    r[i] = []
    r[i][0] = 1
    r[i][i] = 1
    for (let j = 1; j < i; j++) {
      r[i][j] = r[i-1][j] + r[i-1][j-1]
    }
  }
  return r
}

module.exports = func
