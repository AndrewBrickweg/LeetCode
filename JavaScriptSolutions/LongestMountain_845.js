const longestMountain = (arr) => {
  //mountain is the largest sub array whose length >= 3 and peaks without changing order
  //two pointer approach for loop
  let n = arr.length;
  if (n < 3) return 0;

  let longest = 0;
  let left = 0;

  while (left < n - 2) {
    let right = left;

    // Find increasing sequence
    while (right + 1 < n && arr[right] < arr[right + 1]) {
      right++;
    }

    // Check for a peak
    if (right > left && right + 1 < n && arr[right] > arr[right + 1]) {
      // Find decreasing sequence
      while (right + 1 < n && arr[right] > arr[right + 1]) {
        right++;
      }

      // Calculate the mountain length
      longest = Math.max(longest, right - left + 1);
    }

    // Move `left` to the next potential start
    left = Math.max(right, left + 1);
  }

  return longest;
};

const arr = [2, 1, 4, 7, 3, 2, 5];

console.log(longestMountain(arr));
