import { describe } from 'ava-spec';
import removeDuplicates from './remove-duplicates';

describe('remove duplicates', it => {
  it('a', t => {
    const expected = 'Helo';

    const actual = removeDuplicates('Hellllllllllo');

    t.is(actual, expected);
  });
});
