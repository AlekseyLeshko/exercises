import {describe} from 'ava-spec';
import abbreviate from './abbreviate'
import abbreviateTwo from './abbreviate-two'

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

  it('finish', t => {
    const expected = 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n';
    const str = 'You need, need not want, to complete this code-wars mission';

    let actual = abbreviate(str);

    t.is(actual, expected);
  });

  it('on on a', t => {
    const expected = 'on on a';
    const str = 'on on a';

    let actual = abbreviate(str);

    t.is(actual, expected);
  });
});

describe('abbreviate tow', it => {
  it('big sentence', t => {
    const expected = 'e6t-r3s are r4y fun!';
    const str = 'elephant-rides are really fun!';

    let actual = abbreviateTwo(str);

    t.is(actual, expected);
  });

  it('internationalization', t => {
    const expected = 'i18n';
    const str = 'internationalization';

    let actual = abbreviateTwo(str);

    t.is(actual, expected);
  });

  it('finish', t => {
    const expected = 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n';
    const str = 'You need, need not want, to complete this code-wars mission';

    let actual = abbreviateTwo(str);

    t.is(actual, expected);
  });

  it('on on a', t => {
    const expected = 'on on a';
    const str = 'on on a';

    let actual = abbreviateTwo(str);

    t.is(actual, expected);
  });
});
