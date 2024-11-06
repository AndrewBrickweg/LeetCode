#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int left = 0;
        int right = 1;
        int maxProfit = 0;

        while (right < prices.size()){
            if (prices[left] < prices[right]){
                int currentProfit = prices[right] - prices[left];
                maxProfit = max(maxProfit, currentProfit);
            } else {
                left = right;
            }
            right += 1;
        }
        return maxProfit;
    }
};

int main(){
    Solution Solution;
    vector<int> prices = {7, 1, 5, 3, 6, 4};
    cout << Solution.maxProfit(prices) << endl;

    return 0;
}