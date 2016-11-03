import { describe } from 'ava-spec';

function* myGenerator() {
  yield 42;
  yield 3;
}

function* fibonacci() {
  let prev = 0;
  let curr = 1;

  while(true) {
    let newNumber = curr + prev; 
    prev = curr;
    curr = newNumber;
    yield newNumber;
  }
}

describe('generators:', it => {
  it('sample generator', t => {
    const gen = myGenerator();
    let actual = gen.next().value;
    t.is(actual, 42);

    actual = gen.next().value;
    t.is(actual, 3);
  });

  it('fibonacci generator', t => {
    const gen = fibonacci();

    t.is(gen.next().value, 1);
    t.is(gen.next().value, 2);
    t.is(gen.next().value, 3);
    t.is(gen.next().value, 5);
    t.is(gen.next().value, 8);
    t.is(gen.next().value, 13);
  });
});
