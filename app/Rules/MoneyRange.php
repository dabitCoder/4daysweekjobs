<?php
namespace App\Rules;
use Illuminate\Contracts\Validation\Rule;

class MoneyRange implements Rule
{
    protected $errorMessage;

    public function passes($attribute, $value)
    {
        $parts = explode('-', $value);
        if (count($parts) == 2) {
            // Es un rango
            $start = trim($parts[0]);
            $end = trim($parts[1]);
            if (!$this->isValidMoney($start) || !$this->isValidMoney($end)) {
                $this->errorMessage = "Both values in the range must be valid monetary amounts.";
                return false;
            }
            return true;
        } else {
            if (!$this->isValidMoney($value)) {
                $this->errorMessage = "The value must be a valid monetary amount.";
                return false;
            }
            return true;
        }
    }

    private function isValidMoney($value)
    {
        $value = trim(preg_replace('/[^\d.,]/', '', $value));

        return preg_match('/^\d{1,3}(([.,]\d{3})*|(\d{3})*)?([.,]\d{1,2})?$/', $value);
    }

    public function message()
    {
        return $this->errorMessage ?? 'The :attribute must be a valid monetary amount or a valid range of monetary amounts.';
    }
}
