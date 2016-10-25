export default (maxVal) => {
  let sum = 0;

  for (let i = maxVal- 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
