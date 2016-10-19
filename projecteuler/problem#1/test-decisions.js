import {describe} from 'ava-spec';
import myFirstDecesion from './decisions/first-decision';
import mySecondDecesion from './decisions/second-decision';
import standartDecesion from './decisions/standart';

describe('first decision: sum natural numbers below', it => {
  it('10', t => {
    const expected = 23;

    let actual = myFirstDecesion(10);

    t.is(actual, expected);
  });

  it('1000', t => {
    const expected = 233168;

    let actual = myFirstDecesion(1000);

    t.is(actual, expected);
  });
});

describe('second decision: sum natural numbers below', it => {
  it('10', t => {
    const expected = 23;

    let actual = mySecondDecesion(10);

    t.is(actual, expected);
  });

  it('1000', t => {
    const expected = 233168;

    let actual = mySecondDecesion(1000);

    t.is(actual, expected);
  });
});

describe('standart: sum natural numbers below', it => {
  it('10', t => {
    const expected = 23;

    let actual = standartDecesion(10);

    t.is(actual, expected);
  });

  it('1000', t => {
    const expected = 233168;

    let actual = standartDecesion(1000);

    t.is(actual, expected);
  });
});
