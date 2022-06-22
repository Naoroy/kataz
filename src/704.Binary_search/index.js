function func(nums, target) {
  const value = -1
  const map = buildMap(nums)

  const half = Math.floor(nums.length / 2)

  if (nums[half] == target) {

  }
  const left = nums.slice(0, half)
  const right = nums.slice(half)

  return value
}

function buildMap(n) {
  const map = {}

  n.forEach((x, i) => {
    map[x] = i
  })

  return map
}

module.exports = { func }
