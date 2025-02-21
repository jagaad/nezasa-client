import type {
	WebhookCreateRequest,
	WebhookResponse as WebhookResponseApi,
} from './api/webhook-api-models-v1';

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

export type WebhookEvent = WebhookCreateRequest['events'][number];

// Override the WebhookResponse type to use the WebhookEvent type
export interface WebhookResponse extends WebhookResponseApi {
	events: WebhookEvent[];
}

// Override the WebhookListResponse type to use the WebhookResponse type
export type WebhookListResponse = WebhookResponse[];
