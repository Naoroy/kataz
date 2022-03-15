function reshapeMatrix(mat, r, c) {
  let col = mat[0].length
  let row = mat.length
  if (row*col != r*c) return mat

  // get first n of each row
  let table = []
  let index = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      table[index] = mat[i][j]
      index++
    }
  }
  if (r == 1) return [table]

  //
  let newMat = []
  index = 0
  for (let i = 0; i < r; i++) {
    newMat[i] = []
    for (let j = 0; j < c; j++) {
      newMat[i][j] = table[index]
      index++
    }
  }

  return newMat
}

module.exports = reshapeMatrix
