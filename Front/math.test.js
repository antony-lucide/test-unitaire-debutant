import add from './math.js';

test('additionne 2 + 2 pour obtenir 4', () => {
  expect(add(2, 2)).toBe(4);
});
