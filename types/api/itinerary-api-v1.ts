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

export interface MagicLinkRequest {
	/**
	 * The target URL. Supports relative and absolute URLs. If a relative URL was used as input,
	 * the endpoint will return a relative URL as output, and vice versa.
	 * @example "/planner-copilot?q=3%20days%20italy"
	 */
	targetUrl: string;
	/**
	 * The ID of the agency for which to create the magic link.
	 * @example "agency123"
	 */
	agencyRefId: string;
}

export interface MagicLinkResponse {
	/**
	 * The target URL including the authentication token. The URL is relative if the input target URL
	 * was relative, and absolute if the input target URL was absolute.
	 * @example "/auth/token?t=HfjhzGr9NXxenLAiaJdijqvmfRJqVw8dwieKMccRwZET0UvhziNqc9zOVDZ3Tt3hze59fNHayYsk&nz-redirect=%252Fplanner-copilot%253Fq%253D3%252520days%252520italy"
	 */
	magicLinkUrl: string;
	/**
	 * ISO-formatted timestamp when the token was created.
	 * @example "2025-01-01T10:00:00.000Z"
	 */
	creationTime?: string;
	/**
	 * ISO-formatted timestamp when the token will expire.
	 * @example "2025-01-01T11:00:00.000Z"
	 */
	expirationTime?: string;
}

/** Pull PNR Itinerary Request */
export interface FromPullPnrRequest {
	/** List of itinerary segments */
	segments: FromPullPnrRequestSegment[];
	/** Aer agency number */
	aerAgencyNumber?: string;
	allocatedPax?: PaxAllocationInitParams;
	/** The travel agency which created an itinerary. */
	agencyRefId?: AgencyRefId;
}

export interface FromTemplateRequest {
	/**
	 * The ID of the trip for which a personalized itinerary has to be created. This denotes Nezasa's
	 * internal trip identifier of the itinerary template.
	 *
	 * Either `tripRefId` or `externalRefId` must be provided.
	 * @example "t123456"
	 */
	tripRefId?: string;
	/**
	 * The ID of the trip as it's used in a 3rd party system (e.g., the identifier of the trip in a
	 * customer system that is taken over during an import).
	 *
	 * Either `tripRefId` or `externalRefId` must be provided.
	 */
	externalRefId?: string;
	accommodationLevel?: AccommodationLevelPreference;
	allocatedPax?: PaxAllocationInitParams;
	/** The travel agency which created an itinerary. */
	agencyRefId?: AgencyRefId;
	/**
	 * An object that defines the number of PAX. If the total number of PAX is defined the system tries to find
	 * an optimal occupancy of the PAX over the rooms. This occupancy can later be changed in the Nezasa planner.
	 */
	numPax?: NumPax;
	/** The start date of the itinerary. The start date must be in the future. */
	startDate: StartDate;
	/**
	 * ID of the module to be used for a module group when instantiating the itinerary.
	 * If not defined, the default module of the group is used.
	 */
	alternativeModules?: AlternativeModules;
	/** The customer's first name if already known. Will be stored on the itinerary as contact details. */
	firstName?: ContactFirstName;
	/** The customer's last name if already known. Will be stored on the itinerary as contact details. */
	lastName?: ContactLastName;
	/** The customer's email address if already known. Will be stored on the itinerary as contact details. */
	email?: ContactEmail;
	/**
	 * A reference to a location. The location can be either be defined exactly by providing the location ID,
	 * or by means of the descriptive fields `countryCode` and `name`. If both are provided,
	 * the location ID takes precedence. Searching by the descriptive fields is best effort and might not always
	 * be successful. If it fails, the itinerary creation will fail overall.
	 *
	 * Whenever possible, it is recommended to use the location ID.
	 *
	 * Area search: whenever possible, pass the country code as well to narrow down the search. The search
	 * will leverage the area ratings and pick the highest ranked area within the search results. There
	 * is no error/warning if the search results return several areas.
	 *
	 * Airport search: always use the ID-based approach for airports. The airport definition by name is not
	 * supported because generally, the IATA code of an airport is publicly known and can be used.
	 */
	departureLocationRef?: LocationReference;
	/** The ISO-4217 currency code (e.g. EUR, USD, etc) */
	currency?: Currency;
	/**
	 * An array of elements to instantiate with the itinerary. As of today, these are the possible values:
	 *
	 * - `international-flights`
	 *   - Add the incoming and outgoing flights to the itinerary.
	 *   - `departureLocationRef` must also be defined in the request in this case.
	 *
	 * Generally speaking, the usage of this attribute will make the instantiation much slower because
	 * the system will trigger the searches, e.g., for flights in order to automatically add them to the itinerary.
	 */
	instantiateWith?: InstantiateWith;
	/**
	 * An object that defines the instantiation hints for the accommodations. The key is the stop index and the value
	 * is the accommodation ID. The stop index is the index of the stop in the itinerary, starting with 0.
	 *
	 * If an accommodation is hinted and is not available, the stop is created without an accommodation.
	 */
	hints?: InstantiationHint[];
	/**
	 * An object that defines the meta attributes used for the CRS use case. These are the CRS client that is used,
	 * the action performed in the CRS client, and the travel agency identifier. See Nezasa Booking API for more
	 * details about the meta attributes for CRS.
	 *
	 * Required for the CRS use case. Or in different words: if this attribute is set this defines that the caller
	 * is in a CRS integration use case and the response will deliver attributes required for CRS use cases (such
	 * as the URL that can be used as Alias Link in the CRS).
	 */
	meta?: ClientMeta;
	/**
	 * An opaque string, which is stored as part of the itinerary’s initialization parameters.
	 *
	 * Note that the system will not attempt to interpret this external customer id in any way.
	 *
	 * The system will also assume that
	 * - this customer id is not security relevant and can be logged and sent to the Google Analytics service.
	 * - the external customer id does not leak any PII (Personally Identifiable Information) and is thus GDPR compliant
	 */
	externalCustomerId?: ExternalCustomerId;
}

