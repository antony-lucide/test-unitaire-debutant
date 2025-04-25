// tests/calculator.test.js
import { clearResult, appendValue, appendOperator, calculate } from '../src/Calculator.js';

describe('Calculatrice', () => {
    beforeEach(() => {
      // Reset la calculatrice avant chaque test si nécessaire
      clearResult();
    });
  
    test('Addition', () => {
      appendValue('2');
      appendOperator('+');
      appendValue('3');
      calculate();
      expect(document.getElementById('result').value).toBe('5');
    });
  
    test('Soustraction', () => {
      appendValue('5');
      appendOperator('-');
      appendValue('3');
      calculate();
      expect(document.getElementById('result').value).toBe('2');
    });
  
    test('Multiplication', () => {
      appendValue('4');
      appendOperator('*');
      appendValue('3');
      calculate();
      expect(document.getElementById('result').value).toBe('12');
    });
  
    test('Division', () => {
      appendValue('10');
      appendOperator('/');
      appendValue('2');
      calculate();
      expect(document.getElementById('result').value).toBe('5');
    });
  
    test('Priorités d\'opérations', () => {
      appendValue('2');
      appendOperator('+');
      appendValue('3');
      appendOperator('*');
      appendValue('4');
      calculate();
      expect(document.getElementById('result').value).toBe('14');  // 2 + (3*4) = 14
    });
  
    test('Parenthèses', () => {
      appendValue('(');
      appendValue('2');
      appendOperator('+');
      appendValue('3');
      append(')');
      appendOperator('*');
      appendValue('4');
      calculate();
      expect(document.getElementById('result').value).toBe('20');  // (2+3)*4 = 20
    });
  
    test('Expression invalide', () => {
      appendValue('2');
      appendOperator('+');
      appendValue('bad');
      calculate();
      expect(document.getElementById('result').value).toBe('Erreur');
    });
  
    test('Chaîne vide', () => {
      calculate();
      expect(document.getElementById('result').value).toBe('0');
    });
  });
  