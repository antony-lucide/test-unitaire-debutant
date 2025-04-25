const { calculate } = require('../src/calculator');

describe('Fonction calculate()', () => {
  test('addition', () => {
    expect(calculate("2+3")).toBe(5);
  });

  test('soustraction', () => {
    expect(calculate("10-4")).toBe(6);
  });

  test('multiplication', () => {
    expect(calculate("3*4")).toBe(12);
  });

  test('division', () => {
    expect(calculate("8/2")).toBe(4);
  });

  test('priorité opérateurs (2+3*4)', () => {
    expect(calculate("2+3*4")).toBe(14);
  });

  test('parenthèses ((2+3)*4)', () => {
    expect(calculate("(2+3)*4")).toBe(20);
  });

  test('expression invalide (2+bad)', () => {
    expect(() => calculate("2+bad")).toThrow("Expression invalide");
  });

  test('chaîne vide', () => {
    expect(() => calculate("")).toThrow("Expression invalide");
  });
});
