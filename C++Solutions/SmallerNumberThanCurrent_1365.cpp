#include <iostream>
#include <vector>
#include <map>
using namespace std;

class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        vector<int> sortedArray = nums;
        sort(sortedArray.begin(), sortedArray.end());

        // Map to store the first occurrence index of each number in sortedArray
        map<int, int> integerMap;

        // Populate the map with the first occurrence of each number in the sorted array
        for (int i = 0; i < sortedArray.size(); i++) {
            if (integerMap.find(sortedArray[i]) == integerMap.end()) {
                integerMap[sortedArray[i]] = i;
            }
        }

        // Create the result array based on the map values
        vector<int> result;
        for (int num : nums) {
            result.push_back(integerMap[num]);
        }

        return result;
    }
};

int main (){
    Solution solution;
    vector<int> nums = {8, 1, 2, 2, 3};
    vector<int> result = solution.smallerNumbersThanCurrent(nums);

    for(int num : result){
        cout << num << " ";
    }

    return 0;
}