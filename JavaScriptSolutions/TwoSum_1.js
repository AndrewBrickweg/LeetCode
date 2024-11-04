const twoSum = (nums, target) => {
  let targetMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (targetMap.has(complement)) {
      return [targetMap.get(complement), i];
    }

    targetMap.set(nums[i], i);
  }

  console.log(targetMap);
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target));
