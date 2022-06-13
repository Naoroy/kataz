function func(nums) {
  if (nums.length > 1) {
    let half = Math.round(nums.length / 2);
    let left = func(nums.slice(0, half));
    let right = func(nums.slice(half));

    return left < right ? left : right;
  }
  return nums[0]
}

module.exports = func;