export interface FromScratchRequest {
	/** The title of the itinerary. If not provided, the system will generate a title based on the start and end locations. */
	title?: string;
	/**
	 * A reference to a location. The location can be either be defined exactly by providing the location ID,
	 * or by means of the descriptive fields `countryCode` and `name`. If both are provided,
	 * the location ID takes precedence. Searching by the descriptive fields is best effort and might not always
	 * be successful. If it fails, the itinerary creation will fail overall.
	 *
	 * Whenever possible, it is recommended to use the location ID.
	 *
	 * Area search: whenever possible, pass the country code as well to narrow down the search. The search
	 * will leverage the area ratings and pick the highest ranked area within the search results. There
	 * is no error/warning if the search results return several areas.
	 *
	 * Airport search: always use the ID-based approach for airports. The airport definition by name is not
	 * supported because generally, the IATA code of an airport is publicly known and can be used.
	 */
	departureLocationRef?: LocationReference;
	/**
	 * A reference to a location. The location can be either be defined exactly by providing the location ID,
	 * or by means of the descriptive fields `countryCode` and `name`. If both are provided,
	 * the location ID takes precedence. Searching by the descriptive fields is best effort and might not always
	 * be successful. If it fails, the itinerary creation will fail overall.
	 *
	 * Whenever possible, it is recommended to use the location ID.
	 *
	 * Area search: whenever possible, pass the country code as well to narrow down the search. The search
	 * will leverage the area ratings and pick the highest ranked area within the search results. There
	 * is no error/warning if the search results return several areas.
	 *
	 * Airport search: always use the ID-based approach for airports. The airport definition by name is not
	 * supported because generally, the IATA code of an airport is publicly known and can be used.
	 */
	startLocationRef?: LocationReference;
	/**
	 * A reference to a location. The location can be either be defined exactly by providing the location ID,
	 * or by means of the descriptive fields `countryCode` and `name`. If both are provided,
	 * the location ID takes precedence. Searching by the descriptive fields is best effort and might not always
	 * be successful. If it fails, the itinerary creation will fail overall.
	 *
	 * Whenever possible, it is recommended to use the location ID.
	 *
	 * Area search: whenever possible, pass the country code as well to narrow down the search. The search
	 * will leverage the area ratings and pick the highest ranked area within the search results. There
	 * is no error/warning if the search results return several areas.
	 *
	 * Airport search: always use the ID-based approach for airports. The airport definition by name is not
	 * supported because generally, the IATA code of an airport is publicly known and can be used.
	 */
	endLocationRef?: LocationReference;
	/**
	 * A list of legs defining the newly initialized itinerary. If not defined, the itinerary
	 * will be created with a single stop that is located next to the start location in the destination.
	 *
	 * If the start or end locations are not defined, the system will take the first or last leg's location as the
	 * start or end location.
	 */
	legs?: LegSkeleton[];
	allocatedPax?: PaxAllocationInitParams;
	/** The travel agency which created an itinerary. */
	agencyRefId?: AgencyRefId;
	/**
	 * An object that defines the number of PAX. If the total number of PAX is defined the system tries to find
	 * an optimal occupancy of the PAX over the rooms. This occupancy can later be changed in the Nezasa planner.
	 */
	numPax?: NumPax;
	paxInfo?: PaxInfoInitParams[];
	/** The start date of the itinerary. The start date must be in the future. */
	startDate: StartDate;
	/** The customer's first name if already known. Will be stored on the itinerary as contact details. */
	firstName?: ContactFirstName;
	/** The customer's last name if already known. Will be stored on the itinerary as contact details. */
	lastName?: ContactLastName;
	/** The customer's email address if already known. Will be stored on the itinerary as contact details. */
	email?: ContactEmail;
	/** The ISO-4217 currency code (e.g. EUR, USD, etc) */
	currency?: Currency;
	/**
	 * An opaque string, which is stored as part of the itinerary’s initialization parameters.
	 *
	 * Note that the system will not attempt to interpret this external customer id in any way.
	 *
	 * The system will also assume that
	 * - this customer id is not security relevant and can be logged and sent to the Google Analytics service.
	 * - the external customer id does not leak any PII (Personally Identifiable Information) and is thus GDPR compliant
	 */
	externalCustomerId?: ExternalCustomerId;
	/** The creation channel. It is derived automatically in most cases, but may also be set by the caller, e.g., in case of PlannerCopilot. */
	creationChannel?: ItineraryCreationChannel;
	/**
	 * The ID of the Planner Copilot conversation that lead to the creation of itinerary call. The ID
	 * might be used for data correlation purposes between the Copilot and the Core TripBuilder services.
	 */
	plannerCopilotConversationId?: PlannerCopilotConversationId;
}

