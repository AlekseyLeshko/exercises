import { describe } from 'ava-spec';
import capitalizeSimpleDecision from './capitalize-simple-decision';

describe('capitalize:', it => {
  it('should first letter is upper case', t => {
    const expected = 'Hello';
    const str = 'hello';

    const actual = capitalizeSimpleDecision(str);

    t.is(actual, expected);
  });
});

