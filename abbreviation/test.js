import {describe} from 'ava-spec';
import abbreviate from './abbreviate'
import abbreviateTwo from './abbreviate-two'

describe('abbreviate:', it => {
  describe('custom tests:', it => {
    let str;
    let expected;

    it.afterEach(t => {
      t.is(abbreviate(str), expected);
      t.is(abbreviateTwo(str), expected);
    });

    it('big sentence', t => {
      expected = 'e6t-r3s are r4y fun!';
      str = 'elephant-rides are really fun!';
    });

    it('internationalization', t => {
      expected = 'i18n';
      str = 'internationalization';
    });

    it('finish', t => {
      expected = 'You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n';
      str = 'You need, need not want, to complete this code-wars mission';
    });

    it('on on a', t => {
      expected = 'on on a';
      str = 'on on a';
    });
  });
});
