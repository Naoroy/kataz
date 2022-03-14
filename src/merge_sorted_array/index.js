function merge(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m+i] = nums2[i]
  }
  nums1 = nums1.sort((a, b) => a - b)
};

module.exports = merge
