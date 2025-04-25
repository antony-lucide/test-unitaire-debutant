<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../src/calculator.php';

class CalculatorTest extends TestCase {
    public function testAddition() {
        $calc = new Calculator();
        $this->assertEquals(5, $calc->calculate("2+3"));
    }

    public function testSoustraction() {
        $calc = new Calculator();
        $this->assertEquals(6, $calc->calculate("10-4"));
    }

    public function testMultiplication() {
        $calc = new Calculator();
        $this->assertEquals(12, $calc->calculate("3*4"));
    }

    public function testDivision() {
        $calc = new Calculator();
        $this->assertEquals(4, $calc->calculate("8/2"));
    }

    public function testDivisionParZero() {
        $this->expectException(RuntimeException::class);
        $calc = new Calculator();
        $calc->calculate("10/0");
    }

    public function testExpressionInvalide() {
        $this->expectException(RuntimeException::class);
        $calc = new Calculator();
        $calc->calculate("2+bad");
    }

    public function testChaineVide() {
        $this->expectException(RuntimeException::class);
        $calc = new Calculator();
        $calc->calculate("");
    }
}
