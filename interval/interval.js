import test from 'ava';

let logArr = [];
let logger = function(val) {
  logArr.push(val);
}

let interval = function(startVal, endVal, step) {
}

test.before(t => {
  logArr = [];
});

test('simple sequence', t => {
  const expected = [0, 1, 2, 3, 4, 5];
  interval(0, 5, 1);
  t.deepEqual(logArr, expected);
});

test('with step equals 3', t => {
  const expected = [0, 3, 6, 9];
  interval(0, 10, 3);
  t.deepEqual(logArr, expected);
});

test('negative step', t => {
  const expected = [5, 3, 1, -1, -3, -5];
  interval(5, -5, -2);
  t.deepEqual(logArr, expected);
});

test('empty logger', t => {
  const expected = [];
  interval(2, 0, -1);
  t.deepEqual(logArr, expected);
});

test('zero step', t => {
  const expected = [];
  interval(0, 3, 0);
  t.deepEqual(logArr, expected);
});