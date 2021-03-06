function func(nums) {
  if (nums.length == 1) { return nums }

  const mid = Math.floor(nums.length / 2)
  const left = nums.slice(0, mid)
  const right = nums.slice(mid)

  return mergeSortedArrays(func(left), func(right))
}

function mergeSortedArrays(a, b) {
  const result = []
  let ai = 0
  let bi = 0

  while (ai < a.length && bi < b.length) {
    if (a[ai] <= b[bi]) {
      result.push(a[ai])
      ai++
    } else {
      result.push(b[bi])
      bi++
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

function insertionSort(nums) {
  let i = 1
  let j
  let tmp

  while (i < nums.length) {
    j = i - 1
    tmp = nums[i]
    while (nums[j] > tmp && j >= 0) {
      nums[j+1] = nums[j]
      j--
    }
    nums[j+1] = tmp
    i++
  }

  return nums
}

module.exports = { mergeSort: func, insertionSort }
