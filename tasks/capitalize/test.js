import { describe } from 'ava-spec';
import capitalizeSimpleDecision from './capitalize-simple-decision';
import capitalizeMap from './capitalize-map';
import capitalizeRest from './capitalize-rest';

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
      let actual = capitalizeSimpleDecision(str);
      t.is(actual, expected);
      
      actual = capitalizeMap(str);
      t.is(actual, expected);

      actual = capitalizeRest(str);
      t.is(actual, expected);
    });
  });
});

