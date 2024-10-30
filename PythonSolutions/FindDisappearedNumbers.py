from typing import List

class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:

        missing_nums = []  # Variable to store missing numbers
        max_num = len(nums)  # Find length
        number_set = set(nums)  # Create set from nums

        # Loop through 1 to length; grab missing numbers not in the set
        for i in range(1, max_num + 1):
            if i not in number_set:  # Check if i is not in the set
                missing_nums.append(i)  # Append missing number to the list

        # Return variable array of missing numbers 
        return (missing_nums)
