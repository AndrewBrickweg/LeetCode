const findDissappearedNumbers = (nums) => {
  //max number in list
  let max = nums.length;

  //use set to find numbers in O(n) time
  let numberSet = new Set(nums);
  let results = [];

  for (let i = 1; i <= max; i++) {
    if (!numberSet.has(i)) {
      results.push(i);
    }
  }
  return results;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDissappearedNumbers(nums));
