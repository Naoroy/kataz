module.exports = function maxSubArray(nums) {
  let max;
  let ln = nums.length;

  if (ln < 2) return nums[0];

  for (let i = 0; i < ln; i++) {
    for (let j = i+1; j < ln; j++) {
      let subarray = nums.slice(i,j);
      let sum = subarray.reduce((a, b) => a + b);
      max = sum < max ? max : sum;
      console.log(sum, max)
    }
  }

  return max || 0;
};