export interface ItineraryResponse {
	data?: {
		/**
		 * The type of the resource. Always "itinerary".
		 * @example "itinerary"
		 */
		type: string;
		/**
		 * The unique identifier of the created itinerary. Corresponds to the refId of the itinerary.
		 * @example "z6scmambpqza"
		 */
		id: string;
		attributes: {
			/**
			 * The unique identifier of the created itinerary. Corresponds to the refId of the itinerary.
			 * @example "z6scmambpqza"
			 */
			refId: string;
			/**
			 * The localized title of the created itinerary.
			 * @example "TEST Südkalifornien - Mietwagenrundreise"
			 */
			title: string;
			/** An object containing information relevant for CRS integration use cases. */
			crsClient?: {
				/**
				 * The url contained in this object can be used as Alias Link in CRS and performs an automatic login of the
				 * agency in the Nezasa B2B application.
				 */
				url?: string;
			};
		};
	};
	meta?: Meta;
}

/** An array of error objects */
export interface ErrorResponse {
	/**
	 * The HTTP status code generated for this problem response
	 * @format int32
	 * @min 100
	 * @max 600
	 * @exclusiveMax true
	 */
	status: number;
	errors: Error[];
}

/** An error object inspired by https://jsonapi.org/format/#error-objects */
export interface Error {
	/**
	 * A specific code narrowing the type of Problem down
	 * @example "InputValidation"
	 */
	code: string;
	/**
	 * A short, human-readable summary of the problem that SHOULD
	 * NOT change from occurrence to occurrence of the problem, except for
	 * purposes of localization.
	 */
	title?: string;
	/**
	 * A human-readable explanation specific to this occurrence of
	 * the problem. Like title, this field’s value can be localized.
	 */
	detail?: string;
	/** An object containing references to the source of the error */
	source?: ProblemSource;
	meta?: ErrorMeta;
}

export interface ErrorMeta {
	/** The level of the error. Can be either "warning" or "error". If not provided, the default is "error". */
	level?: string;
	alias?: string;
	url?: string;
}

/** An object containing references to the source of the error */
export interface ProblemSource {
	/**
	 * A reference to the associated entity in the request document which caused the problem
	 * @example ""/data" for a primary data object or "/title" for a specific attribute"
	 */
	pointer: string;
}

export interface Meta {
	notifications: Notification[];
}

