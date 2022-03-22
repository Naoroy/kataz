/* Leetcode 1. Two Sum */
function twoSum(nums, target) {
  const table = {}
  nums.forEach((n, i) => table[n] = i)

  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i]
    if (table.hasOwnProperty(x) && table[x] != i) return [i, table[x]]
  }
  return null
}

/* faster */
function _twoSum (nums, target) {
  let table = {}
  let i = 0

  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i]

    if (table.hasOwnProperty(x)) return [table[x], i]
    table[nums[i]] = i
  }
}

module.exports = { twoSum, _twoSum }
