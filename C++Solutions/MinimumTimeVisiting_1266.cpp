#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

class Solution {
public:
    int minTimeToVisitAllPoints(vector<vector<int>>& points) {
        int totalTime = 0;

        for (int i = 0; i < points.size() - 1; i++){
            int x1 = points[i][0];
            int y1 = points[i][1];
            int x2 = points[i+1][0];
            int y2 = points[i+1][1];

            int dx = abs(x2 - x1);
            int dy = abs(y2 - y1);

            int time = max(dx, dy);
            totalTime += time; 
        }

            return totalTime;
    }
};

int main(){
    Solution Solution;
    vector<vector<int>> points = {{1, 1}, {3, 4}, {-1, 0}};

    cout << Solution.minTimeToVisitAllPoints(points) << endl;

    return 0;
}