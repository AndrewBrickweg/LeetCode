#include <iostream>
#include <map>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // hashmap
        map<int, int> intMap;

        for(int i = 0; i < nums.size(); i++){
            int complement = target - nums[i];

            if(intMap.find(complement) != intMap.end()){
                return {intMap.at(complement), i};
            }

            intMap.insert({nums[i], i});
        }

        return {};
    }
};

int main(){
    Solution solution;
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;

    vector<int> result = solution.twoSum(nums, target);
    cout << "Solution: ";

    for(int index:result){
        cout << index << "";
    }

    cout << endl;

    return 0;
}