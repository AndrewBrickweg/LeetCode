from typing import List

class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        total_time = 0

        for i in range(len(points) - 1):
            x1, y1 = points[i]
            x2, y2 = points[i + 1]

            dx = abs(x2 - x1)
            dy = abs(y2 - y1)

            time = max(dx, dy)
            total_time += time

        return total_time


if __name__ == "__main__":
    solution = Solution()
    points = [[1, 1], [3, 4], [-1, 0]]
    print(solution.minTimeToVisitAllPoints(points))