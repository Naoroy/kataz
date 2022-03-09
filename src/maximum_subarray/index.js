module.exports = function maxSubArray(nums) {
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

