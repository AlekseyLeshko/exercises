import test from 'ava';
import baseDecision  from './decisions/base-decision';

test('sum for values less 100', t => {
  const max = 100;
  const expected = 44;

  const sum = baseDecision(max);

  t.is(sum, expected);
});
