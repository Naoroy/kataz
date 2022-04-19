function func(nums) {
  let i = 0;
  let res = []

  while (i < nums.length) {
    let prod = 1;
    let j = 0;

    while (j < nums.length) {
      if (i != j) {
        prod *= nums[j];
      }
      j++;
    }

    res[i] = prod == 0 ? 0 : prod;
    i++;
  }

  return res;
}

module.exports = func
