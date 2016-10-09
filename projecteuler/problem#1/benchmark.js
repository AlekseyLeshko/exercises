import test from 'ava';
import { wrapper } from 'chuhai';
import myFirstDecesion from './decisions/first-decision';

const suite = wrapper(test);

suite('sum natural numbers below 10', t => {
  t.set('maxTime', 0.01);
  t.set('minSamples', 10);

  const number = 10;
  const expected = 23;
  let actual;

  t.cycle(() => {
    t.is(actual, expected);
  });

  t.bench('first decision', () => {
    actual = myFirstDecesion(number);
  });

  t.bench('second decision', () => {
    actual = myFirstDecesion(number);
  });
});

suite('sum natural numbers below 1000', t => {
  t.set('maxTime', 0.01);
  t.set('minSamples', 10);

  const number = 1000;
  const expected = 233168;
  let actual;

  t.cycle(() => {
    t.is(actual, expected);
  });

  t.bench('first decision', () => {
    actual = myFirstDecesion(number);
  });

  t.bench('second decision', () => {
    actual = myFirstDecesion(number);
  });
});

