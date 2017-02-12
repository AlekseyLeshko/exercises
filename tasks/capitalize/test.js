import { describe } from 'ava-spec';
import capitalizeSimpleDecision from './capitalize-simple-decision';

describe('capitalize:', it => {
  it('should first letter is upper case', t => {
    const expected = 'Hello';
    const list = [
      'hello',
      'hELLO',
      'HELLO',
      'HeLlO',
      'hElLo',
    ];

    list.map((str) => {
      const actual = capitalizeSimpleDecision(str);

      t.is(actual, expected);
    });
  });
});

