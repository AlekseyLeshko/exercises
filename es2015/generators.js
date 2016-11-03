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

function* g1() {
  yield 2;
  yield 3;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 4;
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

  it('generator with generator', t => {
    const gen = g2();

    let actual;
    for (let i = 1; i < 5; i++) {
      actual = gen.next(); 

      t.false(actual.done);
      t.is(actual.value, i);
    }
    actual = gen.next(); 

    t.true(actual.done);
  });
});
