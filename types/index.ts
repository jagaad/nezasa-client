import type { WebhookEvent } from './api/webhook-api-models-v1';

export * as AgencyApi from './agency-api';
export * as CheckoutApiV1 from './checkout-api-v1';
export * as ConnectAccommodationsApi from './connect-accommodations-api';
export * as ConnectActivitiesApi from './connect-activities-api';
export * as ConnectTransportsApi from './connect-transports-api';
export * as InventoryPictureApi from './inventory-picture-api';
export * as InventorySupplierApi from './inventory-supplier-api';
export * as ItineraryApiV1 from './itinerary-api-v1';
export * as LocationApiV1 from './location-api-v1';
export * as PaymentApi from './payment-transaction-api';
export * as PlannerApiV1 from './planner-api-v1';
export * as TemplateApiV1 from './template-api-v1';
export * as WebhookApiV1 from './webhook-api-models-v1';

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
