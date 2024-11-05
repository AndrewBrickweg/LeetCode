class Solution(object):
    def twoSum(self, nums, target):
        hashMap = {}

        for i, val in enumerate(nums):
            complement = target - val

            if complement in hashMap:
                return[i, hashMap[complement]]
            hashMap[val] = i

            