const spiralMatrix = (matrix) => {
  let result = [];

  while (matrix.length > 0) {
    // Step 1: Add the first row into the result
    result = result.concat(matrix.shift());

    // Step 2: Pop off the last element in each remaining array
    if (matrix.length > 0) {
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > 0) {
          // Check if there are elements left
          result.push(matrix[i].pop());
        }
      }
    }

    // Step 3: Pop the last row into the result in reverse order
    if (matrix.length > 0) {
      result = result.concat(matrix.pop().reverse());
    }

    // Step 4: Add the remaining first elements from each row
    if (matrix.length > 0) {
      for (let i = matrix.length - 1; i >= 0; i--) {
        if (matrix[i].length > 0) {
          // Check if there are elements left
          result.push(matrix[i].shift());
        }
      }
    }
  }

  return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralMatrix(matrix));
