const { add, subtract } = require('./math');

test('add: 2 + 3 equals 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract: 10 - 4 equals 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('INTENTIONAL FAIL: add returns wrong value', () => {
  expect(add(1, 1)).toBe(999);
});