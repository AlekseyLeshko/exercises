import {describe} from 'ava-spec';
import interval from './first-decision';

let logArr = [];
let logger = function(val) {
  logArr.push(val);
}

describe('interval', it => {
  it.beforeEach(t => {
    logArr = [];
  });

  it('sequence with step the one', t => {
    const expected = [0, 1, 2, 3, 4, 5];

    interval(0, 5, 1, logger);

    t.deepEqual(logArr, expected);
  });

  it('sequence with step the 3', t => {
    const expected = [0, 3, 6, 9];

    interval(0, 10, 3, logger);
    
    t.deepEqual(logArr, expected);
  });

  it('sequence with negative step the two', t => {
    const expected = [5, 3, 1, -1, -3, -5];
    
    interval(5, -5, -2, logger);

    t.deepEqual(logArr, expected);
  });

  it('initial value is less than the final', t => {
    const expected = [];

    interval(0, 2, -1, logger);

    t.deepEqual(logArr, expected);
  });

  it('sequence with zero step', t => {
    const expected = [];

    interval(0, 3, 0, logger);

    t.deepEqual(logArr, expected);
  });
});
