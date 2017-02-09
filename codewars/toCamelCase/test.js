import { describe } from 'ava-spec';
import toCamelCase, { isSeparator } from './toCamelCase';

describe('toCamelCase:', it => {
  it('should convert snake case', t => {
    const expected = 'helloWorld';
    const str = 'hello_world';

    const actual = toCamelCase(str);

    t.is(actual, expected);
  });

  it('should char is separator', t => {
    const char = '_';

    const actual = isSeparator(char);

    t.truthy(actual);
  });

  it('should char is not separator', t => {
    const char = 'a';

    const actual = isSeparator(char);

    t.falsy(actual);
  });
});

