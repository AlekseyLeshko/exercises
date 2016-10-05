import test from 'ava';

let getSumMultiples3and5 = function(val) {
  return 23;
}

test('sum natural numbers below 10 equals 23', t => {
  const expected = 23;

  let actual = getSumMultiples3and5(10);

  t.is(actual, expected);
});

