const maxProfit = (prices) => {
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let currentProfit = prices[right] - prices[left];
      profit = Math.max(profit, currentProfit);
    } else {
      left = right;
    }
    right += 1;
  }

  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
