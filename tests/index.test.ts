import { describe, expect, test } from 'bun:test';
import { greet, add } from '../src/index';

describe('greet', () => {
  test('returns greeting message', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('handles empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('adds zero', () => {
    expect(add(5, 0)).toBe(5);
  });
});
