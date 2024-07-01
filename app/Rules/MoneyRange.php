<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class MoneyRange implements Rule
{
    /**
     * The custom error message.
     *
     * @var string
     */
    protected $errorMessage;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {

        $parts = explode(' - ', $value);

        if (count($parts) == 2) {
            // Es un rango
            $start = $parts[0];
            $end = $parts[1];


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

    /**
     * Helper function to validate if a value is a valid money amount.
     *
     * @param string $value
     * @return bool
     */
    private function isValidMoney($value)
    {
        return preg_match('/^[^\d\s]?\s?\d{1,3}([.,]\d{3})*([.,]\d{2})?$/', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return $this->errorMessage ?? 'The :attribute must be a valid monetary amount or a valid range of monetary amounts.';
    }
}
