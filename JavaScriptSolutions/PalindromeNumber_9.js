const isPalindrome = function (x) {
  // two pointer approach? as check first and last index moving inward as long as they both equal each other until they are the same index?
  // break individual digits into in place array
  const xArray = x.toString().split("").map(Number);

  const n = xArray.length;

  let beg = 0;
  let end = n - 1;

  while (beg < end) {
    if (xArray[beg] != xArray[end]) {
      return false;
    } else {
      beg++;
      end--;
    }
  }

  return true;
};

const x = 12134543121;
console.log(isPalindrome(x)); // true
