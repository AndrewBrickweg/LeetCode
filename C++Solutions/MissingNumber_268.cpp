#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int desiredSum = 0;
        int actualSum = 0;
        int missingNumber;

        for(int i = 0; i <= nums.size(); i++){
            desiredSum = desiredSum + i;
        }

        for(int num : nums){
            actualSum = actualSum + num;
        }

        missingNumber = desiredSum - actualSum;

        return missingNumber;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {9, 6, 4, 2, 3, 5, 7, 0, 1};

    cout << solution.missingNumber(nums) << endl;

    return 0;
}