var maxProfit = function(prices) {
  let max = 0
  let min = 0
  let diff = 0

  for (let i = 0; i < prices.length; i++) {
    min = prices[i]
    for (let j = i+1; j < prices.length; j++) {
      max = prices[j]
      currDiff = max - min
      diff = currDiff > 0 && currDiff > diff ? currDiff : diff
    }
  }

  return diff 
};

module.exports = maxProfit
