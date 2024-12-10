import type { WebhookEvent } from './api/webhook-api-models-v1';

export * as AgencyApi from './api/agency-api';
export * as CheckoutApi from './api/checkout-api-v1';
export * as ConnectAccommodationsApi from './api/connect-accommodations-api';
export * as ConnectActivitiesApi from './api/connect-activities-api';
export * as ConnectTransportsApi from './api/connect-transports-api';
export * as InventoryPictureApi from './api/inventory-picture-api';
export * as InventorySupplierApi from './api/inventory-supplier-api';
export * as ItineraryApi from './api/itinerary-api-v1';
export * as LocationApi from './api/location-api-v1';
export * as PaymentApi from './api/payment-transaction-api';
export * as PlannerApi from './api/planner-api-v1';
export * as TemplateApi from './api/template-api-v1';
export * as WebhookApi from './api/webhook-api-models-v1';

// TODO: Move it somewhere in WebhookApi
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

	pax_changed: 'pax_changed',

	payment_added: 'payment_added',
	payment_deleted: 'payment_deleted',
	payment_closed: 'payment_closed',

	refund_added: 'refund_added',
	refund_closed: 'refund_closed',
	refund_deleted: 'refund_deleted',

	ping: 'ping',
} satisfies Record<WebhookEvent, WebhookEvent>;

/**
 * @deprecated Use {@link WebhookEventEnum} and {@link WebhookEvent} instead
 */
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

declare module './api/webhook-api-models-v1' {
	type WebhookEvent = WebhookCreateRequest['events'][number];

	interface WebhookResponseEnhanced extends WebhookResponse {
		events: WebhookEvent[];
	}

	type WebhookListResponseEnhanced = WebhookResponseEnhanced[];
}
