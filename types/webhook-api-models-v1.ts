import type { WebhookEvent } from './api/webhook-api-models-v1';

export * from './api/webhook-api-models-v1';

export const WebhookEventEnum = {
	booking_completed: 'booking_completed',
	booking_requested: 'booking_requested',
	booking_modified: 'booking_modified',
	booking_failed: 'booking_failed',

	cancellation_completed: 'cancellation_completed',

	booking_change_initiated: 'booking_change_initiated',
	booking_change_requested: 'booking_change_requested',
	booking_change_completed: 'booking_change_completed',
	booking_change_booking_failed: 'booking_change_booking_failed',
	booking_change_cancellation_failed: 'booking_change_cancellation_failed',

	pax_changed: 'pax_changed',

	payment_added: 'payment_added',
	payment_deleted: 'payment_deleted',
	payment_closed: 'payment_closed',

	refund_added: 'refund_added',
	refund_closed: 'refund_closed',
	refund_deleted: 'refund_deleted',

	ping: 'ping',
} satisfies Record<WebhookEvent, WebhookEvent>;

declare module './api/webhook-api-models-v1' {
	type WebhookEvent = WebhookCreateRequest['events'][number];

	interface WebhookResponseEnhanced extends WebhookResponse {
		events: WebhookEvent[];
	}

	type WebhookListResponseEnhanced = WebhookResponseEnhanced[];
}
