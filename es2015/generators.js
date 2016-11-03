import { describe } from 'ava-spec';

function* myGenerator() {
  yield 42;
  yield 3;
}

describe('generators:', it => {
  it('sample generator', t => {
    const gen = myGenerator();
    let actual = gen.next().value;
    t.is(actual, 42);

    actual = gen.next().value;
    t.is(actual, 3);
  });
});
