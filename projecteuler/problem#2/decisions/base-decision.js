let getSum = function(max) {
  let sum = 0;
  let isFinish = isLessOrEqual.bind(null, max);

  function fib(prev, curr) {
    if (isFinish(curr)) {
      return sum;
    }

    if (isEven(curr)) {
      sum += curr;
    }

    return fib(curr, prev + curr);
  }

  return fib(1, 2);
}

function isLessOrEqual(max, val) {
  return max <= val; 
}

function isEven(num) {
  return num % 2 === 0;
}

module.exports = getSum;