export interface Notification {
	notificationType:
		| 'GeneralInfo'
		| 'GeneralError'
		| 'ServiceUnavailable'
		| 'NotAuthorized';
	/** Field containing the general warning / information to display to the user */
	message: string;
}

/**
 * The ISO-4217 currency code (e.g. EUR, USD, etc)
 * @format iso-4217
 */
export type Currency = string;

/** The creation channel. It is derived automatically in most cases, but may also be set by the caller, e.g., in case of PlannerCopilot. */
export enum ItineraryCreationChannel {
	FromPlannerCopilot = 'FromPlannerCopilot',
}

/**
 * The ID of the Planner Copilot conversation that lead to the creation of itinerary call. The ID
 * might be used for data correlation purposes between the Copilot and the Core TripBuilder services.
 */
export type PlannerCopilotConversationId = string;

export interface MonetaryValue {
	/**
	 * Monetary amount
	 * @format double
	 */
	amount: number;
	/** The ISO-4217 currency code (e.g. EUR, USD, etc) */
	currency: Currency;
}

/** Pull PNR Itinerary Request Segment */
export interface FromPullPnrRequestSegment {
	/** PNR locator code */
	pnrLocator: string;
	/** Reservation system identifier */
	reservationSystem?: string;
	/** Pax Last Name identifier */
	lastName?: string;
	/**
	 * An optional supplier name. If both the `supplier` and `supplierRefId` are
	 * provided, the `supplierRefId` takes precedence
	 */
	supplier?: string;
	/**
	 * An optional supplier reference ID. If both the `supplier` and `supplierRefId` are
	 * provided, the `supplierRefId` takes precedence
	 */
	supplierRefId?: string;
	/** Net price for the segment */
	netPrice?: MonetaryValue;
	/** Sales price for the segment */
	salesPrice?: MonetaryValue;
	/** Surcharge applicable to the segment */
	surcharge?: MonetaryValue;
}

export enum AccommodationLevelPreference {
	Recommended = 'Recommended',
	Stars1 = 'Stars1',
	Stars2 = 'Stars2',
	Stars3 = 'Stars3',
	Stars4 = 'Stars4',
	Stars5 = 'Stars5',
}

/** deprecated! */
export enum RoomPreferenceType {
	NotAvailable = 'NotAvailable',
	DoubleBed = 'DoubleBed',
	TwinBed = 'TwinBed',
	Smoking = 'Smoking',
	NonSmoking = 'NonSmoking',
}

export enum RoomType {
	Single = 'Single',
	Double = 'Double',
	Triple = 'Triple',
	Quadruple = 'Quadruple',
	Tent = 'Tent',
	MultiBed = 'MultiBed',
}

/**
 * The start date of the itinerary. The start date must be in the future.
 * @format date
 * @example "2023-08-01T00:00:00.000Z"
 */
export type StartDate = string;

/**
 * The travel agency which created an itinerary.
 * @example "NICETOURSTEST"
 */
export type AgencyRefId = string;

/**
 * The customer's email address if already known. Will be stored on the itinerary as contact details.
 * @example "john.doe@mycompany.com"
 */
export type ContactEmail = string;

/**
 * The customer's first name if already known. Will be stored on the itinerary as contact details.
 * @example "John"
 */
export type ContactFirstName = string;

/**
 * The customer's last name if already known. Will be stored on the itinerary as contact details.
 * @example "Doe"
 */
export type ContactLastName = string;

export interface PaxAllocationInitParams {
	/**
	 * An array of rooms, each room should define the following parameters:
	 *
	 * - adults: number of adult PAX
	 * - childAges: optional array of the children's age. Also defines the number of children.
	 * - childBirthDates: optional array of the children's birth dates. Format: YYYY-MM-DD. If both childAges
	 *   and childBirthDates present, then childAges will be overwritten with children's ages on itinerary start
	 *   date calculated from birth dates. Birth dates can not be after the date of request, and child age on
	 *   itinerary start date should not be greater than 17.
	 * - paxInfo: Optional array of information about each PAX (in case already known).
	 * - roomType: Optional room type. If not provided, the system will try to find the best room type based on
	 *   the number of PAX.
	 *
	 * In general, the order of the paxInfo, childAges, and childBirthDates matter and will be used to determine
	 * the PAX allocation.
	 */
	rooms: {
		adults: number;
		/** deprecated */
		roomPreferences?: RoomPreferenceType[];
		roomType?: RoomType;
		/** The age of the children. Either provide `childAges` or `childBirthDates`. */
		childAges?: number[];
		/** The date of birth of the children. Either provide `childAges` or `childBirthDates`. */
		childBirthDates?: string[];
		paxInfo?: PaxInfoInitParams[];
	}[];
}

