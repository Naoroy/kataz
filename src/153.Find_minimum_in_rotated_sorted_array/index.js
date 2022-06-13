function func(nums) {
  let min;

  for (let n of nums) {
    if (n > min) continue;
    min = n;
  }

  return min;
}

module.exports = func;
