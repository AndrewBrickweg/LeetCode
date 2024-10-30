#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int, int> seen;  
        for (int num : nums) {
            // Check if the number has been seen before
            if (seen[num] >= 1) {
                return true;  // Duplicate found
            }
            seen[num]++;  // Increment the count for this number
        }
        return false;  // No duplicates found
    }
};

int main() {
    Solution solution;
    vector<int> nums1 = {1, 2, 3, 4};
    cout << boolalpha << solution.containsDuplicate(nums1) << endl; // Output: false

    vector<int> nums2 = {1, 2, 3, 4, 2};
    cout << boolalpha << solution.containsDuplicate(nums2) << endl; // Output: true

    return 0;
}
