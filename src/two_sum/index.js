module.exports = twoSum
function twoSum(nums, target) {
  const table = {}
  nums.forEach((n, i) => table[n] = i)

  for (let i = 0; i < nums.length; i++) {
    let x = target - nums[i]
    if (table.hasOwnProperty(x) && table[x] != i) return [i, table[x]]
  }
  return null
}