/** An object that defines the information about a PAX. */
export interface PaxInfoInitParams {
	/** The ID of the PAX. Format: "pax-<number>". The number must be sequential within the itinerary. */
	refId?: string;
	isAdult: boolean;
	/**
	 * The birth date of the PAX. Format: YYYY-MM-DD. The birth date can not be after the date of request.
	 * @format date
	 * @example "2000-08-01T00:00:00.000Z"
	 */
	birthDate?: string;
	firstName?: string;
	lastName?: string;
	/** The id was known in the external system of the caller. This ID is not interpreted in any way by the TripBuilder. */
	externalRefId?: string;
}

/**
 * An object that defines the number of PAX. If the total number of PAX is defined the system tries to find
 * an optimal occupancy of the PAX over the rooms. This occupancy can later be changed in the Nezasa planner.
 */
export interface NumPax {
	/**
	 * The number of adults for the trip.
	 * @example 2
	 */
	adults: number;
	/**
	 * The number of children for the trip.
	 * @example 1
	 */
	children: number;
}

/**
 * A reference to a location. The location can be either be defined exactly by providing the location ID,
 * or by means of the descriptive fields `countryCode` and `name`. If both are provided,
 * the location ID takes precedence. Searching by the descriptive fields is best effort and might not always
 * be successful. If it fails, the itinerary creation will fail overall.
 *
 * Whenever possible, it is recommended to use the location ID.
 *
 * Area search: whenever possible, pass the country code as well to narrow down the search. The search
 * will leverage the area ratings and pick the highest ranked area within the search results. There
 * is no error/warning if the search results return several areas.
 *
 * Airport search: always use the ID-based approach for airports. The airport definition by name is not
 * supported because generally, the IATA code of an airport is publicly known and can be used.
 */
export interface LocationReference {
	/**
	 * The ID of the location. This is the ID that is used in the Nezasa Locations API. That means that
	 * it is either a 3-letter IATA airport code, the area's refId or a Giata ID.
	 * @example "ZRH"
	 */
	id?: string;
	/**
	 * The type of the location ID.
	 *
	 * Whenever possible, it is recommended to use the location ID. If not provided, the system checks
	 * will try to determine the type of ID automatically, however, only covering TripBuilderAreaId and IataCode.
	 *
	 * If GiataId, the system looks for the accommodation with the given Giata ID and uses the location
	 * of the accommodation to search for the area.
	 *
	 * If Atcore is used, the system looks for the accommodation with the given Atcore ID and uses the location
	 * of the accommodation to search for the area.
	 */
	idType?: 'TripBuilderAreaId' | 'IataCode' | 'GiataId' | 'Atcore';
	/** The ISO-3166-1 alpha-2 country code of the country where the location is located. */
	countryCode?: string;
	/** The name of the location, e.g., the name of the city, place, square, airport, ... */
	name?: string;
	coordinate?: Coordinate;
	address?: Address;
}

/**
 * ID of the module to be used for a module group when instantiating the itinerary.
 * If not defined, the default module of the group is used.
 */
export type AlternativeModules = string[];

/**
 * An array of elements to instantiate with the itinerary. As of today, these are the possible values:
 *
 * - `international-flights`
 *   - Add the incoming and outgoing flights to the itinerary.
 *   - `departureLocationRef` must also be defined in the request in this case.
 *
 * Generally speaking, the usage of this attribute will make the instantiation much slower because
 * the system will trigger the searches, e.g., for flights in order to automatically add them to the itinerary.
 */
export type InstantiateWith = 'international-flights'[];

export interface InstantiationHint {
	/** The index of the stop in the itinerary, starting with 0. */
	stop: number;
	/**
	 * The accommodation ID. The key is the ID type and the value is the ID. The ID type can be either `refId` or
	 * `giata`. One of the two needs to be provided.
	 */
	accommodation: {
		/**
		 * The accommodation refId as it is used in the Nezasa Accommodations API.
		 * @example "p_g_8977peg4"
		 */
		refId?: string;
		/**
		 * The GIATA ID of the accommodation.
		 * @example "29701"
		 */
		giata?: string;
	};
}

