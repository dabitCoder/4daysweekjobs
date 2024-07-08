<?php

use PHPUnit\Framework\TestCase;
use App\Rules\MoneyRange;

class MoneyRangeTest extends TestCase
{
    private $rule;

    protected function setUp(): void
    {
        parent::setUp();
        $this->rule = new MoneyRange();
    }

    public function testValidSingleAmount()
    {
        $this->assertTrue($this->rule->passes('amount', '1000'));
        $this->assertTrue($this->rule->passes('amount', '$1,000.00'));
        $this->assertTrue($this->rule->passes('amount', '1.000,00'));
    }

    public function testInvalidSingleAmount()
    {
        $this->assertFalse($this->rule->passes('amount', 'abc'));
        $this->assertFalse($this->rule->passes('amount', '1000.000'));
    }

    public function testValidRange()
    {
        $this->assertTrue($this->rule->passes('range', '1000 - 2000'));
        $this->assertTrue($this->rule->passes('range', '$1,000.00 - $2,000.00'));
        $this->assertTrue($this->rule->passes('range', '1,000$ - 2,000$'));
    }

    public function testInvalidRange()
    {
        $this->assertFalse($this->rule->passes('range', '1000 - abc'));
        $this->assertFalse($this->rule->passes('range', 'abc - 2000'));
    }

    public function testErrorMessages()
    {
        $this->rule->passes('amount', 'abc');
        $this->assertEquals('The value must be a valid monetary amount.', $this->rule->message());

        $this->rule->passes('range', '1000 - abc');
        $this->assertEquals('Both values in the range must be valid monetary amounts.', $this->rule->message());
    }
}
