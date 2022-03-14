const merge = require('./index')

test('Merge sorted array', function() {
  let nums1 = [1,2,3,0,0,0]
  let nums2 = [2,5,6]

  let testArgs = [
    nums1,
    3,
    nums2,
    3
  ]
  let result = [1,2,2,3,5,6]
  merge(...testArgs)
  expect(nums1).toEqual(result)
})
