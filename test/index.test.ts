import {describe, expect, test} from '@jest/globals';
import {sum} from '../src';

describe('sum', () => {
  test('a + b = c', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 4)).toBe(5);
    expect(sum(1, 5)).toBe(6);
    expect(sum(1, 6)).toBe(7);
    expect(sum(1, 7)).toBe(8);
    expect(sum(1, 8)).toBe(9);
    expect(sum(1, 9)).toBe(10);
    expect(sum(1, 10)).toBe(11);
    expect(sum(1, 11)).toBe(12);
    expect(sum(1, 12)).toBe(13);
    expect(sum(1, 13)).toBe(14);
    expect(sum(1, 14)).toBe(15);
    expect(sum(1, 15)).toBe(16);
    expect(sum(1, 16)).toBe(17);
    expect(sum(1, 17)).toBe(18);
    expect(sum(1, 18)).toBe(19);
    expect(sum(1, 19)).toBe(20);
    expect(sum(1, 20)).toBe(21);
    expect(sum(1, 21)).toBe(22);
    expect(sum(1, 22)).toBe(23);
    expect(sum(1, 23)).toBe(24);
    expect(sum(1, 24)).toBe(25);
    expect(sum(1, 25)).toBe(26);
    expect(sum(1, 26)).toBe(27);
  });
});