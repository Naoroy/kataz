function binarySearch(nums, target) {
  let l  = 0
  let r = nums.length - 1 

  while (l <= r) {
    m = Math.floor((l + r) / 2)

    if (nums[m] > target) 
      r = m - 1
    else if (nums[m] < target) 
      l = m + 1
    else 
      return m
  }

  return -1
}

function func(nums, target) {
  const map = {}

  nums.forEach((x, i) => map[x] = i)

  if (map[target] == undefined) return -1

  return map[target]
}

function divideJustOnce(nums, target) {
  const half = Math.floor(nums.length / 2)
  let cut
  let map = {}

  if (nums.length <= 0) return -1
  if (nums[half] == target) return half

  cut = nums[half] > target
    ? nums.slice(0, half)
    : nums.slice(half)

  cut.forEach((x, i) => map[x] = i)

  if (map[target] == undefined) return -1

  return nums[half] > target
    ? map[target]
    : map[target] + half
}

module.exports = { func, divideJustOnce, binarySearch¬†}
