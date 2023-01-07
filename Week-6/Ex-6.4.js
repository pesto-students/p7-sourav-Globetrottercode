prices = [7, 1, 5, 3, 6, 4];

var sellStock = function (prices) {
  let buyDay = 0;
  let profit;
  let maxProfit = 0;
  let i = 0;
  for (i = 1; i < prices.length; i++) {
    profit = prices[i] - prices[buyDay];
    if (profit <= 0) {
      buyDay = i;
    }
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};

console.log(sellStock(prices));
