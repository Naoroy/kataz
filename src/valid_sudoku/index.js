function func(board) {
  let rows  = []
  let cols  = []
  let grids = []

  for (let i = 0; i <= 9; i++) {
    rows[i]  =  []
    cols[i]  =  []
    grids[i] =  []
  }

  let i = 0
  for (let r in board) {
    if (r > 0 && r % 3 == 0) { i += 3 }
    for (let c in board[r]) {
      if (board[r][c] != '.') {
        if (rows[r].includes(board[r][c]) ||cols[c].includes(board[r][c])) return false
        rows[r].push(board[r][c])
        cols[c].push(board[r][c])

        let x = Math.floor(c/3)+i
        if (grids[x].includes(board[r][c])) return false
        grids[x].push(board[r][c])
      }
    }
  }

  return true
}

module.exports = func