/**
 * An object that defines the meta attributes used for the CRS use case. These are the CRS client that is used,
 * the action performed in the CRS client, and the travel agency identifier. See Nezasa Booking API for more
 * details about the meta attributes for CRS.
 *
 * Required for the CRS use case. Or in different words: if this attribute is set this defines that the caller
 * is in a CRS integration use case and the response will deliver attributes required for CRS use cases (such
 * as the URL that can be used as Alias Link in the CRS).
 */
export interface ClientMeta {
	/** @example "toma/vista" */
	client: string;
	/** @example "BA" */
	clientAction: string;
	/** @example "107949" */
	agency: string;
	/**
	 * The optional meta payload of the client meta in case the client is Atcom.
	 * Make sure to set the `client` attribute to `atcom` in this case.
	 */
	atcom?: AtcomClientMetaPayload;
}

/**
 * The optional meta payload of the client meta in case the client is Atcom.
 * Make sure to set the `client` attribute to `atcom` in this case.
 */
export interface AtcomClientMetaPayload {
	callbackUrl: string;
	basketKey: string;
	stateId: string;
	bookingReference?: string;
}

/**
 * An opaque string, which is stored as part of the itinerary’s initialization parameters.
 *
 * Note that the system will not attempt to interpret this external customer id in any way.
 *
 * The system will also assume that
 * - this customer id is not security relevant and can be logged and sent to the Google Analytics service.
 * - the external customer id does not leak any PII (Personally Identifiable Information) and is thus GDPR compliant
 */
export type ExternalCustomerId = string;

export interface Coordinate {
	/** @format double */
	lat: number;
	/** @format double */
	lng: number;
}

export interface Address {
	postalCode: string;
	street: string;
	streetNumber: string;
	city: string;
	/** The ISO-3166-1 alpha-2 country code of the country where the location is located. */
	countryCode: string;
}

export interface LegSkeleton {
	/**
	 * A connection skeleton defines the defaults of a connection when creating an itinerary. Currently,
	 * it only supports to set the default mean of transport for the connection when the itinerary is created.
	 */
	incomingConnection?: ConnectionSkeleton;
	/**
	 * A stop skeleton defines the defaults of a stop when creating an itinerary: the location, the nights, and
	 * the default services (currently accommodations is supported).
	 */
	stop?: StopSkeleton;
}

/**
 * The activity can be referenced in three different ways:
 *
 * - activityId: this way, a specific activity is referenced, e.g., by its TripBuilder ID.
 * - activityProperties: this allows to fully define an activity.
 * The system will create the activity with the given properties.
 * BETA: This feature is in beta and might change in the future.
 */
export interface ActivityReference {
	/**
	 * The ID of the activity.
	 * @example "610110492e000013b71e104c"
	 */
	activityId?: string;
	/** The type of the activity ID. */
	activityIdType?: 'TripBuilderActivityId' | 'Atcore';
	/**
	 * The activity information to create a new activity in the itinerary.
	 * BETA: This feature is in beta and might change in the future.
	 */
	activityProperties?: ActivityProperties;
	/** The ID of the activity in the supplier system. It is limited to 2000 characters. This ID is not interpreted in any way by the TripBuilder. */
	supplierReference?: string;
	/**
	 * The booking reference of the activity. This reference allows the integration partner to uniquely identify the booking.
	 * It is limited to 2000 characters. This ID is not interpreted in any way by the TripBuilder.
	 */
	bookingReference?: string;
}

/**
 * The activity information to create a new activity in the itinerary.
 * BETA: This feature is in beta and might change in the future.
 */
export interface ActivityProperties {
	/** The title of the activity. */
	title: string;
	/** The description of the activity. */
	description?: string;
	/**
	 * The start date and time of the activity. Ex. 2023-08-01T10:00:00
	 * @format date-time
	 */
	startDateTime: string;
	/**
	 * The end date and time of the activity. Ex. 2023-08-01T12:00:00
	 * @format date-time
	 */
	endDateTime: string;
	/** Whether the activity is mutable. Default is true. */
	mutable?: boolean;
	/**
	 * The sales price of the activity. Default is 0. The currency is taken from the itinerary.
	 * @format double
	 */
	salesPrice?: number;
	/** The PAX allocation for the activity. */
	paxAllocation?: number[];
}

