<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class MoneyRange implements Rule
{
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
        // Verificar si es un número simple o un rango de números
        $parts = explode(' - ', $value);

        if (count($parts) == 2) {
            // Es un rango
            $start = $parts[0];
            $end = $parts[1];

            // Validar que ambos extremos del rango sean cantidades de dinero válidas
            return $this->isValidMoney($start) && $this->isValidMoney($end);
        } else {
            // Es un solo valor, verificar si es una cantidad de dinero válida
            return $this->isValidMoney($value);
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
        return preg_match('/^[^\d]*\d{1,3}([,.]\d{3})*([.,]\d{2})?$/', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'El campo :attribute debe ser un número válido o un rango válido de cantidades de dinero.';
    }
}
