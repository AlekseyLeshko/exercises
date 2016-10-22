import {describe} from 'ava-spec';
import abbreviate from './abbreviate'

describe('abbreviate', it => {
  it('big sentence', t => {
    const expected = 'e6t-r3s are r4y fun!';
    const str = 'elephant-rides are really fun!';

    let actual = abbreviate(str);

    t.is(actual, expected);
  });

  it('internationalization', t => {
    const expected = 'i18n';
    const str = 'internationalization';

    let actual = abbreviate(str);

    t.is(actual, expected);
  });
});
