<?php

use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testAddition()
    {
        $this->assertEquals(2 + 2, 4);
    }
}
