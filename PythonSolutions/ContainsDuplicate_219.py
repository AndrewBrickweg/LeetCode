from typing import List

class Solution:
    def containsNearbyDuplicate(self, nums:List[int],k: int) -> bool:
     window = set()
     for i, num in enumerate(nums):
          if num in window:
            return True
          window.add(num)
          if len(window) > k:
             window.remove(nums[i - k])
     return False


if __name__ == "__main__":
    solution = Solution()
    nums = [1,2,3,1]
    k = 3
    print(solution.containsNearbyDuplicate(nums,k))
    