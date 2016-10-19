let getSumMultiples3and5 = function(maxVal) {
  const firstDivider = 3;
  const secondDivider = 5;
  maxVal--;

  function sumDivisibleBy(n) {
    const p = Math.floor(maxVal / n);
    return n * (p * (p + 1)) / 2;
  }

  let sum = 0;
  sum += sumDivisibleBy(3)
  sum += sumDivisibleBy(5)
  sum -= sumDivisibleBy(15);

  return sum;
}

module.exports = getSumMultiples3and5;
