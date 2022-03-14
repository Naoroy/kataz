module.exports = { maxSubArray, _maxSubArray }


/* brute force */
function maxSubArray(nums) {
  let max;
  let ln = nums.length;

  for (let i = 0; i < ln; i++) {
    let sum = 0;
    for (let j = i; j < ln; j++) {
      sum += nums[j]
      max = sum < max ? max : sum;
    }
  }

  return max;
};

/* hash table */
function _maxSubArray(nums) {
  let tmpSum = 0
  let sum

  for (let i = 0; i < nums.length; i++) {
    tmpSum = nums[i] > nums[i] + tmpSum
      ? nums[i]
      : nums[i] + tmpSum

    sum = sum > tmpSum
      ? sum
      : tmpSum
  }

  return sum
}
