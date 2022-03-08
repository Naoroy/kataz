const maxSubArray = require('./index.js');

const testCases = [
  { arr: [-2,1,-3,4,-1,2,1,-5,4], res: 6 },
  { arr: [1], res: 1 },
  { arr: [5,4,-1,7,8], res: 23 },
]
test.each(testCases)('Maximum subarray', t => {
    expect(maxSubArray(t.arr)).toEqual(t.res)
})
