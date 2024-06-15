<?php

namespace App\Listeners;

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

        if ($type === 'payment_intent.succeeded') {
            $paymentIntent = $event->payload['data']['object'];
            $metadata = $paymentIntent['metadata'];

            Log::info('Metadata received', ['metadata' => $metadata]);

        }
    }
}
