export * as CheckoutApi from './checkout-api-v1';
export * as ItineraryApi from './itinerary-api-v1';
export * as LocationApi from './location-api-v1';
export * as PaymentApi from './payment-transaction-api';
export * as PlannerApi from './planner-api-v1';
export * as TemplateApi from './template-api-v1';
export * as WebhookApi from './webhook-api-models-v1';

// TODO: Move it somehow in WebhookApi
export enum WebhookEventType {
	COMPLETED = 'booking_completed',
	REQUESTED = 'booking_requested',
	CANCELLATION_INITIATED = 'cancellation_initiated',
	CANCELLATION_IN_PROGRESS = 'cancellation_in_progress',
	CANCELLATION_REQUESTED = 'cancellation_requested',
	CANCELLATION_COMPLETED = 'cancellation_completed',
	CHANGE_INITATED = 'booking_change_initiated',
	CHANGE_REQUESTED = 'booking_change_requested',
	CHANGE_COMPLETED = 'booking_change_completed',
	MODIFIED = 'booking_modified',
	PAX_CHANGED = 'pax_changed',
	PAYMENT_ADDED = 'payment_added',
	PAYMENT_DELETED = 'payment_deleted',
	REFUND_ADDED = 'refund_added',
	REFUND_CLOSED = 'refund_closed',
	REFUND_DELETED = 'refund_deleted',
	PING = 'ping',
}
