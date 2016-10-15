let getSumFibonacciFor = function(max) {
  let sum = 0;

  function fibonacci(prev, curr) {
    if (curr >= max) {
      return sum;
    }

    if (curr % 2 === 0) {
      sum += curr;
    }

    return fibonacci(curr, prev + curr);
  }

  return fibonacci(1, 2);
}

module.exports = getSumFibonacciFor;
