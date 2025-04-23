<?php 
use PHPUnit\Framework\TestCase;

class TestMath extends TestCase
{
    public function testAddition()
    {
        $this->assertEquals(2 + 2, 4);
    }

    public function testSubtraction()
    {
        $this->assertEquals(5 - 3, 2);
    }
}

?>