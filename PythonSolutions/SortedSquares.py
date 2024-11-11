from typing import List

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)
        sqNum = [0] * n
        left = 0
        right = n - 1
        pos = n - 1

        while(left <= right):
            leftSq = nums[left] * nums[left]
            rightSq = nums[right] * nums[right]

            if (leftSq > rightSq):
                sqNum[pos] = leftSq
                left += 1
            else:
                sqNum[pos] = rightSq
                right -= 1

            pos -= 1

        return sqNum


if __name__ == "__main__":
    solution = Solution()
    nums = [-4,-1,0,3,10]
    print(solution.sortedSquares(nums))