const sortedSquares = (nums) => {
  let n = nums.length;
  let sqNum = Array(n);
  let left = 0;
  let right = n - 1;
  let pos = n - 1;

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];

    if (leftSq > rightSq) {
      sqNum[pos--] = leftSq;
      left++;
    } else {
      sqNum[pos--] = rightSq;
      right--;
    }
  }

  return sqNum;
};

const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
