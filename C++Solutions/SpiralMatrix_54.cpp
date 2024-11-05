#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;

        while(!matrix.empty()) {
            //append first row
            result.insert(result.end(),matrix.front().begin(), matrix.front().end());
            matrix.erase(matrix.begin());

            //add last element in each remaining array.
            for(int i = 0; i < matrix.size(); i++){
                if(!matrix[i].empty()){
                  result.push_back(matrix[i].back());
                  matrix[i].pop_back();
                }
            }

            //add the bottom array in reverse order
               if (!matrix.empty()) {
                for (int i = matrix.back().size() - 1; i >= 0; i--) {
                    result.push_back(matrix.back()[i]);
                }
                matrix.pop_back();
            }

            //add the first element of the remaining rows in reverse order
                for (int i = matrix.size() - 1; i >= 0; i--) {
                if (!matrix[i].empty()) {
                    result.push_back(matrix[i].front());
                    matrix[i].erase(matrix[i].begin());
                }
            }
        }

        return result;
    }
};

int main(){
    Solution solution;

    vector<vector<int>> matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    vector<int> result = solution.spiralOrder(matrix);

    for(int num : result){
        cout << num << " ";
    }

    return 0;
}