/**
 * The accommodation can be referenced in four different ways:
 *
 * - accommodation ID: this way, a specific hotel is referenced, e.g.,
 *   by its Giata or TripBuilder ID.
 * - name: this way, a search with a fuzzy match is performed to find
 *   the best matching hotels. It's possible that another hotel is taken
 *   that has a similar name. The location is derived from the stop location.
 * - accommodationRating: this allows to define a general preference
 *   of hotel quality w/o picking a specific hotel. The system then tries
 *   to automatically pick a hotel of the given service level.
 * - accommodationProperties: this allows to fully define an accommodation.
 *   The system will create the accommodation with the given properties.
 *
 * Whenever possible, it is recommended to use the accommodation ID for
 * deterministic results.
 */
export interface AccommodationReference {
	/**
	 * The ID of the accommodation. The ID is supplier specific. For example, if the supplier is Atcore, the
	 * ID is the ID of the accommodation product in AtCore's system.
	 * @example "p_g_8977peg4"
	 */
	accommodationId?: string;
	/**
	 * The provider of the accommodation. This is the name of the supplier for the accommodation.
	 * @example "Atcore"
	 */
	provider?: string;
	/**
	 * The type of the accommodation ID.
	 *
	 * Whenever possible, it is recommended to define the accommodation ID.
	 */
	accommodationIdType?: 'TripBuilderAccommodationId' | 'GiataId' | 'Atcore';
	/**
	 * The name of the accommodation. This is the name that is displayed to the user.
	 * @example "Hilton"
	 */
	accommodationName?: string;
	accommodationRating?: AccommodationLevelPreference;
	/** All the details necessary for an accommodation. Each field corresponds to a property of the accommodation. */
	accommodationProperties?: AccommodationProperties;
	/** The details for which room category to select. Each field acts as a filter to select a given room category. */
	roomCategory?: AccommodationRoomCategorySelection;
	/** The ID of the accommodation in the supplier system. It is limited to 2000 characters. This ID is not interpreted in any way by the TripBuilder. */
	supplierReference?: string;
	/**
	 * The booking reference of the accommodation. This reference allows the integration partner to uniquely identify the booking.
	 * It is limited to 2000 characters. This ID is not interpreted in any way by the TripBuilder.
	 */
	bookingReference?: string;
}

/** All the details necessary for an accommodation. Each field corresponds to a property of the accommodation. */
export interface AccommodationProperties {
	/** The ID of the accommodation. */
	id?: string;
	/** The name of the supplier for the accommodation. */
	supplierName?: string;
	/** The name of the accommodation. */
	name?: string;
	/** A short description of the accommodation. */
	description?: string;
	/**
	 * The star rating of the accommodation.
	 * @format double
	 */
	rating?: number;
	/**
	 * Check-in date for the accommodation.
	 * @format date
	 */
	checkinDateTime: string;
	/**
	 * Check-out date from the accommodation.
	 * @format date
	 */
	checkoutDateTime: string;
	/**
	 * A reference to a location. The location can be either be defined exactly by providing the location ID,
	 * or by means of the descriptive fields `countryCode` and `name`. If both are provided,
	 * the location ID takes precedence. Searching by the descriptive fields is best effort and might not always
	 * be successful. If it fails, the itinerary creation will fail overall.
	 *
	 * Whenever possible, it is recommended to use the location ID.
	 *
	 * Area search: whenever possible, pass the country code as well to narrow down the search. The search
	 * will leverage the area ratings and pick the highest ranked area within the search results. There
	 * is no error/warning if the search results return several areas.
	 *
	 * Airport search: always use the ID-based approach for airports. The airport definition by name is not
	 * supported because generally, the IATA code of an airport is publicly known and can be used.
	 */
	location?: LocationReference;
	/** Whether the accommodation is mutable. Default is true. */
	mutable?: boolean;
	/** The confirmation number provided by the supplier, if available. */
	supplierConfirmationNumber?: string;
	bookingStatus?: BookingStatus;
	/** @minItems 1 */
	rooms: RoomProperties[];
	promoCode?: string;
	/**
	 * Whether the accommodation is a BedBank accommodation. Defaults to false.
	 * This is currently not interpreted by the system.
	 */
	isBedBank?: boolean;
}

/** The details for which room category to select. Each field acts as a filter to select a given room category. */
export interface AccommodationRoomCategorySelection {
	/** The room category's display name. */
	name?: string;
	/** The room category's room code (supplier specific). */
	roomCode?: string;
	/** The room category's board code (e.g. RO, BB, HB). */
	boardCode?: string;
}

