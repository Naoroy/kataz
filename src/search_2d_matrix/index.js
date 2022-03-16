function func(matrix, target) {
  for (let r = matrix.length-1; r >= 0; r--) {
    if (matrix[r][0] <= target) {
      for (let n of matrix[r]) {
        if (n == target) return true
      }
    }
  }
  return false
}

module.exports = func
