const containsDuplicate = function (nums) {
  const newNums = new Set(nums);

  if (nums.length !== newNums.size) {
    return true;
  } else {
    return false;
  }
};

const nums = [1, 2, 3, 4];

containsDuplicate(nums);
