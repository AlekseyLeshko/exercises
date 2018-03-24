import { describe } from 'ava-spec';
import orderWeight from './order-weight';

describe('weight for weight:', it => {
  it('should return string with weight', t => {
    t.is(orderWeight('56 65 74 100 99 68 86 180 90'), '100 180 90 56 65 74 68 86 99');
    t.is(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99');
    t.is(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'), '11 11 2000 10003 22 123 1234000 44444444 9999');
    t.is(orderWeight('3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697'), '3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697');
  });
});

