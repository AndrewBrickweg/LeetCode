let createCounter = function (n) {
  let count = n;

  return () => {
    return n++;
  };
};

// Example usage:
let counter = createCounter(5);
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
