#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int n = nums.size();
        vector<int> sqNum(n);
        int left = 0;
        int right = n - 1;
        int pos = n - 1;

        while(left <= right){
            int leftSq = nums[left] * nums[left];
            int rightSq = nums[right] * nums[right];

            if (leftSq > rightSq){
                sqNum[pos--] = leftSq;
                left++;
            } else {
                sqNum[pos--] = rightSq;
                right--;
            }
        }

        return sqNum;
    }
};

int main(){
    Solution Solution;
    vector<int> nums = {-4, -1, 0, 3, 10};
    vector<int> result = Solution.sortedSquares(nums);

    for (int num : result){
        cout << num << endl;
    }

    return 0;
}