import guessNumber from './utils/guessNumber';

test('guessNumber(1, 10000000000, -1) returns -1', () => {
  expect(guessNumber(1, 10000000000, -1)).toBe(-1)
})

test('guessNumber(1, 10000000000, 0) returns -1', () => {
  expect(guessNumber(1, 10000000000, 0)).toBe(-1)
})

test('guessNumber(1, 10000000000, 1) returns 1', () => {
  expect(guessNumber(1, 10000000000, 1)).toBe(1)
})

test('guessNumber(1, 10000000000, 5) returns 5', () => {
  expect(guessNumber(1, 10000000000, 5)).toBe(5)
})

test('guessNumber(1, 10000000000, 146) returns 146', () => {
  expect(guessNumber(1, 10000000000, 146)).toBe(146)
})

test('guessNumber(1, 10000000000, 4756) returns 4756', () => {
  expect(guessNumber(1, 10000000000, 4756)).toBe(4756)
})

test('guessNumber(1, 10000000000, 653785) returns 653785', () => {
  expect(guessNumber(1, 10000000000, 653785)).toBe(653785)
})

test('guessNumber(1, 10000000000, 7564935) returns 7564935', () => {
  expect(guessNumber(1, 10000000000, 7564935)).toBe(7564935)
})

test('guessNumber(1, 10000000000, 5000000000) returns 5000000000', () => {
  expect(guessNumber(1, 10000000000, 5000000000)).toBe(5000000000)
})

test('guessNumber(1, 10000000000, 9999999999) returns 9999999999', () => {
  expect(guessNumber(1, 10000000000, 9999999999)).toBe(9999999999)
})

test('guessNumber(1, 10000000000, 10000000000) returns 10000000000', () => {
  expect(guessNumber(1, 10000000000, 10000000000)).toBe(10000000000)
})

test('guessNumber(1, 10000000000, 10000000001) returns -1', () => {
  expect(guessNumber(1, 10000000000, 10000000001)).toBe(-1)
})

