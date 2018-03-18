import { describe } from 'ava-spec';
import anagrams from './anagrams'

describe('anagrams:', it => {
  it('should return all anagrams for word', t => {
    const expected = ['aabb', 'bbaa'];
    const actual = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);

    t.deepEqual(actual, expected);
  });
});

