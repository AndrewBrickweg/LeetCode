const missingNumber = (nums) => {
  let desiredSum = 0;
  let actualSum = 0;
  let missingNumber;

  for (let i = 0; i <= nums.length; i++) {
    desiredSum += i;
  }

  for (let num of nums) {
    actualSum += num;
  }

  missingNumber = desiredSum - actualSum;

  return missingNumber;
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(missingNumber(nums));
