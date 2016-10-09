let getSumMultiples3and5 = function(maxVal) {
  let sum = 0;

  for (var i = maxVal- 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

module.exports = getSumMultiples3and5;
