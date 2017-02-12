import test from 'ava';
import { wrapper } from 'chuhai';
import capitalizeSimpleDecision from './capitalize-simple-decision';
import capitalizeMap from './capitalize-map';

const suite = wrapper(test);

suite('capitalize string', t => {
  const str = 'capitalize';
  const expected = 'Capitalize';
  let actual;

  t.cycle(() => {
    t.is(actual, expected);
  });

  t.bench('simple decision', () => {
    actual = capitalizeSimpleDecision(str);
  });

  t.bench('map decision', () => {
    actual = capitalizeMap(str);
  });
});

