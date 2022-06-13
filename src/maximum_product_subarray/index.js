function brute(nums) {
  let max
  let ln = nums.length

  for (let i = 0; i < ln; i++) {
    let prod = 1
    for (let j = i; j < ln; j++) {
      prod *= nums[j]
      max = prod < max ? max : prod
    }
  }

  return max == 0 ? 0 : max
}

function maximumProductSubarray(nums) {
  let product
  let tmpProduct = 1
  let i = 0

  while (i < nums.length) {
    if (nums[i] > nums[i] * tmpProduct) {
      tmpProduct = nums[i]
    } else {
      tmpProduct = nums[i] * tmpProduct
    }

    if (!product || product <= tmpProduct) {
      product = tmpProduct
    }
    i++
  }

  return product
}

module.exports = { brute, maximumProductSubarray }
