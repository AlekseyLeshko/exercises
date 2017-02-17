export default function(n, p) {
  let power = p;
  const sum = n
    .toString()
    .split('')
    .reduce((sum, char) => {
      const num = parseInt(char, 10);
      return sum += Math.pow(num, power++);
    }, 0);

  const k = sum / n;

  if (Number.isInteger(k)) {
    return k;
  } else {
    return -1;
  }
}

