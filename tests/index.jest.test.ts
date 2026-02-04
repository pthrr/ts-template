import { describe, expect, test } from '@jest/globals';
import * as fc from 'fast-check';
import { greet, add } from '../src/index';

describe('greet', () => {
  test('returns greeting message', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });
});

describe('add with fast-check', () => {
  test('is commutative', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        expect(add(a, b)).toBe(add(b, a));
      })
    );
  });

  test('has zero as identity', () => {
    fc.assert(
      fc.property(fc.integer(), (a) => {
        expect(add(a, 0)).toBe(a);
      })
    );
  });

  test('is associative', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), fc.integer(), (a, b, c) => {
        expect(add(add(a, b), c)).toBe(add(a, add(b, c)));
      })
    );
  });
});