/** Detailed model for a single room in an accommodation. */
export interface RoomProperties {
	/**
	 * The name or type of the room.
	 * @example "Standard Room"
	 */
	roomName: string;
	/**
	 * The meal plan associated with this room.
	 * @example "Breakfast"
	 */
	mealName?: string;
	/** @example "STD" */
	roomCode: string;
	/** @example "BB" */
	mealCode: string;
	/**
	 * The selling price of the accommodation. The currency is taken from the itinerary.
	 * @format decimal
	 */
	salesPrice: number;
	/** An array of integers where each integer represents the index of a passenger in the `paxInfo` array. */
	roomAllocation?: number[];
}

/**
 * A stop skeleton defines the defaults of a stop when creating an itinerary: the location, the nights, and
 * the default services (currently accommodations is supported).
 */
export interface StopSkeleton {
	/** The number of nights to spend at this stop. A 0-night stop is possible, but it will be w/o accommodation. */
	nights: number;
	/**
	 * A reference to a location. The location can be either be defined exactly by providing the location ID,
	 * or by means of the descriptive fields `countryCode` and `name`. If both are provided,
	 * the location ID takes precedence. Searching by the descriptive fields is best effort and might not always
	 * be successful. If it fails, the itinerary creation will fail overall.
	 *
	 * Whenever possible, it is recommended to use the location ID.
	 *
	 * Area search: whenever possible, pass the country code as well to narrow down the search. The search
	 * will leverage the area ratings and pick the highest ranked area within the search results. There
	 * is no error/warning if the search results return several areas.
	 *
	 * Airport search: always use the ID-based approach for airports. The airport definition by name is not
	 * supported because generally, the IATA code of an airport is publicly known and can be used.
	 */
	location?: LocationReference;
	/**
	 * The accommodation can be referenced in four different ways:
	 *
	 * - accommodation ID: this way, a specific hotel is referenced, e.g.,
	 *   by its Giata or TripBuilder ID.
	 * - name: this way, a search with a fuzzy match is performed to find
	 *   the best matching hotels. It's possible that another hotel is taken
	 *   that has a similar name. The location is derived from the stop location.
	 * - accommodationRating: this allows to define a general preference
	 *   of hotel quality w/o picking a specific hotel. The system then tries
	 *   to automatically pick a hotel of the given service level.
	 * - accommodationProperties: this allows to fully define an accommodation.
	 *   The system will create the accommodation with the given properties.
	 *
	 * Whenever possible, it is recommended to use the accommodation ID for
	 * deterministic results.
	 */
	accommodation?: AccommodationReference;
	/**
	 * The activities to be added to this stop.
	 * BETA: This feature is in beta and might change in the future.
	 */
	activities?: ActivityReference[];
	/** An optional description for the stop. */
	description?: string;
}

/**
 * A connection skeleton defines the defaults of a connection when creating an itinerary. Currently,
 * it only supports to set the default mean of transport for the connection when the itinerary is created.
 */
export interface ConnectionSkeleton {
	transportMeans?: TransportMeans;
}

export enum TransportMeans {
	Bus = 'Bus',
	Shuttle = 'Shuttle',
	Flight = 'Flight',
	Boat = 'Boat',
	Train = 'Train',
	Activity = 'Activity',
	CarActivity = 'CarActivity',
	RentalCar = 'RentalCar',
	OwnCar = 'OwnCar',
	CarFerry = 'CarFerry',
	Motorcycle = 'Motorcycle',
	Bicycle = 'Bicycle',
	Walk = 'Walk',
}

export enum BookingStatus {
	Open = 'Open',
	OnRequest = 'OnRequest',
	Booked = 'Booked',
	NonBookable = 'NonBookable',
	Cancelled = 'Cancelled',
	None = 'None',
}

export interface PullPnrInfoResponse {
	paxInfo?: {
		/** Passenger's first name */
		firstName?: string;
		/** Passenger's last name */
		lastName?: string;
		/** Passenger's gender */
		gender?: string;
		/**
		 * Passenger's birth date
		 * @format date
		 */
		birthDate?: string;
		/** Passenger's age */
		age?: number;
	}[];
	netPrice?: {
		/**
		 * Net price amount
		 * @format float
		 */
		amount?: number;
		/** Currency of the net price */
		currency?: string;
	};
}
