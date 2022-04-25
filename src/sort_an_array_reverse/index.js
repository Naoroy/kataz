function mergeSortReverse(nums) {
  if (nums.length == 1) { return nums }

  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  return mergeSortedArrays(mergeSortReverse(left), mergeSortReverse(right))
}

function mergeSortedArrays(a, b) {
  const result = []
  let ai = 0
  let bi = 0

  while (ai < a.length && bi < b.length) {
    if (a[ai] <= b[bi]) {
      result.push(b[bi])
      bi++
    } else {
      result.push(a[ai])
      ai++
    }
  }

  while (ai < a.length) {
    result.push(a[ai])
    ai++
  }

  while (bi < b.length) {
    result.push(b[bi])
    bi++
  }

  return result
}

function insertionSortReverse(n) {
  let i, j, key
  i = 1

  while (i < n.length) {
    j = i - 1
    key = n[i]
    while (j >= 0 && n[j] < key) {
      n[j+1] = n[j]
      j--
    }
    n[j+1] = key
    i++
  }

  return n
}

module.exports = { mergeSortReverse, insertionSortReverse }
