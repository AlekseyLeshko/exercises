import test from 'ava';
import removeDuplicates from './remove-duplicates';

test('should return str without duplicates', t => {
  const arr = [{
    str: 'Hellllllllo!!11111One',
    expected: 'Helo!1One'
  }, {
    str: 'obj..method((paramss);',
    expected: 'obj.method(params);'
  }, {
    str: 'YYYyyyeah!!!',
    expected: 'Yyeah!'
  }];

  arr.map((elt) => {
    const actual = removeDuplicates(elt.str);

    console.log(actual);
    t.is(actual, elt.expected);
  });
});

