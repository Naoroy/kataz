function func(strings) {
  const result = []
  const r = {}

  for (let str of  strings) {
    const currentStr = orderAlpha(str)

    if (!r[currentStr]) {
      r[currentStr] = []
    }
    r[currentStr].push(str)
  }

  for (let s in r) {
    result.push(r[s])
  }

  return result
}

function orderAlpha(str) {
  return str.split('').sort().join('')
}

module.exports = { func }
