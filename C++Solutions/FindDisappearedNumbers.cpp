#include <iostream>
#include <set>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> missingNums; //variable to store missing numbers
        int maxNum = nums.size(); //find length
        set<int> numberSet(nums.begin(), nums.end()); //create set

        //loop through 1 > length; grab missing numbers not in set
        for(int i = 1; i <= maxNum; i++){
            if (numberSet.count(i) == 0){ //cant use .contains before C++20
                missingNums.push_back(i);
            }
        }
        //return variable array of missing set 
        return missingNums;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {4, 3, 2, 7, 8, 2, 3, 1};

    vector<int> result = solution.findDisappearedNumbers(nums);

    // Print the missing numbers
    cout << "Missing numbers: ";
    for (int num : result) {
        cout << num << " ";
    }

    return 0;
}