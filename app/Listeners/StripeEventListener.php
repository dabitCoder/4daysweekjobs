<?php

namespace App\Listeners;

use App\Models\User;
use Illuminate\Support\Facades\Log;
use Laravel\Cashier\Events\WebhookReceived;

class StripeEventListener
{
    /**
     * Handle received Stripe webhooks.
     */
    public function handle(WebhookReceived $event): void
    {
        ['type' => $type, 'data' => $data] = $event->payload;

        if ($type === 'customer.created') {
            $customerId = $data['object']['id'];
            $customerEmail = $data['object']['email'];

            try {
                User::where('email', $customerEmail)->update(['stripe_id' => $customerId]);
                Log::info('New customer', $data);
            } catch (\Throwable $e) {
                Log::error($e->getMessage());
            }
        }

        if ($type === 'customer.deleted') {
            $customerId = $data['object']['id'];
            try {
                User::where('stripe_customer_id', $customerId)->update(['stripe_id' => null]);
            } catch (\Throwable $e) {
                Log::error($e->getMessage());
            }
        }
    }
}
