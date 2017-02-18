import test from 'ava';
import { wrapper } from 'chuhai';
import myFirstDecesion from './decisions/first';
import mySecondDecesion from './decisions/second';
import standartDecesion from './decisions/standart';

const suite = wrapper(test);

suite('sum natural numbers below 10', t => {
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
    actual = mySecondDecesion(number);
  });
  
  t.bench('standart decision', () => {
    actual = standartDecesion(number);
  });
});

suite('sum natural numbers below 1000', t => {
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
    actual = mySecondDecesion(number);
  });

  t.bench('standart decision', () => {
    actual = standartDecesion(number);
  });
});

