function intersect(nums1, nums2) {
  let res = []
  let table = {}
  let shortest = nums1.length < nums2.length ?
    nums1.sort(asc) : nums2.sort(asc)
  let longest =  nums1.length > nums2.length ?
    nums1.sort(asc) : nums2.sort(asc)


  for (let i = 0; i < shortest.length; i++) {
    for (let j = 0; j < longest.length; j++) {
      if (longest[j] == shortest[i]&& !table[j]) {
        table[j] = shortest[i]
        j = longest.length
      }
    }
  }
  
  for (let key in table) {
    res.push(table[key])
  }
  function asc(a, b) { return a - b }
  return  res
}

module.exports = intersect
