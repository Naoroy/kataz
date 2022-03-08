/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
module.exports = function containsNearbyDuplicate(nums, k) {
  var ln = nums.length;
  
  for (let i = 0; i < ln; i++) {
    for (let j = i+1; j < ln; j++) {
      if (nums[i] == nums[j]) console.log(i, j, k)
      if (nums[i] == nums[j] && j - i <= k) {
        console.log(i, j)
        return true;
      }
    }
  }
  return false;
};

