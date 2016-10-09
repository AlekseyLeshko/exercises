import {describe} from 'ava-spec';
import myFirstDecesion from './decisions/first-decision';

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
