prices = [7, 1, 5, 3, 6, 4];
// output = 5

//Bruteforce method
// function maxProfit(prices) {
//   profit = 0;

//   for (let i = 0; i < prices.length; ++i) {
//     for (let j = i + 1; j < prices.length; ++j) {
//       profit = Math.max(profit, prices[j] - prices[i]);
//     }
//   }
//   return profit;
// }

// optimised solution
function maxProfit(prices) {
  profit = 0;
  let minVal = Infinity;

  for (let i = 0; i < prices.length; ++i) {
    minVal = Math.min(minVal, prices[i]);
    profit = Math.max(profit, prices[i] - minVal);
  }
  return profit;
}

maxProfit(prices);
