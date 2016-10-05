import test from 'ava';

let getSumMultiples3and5 = function(maxVal) {
  let sum = 0;

  for (var i = maxVal- 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

test('sum natural numbers below 10 equals 23', t => {
  const expected = 23;

  let actual = getSumMultiples3and5(10);

  t.is(actual, expected);
});

test('answer', t => {
  const expected = 233168;

  let actual = getSumMultiples3and5(1000);

  t.is(actual, expected);
});
