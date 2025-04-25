<?php
// tests/CalculatorTest.php

use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/../calculator.php'; 

class CalculatorTest extends TestCase {

    private $calculator;

    protected function setUp(): void {
        // Initialiser l'objet Calculator avant chaque test
        $this->calculator = new Calculator();
    }

    public function testAddition() {
        $result = $this->calculator->calculate('2+3');
        $this->assertEquals(5, $result);
    }

    public function testSubtraction() {
        $result = $this->calculator->calculate('5-3');
        $this->assertEquals(2, $result);
    }

    public function testMultiplication() {
        $result = $this->calculator->calculate('4*3');
        $this->assertEquals(12, $result);
    }

    public function testDivision() {
        $result = $this->calculator->calculate('10/2');
        $this->assertEquals(5, $result);
    }

    public function testDivisionByZero() {
        $this->expectException(RuntimeException::class);
        $this->calculator->calculate('10/0');
    }

    public function testEmptyString() {
        $result = $this->calculator->calculate('');
        $this->assertEquals(0, $result);  // Si la chaîne est vide, on retourne 0
    }
}
