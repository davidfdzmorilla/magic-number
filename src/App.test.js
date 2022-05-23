import guessNumber from './utils/guessNumber';

test('guessNumber(1, 10000000000, -1) returns -1', () => {
  expect(guessNumber(1, 10000000000, -1)).toBe(-1);
});

test('guessNumber(1, 10000000000, 0) returns -1', () => {
  expect(guessNumber(1, 10000000000, 0)).toBe(-1);
});

test('guessNumber(1, 10000000000, 1) returns 1', () => {
  expect(guessNumber(1, 10000000000, 1)).toBe(1);
});

test('guessNumber(1, 10000000000, 9999999999) returns 9999999999', () => {
  expect(guessNumber(1, 10000000000, 9999999999)).toBe(9999999999);
});

test('guessNumber(1, 10000000000, 10000000000) returns 10000000000', () => {
  expect(guessNumber(1, 10000000000, 10000000000)).toBe(10000000000);
});

test('guessNumber(1, 10000000000, 10000000001) returns -1', () => {
  expect(guessNumber(1, 10000000000, 10000000001)).toBe(-1);
});

