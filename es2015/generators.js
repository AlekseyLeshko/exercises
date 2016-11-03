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

function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

function* g4() {
  yield 1;
  return 'foo';
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
    const expected = [1, 2, 3, 5, 8, 13];
    let index = 0;
    const gen = fibonacci();

    for (let n of fibonacci()) {
      t.is(n, expected[index]);
      index++;
      if (n >= 13) {
        break;
      }
    }
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

  it('other objects', t => {
    let gen = g3(5, 6);

    t.is(gen.next().value, 1);
    t.is(gen.next().value, 2);
    t.is(gen.next().value, '3');
    t.is(gen.next().value, '4');
    t.is(gen.next().value, 5);
    t.is(gen.next().value, 6);
  });

  it('generator return vlue', t => {
    let gen = g4();

    t.is(gen.next().value, 1);
    t.is(gen.next().value, 'foo');
  });
});
