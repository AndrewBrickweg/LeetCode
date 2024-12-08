const quickSort = (nums) => {
  //base case
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  //partition
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

var threeSum = function (nums) {
  //sort array then use two pointer approach
  const sortedNums = quickSort(nums);
  let result = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let left = i + 1;
    let right = sortedNums.length - 1;

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum == 0) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;

        while (left < right && sortedNums[left] === sortedNums[left - 1])
          left++;
        while (left < right && sortedNums[right] === sortedNums[right + 1])
          right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }

  return result;
};

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
