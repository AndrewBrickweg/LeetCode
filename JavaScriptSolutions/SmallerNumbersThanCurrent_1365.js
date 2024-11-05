const smallerNumbersThanCurrent = (nums) => {
  let map = new Map();
  let result = [];
  let sortedNums = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    map.set(sortedNums[i], sortedNums.indexOf(sortedNums[i]));
  }

  nums.forEach((num) => {
    result.push(map.get(num));
  });

  return result;
};

const nums = [8, 1, 2, 2, 3];

console.log(smallerNumbersThanCurrent(nums));
