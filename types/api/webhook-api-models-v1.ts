/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** To create a new webhook */
export interface WebhookCreateRequest {
	/** An optional name that the client can use to identify the webhook with a human-readable name */
	name?: string;
	/**
	 * Determines if notifications are sent when the webhook is triggered. Set to true to send notifications.
	 * @default true
	 */
	active?: boolean;
	/** Determines what events the hook is triggered for. The existing event array is overwritten with the values contained in this request. */
	events: (
		| 'booking_completed'
		| 'booking_requested'
		| 'booking_failed'
		| 'cancellation_completed'
		| 'booking_change_initiated'
		| 'booking_change_completed'
		| 'booking_change_requested'
		| 'booking_change_booking_failed'
		| 'booking_modified'
		| 'payment_added'
		| 'payment_closed'
		| 'payment_deleted'
		| 'refund_added'
		| 'refund_closed'
		| 'refund_deleted'
		| 'pax_changed'
		| 'ping'
	)[];
	/** Describes a target of a webhook call. */
	target: WebhookTarget;
}

/**
 * To update an existing webhook. Only attributes that are defined in the request are updated. Other attributes remain unchanged.
 * The target can only be modified as an atomic unit, i.e. either all attributes of the target including the secret have to be specified or no target at all.
 */
export interface WebhookUpdateRequest {
	/** An optional name that the client can use to identify the webhook with a human-readable name */
	name?: string;
	/**
	 * Determines if notifications are sent when the webhook is triggered. Set to true to send notifications.
	 * @default true
	 */
	active?: boolean;
	/** Determines what events the hook is triggered for. The existing event array is overwritten with the values contained in this request. */
	events?: (
		| 'booking_completed'
		| 'booking_requested'
		| 'booking_failed'
		| 'cancellation_completed'
		| 'booking_change_initiated'
		| 'booking_change_completed'
		| 'booking_change_requested'
		| 'booking_change_booking_failed'
		| 'booking_modified'
		| 'payment_added'
		| 'payment_closed'
		| 'payment_deleted'
		| 'refund_added'
		| 'refund_closed'
		| 'refund_deleted'
		| 'pax_changed'
		| 'ping'
	)[];
	/** Describes a target of a webhook call. */
	target?: WebhookTarget;
}

export type WebhookListResponse = WebhookResponse[];

/** A registered webhook */
export interface WebhookResponse {
	/** The id of the webhook */
	id: string;
	/** An optional name that the client can use to identify the webhook with a human-readable name */
	name?: string;
	/**
	 * Determines if notifications are sent when the webhook is triggered. Set to true to send notifications.
	 * @default true
	 */
	active?: boolean;
	/** Determines what events the hook is triggered for. */
	events: string[];
	/** Describes a target of a webhook call. */
	target: WebhookTarget;
	/** The timestamp when the webhook was created. A "date-time" as defined by https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14 */
	created: string;
	/** The timestamp when the webhook was modified the last time. A "date-time" as defined by https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14 */
	modified: string;
}

/** Describes a target of a webhook call. */
export interface WebhookTarget {
	/** The URL which will be called and to which the payloads will be delivered. Only https URLs are supported. */
	url: string;
	/**
	 * If provided, the secret will be used as the key to generate the HMAC hex digest value in the `X-Nezasa-Signature` header.
	 * The 256-bit secret must be specified as 16 hexadecimal digits without any special prefix like 0x.
	 * @example "1234567890abcdef"
	 */
	secret: string;
}

/** An array of Problem objects */
export interface ProblemResponse {
	/**
	 * The HTTP status code generated for this problem response
	 * @format int32
	 * @min 100
	 * @max 600
	 * @exclusiveMax true
	 */
	status: number;
	problems: Problem[];
}

/** A Problem object inspired by https://tools.ietf.org/html/rfc7807 (Problem Details for HTTP APIs) */
export interface Problem {
	/**
	 * A specific code narrowing the type of Problem down
	 * @example "InputValidation"
	 */
	code: string;
	/** A human readable explanation (localized to the language of the user) of this problem */
	detail: string;
	/** The severity of the problem */
	level: 'ERROR' | 'WARNING';
	/** An object containing references to the source of the error */
	source?: ProblemSource;
}

/** An object containing references to the source of the error */
export interface ProblemSource {
	/**
	 * A reference to the associated entity in the request document which caused the problem
	 * @example ""/data" for a primary data object or "/title" for a specific attribute"
	 */
	pointer: string;
}
