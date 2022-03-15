const { maxProfit, _maxProfit } = require('./index')

test('Best time to Buy and Sell stock', function() {
  expect(maxProfit([7,1,5,3,6,4])).toEqual(5)
  expect(maxProfit([7,6,4,3,1])).toEqual(0)
  expect(maxProfit([1,2])).toEqual(1)
})
test('Best time to Buy and Sell stock, without brute force', function() {
  expect(_maxProfit([7,1,5,3,6,4])).toEqual(5)
  expect(_maxProfit([7,6,4,3,1])).toEqual(0)
  expect(_maxProfit([1,2])).toEqual(1)
})
