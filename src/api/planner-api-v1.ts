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

export interface ItineraryPriceProbingRequest {
	/** Reference ID */
	refId?: string;
	/** URL ID */
	urlId?: string;
	/**
	 * Start date in YYYY-MM-DD format
	 * @format date
	 */
	startDate?: string;
	allocatedPax?: PaxAllocation;
	/** @format int32 */
	numPax?: number;
	/** Accommodation level */
	accommodationLevel?: string;
	/**
	 * The ISO-4217 currency code (e.g. EUR, USD, etc)
	 * @format iso-4217
	 */
	currency?: string;
}

export interface ItineraryPriceProbingComponents {
	accommodations?: AccommodationComponent[];
}

export interface ItineraryPriceProbingResponse {
	priceInfo: PriceInfo;
	components: ItineraryPriceProbingComponents;
	/** Structured set of attributes about a tour. Also see https://support.nezasa.com/hc/en-gb/articles/4410252659473 */
	tourAttributes?: TourAttributes;
}

/**
 * A "date-time" without the "time-offset", as defined by RFC 3339
 * @example "2023-08-01T15:55:00"
 */
export type LocalDateTime = string;

export interface ItineraryResponse {
	/**
	 * This view object is a representation of our Itinerary model. It provides callers with
	 * the structure as well as pertinent information pertaining to their entire trip.
	 *
	 * At its core a trip is composed of connections, stops, and activities. However, in order to faciliate
	 * reuse and swapping out of trip segments, we group trip components into modules. It is this grouping
	 * of modules together with a starting point and ending point that gives the Itinerary its overall
	 * structure.
	 * ```
	 * +-------------------------+
	 * |  +-----------------+    |
	 * |  |   Start         |    |
	 * |  |   Connections   |    |
	 * |  +--------+--------+    |
	 * |           |             |
	 * | +---------+---------+   |
	 * | |  Start Location   |   |
	 * | +---------+---------+   |
	 * |           |             |
	 * |      +----+----+        |
	 * |      |         |        |
	 * |      |   M1    |   +    |
	 * |      |         |   |    |
	 * |      +----+----+   |    |
	 * |           |        |    |
	 * |      +----+----+   |    +
	 * |      |         |   | Modules
	 * |      |  M2     |   |    +
	 * |      |         |   |    |
	 * |      +----+----+   |    |
	 * |           |        |    |
	 * |      +----+----+   |    |
	 * |      |         |   |    |
	 * |      |  Mn     |   +    |
	 * |      |         |        |
	 * |      +----+----+        |
	 * |           |             |
	 * |  +--------+--------+    |
	 * |  |   Return        |    |
	 * |  |   Connections   |    |
	 * |  +--------+--------+    |
	 * |           |             |
	 * | +---------+---------+   |
	 * | |    End Location   |   |
	 * | +-------------------+   |
	 * +-------------------------+
	 * ```
	 */
	itinerary: Itinerary;
	meta?: Meta;
}

export interface RecheckResponse {
	/**
	 * This view object is a representation of our Itinerary model. It provides callers with
	 * the structure as well as pertinent information pertaining to their entire trip.
	 *
	 * At its core a trip is composed of connections, stops, and activities. However, in order to faciliate
	 * reuse and swapping out of trip segments, we group trip components into modules. It is this grouping
	 * of modules together with a starting point and ending point that gives the Itinerary its overall
	 * structure.
	 * ```
	 * +-------------------------+
	 * |  +-----------------+    |
	 * |  |   Start         |    |
	 * |  |   Connections   |    |
	 * |  +--------+--------+    |
	 * |           |             |
	 * | +---------+---------+   |
	 * | |  Start Location   |   |
	 * | +---------+---------+   |
	 * |           |             |
	 * |      +----+----+        |
	 * |      |         |        |
	 * |      |   M1    |   +    |
	 * |      |         |   |    |
	 * |      +----+----+   |    |
	 * |           |        |    |
	 * |      +----+----+   |    +
	 * |      |         |   | Modules
	 * |      |  M2     |   |    +
	 * |      |         |   |    |
	 * |      +----+----+   |    |
	 * |           |        |    |
	 * |      +----+----+   |    |
	 * |      |         |   |    |
	 * |      |  Mn     |   +    |
	 * |      |         |        |
	 * |      +----+----+        |
	 * |           |             |
	 * |  +--------+--------+    |
	 * |  |   Return        |    |
	 * |  |   Connections   |    |
	 * |  +--------+--------+    |
	 * |           |             |
	 * | +---------+---------+   |
	 * | |    End Location   |   |
	 * | +-------------------+   |
	 * +-------------------------+
	 * ```
	 */
	itinerary: Itinerary;
	/**
	 * The object containing various aspects of the itinerary recheck, such
	 * as rechecked components and general recheck remarks.
	 */
	summary: RecheckSummary;
	meta?: Meta;
}

export interface AccommodationComponentsResponse {
	accommodations: AccommodationComponent[];
	meta?: Meta;
}

export interface AccommodationAlternativesResponse {
	/** An alternative accommodation offer */
	currentSelection?: Accommodation;
	alternatives?: Accommodation[];
	meta?: Meta;
}

export interface AccommodationOffersResponse {
	offers?: AccommodationOffer[];
	meta?: Meta;
}

export interface ActivityComponentsResponse {
	activities: ActivityComponent[];
	meta?: Meta;
}

export interface GenericAdHocComponentsResponse {
	genericAdHocComponents: GenericAdHocComponent[];
	meta?: Meta;
}

export interface ActivityAdHocComponentsResponse {
	activityAdHocComponents: ActivityAdHocComponent[];
	meta?: Meta;
}

export interface ActivityAdHocComponentsImportListResponse {
	componentsList: ActivityAdHocComponentImportTitle[];
	meta?: Meta;
}

export interface ActivityAdHocComponentsImportDetailsResponse {
	componentsList: ActivityAdHocComponentImportDetails[];
	meta?: Meta;
}

export interface RentalCarAdHocComponentsImportListResponse {
	componentsList: RentalCarAdHocComponentImportTitle[];
	meta?: Meta;
}

export interface RentalCarAdHocComponentsImportDetailsResponse {
	componentsList: RentalCarAdHocComponentValue[];
	meta?: Meta;
}

export interface TransportAdHocComponentsResponse {
	transportAdHocComponents: TransportAdHocComponent[];
	meta?: Meta;
}

export interface AccommodationAdHocComponentsResponse {
	accommodations: AccommodationAdHocComponent[];
	meta?: Meta;
}

export interface BaseServiceOffersResponse {
	offers?: BaseServiceOffer[];
	meta?: Meta;
}

export interface TransferComponentsResponse {
	transfers: TransferComponent[];
	meta?: Meta;
}

export interface TransferOffersResponse {
	currentSelection?: TransferOffer[];
	offers: TransferOffer[];
	meta?: Meta;
}

export interface RentalCarComponentsResponse {
	rentalCars: RentalCarComponent[];
	meta?: Meta;
}

export interface RentalCarsOffersResponse {
	/** An RentalCarOffer describes a rental car offer available to be used in an itinerary */
	currentSelection?: RentalCarOffer;
	offers: RentalCarOffer[];
}

export interface RentalCarsOfferDetailsResponse {
	/** An RentalCarOffer describes a rental car offer available to be used in an itinerary */
	offer?: RentalCarOffer;
	isSelection?: boolean;
}

export interface FlightComponentsResponse {
	flights: FlightComponent[];
	meta?: Meta;
}

export interface FlightOffersResponse {
	offers?: FlightOffer[];
}

export interface BaseServiceComponentsResponse {
	baseServices: BaseServiceComponent[];
	meta?: Meta;
}

export interface ActivityOffersResponse {
	/** An ActivityOffer is an offering for either a scheduled or unscheduled stop activity. */
	currentSelection?: ActivityOffer;
	offers?: ActivityOffer[];
	meta?: Meta;
}

export interface ActivityOfferDetailsResponse {
	/** An ActivityOffer is an offering for either a scheduled or unscheduled stop activity. */
	offer?: ActivityOffer;
	meta?: Meta;
}

export interface RouteResponse {
	id: string;
	/** Describes a location in the route builder. */
	startLocation: RoutePoint;
	/** Describes start and end locations for use in the route builder. */
	endLocation: RouteEndLocation;
	stops: RouteStop[];
	meta?: Meta;
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
 * The response object used when returning a list of module template IDs which can be
 * used an an alternative for a specific module contained within the itinerary
 */
export interface ExchangeModulesAlternativesResponse {
	alternativeModuleIds: string[];
}

/** The response object containing all the transports in an itinerary */
export interface TransportComponentsResponse {
	transports: TransportItinerary[];
	meta?: Meta;
}

/** The customer information in the itinerary */
export interface CustomerResponse {
	/** The customer contact data */
	contact?: CustomerContact;
}

/** Returns the pax info */
export interface PaxInfoResponse {
	paxInfo: PaxInfo[];
}

/** Request used in POST /{itineraryId}/start-date */
export interface ChangeItineraryStartDateRequest {
	/**
	 * The new start date for the itinerary. The start-date must correspond to a "full-date"
	 * as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	startDate: string;
}

/** Request used in PUT /{itineraryId}/title */
export interface ChangeItineraryTitleRequest {
	/** The new title for the itinerary. */
	title: string;
}

/** Request used in POST /{itineraryId}/duplicate */
export interface DuplicateItineraryRequest {
	/** The title of the duplicated itinerary. */
	title?: string;
}

/** Request used in POST /{itineraryId}/legs/{legId}/stop/nights */
export interface ChangeStopDurationRequest {
	/**
	 * The number of nights to use for the new duration
	 * @format int32
	 * @min 1
	 */
	nights: number;
	/**
	 * The day index to start changes from
	 * @format int32
	 * @min 0
	 */
	dayIndex?: number;
}

/**
 * The request sent by the caller when changing the preference for each of the rooms
 * in the itinerary (i.e. whether each room has a 'twin bed' or a 'double bed')
 */
export interface UpdateRoomPreferencesRequest {
	rooms: ('TwinBed' | 'DoubleBed')[];
}

/**
 * The request sent by the caller when selecting an accommodation offer. This will result in the
 * new accommodation being inserted into the itinerary (i.e. we will either add a new accommodation
 * or update an existing one)
 */
export interface SelectAccommodationOfferRequest {
	/** The AccommodationOffer contains detailed information pertaining to specific accommodation offer */
	offer: AccommodationOffer;
	/** The list of amenities belonging to this offer that should be added. */
	amenityReferences?: AmenityOfferUpdateRequest[];
}

/**
 * The request sent by the caller when selecting an rental car offer. This will result in the
 * new rental car being inserted into the itinerary (i.e. we will either add a new rental car
 * or update an existing one)
 */
export interface SelectRentalCarOfferRequest {
	/** An RentalCarOffer describes a rental car offer available to be used in an itinerary */
	offer: RentalCarOffer;
	amenityReferences?: AmenityOfferUpdateRequest[];
}

/**
 * The request sent by the client containing the information required to insert or update
 * an activity. The request contains only the pertinent information required
 * to create the desired activity component, which is then either inserted or updated in the itinerary.
 *
 * The information sent here can be found as part of the ActivityOffer.
 */
export interface ActivityUpsertRequest {
	/**
	 * The start date used when searching for activity offers. This value was sent back as
	 * part of an 'ActivityOffer' and corresponds to a "full-date"
	 * as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	startDate?: string;
	/**
	 * The selected rooms information used when creating activity offers. This value was sent back as
	 * part of an 'ActivityOffer' and corresponds to the RoomType
	 */
	rooms?: OccupancyBasedActivityRoomDetailUpsertRequest[];
	/**
	 * Nezasa ID which references the activity product. This corresponds to the 'productId'
	 * attribute found in an ActivityOffer
	 */
	productId: string;
	/** This is the ID of one of the ServiceCategoryOffers sent as part of the ActivityOffer. */
	serviceCategoryId?: string;
	/**
	 * To be used as an alternative to serviceCategoryId for specifying the service categories
	 * (i.e. tickets) and their quantities manually.
	 * This is the recommended approach for the Musement integration.
	 */
	serviceCategories?: ActivityUpsertRequestServiceCategory[];
	/**
	 * An optional attribute, which if specified, is the start time to use for an
	 * activity with multiple starting times. The value is formatted as "time-hour" ":" "time-minute"
	 * as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	startTime?: string;
	amenityReferences?: AmenityReference[];
	/**
	 * Required to univocally identify a stop to add activites. It's not enought to use a date because the last day on a stop can
	 * have the same date as the firs day of a following stop. We use areaRefId to remove the ambiguity.
	 */
	areaRefId?: string;
	/** Required to univocally identify an activity if several soureces are configured. */
	source?: string;
	/** The list of PAX IDs to book this activity for (eg. pax-1, pax-2, pax-3) */
	paxSelection?: string[];
	/** The ISO 639-1 language code of the selected language for the activity. */
	selectedLanguage?: string;
	/** Musement specific UUID for the pickup point for the activity. */
	pickupLocationRefId?: string;
}

export interface ActivityUpsertRequestServiceCategory {
	serviceCategoryId: string;
	/** @min 1 */
	quantity: number;
}

/**
 * The request sent by the client containing the information required to insert or update
 * a base service. The request contains only the pertinent information required
 * to create the desired base service component, which is then either inserted or updated in the itinerary.
 *
 * The information sent here can be found as part of the BaseServiceOffer.
 */
export interface BaseServiceUpsertRequest {
	/**
	 * Nezasa ID which references the base service product. This corresponds to the 'id'
	 * attribute found in a BaseServiceOffer
	 */
	id: string;
	/** This is the ID of the ServiceCategoryOffer sent as part of the selected BaseServiceOffer. */
	serviceCategoryId: string;
	/** An array containing the IDs the legs that should be covered by the base service */
	coveredLegs?: string[];
}

export enum BookingStatus {
	Open = 'Open',
	OnRequest = 'OnRequest',
	Booked = 'Booked',
	NonBookable = 'NonBookable',
	Cancelled = 'Cancelled',
	None = 'None',
}

export enum AdhocActivityType {
	Tour = 'Tour',
	Package = 'Package',
	Ticket = 'Ticket',
	Cruise = 'Cruise',
	Other = 'Other',
}

/**
 * The request sent by the client containing the information required to insert or update
 * a generic ad-hoc component. The request contains only the pertinent information required
 * to create the desired ad-hoc component, which is then either inserted or updated in the itinerary.
 */
export interface GenericAdHocComponentUpsertRequest {
	/** Name of the ad-hoc generic component */
	name: string;
	/**
	 * The start date of the component. Providing a startDate requires that an
	 * endDate is provided as well. The endDate must not be before the startDate.
	 * This value corresponds to a "full-date" as
	 * defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 */
	startDate?: string;
	/**
	 * The end date of the component. Providing a endDate requires that a
	 * startDate is provided as well. The endDate must not be before the startDate.
	 * This value corresponds to a "full-date" as
	 * defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 */
	endDate?: string;
	/** ID/name of the component supplier */
	supplier?: string;
	/** The confirmation number on the supplier */
	supplierConfirmationNumber?: string;
	/** Description of the ad-hoc generic component */
	description: string;
	/** The net price set for the ad-hoc generic component */
	netPrice: MonetaryAmount;
	/** The sales price set for the ad-hoc generic component */
	salesPrice: MonetaryAmount;
	/** Whether or not the component is hidden from the customer (defaults to false) */
	hidden?: boolean;
	/** The state of the booking */
	bookingStatus?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	externalRefs?: ExternalReference[];
}

/**
 * The request sent by the client containing the information required to insert or update
 * an activity ad-hoc component. The request contains only the pertinent information required
 * to create the desired ad-hoc component, which is then either inserted or updated in the itinerary.
 */
export interface ActivityAdHocComponentUpsertRequest {
	/** Name of the ad-hoc activity component */
	name: string;
	/** The confirmation number on the supplier */
	supplierConfirmationNumber?: string;
	/** A supplier reference is defined by just one of either `refId`, `contact`, `contactRefId`, or `name`. If multiple are defined, only one will be considered and the others are ignored. */
	supplierRef?: SupplierRef;
	/** Description of the ad-hoc generic component */
	description: string;
	/** The id of the leg to add the stop ad-hoc activity component */
	legId?: string;
	/** The refId of the location for a stop ad-hoc activity component */
	locationRefId?: string;
	/** The refId of the start location for a connection ad-hoc activity component */
	startLocationRefId?: string;
	/** The refId of the end location for a connection ad-hoc activity component */
	endLocationRefId?: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	/** The net price set for the ad-hoc generic component */
	netPrice: MonetaryAmount;
	/** The sales price set for the ad-hoc generic component */
	salesPrice: MonetaryAmount;
	/** The state of the booking */
	bookingStatus?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	pictures?: Picture[];
	activityType?: 'Tour' | 'Package' | 'Ticket' | 'Cruise' | 'Other';
}

/**
 * As of now, only requests containing a single ad-hoc activity component are accepted as valid. The array of activities is to support future enhancements
 * The request by the client containing the information required to insert one or many activity ad-hoc components.
 * The request contains only the pertinent information required to create the desired ad-hoc component, which is then
 * inserted in the itinerary.
 */
export interface AdhocActivityInsertRequest {
	activityData: ActivityAdHocComponentUpsertRequest[];
}

/** A request for inserting new transport ad hoc components */
export interface TransportAdhocInsertRequest {
	/**
	 * A request for updating an existing transport ad hoc component or used to insert a new one,
	 * when sent in the context of a TransportAdhocInsertRequest.
	 */
	outboundTransport?: TransportAdHocComponentUpsertRequest;
	/**
	 * A request for updating an existing transport ad hoc component or used to insert a new one,
	 * when sent in the context of a TransportAdhocInsertRequest.
	 */
	inboundTransport?: TransportAdHocComponentUpsertRequest;
	multicityTransports?: TransportAdHocMulticityInsertRequest[];
}

export interface TransportAdHocMulticityInsertRequest {
	/** The refId of the existing component (particularly a placeholder) that we want to replace. */
	componentRefId: string;
	/**
	 * A request for updating an existing transport ad hoc component or used to insert a new one,
	 * when sent in the context of a TransportAdhocInsertRequest.
	 */
	transportData: TransportAdHocComponentUpsertRequest;
}

/**
 * A request for updating an existing transport ad hoc component or used to insert a new one,
 * when sent in the context of a TransportAdhocInsertRequest.
 */
export interface TransportAdHocComponentUpsertRequest {
	segments: TransportAdHocSegmentUpsertRequest[];
	/** The confirmation number on the supplier */
	supplierConfirmationNumber?: string;
	/** A supplier reference is defined by just one of either `refId`, `contact`, `contactRefId`, or `name`. If multiple are defined, only one will be considered and the others are ignored. */
	supplierRef?: SupplierRef;
	/** The state of the booking */
	bookingStatus?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/** The net price set for the transport ad-hoc component */
	netPrice: MonetaryAmount;
	/** The sales price set for the transport ad-hoc component */
	salesPrice: MonetaryAmount;
	/** The taxes (included in the net price) set for the transport ad-hoc component */
	includedTaxes?: MonetaryAmount;
}

/** The payload describing a transport ad hoc segment. */
export interface TransportAdHocSegmentUpsertRequest {
	transportType: 'Bus' | 'Flight' | 'Train';
	/**
	 * `Economy`, `PremiumEconomy`, `Business` or `First` for `transportType: Flight`<br>
	 * `First` or `Second` for `transportType: Train`<br>
	 * `First` or `Second` for `transportType: Bus`
	 */
	transportClass:
		| 'First'
		| 'Second'
		| 'Business'
		| 'Economy'
		| 'PremiumEconomy';
	/** The carrier code for this segment, e.g. "EK" in flight "EK 448" */
	carrierCode?: string;
	/** The transport number for this segment, e.g. "448" in flight "EK 448" */
	transportNumber?: string;
	/** The area refId or airport IATA code for the start location of the segment */
	startLocationRefId: string;
	/** The area refId or airport IATA code for the end location of the segment */
	endLocationRefId: string;
	/**
	 * A "date-time" without the "time-offset", as defined by RFC 3339
	 * @example "2023-08-01T15:55:00"
	 */
	startDateTime: string;
	/**
	 * A "date-time" without the "time-offset", as defined by RFC 3339
	 * @example "2023-08-01T15:55:00"
	 */
	endDateTime: string;
}

/**
 * A request for updating an existing accommodation ad hoc component or used to insert a new one,
 * when sent in the context of a AccommodationAdhocInsertRequest.
 */
export interface AccommodationAdHocComponentUpsertRequest {
	/** Name of the ad-hoc accommodation component */
	name: string;
	/** Description of the ad-hoc accommodation component */
	description: string;
	/** The net price set for the accommodation ad-hoc component */
	netPrice: MonetaryAmount;
	/** The sales price set for the accommodation ad-hoc component */
	salesPrice: MonetaryAmount;
	/** The refId of the location for a stop ad-hoc accommodation component */
	areaRefId: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	/** The id of the leg to add the stop ad-hoc activity component */
	legId: string;
	/**
	 * The rating of the accommodation
	 * @format double
	 */
	rating?: number;
	rooms?: AccommodationAdHocRoom[];
	/** The accommodation home address */
	location: GeoLocation;
	/** A supplier reference is defined by just one of either `refId`, `contact`, `contactRefId`, or `name`. If multiple are defined, only one will be considered and the others are ignored. */
	supplierRef?: SupplierRef;
	/** The confirmation number on the supplier */
	supplierConfirmationNumber?: string;
	/** The state of the booking */
	bookingStatus?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/** Whether the accommodation is refundable or not */
	refundable?: boolean;
	/** Pictures of the accommodation */
	pictures?: Picture[];
}

export interface OccupancyBasedActivityRoomDimensionUpsertRequest {
	roomCode?: string;
	roomType?: string;
	/** @format int32 */
	occupancy?: number;
	/** @format int32 */
	min: number;
	/** @format int32 */
	max: number;
}

/** The room information included in OccupancyBasedActivityUpsertRequest. */
export interface OccupancyBasedActivityRoomDetailUpsertRequest {
	roomCategoryId: string;
	/**
	 * Number of PAX in this room.
	 * @format int32
	 */
	numAdults?: number;
	/** The list of ages from the children in this room. */
	childAges?: number[];
	/**
	 * DEPRECATED:
	 * This attribute has been deprecated in favor of 'numAdults'.
	 * Number of PAX in this room.
	 * @format int32
	 */
	numPax?: number;
	roomDimension: OccupancyBasedActivityRoomDimensionUpsertRequest;
	/** The list of PAX IDs to book this room for (eg. pax-1, pax-2) */
	paxSelection?: string[];
}

/**
 * The request sent by the client containing the information required to exchange
 * an existing module with a new one
 */
export interface ExchangeModuleRequest {
	/**
	 * This ID refers to a managed module template which was either previously returned
	 * by a call to modules/{moduleId}/alternatives or from the Discovery API
	 */
	alternativeModuleId: string;
}

/** Updates itinerary modifying route stops and/or start/end locations */
export interface RouteUpdateRequest {
	/**
	 * The new start location to use for the itinerary. If no start location
	 * is defined as part of the request or if the module in question is not
	 * the first module in the itinerary list, then the existing start location
	 * is left untouched.
	 */
	startLocation?: Location;
	/**
	 * The new end location (along with the chain of connections) to use for the itinerary.
	 * If no end location is defined as part of the request then the existing end location
	 * is left untouched.
	 */
	endLocation?: RouteUpdateEndLocation;
	/**
	 * The new list of stops with associated connections to use. If no stops are defined
	 * then the existing list of stops currently found on the itinerary is used.
	 */
	stops?: RouteUpdateStop[];
}

/** Updates the customer data in the itinerary */
export interface CustomerUpdateRequest {
	/** The customer contact data */
	contact: CustomerContact;
}

/**
 * The request object sent by the caller containing the information for the
 * transfer offer to use.
 */
export interface TransferOfferUpdateRequest {
	/** The ID corresponding to the selected TransferOffer */
	offerId: string;
	/** The ID of the ServiceCategoryOffer */
	serviceCategoryOfferId: string;
	amenityReferences?: AmenityOfferUpdateRequest[];
	componentSource: string;
}

/**
 * Container which holds the selected AmenityOffer ID along with the number of pax
 * to apply this amenity to.
 */
export interface AmenityOfferUpdateRequest {
	/** The ID of the AmenityOffer */
	amenityOfferId: string;
	/**
	 * Also known as the quantity it represents the number of amenities selected. If
	 * not defined the amenity offer will be applied to all PAX on the itinerary.
	 */
	paxMultiplier?: number;
}

/** Request used in PUT /{itineraryId}/pax-info */
export interface PaxInfoUpdateRequest {
	paxInfo: PaxInfo[];
}

/**
 * The local time zone in the TZ database format (e.g. Area/Location).
 * @example "Europe/Zurich"
 */
export type Timezone = string;

/**
 * For areas or area descriptions which are managed by the tour operator, the supplier value is the tour
 * operator's refId. For Nezaza-owned areas and area descrptions, the supplier value is "Nezasa"
 * @example "Nezasa"
 */
export type AreaOrAreaDescriptionSupplier = string;

export enum TransportType {
	Bus = 'Bus',
	Flight = 'Flight',
	Train = 'Train',
}

export enum TransportFareType {
	Pubneg = 'Pubneg',
	Pub = 'Pub',
	Neg = 'Neg',
	Net = 'Net',
	TourOperator = 'TourOperator',
	LowCost = 'LowCost',
}

export enum TransportConnectionType {
	Inbound = 'Inbound',
	Outbound = 'Outbound',
	MultiCity = 'MultiCity',
}

export enum TransportPnrReservationSystem {
	CRS_AF_KLM = 'CRS_AF_KLM',
	CRS_AMADEUS = 'CRS_AMADEUS',
	CRS_BA = 'CRS_BA',
	CRS_CONDOR = 'CRS_CONDOR',
	CRS_EASYJET = 'CRS_EASYJET',
	CRS_EDW = 'CRS_EDW',
	CRS_EMIRATES_NDC = 'CRS_EMIRATES_NDC',
	CRS_EUROWINGS = 'CRS_EUROWINGS',
	CRS_FARELOGIX = 'CRS_FARELOGIX',
	CRS_GALILEO = 'CRS_GALILEO',
	CRS_IB = 'CRS_IB',
	CRS_KIWI = 'CRS_KIWI',
	CRS_LHGROUP = 'CRS_LHGROUP',
	CRS_SABRE = 'CRS_SABRE',
	CRS_TRAVELFUSION = 'CRS_TRAVELFUSION',
	CRS_TK = 'CRS_TK',
	CRS_VUELING = 'CRS_VUELING',
	CRS_XQ_NDC = 'CRS_XQ_NDC',
	CRS_YPSILON = 'CRS_YPSILON',
}

/** The customer contact data */
export interface CustomerContact {
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
	street: string;
	street2?: string;
	postalCode: string;
	city: string;
	state?: string;
	country: string;
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

export enum LocationType {
	Airport = 'Airport',
	Area = 'Area',
	GeoPoint = 'GeoPoint',
}

/**
 * This model describes an amenity change request. It specifies the amenity reference ID along
 * with the PAX multipler (if the amenity happens to allow a PAX multiplier).
 *
 * As an amenity is an additional service and facility provided by a product, its reference
 * ID only has meaning within a specific product. Amenity references are part of
 * offers (e.g. ActivityOffer) and are either always included and thus free of additional charge,
 * or they are an optional amenity with a price. An amenity can also define whether it supports
 * a per-PAX multipler meaning that the number of PAX applicable for this amenity can be specified.
 */
export interface AmenityReference {
	/** An amenity reference id */
	id: string;
	/**
	 * If defined, and if allowed by the amenity, this value represents the number of PAX
	 * for which this amenity applies.
	 * @format int32
	 */
	paxMultiplier?: number;
	/**
	 * A list of PAX ref ID (eg. pax-1). Identifiers of the pax for which this amenity selected
	 * @uniqueItems true
	 */
	paxSelection?: string[];
}

/**
 * This view object is a representation of our Itinerary model. It provides callers with
 * the structure as well as pertinent information pertaining to their entire trip.
 *
 * At its core a trip is composed of connections, stops, and activities. However, in order to faciliate
 * reuse and swapping out of trip segments, we group trip components into modules. It is this grouping
 * of modules together with a starting point and ending point that gives the Itinerary its overall
 * structure.
 * ```
 * +-------------------------+
 * |  +-----------------+    |
 * |  |   Start         |    |
 * |  |   Connections   |    |
 * |  +--------+--------+    |
 * |           |             |
 * | +---------+---------+   |
 * | |  Start Location   |   |
 * | +---------+---------+   |
 * |           |             |
 * |      +----+----+        |
 * |      |         |        |
 * |      |   M1    |   +    |
 * |      |         |   |    |
 * |      +----+----+   |    |
 * |           |        |    |
 * |      +----+----+   |    +
 * |      |         |   | Modules
 * |      |  M2     |   |    +
 * |      |         |   |    |
 * |      +----+----+   |    |
 * |           |        |    |
 * |      +----+----+   |    |
 * |      |         |   |    |
 * |      |  Mn     |   +    |
 * |      |         |        |
 * |      +----+----+        |
 * |           |             |
 * |  +--------+--------+    |
 * |  |   Return        |    |
 * |  |   Connections   |    |
 * |  +--------+--------+    |
 * |           |             |
 * | +---------+---------+   |
 * | |    End Location   |   |
 * | +-------------------+   |
 * +-------------------------+
 * ```
 */
export interface Itinerary {
	/** The ID of the itinerary */
	id: string;
	title: string;
	lastModified: string;
	/**
	 * If present it is the ID of the itinerary-template from which this itinerary was generated. Not
	 * all itineraries have a static itinerary-template backing them. Itineraries-from-Scratch, for example,
	 * have a dynamically generated itinerary-template and as such, do not contain a `templateId`
	 */
	templateId?: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDate: string;
	priceInfo: PriceInfo;
	surcharges: TourOperatorSurcharge[];
	/** Contact details */
	travelAgency?: TravelAgencyDetails;
	customerContact?: PaxContact;
	paxDetails?: PaxDetails[];
	allocatedPax?: PaxAllocation;
	cancellationPolicy?: CancellationPolicy;
	/** The "home" location where the traveler is departing from */
	departureLocation?: GeoLocation;
	modules: Module[];
	/**
	 * The start connections bring the travelers to the start location of the itinerary. Currently they
	 * store the main incoming international flight, if one is present on the itinerary.
	 */
	startConnections?: Connection[];
	/** The return connections provide a way to bring the travelers from the last module to the end location */
	returnConnections?: Connection[];
	/** Structured set of attributes about a tour. Also see https://support.nezasa.com/hc/en-gb/articles/4410252659473 */
	tourAttributes?: TourAttributes;
	infoSections?: InfoSection[];
	transportAdHocComponents?: TransportAdHocComponent[];
	simpleTransportComponents?: SimpleTransportComponent[];
	availabilities: ItineraryAvailabilities;
	/** The ISO 639-1 language code that is used for localizing text for this itinerary */
	language?: string;
	/** Defines a geographic point such as an airport or area */
	startLocation?: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	endLocation?: GeoLocation;
}

/**
 * The object containing various aspects of the itinerary recheck, such
 * as rechecked components and general recheck remarks.
 */
export interface RecheckSummary {
	/**
	 * The result per component of the recheck, containing base information about
	 * each component and the result of the recheck (e.g., not available anymore).
	 */
	components?: RecheckedComponent[];
	/**
	 * A list of general findings by the recheck. The information may contain hints such as
	 * pointing out that a stop has no hotel yet.
	 */
	remarks?: string[];
}

/**
 * The object contains the relevant information about a component after the
 * rechecked has been performed. Note that the components have been updated
 * as well accordingly in the itinerary itself.
 */
export interface RecheckedComponent {
	/**
	 * The ID of the component. Can be matched against the components in the
	 * itinerary object in order to gather more details about the component.
	 */
	id: string;
	componentType: string;
	/**
	 * Describes the status of the component after the availability check:
	 *
	 * * Open: it is available
	 * * OnRequest: it is available on request
	 * * Booked: it is booked
	 * * NonBookable: it is not available (hint: the `nonBookable` can be `true` even if status is not `NonBookable`)
	 * * Cancelled: it was booked, and then cancelled successfully
	 * * None: it has a unknown status
	 */
	status:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/**
	 * Indicates whether the component can be booked as is or not. Booking attempts
	 * of itineraries with non-bookable components may fail depending on the reason
	 * why the component is non-bookable.
	 */
	nonBookable: boolean;
	/**
	 * If possible, the system tries to indicate a reason why a component might be
	 * non-bookable. Not all reasons will block the actual booking of the itinerary,
	 * see their descriptions below. The following reasons are currently in use:
	 *
	 * * NoAvailability: the component is no longer available.
	 * * DateTimeConflict: the flight component as a date/time that conflicts with other connection
	 * * PaxSelectionConflict: the flight ocmponent has a pax selection that confliects with another flight
	 * * Cancelled: the component has been cancelled
	 * * NonFittingToItinerary: the component is no longer aligned to the current itinerary structure
	 * * NonFittingLocations: the component's start and/or end locations are not aligned with the itinerary locations immediately before and/or after. This is only only flagged as a warning, and may not be actual an issue for the booking.
	 * * UnschedulableComponentNoLocationFound: indicates that the component cannot currently be scheduled due to an incorrect itinerary structure.
	 * * NonFittingButAccepted: indiciates that this component doesn't fit but has been marked by the user as accepted for booking nevertheless.
	 * * NoTicketsSelected: this component needs individual tickets to be assigned in order to be booked
	 * * Unknown
	 */
	nonBookableReason?:
		| 'NoAvailability'
		| 'DateTimeConflict'
		| 'PaxSelectionConflict'
		| 'Cancelled'
		| 'NonFittingToItinerary'
		| 'NonFittingLocations'
		| 'NonFittingButAccepted'
		| 'NoTicketsSelected'
		| 'UnschedulableComponentNoLocationFound'
		| 'Unknown';
	/**
	 * The up-to-date (sales) price of the component. The recheck might have updated
	 * the price due to the latest information by the supplier.
	 */
	price: MonetaryAmount;
	/**
	 * If the recheck resulted in an updated price, then this attribute will
	 * the previous price. Otherwise, the attribute will not be set.
	 */
	previousPrice?: MonetaryAmount;
	/** A localized name representing the component, e.g., the hotel or activity name. */
	name?: string;
	/**
	 * A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * representing the start date of component if applicable, e.g., hotel check-in date.
	 */
	startDate?: string;
	/**
	 * A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * representing the end date of component if applicable, e.g., hotel check-out date.
	 */
	endDate?: string;
	/** A reference to the location of the component, usually the city name. */
	locationName?: string;
}

export interface CancellationPolicy {
	name: string;
	tourOperator: string;
	/** a container object for representing a monetary value in the system */
	minimumFee: MonetaryAmount;
	/** a container object for representing a monetary value in the system */
	processingFee: MonetaryAmount;
	processingFeeUnit: string;
	/** @format double */
	processingFeeMax?: number;
	cancellations: CancellationPolicyRule[];
}

export interface CancellationPolicyRule {
	rangeStart: number;
	rangeEnd?: number;
	/** @format double */
	cancellationPercentage: number;
	applicableTo: string[];
}

export interface PaxContact {
	firstName?: string;
	lastName?: string;
	email?: string;
	mobilePhone?: string;
	gender?: 'Female' | 'Male';
	address1?: string;
	address2?: string;
	city?: string;
	zip?: string;
	countryCode?: string;
}

export interface PaxDetails {
	id?: string;
	firstName?: string;
	middleName?: string;
	lastName?: string;
	/**
	 * When an exact age is given, this is that value. If the dateOfBirth was introduced, this represents the age at the start of the itinerary.
	 * @format int32
	 */
	age?: number;
	passportNr?: string;
	gender?: 'Female' | 'Male';
	dateOfBirth?: string;
	nationality?: string;
	/** The list of generic labels associated with this PAX */
	tags?: string[];
}

export interface PaxInfo {
	id?: string;
	firstName?: string;
	middleName?: string;
	lastName?: string;
	/**
	 * When an exact age is given, this is that value. If the dateOfBirth was introduced, this represents the age at the start of the itinerary.
	 * @format int32
	 */
	age?: number;
	gender?: 'Female' | 'Male';
}

export interface PaxAllocation {
	rooms: RoomAllocation[];
}

export interface RoomAllocation {
	/** @format int32 */
	adults: number;
	childAges: number[];
	roomPreferences: (
		| 'NotAvailable'
		| 'DoubleBed'
		| 'TwinBed'
		| 'Smoking'
		| 'NonSmoking'
	)[];
	roomType?: 'Single' | 'Double' | 'Triple' | 'Quadruple' | 'Tent' | 'MultiBed';
}

/**
 * The Module is our projection of our internal Module structure to the outside world. As briefly
 * mentioned in the description for the Itinerary, a Module serves as a container to group
 * elements of a trip together. This not only provides greater reuse when creating trips but allows
 * these bundles of trip-elements to be easily swapped out for another set of elements (assuming
 * that these bundles "fit" together)
 *
 * Each module has a start and end location and is composed of a series of legs (see Leg). Each leg
 * in turn houses a set of feeder connections and a stop - the idea being that the feeder connections
 * bring you from one leg (or the start location if it happens to be the first leg) to your stop.
 *
 * In addition a module also contains a list of return-connections which bring the PAX either from ther
 * last leg in their trip back to the end location or (if there are no legs), then from the start location
 * to tne end location. For example, you can have a module starting in New York and ending in Chicago with
 * one rental car connection. This connection would be found in the return-connections
 * ```
 * +-------------------------+
 * | +-------------------+   |
 * | |   Start Location  |   |
 * | +---------+---------+   |
 * |           |             |
 * |      +----+-----+       |
 * |      |          |       |
 * |      |   L1     |   +   |
 * |      | (Stop 1) |   |   |
 * |      +----+-----+   |   |
 * |           |         |   |
 * |      +----+-----+   |   +
 * |      |          |   | Legs
 * |      |  L2      |   |   +
 * |      | (Stop 2) |   |   |
 * |      +----+-----+   |   |
 * |           |         |   |
 * |      +----+-----+   |   |
 * |      |          |   |   |
 * |      |  Ln      |   +   |
 * |      | (Stop N) |       |
 * |      +----+-----+       |
 * |           |             |
 * |  +--------+---------+   |
 * |  |    Return        |   |
 * |  |    Connections   |   |
 * |  +--------+---------+   |
 * |           |             |
 * | +---------+----------+  |
 * | |    End Location    |  |
 * | +--------------------+  |
 * +-------------------------+
 * ```
 */
export interface Module {
	/** A unique ID (only within the owning Itinerary) which identifies this module */
	id: string;
	/** Defines a geographic point such as an airport or area */
	startLocation: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	endLocation: GeoLocation;
	legs?: Leg[];
	returnConnections?: Connection[];
	moduleType: 'Tour' | 'SingleHotel' | 'FIT';
	/** Structured set of attributes about a tour. Also see https://support.nezasa.com/hc/en-gb/articles/4410252659473 */
	tourAttributes?: TourAttributes;
	infoSections?: InfoSection[];
	/**
	 * Indicates whether the route builder is enabled for this module. If enabled, the user can
	 * modify the route of the module.
	 */
	supportsRouteBuilder?: boolean;
}

/**
 * A Leg is a container object which houses a series of feeder connections and a stop. The purpose
 * of the feeder connections is to bring the PAX from either the start location (if this happens to
 * be the first leg) or from a previous leg to the stop.
 *
 * ```
 * +-------------------------+
 * | +-----------------+     |
 * | |      C1         |  +  |
 * | +----+------------+  |  |
 * |      |               |  |
 * | +----+------------+  |  |
 * | |      C2         |  | Connections
 * | +----+------------+  |  |
 * |      |               |  |
 * | +----+------------+  |  |
 * | |      Cn         |  +  |
 * | +----+------------+     |
 * |      |                  |
 * | +----+------------+     |
 * | |                 |     |
 * | |  Stop           |     |
 * | | (Area, Nights)  |     |
 * | |                 |     |
 * | +-----------------+     |
 * +-------------------------+
 * ```
 */
export interface Leg {
	id: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	connections?: Connection[];
	/**
	 * Describes the period in which a traveler stays in one area. This also includes the hotels (accommodations)
	 * for the entire duration of the stop.
	 */
	stop: Stop;
}

/**
 * Describes the period in which a traveler stays in one area. This also includes the hotels (accommodations)
 * for the entire duration of the stop.
 */
export interface Stop {
	/** A specialized type of location which serves as the location for a Stop */
	stopLocation: StopLocation;
	/**
	 * DEPRECATED:
	 * This attribute has been deprecated in favor of 'stopLocation' as stops support both
	 * areas and airports.
	 */
	area: Area;
	/** A view over the AreaDescription model which describes an area (textual descriptions and pictures). */
	areaDescription?: AreaDescription;
	/** @format int32 */
	nights: number;
	/**
	 * Maximum number of nights this stop can be.
	 * @format int32
	 */
	maxNights?: number;
	/**
	 * Minimum number of nights this stop can be.
	 * @format int32
	 */
	minNights?: number;
	accommodations: AccommodationComponent[];
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	activities?: ActivityComponent[];
}

/** An AccommodationComponent describes an accommodation in the itinerary. */
export interface AccommodationComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this accommodation view */
	id: string;
	/** A unique ID identifying the accommodation */
	productId: string;
	name: string;
	description?: AccommodationDescription;
	/** @format int32 */
	nights: number;
	/** The total sales prices for all PAX for the entire duration of their stay in this room */
	salesPrice: MonetaryAmount;
	/** The total net prices for all PAX for the entire duration of their stay in this room */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	externallyPaidCharges?: ExternallyPaidCharge[];
	/** Defines a geographic point such as an airport or area */
	location?: GeoLocation;
	/**
	 * An indicator of what type of accommodation we are dealing with here.
	 * * User
	 *   + This accommodation must be defined by the user. That is, it indicates that no hotel has
	 *     currently been selected
	 * * Nezasa
	 *   + This accommodation is defined in the Nezasa inventory
	 */
	source: 'User' | 'Nezasa';
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	supplier?: string;
	isOnRequest: boolean;
	/** Contact details */
	contact?: ContactDetails;
	externalRefs: ExternalReference[];
	rooms: AccommodationComponentRoom[];
	tags?: string[];
	amenities?: Amenity[];
	/** A non bookable accommodation is a component that was previously added to an itinerary but is not available anymore. */
	nonBookable: boolean;
	/** The booking information for the component */
	bookingInfo?: BookingInfo;
	/** The metadata for the accommodation product's pictures (managed in the Inventory) */
	pictures?: Picture[];
	/** The URL of the accommodation thumbnail */
	thumbnailUrl?: string;
	externalComment?: string;
	externalCommentExpiration?: string;
	/** The official rating of the accommodation */
	officialRating?: string;
	cancellationPolicy?: ComponentCancellationPolicy;
}

export interface AccommodationDescription {
	/** A key sentence (mas 120 characters) describing the accommodation. */
	keySentence?: string;
	/** HTML encoded description of the accommodation. */
	longDescription?: string;
	descriptionSource?: 'GIATA' | 'OTHER';
	attribution?: string;
	hotelInfo?: string;
	externalComment?: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	externalCommentExpiration?: string;
	giataContractId?: string;
}

/** Contact details */
export interface TravelAgencyDetails {
	/** The id that can be used to identify this travel agency in our system */
	refId: string;
	name?: string;
	address1: string;
	city: string;
	zip: string;
	phone: string;
	address2?: string;
	emergencyPhone?: string;
	email?: string;
	website?: string;
	comment?: string;
}

/** Contact details */
export interface ContactDetails {
	name?: string;
	address1: string;
	city: string;
	zip: string;
	phone: string;
	address2?: string;
	emergencyPhone?: string;
	email?: string;
	website?: string;
	comment?: string;
}

export interface AccommodationComponentRoom {
	id: string;
	name: string;
	code?: string;
	type?: string;
	description?: string;
	pictures?: Picture[];
	/**
	 * If the information is supplied by the hotel supplier, this field contains a description of the
	 * type of meal plan attached to this room.
	 */
	meal?: string;
	/** If the information is supplied by the hotel supplier, this field contains the internal meal code attached to this room. */
	mealCode?: string;
}

export interface AccommodationAdHocRoom {
	componentId?: string;
	name: string;
	meal: string;
}

/** An alternative accommodation offer */
export interface Accommodation {
	/** Nezasa ID which references the hotel product for this offer. */
	id: string;
	name: string;
	/** The official rating of the accommodation */
	officialRating?: string;
	/** Defines a geographic point such as an airport or area */
	location: GeoLocation;
	/** The total sales prices for all PAX for the entire duration of their stay in this room */
	salesPrice?: MonetaryAmount;
	externalRefs: ExternalReference[];
	/**
	 * If this attribute is not present in the response, then the backend has no information whether
	 * the offer will be refunded when cancelled. Otherwise, a value of true indicates that the offer is
	 * refundable.
	 */
	isRefundable?: boolean;
	isOnRequest: boolean;
	recommended: boolean;
	/** A list of facts about the hotel, e.g., wifi, swimming pool. */
	facts?: OfferFact[];
	ratings?: ProductRating[];
	pictures?: Picture[];
	/**
	 * A list of sources and providers for this accommodation offer:
	 * - Source refers to which system the offer was sourced from
	 * - Provider refers to the provider from within the source. This is particularly useful when dealing with aggregators such as TravelGateX and iVectorOne.
	 * Example: Source is TravelGateX and Provider is Hotelbeds.
	 */
	sourcesAndProviders: SourceAndProvider[];
	/** Deprecated in favour of sourcesAndProviders. */
	source?: string;
	/**
	 * Deprecated in favour of sourcesAndProviders.
	 * @example "Hotelbeds"
	 */
	provider?: string;
	rooms?: RoomInfo[];
}

/** The AccommodationOffer contains detailed information pertaining to specific accommodation offer */
export interface AccommodationOffer {
	id: string;
	/** Nezasa ID which references the hotel product for this offer */
	productId: string;
	name: string;
	/** The official rating of the accommodation */
	officialRating?: string;
	/** Defines a geographic point such as an airport or area */
	location: GeoLocation;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	/** The total sales prices for all PAX for the entire duration of their stay in this room */
	salesPrice: MonetaryAmount;
	/** IDs which reference the specific service categories for this room offer */
	serviceCategoryIds: string[];
	isOnRequest: boolean;
	recommended: boolean;
	amenityOffers?: AmenityOffer[];
	groupedAmenityOffers?: GroupedAmenityOffer[];
	/**
	 * The total number of PAX
	 * @format int32
	 */
	numPax: number;
	roomInfos: RoomInfo[];
	/**
	 * If this attribute is not present in the response, then the backend has no information whether
	 * the offer will be refunded when cancelled. Otherwise, a value of true indicates that the offer is
	 * refundable
	 */
	isRefundable?: boolean;
	/** PAX selection by service category */
	paxSelection?: ServiceCategoryPaxSelection[];
	/**
	 * The component source which was used when searching for the offer. This value will always
	 * be defined if the offer is taken from the Nezasa backend. Due to backward-compatibility reasons, we
	 * need to allow an optional value here, in which case, we use the default accommodation component
	 * source defined on the itinerary.
	 */
	source?: string;
	externalRefs?: ExternalReference[];
	/** HTML encoded description of the accommodation. */
	description?: string;
	pictures?: Picture[];
	/** A list of facts about the product. */
	facts?: OfferFact[];
	ratings?: ProductRating[];
}

/** Returns some general information about each room in an alternaitve accommodation or AccommodationOffer */
export interface RoomInfo {
	id: string;
	name: string;
	included: string;
	/** @format int32 */
	numPax: number;
	cancellationPolicy?: ComponentCancellationPolicy;
}

/**
 * An amenity is an additional service and facility provided by a product. An amenity is either
 * always included and thus free of additional charge, or it is an optional amenity with a price.
 */
export interface AmenityOffer {
	/**
	 * The ID which is used to identify this amenity in the accommodation product. This ID is also
	 * required when sending an accommodation update request in order to know which amenities to
	 * add to the selected accommodation.
	 */
	id: string;
	name: string;
	/**
	 * Amenity types are extensible enums which are defined by the TourOperator when creating the
	 * amenity in Cockpit.
	 */
	amenityType: string;
	/**
	 * If true then there are no additional costs for this amenity offer. Otherwise an optional
	 * amenity has a cost associated with it.
	 */
	includedByDefault: boolean;
	/**
	 * If true this amenity can be applied per PAX (e.g. when selected the caller
	 * can specify to how many PAX it applies). Otherwise the amenity will apply to all
	 * PAX defined on the itinerary
	 */
	allowPerPaxMultiplier: boolean;
	/**
	 * The total sales price for this amenity offer if not included as part of the component.
	 * The price is either for all PAX or per group.
	 */
	salesPrice: MonetaryAmount;
	/**
	 * Charges to be paid externally, meaning not on our platform. These are charges for
	 * things that we want to show the price on our platform, however, when the user makes
	 * the payment, we wouldn't charge for them. Instead, these charges are paid in the
	 * destination.
	 */
	externallyPaidCharges?: ExternallyPaidCharge;
	pictures?: Picture[];
	/**
	 * The maximum amount of units of this amenity that can be allocated per offer.
	 * Usually only applies to amenities which are not booked per pax (like rental car amenities).
	 * @format int32
	 */
	maxMultiplier?: number;
}

/**
 * A grouped amenity offer defines a set of related amenities which can be configured such that
 * only a single element can be selected.
 */
export interface GroupedAmenityOffer {
	/** The ID which is used to identify this amenity group in the accommodation product. */
	id: string;
	name: string;
	optOutLabel: string;
	singleAmenities: AmenityOffer[];
	groupedAmenityType:
		| 'SingleSelection'
		| 'MandatorySingleSelection'
		| 'MultiSelection';
	pictures?: Picture[];
}

export interface RoomType {
	roomType?: string;
	/** @format int32 */
	max: number;
	/** @format int32 */
	min: number;
	/** @format int32 */
	occupancy?: number;
	description?: string;
	/** a container object for representing a monetary value in the system */
	salesPrice: MonetaryAmount;
}

export interface RoomCategoryOffer {
	id: string;
	name: string;
	roomTypes: RoomType[];
}

export interface ProductRating {
	source: 'TrustYou' | 'Priceline';
	rating: string;
}

export interface SourceAndProvider {
	source: string;
	provider?: string;
}

export enum ActivityInterestCategory {
	CityAndShopping = 'CityAndShopping',
	ThemeParks = 'ThemeParks',
	TicketsAndSightseeingPasses = 'TicketsAndSightseeingPasses',
	ArtsAndCulture = 'ArtsAndCulture',
	EntertainmentAndSportEvents = 'EntertainmentAndSportEvents',
	GastronomyAndNightlife = 'GastronomyAndNightlife',
	OutdoorActivitiesAndSports = 'OutdoorActivitiesAndSports',
	DayTripsAndExcursions = 'DayTripsAndExcursions',
	NatureAndWildlife = 'NatureAndWildlife',
	SpaAndWellness = 'SpaAndWellness',
	Transportation = 'Transportation',
	AerialTours = 'AerialTours',
	BoatTours = 'BoatTours',
	Classes = 'Classes',
	ForCouples = 'ForCouples',
	ForFamilies = 'ForFamilies',
	ForSeniors = 'ForSeniors',
}

export interface ComponentCancellationPolicy {
	cancellationType: 'Free' | 'FeeApplies' | 'NonRefundable' | 'Unknown';
	rules: ComponentCancellationPolicyRule[];
}

/**
 * Contains rules how a cancellation fee is to be applied.
 * The rules can be based on percentage or amount but not both.
 */
export interface ComponentCancellationPolicyRule {
	/**
	 * The starting date from which the fee will be applied. The date
	 * is "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	startDate?: string;
	/**
	 * The ending date untill the fee will be applied. The date
	 * is "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	endDate?: string;
	percentage?: number;
	/** a container object for representing a monetary value in the system */
	amount?: MonetaryAmount;
}

export interface ServiceCategoryPaxSelection {
	serviceCategoryId: string;
	/**
	 * The list of PAX IDs to book this activity for (eg. pax-1, pax-2, pax-3)
	 * @uniqueItems true
	 */
	paxSelection?: string[];
}

export interface ServiceCategoryOffer {
	id: string;
	name: string;
	/**
	 * The start date for this activity product. The date
	 * is "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	startDate: string;
	/**
	 * The total sales price for this service category offer for all PAX which is based on the
	 * number of PAX and the seasonal pricing convering the dates of this offer
	 */
	salesPrice: MonetaryAmount;
	cancellationPolicy: ComponentCancellationPolicy;
}

/** Describes if and how an activity should be displayed in an overview scenario */
export interface ActivityOverviewDisplay {
	/** If true, then the activity's short description is shown in the overview */
	showShortDescription: boolean;
	/** If true, then the activity's segments are displayed. */
	showSegments: boolean;
	/** If true, the activity's segments are shown expanded. */
	showSegmentsExpanded: boolean;
}

/** An ActivityComponent describes either a transit or stop activity in the itinerary */
export interface ActivityComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this activity */
	id: string;
	/** A unique ID identifying the product within this activity component */
	productId: string;
	name: string;
	componentType: string;
	keySentence: string;
	shortDescription?: string;
	groupActivityType?: string;
	supplier?: string;
	serviceCategory?: ServiceCategory;
	/**
	 * The total sales price for this activity for all PAX which is based on the total
	 * sum of all service categories and amenities that are not included by default in this component
	 */
	salesPrice: MonetaryAmount;
	/** The total net price for this activity for all PAX which is based on the total sum of all service categories and amenities that are not included by default in this component */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	/** Defines a geographic point such as an airport or area */
	startLocation?: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	endLocation?: GeoLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * DEPRECATED:
	 * This attribute has been deprecated in favor of 'tourAttributes.categories'.
	 */
	startDateTime?: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * DEPRECATED:
	 * This attribute has been deprecated in favor of 'tourAttributes.categories'.
	 */
	endDateTime?: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate?: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDate?: string;
	/** A "time-hour" ":" "time-minute" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6. */
	startTime?: string;
	/** A "time-hour" ":" "time-minute" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6. */
	endTime?: string;
	pictures?: Picture[];
	amenities?: Amenity[];
	segments?: ActivitySegment[];
	/** Structured set of attributes about a tour. Also see https://support.nezasa.com/hc/en-gb/articles/4410252659473 */
	tourAttributes?: TourAttributes;
	infoSections?: InfoSection[];
	tags?: string[];
	externalRefs: ExternalReference[];
	/** The booking information for the component */
	bookingInfo?: BookingInfo;
	/** The list of PAX IDs to book this activity for (eg. pax-1, pax-2, pax-3) */
	paxSelection?: string[];
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
	/** Define whether the activity is fixed or not in the itinerary */
	isFixed?: boolean;
	/** Describes how the activity should be display in the overview */
	overviewDisplay: ActivityOverviewDisplay;
}

/** A facts about a specific product. Ex: "outdoor_pool", "beach_pebble" */
export interface OfferFact {
	name: string;
	/** The GIATA id for this fact */
	id?: string;
}

export interface ServiceCategory {
	name: string;
	included: string;
	excluded: string;
}

export interface ActivitySegment {
	title?: string;
	startsOnDay: number;
	endsOnDay: number;
	segmentType: string;
	location?: string;
	countryCode?: string;
	/** Defines a geographic point such as an airport or area */
	geoCoordinates?: GeoLocation;
	gettingThereBy?: string;
	description: string;
	pictures?: Picture[];
}

export interface Amenity {
	/** A unique ID identifying the amenity */
	productId: string;
	amenityName: string;
	amenityType: string;
	amenityDetails?: string;
	pictures?: Picture[];
	amenityInclusionPolicy: string;
	chargeType: 'InNezasa' | 'InDestination';
	/** Defines the multiplier for persons and groups. */
	pricingPaxDimension?:
		| 'PricePerPax'
		| 'PricePerGroupOrRoom'
		| 'Included'
		| 'External';
	/** Defines the multiplier for time. */
	pricingTimeDimension?: 'PerStay' | 'PerNight' | 'PerPartialDay';
	/**
	 * This value represents the number of PAX for which this amenity applies.
	 * @format int32
	 */
	paxMultiplier?: number;
	/**
	 * The total sales price for this activity for all PAX which is based on the total
	 * sum of all service categories and amenities that are not included by default in this component
	 */
	salesPrice: MonetaryAmount;
	/**
	 * The total net price for this activity for all PAX which is based on the total
	 * sum of all service categories and amenities that are not included by default in this component
	 */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	/** The total price to be paid in Destination */
	externallyPaidCharge?: MonetaryAmount;
}

/** An ActivityOffer is an offering for either a scheduled or unscheduled stop activity. */
export interface ActivityOffer {
	id: string;
	name: string;
	keySentence: string;
	programs?: ActivityProgram[];
	/** Structured set of attributes about a tour. Also see https://support.nezasa.com/hc/en-gb/articles/4410252659473 */
	tourAttributes?: TourAttributes;
	infoSections?: InfoSection[];
	/** Defines a geographic point such as an airport or area */
	startLocation: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	endLocation: GeoLocation;
	pictures?: Picture[];
	/** Container for the duration of an activity */
	duration: ActivityDuration;
	amenityOffers?: AmenityOffer[];
	groupedAmenityOffers?: GroupedAmenityOffer[];
	serviceCategoryOffers?: ServiceCategoryOffer[];
	/**
	 * The starting date for this activity product. This value is what was originally used
	 * when querying for activity offers and is sent back in the response for completeness-sake. The date
	 * is "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	startDate: string;
	/**
	 * A list of possible starting times for the activity. The times are local to the startLocation
	 * of this activity offer.
	 */
	possibleStartTimes?: string[];
	roomCategoryOffers?: RoomCategoryOffer[];
	areaRefId?: string;
	source: string;
	externalRefs?: ExternalReference[];
	/**
	 * DEPRECATED:
	 * This attribute has been deprecated in favor of 'tourAttributes.categories'.
	 */
	interestCategories: (
		| 'CityAndShopping'
		| 'ThemeParks'
		| 'TicketsAndSightseeingPasses'
		| 'ArtsAndCulture'
		| 'EntertainmentAndSportEvents'
		| 'GastronomyAndNightlife'
		| 'OutdoorActivitiesAndSports'
		| 'DayTripsAndExcursions'
		| 'NatureAndWildlife'
		| 'SpaAndWellness'
		| 'Transportation'
		| 'AerialTours'
		| 'BoatTours'
		| 'Classes'
		| 'ForCouples'
		| 'ForFamilies'
		| 'ForSeniors'
	)[];
	/** A list of characteristics about this offer. */
	characteristics?: string[];
}

/** Structured set of attributes about a tour. Also see https://support.nezasa.com/hc/en-gb/articles/4410252659473 */
export interface TourAttributes {
	minAge?: number;
	groupActivity?: 'JoinIn' | 'Private';
	groupSizeMin?: number;
	groupSizeMax?: number;
	guaranteedDeparture?: boolean;
	/** @format double */
	difficultyLevel?: number;
	guideInfo?: GuideInformation;
	categories: TourCategory[];
}

export interface GuideInformation {
	guided?: boolean;
	languages: string[];
}

/**
 * Also see https://support.nezasa.com/hc/en-gb/articles/4410244118161 for a full list.
 * The list may be extended in the future with new IDs.
 */
export interface TourCategory {
	categoryTypeRefId: number;
	refId: number;
	categoryType: string;
	category: string;
}

/** An information section about "pickup", "facilities", "important note" or "additional information". */
export interface InfoSection {
	title: string;
	sectionType:
		| 'PickupInstructions'
		| 'ImportantRemarks'
		| 'AdditionalInformation'
		| 'Custom'
		| 'Highlights'
		| 'TravelGuide';
	htmlText: string;
}

export interface ActivityProgram {
	/**
	 * The starting day for the segments contained in this program. The date is
	 * "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	startDate: string;
	/**
	 * The end date for the list of segments contained in this program. The date is
	 * a "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 */
	endDate: string;
	segmentDescriptions?: ActivitySegmentDescription[];
}

/**
 * A container class which holds the descriptive elements of an activity segment. Used as part of
 * the activity offer structure
 */
export interface ActivitySegmentDescription {
	/** If present this attribute is the title used by the activity segment */
	title?: string;
	htmlText: string;
	segmentType: 'Transfer' | 'ActivityOrHighlight' | 'Overnight';
	pictures?: Picture[];
}

/** Container for the duration of an activity */
export interface ActivityDuration {
	/** @format int32 */
	overnights: number;
	/** @format int32 */
	hours: number;
}

/** An offering for a base service product */
export interface BaseServiceOffer {
	id: string;
	name: string;
	serviceCategoryOffer: ServiceCategoryOffer;
}

/** An TransferComponent describes transfer entity in the itinerary */
export interface TransferComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this transfer */
	id: string;
	/** A unique ID identifying the product within this transfer component */
	productId: string;
	name: string;
	componentType: string;
	transferType?: string;
	isPrivate?: boolean;
	supplier?: string;
	shortDescription?: string;
	/**
	 * The total sales price for this transfer for all PAX which is based on the total
	 * sum of all service categories and amenities that are not included by default in this component
	 */
	salesPrice: MonetaryAmount;
	/**
	 * The total net price for this transfer for all PAX which is based on the total
	 * sum of all service categories and amenities that are not included by default in this component
	 */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	/** Defines a geographic point such as an airport or area */
	startLocation: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	endLocation: GeoLocation;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	serviceCategory?: ServiceCategory;
	amenities?: Amenity[];
	tags?: string[];
	externalRefs: ExternalReference[];
	/** The booking information for the component */
	bookingInfo?: BookingInfo;
	/** The duration of the transfer in the ISO8601 standard format PyYmMwWdDThHmMsS. E.g. for 19 minutes and 30 seconds, "PT19M30S" */
	duration: string;
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
}

/**
 * The offer for a transfer product is an instance of the product for a given start date and number
 * of PAX. The offer also contains the most important description fields such as the
 * offers for the underlying amenities and service categories
 */
export interface TransferOffer {
	/** A unique ID (only within the owning Itinerary) which identifies this rental car */
	id: string;
	/**
	 * User friendly name where the transfer starts from. Note that it is not guaranteed to
	 * use this name to lookup any geo information for the tranfers. This information is
	 * contained as part of the legs.
	 */
	productFromName: string;
	/**
	 * User friendly name where the transfer goes to. Note that it is not guaranteed to
	 * use this name to lookup any geo information for the tranfers. This information is
	 * contained as part of the legs.
	 */
	productToName: string;
	legs: TransferLegOffer[];
	/** For transfers this field will indicate what type of transfer (Road, Boat, Rail, etc) */
	transferType: 'Road' | 'Rail' | 'Boat' | 'Flight';
	/** Indicates whether this is a private transfer */
	isPrivate: boolean;
	shortDescription: string;
	serviceCategories: ServiceCategoryOffer[];
	amenities: AmenityOffer[];
	groupedAmenities: GroupedAmenityOffer[];
	componentSource: string;
}

/** The details pertaining to one leg in a transfer offer. */
export interface TransferLegOffer {
	/** Defines a geographic point such as an airport or area */
	startLocation: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	endLocation: GeoLocation;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
}

/** An RentalCarComponent describes a rental car used in the itinerary */
export interface RentalCarComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this rental car */
	id: string;
	name: string;
	supplier?: string;
	supplierLogoUrl?: string;
	componentType: string;
	additionalInformation?: string;
	/** Indicates whether this is a placeholder component */
	isPlaceholder: boolean;
	/** The total sales price for the entire duration (in days) of the rental car */
	salesPrice: MonetaryAmount;
	/** The sales price per day of the rental car */
	unitSalesPrice: MonetaryAmount;
	/** The total net price for the entire duration (in days) of the rental car */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	/** Defines a geographic point such as an airport or area */
	pickupLocation: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	dropoffLocation: GeoLocation;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	pickupDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	dropoffDateTime: string;
	/**
	 * Duration of the rental car in days
	 * @format int32
	 */
	rentalDurationInDays: number;
	/** Defines the rental car pick-up station. */
	pickupStation?: RentalStation;
	/** Defines the rental car drop-off station. */
	dropoffStation?: RentalStation;
	/**
	 * Rental cars are classified according to version 8 of the ACRISS car classification codes. See
	 * https://acriss.igloocommunities.com/download/knowledge/files/kb_files/forms/2018/vehicle_guide_english_2018_julypdf;v1?attachment=1 for further details.
	 */
	acrissDescription?: AcrissDescription;
	externallyPaidCharges: ExternallyPaidCharge[];
	/**
	 * Included services are things that are offered with the car without any
	 * extra fees. Typical examples are insurances, local taxes, whether the
	 * irst tank is free, etc..
	 */
	included: RentalCarService[];
	/** Excluded services are things that are not offered with the car and might be available as an amenity. */
	excluded: RentalCarService[];
	/** The metadata for the rental car product's pictures (managed in the Inventory) */
	pictures?: Picture[];
	/** The URL of the rental car thumbnail */
	thumbnailUrl?: string;
	tags?: string[];
	amenities?: Amenity[];
	externalRefs: ExternalReference[];
	/** The booking information for the component */
	bookingInfo?: BookingInfo;
	cancellationPolicy?: ComponentCancellationPolicy;
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
}

/** An RentalCarOffer describes a rental car offer available to be used in an itinerary */
export interface RentalCarOffer {
	/** A unique ID which identifies this rental car offer */
	id: string;
	/** Source of the offer */
	componentSource: string;
	name: string;
	/** Defines a pickup location namely the place where traveller starts to rent a car. */
	pickupLocation: GeoLocation;
	/** Defines a pickup location namely the place where traveller stops to rent a car. */
	dropoffLocation: GeoLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'pickupLocation'
	 */
	pickupDateTime: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'dropoffLocation'
	 */
	dropoffDateTime: string;
	/** Defines the rental car pick-up station. */
	pickupStation: RentalStation;
	/** Defines the rental car drop-off station. */
	dropoffStation: RentalStation;
	/** The total sales price for all PAX for the entire duration of rental car */
	salesPrice: MonetaryAmount;
	externallyPaidCharges: ExternallyPaidCharge[];
	/**
	 * Included services are things that are offered with the car without any
	 * extra fees. Typical examples are insurances, local taxes, whether the
	 * irst tank is free, etc..
	 */
	included: RentalCarService[];
	/** Excluded services are things that are not offered with the car and might be available as an amenity. */
	excluded: RentalCarService[];
	/**
	 * Rental cars are classified according to version 8 of the ACRISS car classification codes. See
	 * https://acriss.igloocommunities.com/download/knowledge/files/kb_files/forms/2018/vehicle_guide_english_2018_julypdf;v1?attachment=1 for further details.
	 */
	acrissDescription: AcrissDescription;
	pictures?: Picture[];
	/** If defined, it contains the maximum number of amenities that can be selected with this rental car. */
	maxNumberOfAmenities?: number;
	amenityOffers?: AmenityOffer[];
	/** If defined, it contains the supplier package that is associated with the offer. */
	packageName?: string;
	/** If defined, it contains the URL to the supplier logo that is associated with the offer. */
	supplierLogoUrl?: string;
	/**
	 * If defined, it contains additional information that is associated with the offer. For
	 * most suppliers this will be the Terms and Conditions, but the caller will need to check
	 * the `componentSource` to determine the actual content.
	 *
	 * The content is returned as returned by the supplier and is not processed by Nezasa. It is
	 * up to the caller to decide how to display this information.
	 */
	additionalInformation?: string;
}

export interface RentalStation {
	meetingType:
		| 'DeskAtAirport'
		| 'ShuttleService'
		| 'RepresentantService'
		| 'CityOffice'
		| 'HarbourStation'
		| 'RailwayStation'
		| 'Unknown';
	openingHours: RentalStationOpeningHour[];
	address: RentalStationAddress;
	coordinates?: Coordinates;
	/** @format int64 */
	id?: number;
}

export interface RentalStationOpeningHour {
	day: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun')[];
	status: 'Open' | 'OnRequest' | 'Unknown';
	/**
	 * As "time-hour" ":" "time-minute" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * @format partial-time
	 * @example "00:00"
	 */
	from: string;
	/**
	 * As "time-hour" ":" "time-minute" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * @format partial-time
	 * @example "23:59"
	 */
	to: string;
}

export interface RentalStationAddress {
	name?: string;
	address?: string;
	zipCode?: string;
	city?: string;
	country?: string;
}

/**
 * The structure represents an alternative location which can be used when searching
 * for rental car offers. This alternative location is returned to the caller when
 * querying for possible PuDo (Pick-Up, Drop-Off) locations to use for querying.
 * @example [{"id":"Stop:5ee71b4901000054a7ec41be","name":"Rome","coordinates":{"lat":41.8999192,"lon":12.4833516},"locationType":"Area","minDate":"2021-04-17","maxDate":"2021-04-17","minTime":"00:00","maxTime":"23:59"},{"id":"TemplateEnd","name":"Amsterdam (AMS)","iataCode":"AMS","coordinates":{"lat":52.308613,"lon":4.763889},"locationType":"Airport","minDate":"2021-04-25","maxDate":"2021-04-25","minTime":"00:00","maxTime":"23:59"}]
 */
export interface RentalCarPuDoAlternative {
	/**
	 * Internal id which identifies the location in the itinerary. These ids are subject to
	 * change and should not be interpreted in any way by the client, however, for documentation
	 * completeness, the current set of ids is decribed here.
	 *
	 * - TemplateStart:  This indicates that the alternative should start or end at the start of
	 *                   the itinerary. This id is normally only used for pick-ups since dropping
	 *                   off a rental car before the trip has started does not make sense.
	 *
	 * - TemplateEnd: Similar to the "TemplateStart" this indicates the the alternative is at the
	 *                end of the itinerary. This is normally used for drop-off locations.
	 *
	 * - Stop:<local-id>: The alternative location points to an internal stop in the itinerary.
	 *                    The <local-id> is a unique ID which identifies the stop and should not
	 *                     be interpreted in any way by the client
	 *
	 * - Connection:<local-id>: The alternative location points inside a connection. This use case
	 *                          is for specifying rental car locations within a transit activity.
	 * @example "TemplateStart"
	 */
	id: string;
	/**
	 * User friendly name of the location
	 * @example "Rome (FCO)"
	 */
	name: string;
	coordinates: Coordinates;
	/**
	 * An optional value that, if specified, is the 3-LC for the airport's IATA code.
	 * @example "FCO"
	 */
	iataCode?: string;
	/**
	 * The earliest date for the pick-up or drop-off. This value must correspond to a "full-date"
	 * as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date
	 * @example "2021-04-17"
	 */
	minDate: string;
	/**
	 * The latest date for the pick-up or drop-off. This value must correspond to a "full-date"
	 * as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date
	 * @example "2021-04-17"
	 */
	maxDate: string;
	/**
	 * The earliest time for either the pick-up or drop-off. This value is formatted
	 * as "time-hour" ":" "time-minute" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format partial-time
	 * @example "00:00"
	 */
	minTime: string;
	/**
	 * The latester time for either the pick-up or drop-off. This value is formatted
	 * as "time-hour" ":" "time-minute" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format partial-time
	 * @example "23:59"
	 */
	maxTime: string;
}

/**
 * The response object returned when querying for the list of PuDO (Pick-Up, Drop-Off)
 * alternative locations which are valid for offer searching.
 */
export interface RentalCarPuDoAlternativesResponse {
	/**
	 * The list of possible pick-up locations which can be selected when searching
	 * for rental car offers.
	 */
	pickups: RentalCarPuDoAlternative[];
	/**
	 * The list of possible drop-off locations which can be selected when searching
	 * for rental car offers.
	 */
	dropoffs: RentalCarPuDoAlternative[];
	/**
	 * The index into 'pickups' array indicating the currently selected pick-up
	 * location for the selected rental car
	 * @example 0
	 */
	currentPickupIndex: number;
	/**
	 * The index into 'dropoffs' array indicating the currently selected drop-off
	 * location for the selected rental car
	 * @example 14
	 */
	currentDropoffIndex: number;
}

/** The request object sent by the caller when searching for rental car offers */
export interface RentalCarSearchOffersRequest {
	/**
	 * Driver age at the day the car is being picked up. This is only required if the age is
	 * outside the standard 25-69 years.
	 */
	driverAge?: number;
	/**
	 * 2-letter ISO country code (e.g. CH) defining the residency country of the driver.
	 * This is an optional parameter, but depending on the underlying suppliers, the information might
	 * be required currently. E.g., for Carnect. In the future, the backend will try to derive the
	 * informtion from the IP address and other information.
	 * @format iso-3166-1 alpha-2
	 */
	driverCountryCodeOfResidence?: string;
	/**
	 * The alternative time and location to use as pick-up.
	 * If no alternative pick-up is provided, then the server will use the pick-up time and location of the currently
	 * referenced rental car identified by `rentalCarId` which is part of the offer search request URL.
	 */
	alternativePickup?: RentalCarSearchOffersRequestPuDoAlternative;
	/**
	 * The alternative time and location to use as drop-off.
	 * If no alternative drop-off is provided, then the server will use the drop-off time and location of the currently
	 * referenced rental car identified by `rentalCarId` which is part of the offer search request URL.
	 */
	alternativeDropoff?: RentalCarSearchOffersRequestPuDoAlternative;
	/**
	 * The search radius in meter to be used. The center is the pick-up location.
	 * Defaults to 3000m when the pick-up location is an Airport, otherwise we use the
	 * radius defined on the Area for searching for nearby hotels. This Area value can be
	 * configured for custom areas in Cockpit.
	 * @format double
	 */
	pickupRadius?: number;
	/**
	 * The search radius in meter to be used. The center is the drop-off location.
	 * Defaults to 3000m when the pick-up location is an Airport, otherwise we use the
	 * radius defined on the Area for searching for nearby hotels. This Area value can be
	 * configured for custom areas in Cockpit.
	 * @format double
	 */
	dropoffRadius?: number;
}

/**
 * The request object containing an alternative location, date and time for the pick-up/drop-off
 * when searching for rental car offers.
 */
export interface RentalCarSearchOffersRequestPuDoAlternative {
	/**
	 * The id of the alternative PuDo location to use. This value is the id of one of the
	 * `RentalCarPuDoAlternative` returned in the `RentalCarPuDoAlternativesResponse`
	 */
	id: string;
	/**
	 * The pick-up/drop-off date as "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * @format date
	 */
	date: string;
	/**
	 * The pick-up/drop-off time as "time-hour" ":" "time-minute" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * @format partial-time
	 */
	time: string;
}

/**
 * Rental Car services are things that can be added to an offer.
 * Typical examples are insurances, local taxes, whether the
 * first tank is free, etc..
 */
export interface RentalCarService {
	name: string;
	category: 'Charges' | 'Default' | 'Extras' | 'Insurance' | 'Fuel' | 'Unknown';
}

/**
 * Rental cars are classified according to version 8 of the ACRISS car classification codes. See
 * https://acriss.igloocommunities.com/download/knowledge/files/kb_files/forms/2018/vehicle_guide_english_2018_julypdf;v1?attachment=1 for further details.
 */
export interface AcrissDescription {
	/** 4-letter ACRISS code defining the rental car's classification. */
	code: string;
	/** 1-letter car category code as defined by ACRISS code */
	category: string;
	/** 1-letter car type code as defined by ACRISS code. */
	carType: string;
	/** 1-letter car transmission code as defined by ACRISS code */
	transmission: string;
	/** 1-letter car fuel/air conditioning code as defined by ACRISS code */
	fuelAC: string;
	/** @format int32 */
	passengers: number;
	/** @format int32 */
	suitcases: number;
}

/**
 * Indicates whether this leg is an outbound or inbound leg. The outbound leg is one which is leaving
 * the PAX origin heading towards the destination, whereas the inbound will be one of the legs
 * heading back to the origin. However, due to complex routing rules, the concept of 'outbound' and 'inbound'
 * may not always correlate with what the PAX considers outbound and inbound.
 */
export enum FlightDirection {
	Inbound = 'Inbound',
	Outbound = 'Outbound',
}

export enum FlightClass {
	Economy = 'Economy',
	PremiumEconomy = 'PremiumEconomy',
	BusinessClass = 'BusinessClass',
	FirstClass = 'FirstClass',
}

/** An FlightComponent describes an international flight component used in the itinerary */
export interface FlightComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this flight component */
	id: string;
	/** The total sales prices for all PAX (adults and children) */
	salesPrice: MonetaryAmount;
	/** The total net prices for all PAX (adults and children) */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	/** PNR locator, only ID, no PNR content */
	pnrId?: string;
	/** The list of flight legs describing the entire flight itinerary */
	legs?: FlightComponentLeg[];
	/** The booking information for the component */
	bookingInfo?: BookingInfo;
}

/** A FlightComponentLeg describes one leg in a flight itinerary (e.g. a Frankfurt to New Delhi) */
export interface FlightComponentLeg {
	direction: 'Inbound' | 'Outbound';
	/**
	 * A FlightComponentLeg can be composed of several air segments, each with their own departure and arrival
	 * airports and time.
	 */
	segments: FlightComponentAirSegment[];
}

/**
 * A FlightComponentAirSegment describes one air segment in a flight leg. For example, for the flight leg Frankfurt to
 * New Delhi, a flight segment could be the section of the leg from Frankfurt to Heathrow, whereas another
 * segment would be Heathrow to New Delhi.
 */
export interface FlightComponentAirSegment {
	/**
	 * For airports this will contain the 3-letter IATA code assigned to it. For other types of
	 * locations (e.g. Areas) it will contain the area's name
	 */
	departureLocation: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'departureLocation'
	 */
	departureDateTime: string;
	/**
	 * For airports this will contain the 3-letter IATA code assigned to it. For other types of
	 * locations (e.g. Areas) it will contain the area's name
	 */
	arrivalLocation: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'arrivalLocation'
	 */
	arrivalDateTime: string;
	flightClass: 'Economy' | 'PremiumEconomy' | 'BusinessClass' | 'FirstClass';
	/** Name of marketing airline */
	airline?: string;
	/** 2-letter IATA code for the marketing airline (e.g. LH) */
	airlineCode?: string;
	/** If present, this is the flight number for the marketing airline */
	airlineFlightNumber?: string;
	/** Name of the operating airline */
	operatingAirline?: string;
	/** 2-letter IATA code for the operating airline (e.g. LH) */
	operatingAirlineCode?: string;
	/** If present, this is the flight number for the operating airline */
	operatingFlightNumber?: string;
}

/** A FlightOffer describes a SoftConEx flight fare */
export interface FlightOffer {
	id: string;
	/**
	 * A break down of the pricing per passenger tyupe. There is at most 1 passenger price for each
	 * passenger type (e.g. Adult) supported in the backend
	 */
	paxPrices: PassengerPrice[];
	/** The total sales prices for all PAX (adults and children) */
	salesPrice: MonetaryAmount;
	/**
	 * The total number of PAX (adults and children)
	 * @format int32
	 */
	numPax: number;
	/** true if this offer is a TourOperator fare */
	isTourOperatorOffer: boolean;
	/** The list of flight legs describing the entire flight itinerary */
	legs: FlightOfferLeg[];
}

export interface PassengerPrice {
	paxType: 'Adult' | 'Child' | 'Infant';
	/** a container object for representing a monetary value in the system */
	unitSalesPrice: MonetaryAmount;
	/**
	 * The number of PAX represented by this passenger price
	 * @format int32
	 */
	numPax: number;
}

/** A FlightOfferLeg describes one leg in a flight itinerary (e.g. a Frankfurt to New Delhi) */
export interface FlightOfferLeg {
	id: string;
	direction: 'Inbound' | 'Outbound';
	/**
	 * A FlightOfferLeg can be composed of several air segments, each with their own departure and arrival
	 * airports and time.
	 */
	segments: FlightOfferAirSegment[];
}

/**
 * A FlightOfferAirSegment describes one air segment in a flight leg. For example, for the flight leg Frankfurt to
 * New Delhi, a flight segment could be the section of the leg from Frankfurt to Heathrow, whereas another
 * segment would be Heathrow to New Delhi.
 */
export interface FlightOfferAirSegment {
	/** Small container class holding information for a specific airport in a flight offer */
	departureLocation: FlightOfferAirSegmentAirport;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'departureLocation'
	 */
	departureDateTime: string;
	/** Small container class holding information for a specific airport in a flight offer */
	arrivalLocation: FlightOfferAirSegmentAirport;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'arrivalLocation'
	 */
	arrivalDateTime: string;
	flightClass: 'Economy' | 'PremiumEconomy' | 'BusinessClass' | 'FirstClass';
	/** Name of marketing airline */
	airline: string;
	/** 2-letter IATA code for the marketing airline (e.g. LH) */
	airlineCode: string;
	/** If present, this is the flight number for the marketing airline */
	airlineFlightNumber?: string;
	/** Name of the operating airline */
	operatingAirline: string;
	/** 2-letter IATA code for the operating airline (e.g. LH) */
	operatingAirlineCode: string;
	/** If present, this is the flight number for the operating airline */
	operatingFlightNumber?: string;
}

/** Small container class holding information for a specific airport in a flight offer */
export interface FlightOfferAirSegmentAirport {
	/** 3-letter IATA code */
	id: string;
	/** Airport name localized to the caller's language */
	name: string;
	/** Airport city localized to the caller's language */
	city: string;
	/**
	 * 2-letter ISO country code (e.g. CH)
	 * @format iso-3166-1 alpha-2
	 */
	countryCode: string;
	/**
	 * The local time zone in the TZ database format (e.g. Area/Location).
	 * @example "Europe/Zurich"
	 */
	timeZoneId: string;
}

/** A generic ad-hoc component used in the itinerary */
export interface GenericAdHocComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this generic ad-hoc component */
	id: string;
	name: string;
	/** The total sales price of this generic ad-hoc component */
	salesPrice: MonetaryAmount;
	description: string;
	/** The total net price  of this generic ad-hoc component */
	netPrice?: MonetaryAmount;
	supplier?: string;
	externalRefs?: ExternalReference[];
	/** state of the booking */
	state?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	instantiationDate?: string;
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
}

/** A transport ad-hoc component used in the itinerary */
export interface TransportAdHocComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this generic ad-hoc component */
	id: string;
	segments: TransportSegment[];
	/** The total sales price of this generic ad-hoc component */
	salesPrice: MonetaryAmount;
	/** The total net price  of this generic ad-hoc component */
	netPrice?: MonetaryAmount;
	/** The total surcharge price  of this generic ad-hoc component */
	surcharge?: SurchargeOrTax;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	/** Type of the connection */
	transportConnectionType?: 'Inbound' | 'Outbound' | 'MultiCity';
	/**
	 * Also called the file key, it uniquely identifies the PNR in a specific
	 * reservation system
	 */
	pnrLocator?: string;
	/**
	 * A connection can be composed of multiple segments using different means of transportation. This field just represents a "global" type of
	 * transport for the connection
	 */
	transportType?: 'Bus' | 'Flight' | 'Train';
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	startLocation?: TransportLocation;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	endLocation?: TransportLocation;
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	ticketTimeLimit?: string;
	/** state of the booking */
	state?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
}

/** An AccommodationAdHocComponent describes an adhoc accommodation in the itinerary. */
export interface AccommodationAdHocComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this accommodation view */
	id: string;
	/** Name of the ad-hoc accommodation component */
	name: string;
	/** Description of the ad-hoc accommodation component */
	description?: string;
	/** @format int32 */
	nights: number;
	/** The total sales prices for all PAX for the entire duration of their stay in this room */
	salesPrice: MonetaryAmount;
	/** The total net prices for all PAX for the entire duration of their stay in this room */
	netPrice?: MonetaryAmount;
	/** Defines a geographic point such as an airport or area */
	location?: GeoLocation;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	supplier?: string;
	externalRefs?: ExternalReference[];
	isOnRequest: boolean;
	rooms: AccommodationAdHocRoom[];
	/** A non bookable accommodation is a component that was previously added to an itinerary but is not available anymore. */
	nonBookable: boolean;
	/** The official rating of the accommodation */
	officialRating?: string;
	/** The state of the booking */
	bookingStatus?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/** Whether the accommodation is refundable or not */
	refundable?: boolean;
	/** Pictures of the accommodation */
	pictures?: Picture[];
}

/** A transport ad-hoc component used in the itinerary */
export interface SimpleTransportComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this generic ad-hoc component */
	id: string;
	segments: TransportSegment[];
	/** The total sales price of this generic ad-hoc component */
	salesPrice: MonetaryAmount;
	/** The price per pax of this generic ad-hoc component */
	unitSalesPrice?: MonetaryAmount;
	/** The total net price  of this generic ad-hoc component */
	netPrice?: MonetaryAmount;
	/** The total surcharge price  of this generic ad-hoc component */
	surcharge?: SurchargeOrTax;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	/** Type of the connection */
	transportConnectionType?: 'Inbound' | 'Outbound' | 'MultiCity';
	/**
	 * Also called the file key, it uniquely identifies the PNR in a specific
	 * reservation system
	 */
	pnrLocator?: string;
	/**
	 * A connection can be composed of multiple segments using different means of transportation. This field just represents a "global" type of
	 * transport for the connection
	 */
	transportType?: 'Bus' | 'Flight' | 'Train';
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	startLocation?: TransportLocation;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	endLocation?: TransportLocation;
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
	/** Defines whether or not the transport component has hold baggage. */
	hasHoldBaggage?: boolean;
}

/** A transport component segment */
export interface TransportSegment {
	transportType: 'Bus' | 'Flight' | 'Train';
	transportClass:
		| 'First'
		| 'Second'
		| 'Business'
		| 'Economy'
		| 'PremiumEconomy';
	/** The carrier code for this segment, e.g. "EK" in flight "EK 448" */
	carrierCode?: string;
	/** The carrier name. This is the full name of the carrier, e.g. "Emirates" in flight "EK 448" */
	carrier?: string;
	/** Name of the operating carrier of the segment */
	operatingCarrier?: string;
	/** 2 letters code of the operating carrier of the segment */
	operatingCarrierCode?: string;
	/** The transport number for this segment, e.g. "448" in flight "EK 448" */
	transportNumber?: string;
	/** Equipement used during the segment (type of plane, type of bus, ...) */
	equipment?: string;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	startLocation: TransportLocation;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	endLocation: TransportLocation;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
}

/** An activity ad-hoc component used in the itinerary */
export interface ActivityAdHocComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this generic ad-hoc component */
	id: string;
	name: string;
	/** The total sales price of this generic ad-hoc component */
	salesPrice: MonetaryAmount;
	description: string;
	/** The total net price  of this generic ad-hoc component */
	netPrice?: MonetaryAmount;
	supplier?: string;
	externalRefs?: ExternalReference[];
	/**
	 * The refId of the location of this ad-hoc activity component.
	 * Replaced by startLocationRefId and endLocationRefId but kept for backwards compatibility.
	 */
	locationRefId: string;
	/** The refId of the start location of this ad-hoc activity component. */
	startLocationRefId: string;
	/** The refId of the end location of this ad-hoc activity component. */
	endLocationRefId: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	/** state of the booking */
	state?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	instantiationDate?: string;
	pictures?: Picture[];
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
	activityType: 'Tour' | 'Package' | 'Ticket' | 'Cruise' | 'Other';
}

/** An short summary of activity ad-hoc component to import */
export interface ActivityAdHocComponentImportTitle {
	/** The unique ID identifying the booking in the external system. */
	bookingId: string;
	/** The unique ID identifying the activity within the booking. */
	componentId: string;
	/** A title (name) of the activity allowing for identifying the activity among others. */
	title: string;
}

/**
 * The information received from the activity import containing most of the required data to insert or update
 * an activity. The message contains only the pertinent information required to create the desired activity component, but some of it may require correction
 * by the user before the activity can be created.
 *
 * The information sent here can be found as part of the ActivityOffer.
 */
export interface ActivityAdHocComponentImportDetails {
	/** Name of the ad-hoc activity component */
	name: string;
	/** ID/name of the component supplier */
	supplier?: string;
	/** The confirmation number on the supplier */
	supplierConfirmationNumber?: string;
	/** Description of the ad-hoc generic component */
	description: string;
	/** The ID of the leg of this ad-hoc activity component */
	legId?: string;
	/** The refId of the start location of this ad-hoc activity component */
	startLocationRefId?: string;
	/** The refId of the end location of this ad-hoc activity component */
	endLocationRefId?: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	/** The net price set for the ad-hoc generic component */
	netPrice: MonetaryAmount;
	/** The sales price set for the ad-hoc generic component */
	salesPrice: MonetaryAmount;
	/** The state of the booking */
	bookingStatus?:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	pictures?: Picture[];
}

/** An short summary of rentalCar ad-hoc component to import */
export interface RentalCarAdHocComponentImportTitle {
	/** The unique ID identifying the booking in the external system. */
	bookingId: string;
	/** The unique ID identifying the rentalCar within the booking. */
	componentId: string;
	/** A title (name) of the rentalCar allowing for identifying the rentalCar among others. */
	title: string;
}

/** A supplier reference is defined by just one of either `refId`, `contact`, `contactRefId`, or `name`. If multiple are defined, only one will be considered and the others are ignored. */
export interface SupplierRef {
	refId?: string;
	contactRefId?: string;
	name?: string;
}

/** Complete representation of a rental car ad-hoc component. | Same as `RentalCarAdHocComponentEntity` but without an `id`. */
export interface RentalCarAdHocComponentValue {
	name: string;
	additionalInfo?: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	pickupDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	dropoffDateTime: string;
	/** Defines a pickup location namely the place where traveller starts to rent a car. */
	pickupLocation: GeoLocation;
	/** Defines a pickup location namely the place where traveller stops to rent a car. */
	dropoffLocation: GeoLocation;
	included: string[];
	excluded: string[];
	/** Total price of the rental car *excluding* sales margins. | This is the supplier's price, in supplier's currency. */
	netPrice: MonetaryAmount;
	/** Total price of the rental car including sales margins. | */
	salesPrice: MonetaryAmount;
	/** A supplier reference is defined by just one of either `refId`, `contact`, `contactRefId`, or `name`. If multiple are defined, only one will be considered and the others are ignored. */
	supplierRef?: SupplierRef;
	supplier?: string;
	supplierConfirmationNumber?: string;
	bookingStatus:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/** Defines a view of our Picture model along with its descriptions */
	picture?: Picture;
	/** 4-letter ACRISS code defining the rental car's classification. */
	acrissCode: string;
	/** Number of passengers. */
	passengers: number;
	/** Number of suitcases. */
	suitcases: number;
}

/** A rental car ad-hoc component with an id that uniquely distinguishes it within the itinerary. | Same as `RentalCarAdHocComponentValue` but with an `id`. */
export interface RentalCarAdHocComponentEntity {
	id: string;
	name: string;
	additionalInfo?: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	pickupDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	dropoffDateTime: string;
	/** Defines a pickup location namely the place where traveller starts to rent a car. */
	pickupLocation: GeoLocation;
	/** Defines a pickup location namely the place where traveller stops to rent a car. */
	dropoffLocation: GeoLocation;
	included: string[];
	excluded: string[];
	/** Total price of the rental car *excluding* sales margins. | This is the supplier's price, in supplier's currency. */
	netPrice: MonetaryAmount;
	/** Total price of the rental car including sales margins. | */
	salesPrice: MonetaryAmount;
	/** A supplier reference is defined by just one of either `refId`, `contact`, `contactRefId`, or `name`. If multiple are defined, only one will be considered and the others are ignored. */
	supplierRef?: SupplierRef;
	supplier?: string;
	supplierConfirmationNumber?: string;
	bookingStatus:
		| 'Open'
		| 'OnRequest'
		| 'Booked'
		| 'NonBookable'
		| 'Cancelled'
		| 'None';
	/** Defines a view of our Picture model along with its descriptions */
	picture?: Picture;
	/** 4-letter ACRISS code defining the rental car's classification. */
	acrissCode: string;
	/** Number of passengers. */
	passengers: number;
	/** Number of suitcases. */
	suitcases: number;
}

/** A BaseServiceComponent describes a base service used in the itinerary */
export interface BaseServiceComponent {
	/** A unique ID (only within the owning Itinerary) which identifies this base service */
	id: string;
	name: string;
	/** The total sales prices for the entire duration (in days) of this base service */
	salesPrice: MonetaryAmount;
	/** The total net prices for the entire duration (in days) of this base service */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	supplier?: string;
	baseServiceType: string;
	/** deprecated, use standardDuration. for base services with hourly pricing, this value is only an approximation! */
	standardDurationInDays?: number;
	/** duration in the unit designated by the rateType of the referenced product */
	standardDuration?: number;
	/** the pricing unit, can be DailyRate, HourlyRate or FixedRate */
	rateType?: string;
	included?: string[];
	excluded?: string[];
	tags?: string[];
	externalRefs: ExternalReference[];
	/** The booking information for the component */
	bookingInfo?: BookingInfo;
	coveredStops: BaseServiceComponentLeg[];
	/** Defines whether or not users are allowed to request bookings even if an allotment is exceeded */
	isOnRequest?: boolean;
}

/** A BaseServiceComponent describes a base service used in the itinerary */
export interface BaseServiceComponentLeg {
	legId: string;
	stopAreaId: string;
	stopAreaName: string;
	/** the stop index relative to its module */
	stopIndex: number;
}

/** Describes a location in the route builder. */
export interface RoutePoint {
	/**
	 * Reference to a location. The location ID is specific to the location type. For example,
	 * for an Airport the locationId is the airport's IATA code where as for a GeoPoint it
	 * is the concatentation of the latitude and longitude.
	 */
	location: Location;
	/** if true then this location can be edited (i.e. a new area or airport can be set). */
	isMutable: boolean;
}

/**
 * An entity which connects two coordinates/locations
 *
 * A connection is not limited to connecting two stops but any two locations. For example,
 * the following connection chain would bring the PAX from New York stop to the Boston
 * stop via Providence.
 *
 * [New York] >>> Bus >>> (Providence) >>> Train >>> [Boston]
 *
 * In this example, the first route incoming connection would have its start location set
 * to New York, its end location set to Providence, and its transfer type defined to Bus.
 * Simiarly the second incoming connection has its start and end locations set to
 * Providence and Boston resp. and its transfer type set to Train.
 */
export interface RouteIncomingConnection {
	/**
	 * Reference to a location. The location ID is specific to the location type. For example,
	 * for an Airport the locationId is the airport's IATA code where as for a GeoPoint it
	 * is the concatentation of the latitude and longitude.
	 */
	startLocation: Location;
	/**
	 * Reference to a location. The location ID is specific to the location type. For example,
	 * for an Airport the locationId is the airport's IATA code where as for a GeoPoint it
	 * is the concatentation of the latitude and longitude.
	 */
	endLocation: Location;
	/** The means by which the PAX is transported between the start and end locations. */
	transportMeans:
		| 'Bus'
		| 'Shuttle'
		| 'Flight'
		| 'Boat'
		| 'Train'
		| 'Activity'
		| 'CarActivity'
		| 'RentalCar'
		| 'OwnCar'
		| 'CarFerry'
		| 'Motorcycle'
		| 'Bicycle'
		| 'Walk';
	/**
	 * Duration of connection in seconds.
	 * @format int32
	 */
	durationInSeconds?: number;
	/**
	 * if true then it indicates that the "connection" can be modified. This means that we can exchange the `transportMeans`
	 * as well as add stops before this route point since adding a stop would in essence change the incoming connection
	 * (i.e. the connection would be modified to go from B to C instead of A to C)
	 *
	 * This value is only defined when retrieving information from the backend. As part of the update
	 * requests any value set here is ignored.
	 */
	isMutable?: boolean;
	/**
	 * Duration of transfer in nights.
	 * @format int32
	 */
	nights?: number;
	/** Optional name to be displayed when the connection is fulfilled by a product (currently only for activity products) */
	productName?: string;
}

/** Describes start and end locations for use in the route builder. */
export interface RouteEndLocation {
	/** Describes a location in the route builder. */
	routePoint: RoutePoint;
	/** A connection chain which brings the PAX from the previous route point to this end location. */
	incomingConnections: RouteIncomingConnection[];
}

/** Describes route item utilized by the route builder to display stop information. */
export interface RouteStop {
	legId: string;
	/** @format int32 */
	nights: number;
	/** Describes a location in the route builder. */
	routePoint: RoutePoint;
	/**
	 * A connection chain which brings the PAX from the previous route stop (or module start location)
	 * to this route point.
	 */
	incomingConnections: RouteIncomingConnection[];
}

export interface RouteUpdateEndLocation {
	/**
	 * Reference to a location. The location ID is specific to the location type. For example,
	 * for an Airport the locationId is the airport's IATA code where as for a GeoPoint it
	 * is the concatentation of the latitude and longitude.
	 */
	location?: Location;
	/**
	 * The chain of connections leading from the last stop in the module, or in the case of no
	 * stops from the module's start location, to the end location.
	 */
	incomingConnections?: RouteIncomingConnection[];
}

export interface RouteUpdateStop {
	/**
	 * If specified, this will refer to an existing leg. This value is returned by
	 * the backend as part of a RouteStop. Note that only `legId` or `location`
	 * can be specified and the 'legId' will take priority.
	 */
	legId?: string;
	/**
	 * If specified, this refers to a new stop which was added by the caller. Note that
	 * only `legId` or `location` can be specified and the `legId` will take priority
	 */
	location?: Location;
	/** @format int32 */
	nights?: number;
	/**
	 * The chain of connections leading from the previous stop or the module's start location
	 * to this route stop.
	 */
	incomingConnections?: RouteIncomingConnection[];
}

/** A view over the Area model which describes a set of coordinates contained within administrative borders. */
export interface Area {
	id: string;
	name: string;
	coordinates: Coordinates;
}

/** A specialized type of location which serves as the location for a Stop */
export interface StopLocation {
	id: string;
	name: string;
	countryCode?: string;
	coordinates: Coordinates;
	locationType: 'Area' | 'Airport';
	/**
	 * The local time zone in the TZ database format (e.g. Area/Location).
	 * @example "Europe/Zurich"
	 */
	timezone: string;
	/**
	 * For areas or area descriptions which are managed by the tour operator, the supplier value is the tour
	 * operator's refId. For Nezaza-owned areas and area descrptions, the supplier value is "Nezasa"
	 * @example "Nezasa"
	 */
	supplier?: string;
}

/** A view over the AreaDescription model which describes an area (textual descriptions and pictures). */
export interface AreaDescription {
	/** A unique ID which identifies the area description */
	id: string;
	/** A key sentence describing the area description */
	keySentence: string;
	/** Short description of the area */
	shortDescription?: string;
	pictures?: Picture[];
	/**
	 * For areas or area descriptions which are managed by the tour operator, the supplier value is the tour
	 * operator's refId. For Nezaza-owned areas and area descrptions, the supplier value is "Nezasa"
	 * @example "Nezasa"
	 */
	supplier?: string;
}

/**
 * A Connection is a schedulable entity describing how the traveler goes from the start to the end location.
 * For example, a transfer connection can refer to a Road, Boat, or Flight transfer and is scheduled
 * as part of the itinerary planning process. The actual Transfer entity which is purchased by the PAX is
 * the transfer component, which is contained as part of the connection.
 */
export interface Connection {
	/** A unique ID (within the Itinerary) which identifies this connection object */
	id: string;
	/** A unique ID which identifies this component */
	connectionLocalId?: string;
	/** Defines a geographic point such as an airport or area */
	startLocation: GeoLocation;
	/** Defines a geographic point such as an airport or area */
	endLocation: GeoLocation;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDateTime: string;
	/** A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDateTime: string;
	name: string;
	connectionType: 'Activity' | 'Flight' | 'RentalCar' | 'Transfer';
	/** For transfers this field will indicate what type of transfer (Road, Boat, Rail, etc) */
	transferType?: 'Road' | 'Rail' | 'Boat' | 'Flight';
	/** The sales price for this Connection */
	salesPrice?: MonetaryAmount;
	/** The net price for this Connection */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	/** List of surcharges and types incurred for this offer */
	surcharges?: SurchargeOrTax[];
	/**
	 * Distance of the rental car connection in KMs
	 * @format int32
	 */
	distance?: number;
	/** Indicates whether this is a placeholder component */
	isPlaceholder?: boolean;
}

/**
 * Reference to a location. The location ID is specific to the location type. For example,
 * for an Airport the locationId is the airport's IATA code where as for a GeoPoint it
 * is the concatentation of the latitude and longitude.
 */
export interface Location {
	/**
	 * For an airport this will be the IATA code.
	 * For an area this is the area refId as stored in the Nezasa inventory
	 * For geo points the location ID is optional. The server will currently create
	 * an ID from the geo information for debugging and informational purposes. When the
	 * location is part of an update request, the server will ignore any value present here.
	 */
	locationId?: string;
	locationType: 'Airport' | 'Area' | 'GeoPoint';
	/**
	 * If defined this is a user-friendly name for this location.
	 * This attribute must be defined for all GeoPoint locations defined on a stop location
	 * in a RouteUpdateRequest
	 */
	name?: string;
	/**
	 * The geographic coordinates described by this location.
	 * This attribute must be defined for all GeoPoint locations as part of
	 * a RouteUpdateRequest.
	 */
	coordinates?: Coordinates;
	/**
	 * An ISO 3166-1 alpha-2 country code.
	 * This attribute must be defined for all GeoPoint locations defined on a stop location
	 * in a RouteUpdateRequest
	 * @format iso-3661-1
	 */
	countryCode?: string;
}

/** Defines a geographic point such as an airport or area */
export interface GeoLocation {
	name: string;
	coordinates: Coordinates;
	/**
	 * an ISO 3166-1 alpha-2 country code
	 * @format iso-3661-1
	 */
	countryCode?: string;
	locationType?: 'Airport' | 'Area' | 'GeoPoint';
	refId?: string;
}

export interface Coordinates {
	/** @format double */
	lat: number;
	/** @format double */
	lon: number;
}

export interface PriceInfo {
	/** The total package price in the localization currency */
	packagePrice: MonetaryAmount;
	/** The package price per PAX in the localization currency */
	packagePricePerPax: MonetaryAmount;
	/** Charges to be paid externally, meaning not on our platform. */
	externallyPaidCharges?: ExternallyPaidCharges;
	/** the total amount to be paid, including the total amount to be paid in destination, converted to the package currency */
	totalPrice: MonetaryAmount;
	/** the total amount to be paid, including the total amount to be paid in destination, converted to the package currency per pax */
	totalPricePerPax: MonetaryAmount;
}

export interface TourOperatorSurcharge {
	name: string;
	/** a container object for representing a monetary value in the system */
	value: MonetaryAmount;
}

/** a container object for representing a monetary value in the system */
export interface MonetaryAmount {
	/** The monetary value whereby the major and minor currency units are separated by a decimal (e.g. "29.95") */
	amount: string;
	/**
	 * The ISO-4217 currency code (e.g. EUR, USD, etc)
	 * @format iso-4217
	 */
	currency: string;
	/**
	 * The monetary value whereby the major and minor currency units are represented as an integer (e.g. 29.95 => 2995)
	 * @format int32
	 */
	amountInMinorUnits?: number;
	/** The monetary value's user-friendly string representation, rounded to units (e.g. "EUR 30") */
	currencyValueStringRounded?: string;
}

/**
 * Charges to be paid externally, meaning not on our platform. These are charges for
 * things that we want to show the price on our platform, however, when the user makes
 * the payment, we wouldn't charge for them. Instead, these charges are paid in the
 * destination.
 */
export interface ExternallyPaidCharge {
	name: string;
	/** the amount to be paid in the destination */
	value: MonetaryAmount;
	/** Only defined for rental cars */
	rentalCarChargeType?: 'CrossBorder' | 'OneWay' | 'OutsideOpeningHours';
	/** Only defined for accommodations */
	accommodationChargeType?: 'AdditionalFees';
}

/**
 * Charges to be paid externally, meaning not on our platform. These are charges for
 * things that we want to show the price on our platform, however, when the user makes
 * the payment, we wouldn't charge for them. Instead, these charges are paid in the
 * destination.
 */
export interface ExternallyPaidCharges {
	externallyPaidCharges: ExternallyPaidCharge[];
	/** the total amount to be paid in the destination */
	totalPrice: MonetaryAmount;
	/** the total amount to be paid in the destination per pax */
	unitPrice: MonetaryAmount;
}

export interface ExternalReference {
	id: string;
	system: string;
}

/** container which houses the different variables used in computing a multi-dimensional product price */
export interface PricingCoordinates {
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDate: string;
	/**
	 * the number of adults
	 * @format int32
	 */
	numAdults: number;
	childAges?: number[];
	/**
	 * a computed property reflecting the total number of PAX (adults + children)
	 * @format int32
	 */
	numPax: number;
}

/** Contains the licence data for a picture */
export interface LicenceInfo {
	attribution: string;
	attributionAuthor?: string;
	licenseHolderRefId?: string;
	restrictedUse?: boolean;
	source?: string;
}

/** Defines a view of our Picture model along with its descriptions */
export interface Picture {
	caption?: string;
	image?: PictureItem;
	thumbnail?: PictureItem;
	original?: PictureItem;
	uncropped?: PictureItem;
	/** Contains the licence data for a picture */
	licenceInfo?: LicenceInfo;
	isExternalAsset?: boolean;
	refId?: string;
	titlePicture?: boolean;
	items?: PictureItem[];
}

/** @example {"height":599,"name":"fw_wi4wwv6ybf3k.jpg","sizeInKb":134,"url":"https://s3-eu-west-1.amazonaws.com/nezasa-dev/pictures/fw_wi4wwv6ybf3k.jpg","width":800} */
export interface PictureItem {
	name: string;
	url: string;
	/** @format int32 */
	width: number;
	/** @format int32 */
	height: number;
	/** @format int64 */
	sizeInKb?: number;
	assetType?: string;
	dimension?: string;
	originUrl?: string;
}

/** Describes booking information available in a component. */
export interface BookingInfo {
	/** state of the booking */
	state: 'Open' | 'OnRequest' | 'Booked' | 'NonBookable' | 'Cancelled' | 'None';
	/** reference identifier for the booking */
	bookingIdentifier?: 'Online' | 'Offline';
	sourcingType: string;
	/** consolidator being used to aggregate booking offers */
	consolidator?: string;
	/** reference of the consolidator */
	consolidatorReference?: string;
	/** the specific supplier used by the consolidator for the booking */
	supplier?: string;
	/** The public URLs to the vouchers */
	voucherUrls?: string[];
}

/** Describes the Family Fare of the connection segment for transport connections. */
export interface FareFamily {
	/** Name of the Family Fare */
	name: string;
	/** Airport IATA code of the Family Fare */
	iataCode?: string;
	/** Airport ICAO code of the Family Fare */
	icaoCode?: string;
}

/** Describes a location that can be used as a starting point or an ending point for transport connections. */
export interface TransportLocation {
	/** localized name of the location */
	name?: string;
	/** Nezasa ID of the location */
	refId?: string;
	/** IATA code of the location (if it exists) */
	iataCode?: string;
	/**
	 * latitude of the location
	 * @format double
	 */
	latitude?: number;
	/**
	 * longitude of the location
	 * @format double
	 */
	longitude?: number;
	/**
	 * in case the location is a circular area, radius around the point defined by the latitude and longitude of the location.
	 * @format double
	 */
	radius?: number;
	/**
	 * The local time zone in the TZ database format (e.g. Area/Location).
	 * @example "Europe/Zurich"
	 */
	timezone?: string;
	/** if it exists, the 3 letter code of the metropolitan area containing the location */
	metropolitanArea?: string;
	/** localized name of the city containing the location */
	city?: string;
	/** localized name of the country containing the location */
	country?: string;
	/** 2 letter code of the country containing the location */
	countryCode?: string;
}

/** Describes a set of transport connections bookable together */
export interface TransportItinerary {
	/** A unique ID (only within the owning Itinerary) which identifies this transport component */
	id: string;
	/** A unique ID which identifies this connection */
	connectionLocalId?: string;
	/** The total sales prices for all PAX (adults and children) */
	salesPrice: MonetaryAmount;
	/** The total net prices for all PAX (adults and children) */
	netPrice?: MonetaryAmount;
	/** The total net price in the supplier's currency */
	netPriceSupplierCurrency?: MonetaryAmount;
	/** The list of connections describing the entire transport itinerary */
	connections: TransportItineraryConnection[];
	/** The booking information for the component */
	bookingInfo?: BookingInfo;
}

/** Describes a set of connections composing a transport itinerary */
export interface TransportItineraryConnection {
	/** Departure transport location */
	departureLocation: TransportLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'departureLocation'
	 * @format date-time
	 */
	departureDateTime: string;
	/** Arrival transport location */
	arrivalLocation: TransportLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'arrivalLocation'
	 * @format date-time
	 */
	arrivalDateTime: string;
	/**
	 * A TransportItineraryConnection can be composed of several segments, each with their own departure and arrival
	 * airports and time.
	 */
	segments: TransportItineraryLeg[];
	/**
	 * A connection can be composed of multiple segments using different means of transportation. This field just represents a "global" type of
	 * transport for the connection
	 */
	relevantTransportType: 'Bus' | 'Flight' | 'Train';
	/** Type of the connection */
	connectionType: 'Inbound' | 'Outbound' | 'MultiCity';
}

/** Describes the legs in a transport connection */
export interface TransportItineraryLeg {
	/** Departure transport location */
	departureLocation: TransportLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'departureLocation'
	 * @format date-time
	 */
	departureDateTime: string;
	/** Arrival transport location */
	arrivalLocation: TransportLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6.
	 * This date-time value is given in the timezone defined by 'arrivalLocation'
	 * @format date-time
	 */
	arrivalDateTime: string;
	/** Type of transportation of the segment. */
	transportType: 'Bus' | 'Flight' | 'Train';
}

/** time of day from, until */
export interface TimeOfDayRange {
	/**
	 * A "partial-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6,
	 * indicating the earliest departure time for an air segment.
	 *
	 * The supported time is given in the local time of the airport and has the format
	 * "d{1,2}:d{1,2}". The seconds field is ignored as this level of resolution is not
	 * supported by flight providers.
	 * @format partial-time
	 */
	from?: string;
	/**
	 * A "partial-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6,
	 * indicating the latest arrival time for an air segment.
	 *
	 * The supported time is given in the local time of the airport and has the format
	 * "d{1,2}:d{1,2}". The seconds field is ignored as this level of resolution is not
	 * supported by flight providers.
	 * @format partial-time
	 */
	until?: string;
}

export interface PriceRange {
	/**
	 * Price is to be rounded to a whole number. If not defined, then there is
	 * no lower bound on the prices returned
	 * @format int32
	 */
	from?: number;
	/**
	 * Price is to be rounded to a whole number. If not defined, then there is
	 * no upper bound on the prices returned. This value must be greater than
	 * the given `from` attribute (if defined).
	 * @format int32
	 */
	to?: number;
}

/** Request for a list of offers for one transport connection */
export interface TransportConnectionOfferRequest {
	/** Type of the connection */
	connectionType: 'Inbound' | 'Outbound' | 'MultiCity';
	/** For multicity transport connection, local ID of the connection */
	connectionLocalId?: string;
	/** For Outbound connections, the starting location(s) for the connection to the itinerary. The parameter is forwarded to the third-party supplier API. */
	startLocations?: TransportLocation[];
	/** For Inbound connections, the ending location(s) for the connection from the itinerary. The parameter is forwarded to the third-party supplier API. */
	endLocations?: TransportLocation[];
	/** time of day from, until */
	arrivalTimeRange?: TimeOfDayRange;
	/** time of day from, until */
	departureTimeRange?: TimeOfDayRange;
}

/**
 * Request for a list of offers for one or more transport connections.
 *
 * Whenever possible, the filter parameters are passed to the third-party supplier API because especiall for flights, the supplier APIs only return
 * a limited amount of offers. GDS usually return 100 offers, Aerticket returns 350 offers, ...
 */
export interface TransportOfferRequest {
	/** Definition of the connections covered by the search */
	connections: TransportConnectionOfferRequest[];
	/**
	 * Include other nearby locations (airports, ...). This is applied to the start location of outbound connections and end location of inbound connections
	 * and applies a 100km radius around the locations defined.
	 */
	includeNearbyLocations?: boolean;
	/** Type of transport to search for */
	transportTypes?: ('Bus' | 'Flight' | 'Train')[];
	/** Classes of transport to search for */
	transportClasses?: (
		| 'First'
		| 'Second'
		| 'Business'
		| 'Comfort'
		| 'Economy'
		| 'Premium'
		| 'PremiumEconomy'
	)[];
	/**
	 * Maximum number of stops per connection. The parameter is forwarded to the third-party supplier API. Some supplier APIs don't only
	 * provide a filter for direct vs non-direct connections. In those cases, `maxStopOver` is accordingly mapped.
	 * @format int32
	 */
	maxStopOver?: number;
	/** Filter by sales price range. The filtering happens in the Nezasa backend. */
	priceRange?: PriceRange;
	/**
	 * The maximum travel duration in hours. Minimum value allowed is 0. The parameter is forwarded to the third-party supplier API.
	 * @format int32
	 */
	maxDurationInHours?: number;
	/** List of airlines to include in the search. The parameter is forwarded to the third-party supplier API. */
	includedCarrierCodes?: string[];
	/** List of airlines to exclude from the search.  The parameter is forwarded to the third-party supplier API. */
	excludedCarrierCodes?: string[];
	/**
	 * A value of true indicates that only fares containing at least one piece of hold baggage
	 * should be returned. If this attribute is not defined or has a value of false, then fares
	 * with or without baggage can be returned.
	 *
	 * Note that behavior of this attribute is dependent on the external provider. For Kiwi.com
	 * it currently has no effect as it is not possible to search for only flight itineraries
	 * which contain hold baggage (i.e. baggage included in the price). For Aerticket/SoftConEx
	 * toggling this value will effect the fares returned as a value of true will only return
	 * fares that contain hold baggage as part of the fare price.
	 */
	requireHoldBaggage?: boolean;
	/**
	 * Set of suppliers used to constrain the offer search.
	 *
	 * The selected suppliers must be supported by the distribution channel configuration.
	 */
	suppliers?: ('AERTICKET' | 'KIWI' | 'SOFTCONEX')[];
	/**
	 * This flag indicates that one-way fares should be parsed and combined into round-trip offers.
	 * In other words, in addition to the normal round-trip fares, the backend will also return
	 * combined one-way fares as round-trips.
	 *
	 * If disabled, then the normal round-trip (RT) fares are searched.
	 */
	combineOneWayFares?: boolean;
}

export interface TransportOfferCancelPolicy {
	/** Type of cancellation */
	cancelType: 'Free' | 'FeeApplies' | 'NonRefundable';
	/** a container object for representing a monetary value in the system */
	price?: MonetaryAmount;
}

export interface TransportOfferInsurance {
	/** Localized name of the insurance */
	insuranceName: string;
	/** a container object for representing a monetary value in the system */
	price?: MonetaryAmount;
}

export interface TransportOfferFamilyFare {
	/** Localized name of the family fare */
	familyFareName: string;
	/** a container object for representing a monetary value in the system */
	price?: MonetaryAmount;
}

export interface TransportConnectionSegmentBaggage {
	/** Type of baggage */
	baggageType: 'Hold' | 'Hand' | 'PersonalItem';
	included: boolean;
	/** @format int32 */
	count?: number;
	/** a container object for representing a monetary value in the system */
	price?: MonetaryAmount;
}

/** Distribution of bags for all the pax included in a transport connection. */
export interface TransportConnectionSegmentPaxBaggage {
	/** Unique ID of a pax */
	paxRefId: string;
	/** Description of a baggage */
	baggage?: TransportConnectionSegmentBaggage[];
}

export interface TransportConnectionSegment {
	/** Start location of the segment */
	startLocation: TransportLocation;
	/** End location of the segment */
	endLocation: TransportLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	startDateTime: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	endDateTime: string;
	/** Type of transportation of the segment. */
	transportType: 'Bus' | 'Flight' | 'Train';
	/** Name of the carrier of the segment */
	carrier: string;
	/** 2 letters code of the carrier of the segment */
	carrierCode: string;
	/** URL to the logo of the carrier of the segment */
	carrierLogo: string;
	/** Name of the operating carrier of the segment */
	operatingCarrier?: string;
	/** 2 letters code of the operating carrier of the segment */
	operatingCarrierCode?: string;
	/** URL to the logo of the operating carrier of the segment */
	operatingCarrierLogo?: string;
	/** Identifier of the transport (Flight number, bus number, ...) */
	transportNumber?: string;
	/** Identifier of the transport (Flight number, bus number, ...) defined by the operating carrier */
	operatingTransportNumber?: string;
	/** Equipement used during the segment (type of plane, type of bus, ...) */
	equipment?: string;
	/** Class of the segment */
	transportClass:
		| 'First'
		| 'Second'
		| 'Business'
		| 'Comfort'
		| 'Economy'
		| 'Premium'
		| 'PremiumEconomy';
	/** Localized name of the class of the segment */
	transportClassText: string;
	/** Unique ID of the segment */
	segmentId: string;
	/** Description of the baggage offers for each pax */
	baggagePerPax: TransportConnectionSegmentPaxBaggage[];
	/** The bookingClassCode attribute of transport segment. (eg "K") */
	bookingClassCode?: string;
	/** Family fare segment information */
	fareFamily?: FareFamily;
}

export interface TransportConnectionOffer {
	/** Supplier of the offer */
	componentSource?: string;
	/** The type of contract used to get the offer */
	componentSourceType?: 'Private' | 'Reseller';
	/** Total sales price (including sales margins) of the offer */
	salesPrice?: MonetaryAmount;
	/** Sales price per pax (including sales margins) of the offer */
	unitSalesPrice?: MonetaryAmount;
	/** Total net price (not including sales margins) of the offer */
	netPrice?: MonetaryAmount;
	/** Type of the connection */
	connectionType: 'Inbound' | 'Outbound' | 'MultiCity';
	/** For multicity transport connections, local ID of the connection */
	connectionLocalId?: string;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	startLocation: TransportLocation;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	endLocation: TransportLocation;
	/**
	 * For Outbound connection, minutes between the end of the transport connection and the beginning of the itinerary.
	 * @format int32
	 */
	minutesToItinerary: number;
	/**
	 * Duration of the connection (including the layovers) in minutes
	 * @format int32
	 */
	duration: number;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	startDateTime: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	endDateTime: string;
	/** Unique ID of the connection offer */
	offerId: string;
	/**
	 * Some providers have connections which look the same but have different IDs (eg SoftConEx).
	 * Such integrations can provide additional grouping key for the connection so we could filter similar offers.
	 */
	offerGroupingKey: string;
	offerType: 'Combined' | 'Standalone';
	/**
	 * A connection can be composed of multiple segments using different means of transportation. This field just represents a "global" type of
	 * transport for the connection
	 */
	relevantTransportType: 'Bus' | 'Flight' | 'Train';
	/** Segments composing the transport connection. */
	segments: TransportConnectionSegment[];
	/** Unique code defining the offer */
	bookingCode?: string;
	/** Technical fields used to define an offer. This should be returned as is to TripBuilder when selecting an offer. */
	integrationArgs?: IntegrationArg[];
	/**
	 * Deprecated - Total number of included checked bags
	 * @format int32
	 */
	checkedBagsCount: number;
	/**
	 * Deprecated - Total number of included cabin bags
	 * @format int32
	 */
	cabinBagsCount: number;
	/**
	 * Total number of included checked bags. Not sent when this value is unknown.
	 * @format int32
	 */
	checkedBagsPerPax?: number;
	/**
	 * Total number of included cabin bags. Not sent when this value is unknown.
	 * @format int32
	 */
	cabinBagsPerPax?: number;
}

/** A warning to show to the customer */
export interface TransportOfferWarning {
	/** Warning summary */
	title: string;
	/** Description of the warning message */
	message?: string;
}

/** Offer for one or more transport connection(s) */
export interface TransportOffer {
	/** Supplier of the offer */
	componentSource: string;
	/** Unique code defining the offer */
	bookingCode: string;
	/** Total sales price (including sales margins) of the offer */
	salesPrice: MonetaryAmount;
	/** Sales price per pax (including sales margins) of the offer */
	unitSalesPrice: MonetaryAmount;
	/** Total net price (not including sales margins) of the offer */
	netPrice?: MonetaryAmount;
	/** Details of the connections contained in the offer */
	connections: TransportConnectionOffer[];
	/** Cancellation policies attached to the offer */
	cancelPolicies: TransportOfferCancelPolicy[];
	/** Insurance policies attached to the offer */
	insurances: TransportOfferInsurance[];
	/** Possible family fares attached to the offer */
	familyFares: TransportOfferFamilyFare[];
	/**
	 * Total duration of all connections (including layovers) in minutes
	 * @format int32
	 */
	totalDuration: number;
	/** Deprecated - The actual offer provider (not WL, etc.) */
	vendor?: string;
	/** The actual offer provider (not WL, etc.) */
	supplier?: string;
	/** The type of contract used to get the offer */
	componentSourceType: 'Private' | 'Reseller';
	/** The list of warnings for the offer */
	warnings: TransportOfferWarning[];
	/** Whether this offer is not an actual flight, but a placeholder */
	isPlaceholder: boolean;
	/**
	 * The time by which the ticket must be issued to avoid the expiration of the fare quote
	 * @format date-time
	 */
	ticketTimeLimit?: string;
	/** List of surcharges and types incurred for this offer */
	surcharges?: SurchargeOrTax[];
	/** Technical fields used to define an offer. This should be returned as is to TripBuilder when selecting an offer. */
	integrationArgs?: IntegrationArg[];
	/**
	 * This parameter represents the anticipated number of PNRs which this offer contains.
	 * This number is only anticipated, as it does not always correspond to the number of PNRs
	 * after the booking is created, in particular, when dealing with Kiwi.com. For Aerticket,
	 * this number should match the number of PNRs created after booking.
	 *
	 * In general a pnrCount of 1 indicates that offer represents a classic round-trip (RT)
	 * flight whereas multiple PNRs indicates that the offer is composed of different individual
	 * fares that will be be booked individually.
	 * @format int32
	 */
	pnrCount?: number;
	/** list of fare types */
	fareTypes: ('Pubneg' | 'Pub' | 'Neg' | 'Net' | 'TourOperator' | 'LowCost')[];
}

/** TODO surchage description */
export interface SurchargeOrTax {
	name: string;
	/**
	 * Additional taxes or fees which are applied to the product. These could already
	 * be included as part of the package price (in which case "included" is set to true)
	 * or excluded and must be paid externally from the booking (e.g. at the destination)
	 */
	value: MonetaryAmount;
	/**
	 * - FlightAirportTax: The tax levied on passengers for taking off from an airport.
	 * - FlightAirTrafficTax: Direct aviation tax charged for all flights taking off from the airport.
	 * - FlightTotalTaxes: The sum of all included taxes incurred by the flight. If the backend provider
	 *   does not provide a detailed tax breakdown, we try to fallback to at least retrieving the
	 *   total surcharges or taxes applied to the fare.
	 */
	chargeOrTaxType?:
		| 'FlightAirportTax'
		| 'FlightAirTrafficTax'
		| 'FlightTotalTaxes';
}

/** Technical fields used to define an offer */
export interface IntegrationArg {
	key: string;
	value: string;
}

/** Response for a list of offers for one or more transport connections */
export interface TransportOfferResponse {
	/** If present, the currently selected offer */
	currentSelection?: TransportOffer;
	/** List of transport offers */
	offers: TransportOffer[];
	/** Warnings or errors encountered during the offers search */
	notifications: Notification[];
}

export interface TransportUpdateSegmentBaggage {
	/** Type of baggage */
	baggageType: 'Hold' | 'Hand' | 'PersonalItem';
	/** true if the baggage should be included in the transport connection. */
	included: boolean;
	/** @format int32 */
	count?: number;
	/** a container object for representing a monetary value in the system */
	price?: MonetaryAmount;
}

/** Distribution of bags for all the pax included in a transport connection. */
export interface TransportUpdateSegmentPaxBaggage {
	/** Unique ID of a pax */
	paxRefId: string;
	/** Description of a baggage */
	baggage?: TransportUpdateSegmentBaggage[];
}

/** Update of a transport segment */
export interface TransportUpdateSegment {
	/** Start location of the segment */
	startLocation: TransportLocation;
	/** End location of the segment */
	endLocation: TransportLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	startDateTime: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	endDateTime: string;
	/** Type of transportation of the segment. */
	transportType: 'Bus' | 'Flight' | 'Train';
	/** Name of the carrier of the segment */
	carrier: string;
	/** 2 letters code of the carrier of the segment */
	carrierCode: string;
	/** URL to the logo of the carrier of the segment */
	carrierLogo: string;
	/** Name of the operating carrier of the segment */
	operatingCarrier?: string;
	/** 2 letters code of the operating carrier of the segment */
	operatingCarrierCode?: string;
	/** URL to the logo of the operating carrier of the segment */
	operatingCarrierLogo?: string;
	/** Identifier of the transport (Flight number, bus number, ...) */
	transportNumber?: string;
	/** Identifier of the transport (Flight number, bus number, ...) defined by the operating carrier */
	operatingTransportNumber?: string;
	/** Equipement used during the segment (type of plane, type of bus, ...) */
	equipment?: string;
	/** Class of the segment */
	transportClass:
		| 'First'
		| 'Second'
		| 'Business'
		| 'Comfort'
		| 'Economy'
		| 'Premium'
		| 'PremiumEconomy';
	/** Unique ID of the segment */
	segmentId: string;
	/** Description of the baggage offers for each pax */
	baggagePerPax: TransportUpdateSegmentPaxBaggage[];
	/** The bookingClassCode attribute of transport segment. (eg "K") */
	bookingClassCode?: string;
}

/** Update of a transport connection */
export interface TransportConnectionUpdate {
	/** Supplier of the offer */
	componentSource?: string;
	/** The type of contract used to get the offer */
	componentSourceType?: 'Private' | 'Reseller';
	/** Total sales price (including sales margins) of the offer */
	salesPrice?: MonetaryAmount;
	/** Sales price per pax (including sales margins) of the offer */
	unitSalesPrice?: MonetaryAmount;
	/** Total net price (not including sales margins) of the offer */
	netPrice?: MonetaryAmount;
	/** Type of the connection */
	connectionType: 'Inbound' | 'Outbound' | 'MultiCity';
	/** For multicity transport connections, local ID of the connection */
	connectionLocalId?: string;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	startLocation: TransportLocation;
	/** Describes a location that can be used as a starting point or an ending point for transport connections. */
	endLocation: TransportLocation;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	startDateTime: string;
	/**
	 * A "date-time" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6
	 * @format date-time
	 */
	endDateTime: string;
	/** Unique ID of the connection offer */
	offerId: string;
	offerType: 'Combined' | 'Standalone';
	/** Segments composing the transport connection. */
	segments: TransportUpdateSegment[];
	/** Unique code defining the offer */
	bookingCode?: string;
	/** Technical fields used to define an offer. This should be returned as is to TripBuilder when selecting an offer. */
	integrationArgs?: IntegrationArg[];
}

/** Request to update a transport component */
export interface TransportOfferUpdateRequest {
	/** Supplier of the offer */
	componentSource: string;
	/** Unique code defining the offer */
	bookingCode: string;
	/** Deprecated - The actual offer provider (not WL, etc.) */
	vendor?: string;
	/** The actual offer provider (not WL, etc.) */
	supplier?: string;
	/** Total sales price (including sales margins) of the offer */
	salesPrice: MonetaryAmount;
	/** Sales price per pax (including sales margins) of the offer */
	unitSalesPrice: MonetaryAmount;
	/** Total net price (not including sales margins) of the offer */
	netPrice?: MonetaryAmount;
	/** Details of the connections contained in the offer */
	connections: TransportConnectionUpdate[];
	/** Cancellation policies attached to the offer */
	cancelPolicies: TransportOfferCancelPolicy[];
	/** Insurance policies attached to the offer */
	insurances: TransportOfferInsurance[];
	/** Possible family fares attached to the offer */
	familyFares: TransportOfferFamilyFare[];
	/** Fare types attached to the offer */
	fareTypes?: string[];
	/** The type of contract used to get the offer */
	componentSourceType: 'Private' | 'Reseller';
	/** Whether the offer is a placeholder */
	isPlaceholder?: boolean;
	/**
	 * The ticketTimeLimit from the offers response as is.
	 * @format date-time
	 */
	ticketTimeLimit?: string;
	/** List of surcharges and types incurred for this offer */
	surcharges?: SurchargeOrTax[];
	/** Technical fields used to define an offer. This should be returned as is to TripBuilder when selecting an offer. */
	integrationArgs?: IntegrationArg[];
}

/** Container of a list of transport locations */
export interface TransportLocationsResponse {
	/** Locations matching the keywords sent in the request */
	locations: TransportLocation[];
}

/** Baggage update request for a specific segment of a transport connection. */
export interface TransportSegmentBagsUpdateRequest {
	/** Nezasa local ID of the segment included in the transport connection being updated. */
	segmentId: string;
	/** Definition of the bags included for all the pax of the transport segment. */
	baggagePerPax: TransportUpdateSegmentPaxBaggage[];
}

/** Baggage update request for a specific transport connection. */
export interface TransportConnectionBagsUpdateRequest {
	/** Type of the transport connection */
	connectionType: 'Inbound' | 'Outbound' | 'MultiCity';
	/** Nezasa local ID of the transport connection to update. This can be found in the Itinerary View. */
	connectionLocalId: string;
	/** Definition of the bags included for all the segments and all the pax of the transport connection. */
	segments: TransportSegmentBagsUpdateRequest[];
}

export interface TransportBagsUpdateRequest {
	/** Array of connections to update. Each element defines a connection and the bags included for all pax and segments of this connection. */
	updates: TransportConnectionBagsUpdateRequest[];
}

export interface TransportGeneralRulesResponse {
	/** Plain text information from provider. (eg fare rules from SoftConEx) */
	rules: string;
}

/** @example {"pnrLocator":"TN8GUU","reservationSystem":"CRS_AMADEUS","netPrice":{"amount":"1022.91","currency":"EUR"},"salesPrice":{"amount":"1200.30","currency":"EUR"},"supplierName":"Nezasa","aerAgencyNumber":"118612","paxSelection":["pax-1","pax-2"]} */
export interface TransportPullPnrRequest {
	/**
	 * Also called the file key, it uniquely identifies the PNR in a specific
	 * reservation system
	 */
	pnrLocator: string;
	reservationSystem?:
		| 'CRS_AF_KLM'
		| 'CRS_AMADEUS'
		| 'CRS_BA'
		| 'CRS_CONDOR'
		| 'CRS_EASYJET'
		| 'CRS_EDW'
		| 'CRS_EMIRATES_NDC'
		| 'CRS_EUROWINGS'
		| 'CRS_FARELOGIX'
		| 'CRS_GALILEO'
		| 'CRS_IB'
		| 'CRS_KIWI'
		| 'CRS_LHGROUP'
		| 'CRS_SABRE'
		| 'CRS_TRAVELFUSION'
		| 'CRS_TK'
		| 'CRS_VUELING'
		| 'CRS_XQ_NDC'
		| 'CRS_YPSILON';
	/** The last name of one of the pax. Can be used together with the pnrLocator to identify a booking */
	lastName?: string;
	/**
	 * The net price to use for the imported transport component. This value
	 * will override the value sent by the backend system
	 */
	netPrice?: MonetaryAmount;
	/**
	 * The sales price to use for the imported transport component. This value
	 * will override the value sent by the backend system
	 */
	salesPrice?: MonetaryAmount;
	/** Extra taxes added to the price */
	surcharge?: MonetaryAmount;
	/** The supplier that organizes and takes over the responsibility of a component */
	supplierName?: string;
	/** The contact refId of the supplier that organizes and takes over the responsibility of a component */
	contactRefId?: string;
	/**
	 * The AER specific agency number which should be used to login into Aerticket
	 * and perform the Pull-PNR call. Note that if this value is present it will override
	 * any value defined on the travel agency's external reference.
	 *
	 * Note that this value is only allowed to be defined by Nezasa user and will be
	 * silently discarded if the authenticated user does not possess the Nezasa role.
	 */
	aerAgencyNumber?: string;
	/**
	 * The list of PAX IDs on the itinerary to associate paxes from this PNR to itinerary (eg. pax-1, pax-2, pax-3).
	 * If present, pnrPaxSelection must be present as well and both must have the same number of entries.
	 * The n-th entry of this list will be associated with the n-th entry of pnrPaxSelection.
	 */
	paxSelection?: string[];
	/**
	 * The list of PAX indices on the PNR to associate paxes from this PNR to itinerary (eg. 2, 1, 3)
	 * If present, paxSelection must be present as well and both must have the same number of entries.
	 * The n-th entry of this list will be associated with the n-th entry of paxSelection.
	 */
	pnrPaxSelection?: number[];
}

export interface TransportClassUpgradeOffersRequest {
	transportClass:
		| 'First'
		| 'Business'
		| 'Economy'
		| 'Premium'
		| 'PremiumEconomy';
	/**
	 * The list of transport offers to update to use for updating the itinerary.
	 * Each offer will correspond to a different set of transport components since
	 * we can have multiple flights attached to the itinerary.
	 */
	offers: TransportOfferUpdateRequest[];
}

export interface TransportClassUpgradeOffersResponse {
	upgradeOffers: TransportClassUpgradeOffers[];
}

export interface TransportClassUpgradeOffers {
	transportClass:
		| 'First'
		| 'Business'
		| 'Economy'
		| 'Premium'
		| 'PremiumEconomy';
	/** Localized name of the class of the segment */
	transportClassText: string;
	/**
	 * The list of transport offers corresponding to the defined transport class.
	 * Each offer will correspond to a different set of transport components since
	 * we can have multiple flights attached to the itinerary.
	 */
	offers: TransportOffer[];
	/**
	 * If true, this set of upgrade offers refer to the currently set of transport
	 * components found on the itinerary
	 */
	isSelected: boolean;
	/**
	 * The total sales price difference w.r.t. the selected set of transports. For example,
	 * if this set of upgrade offers refers to the selected set of transports, then the
	 * difference is 0.
	 */
	salesPriceDifference: MonetaryAmount;
	/**
	 * The total sales price difference per pax w.r.t. the selected set of transports. For example,
	 * if this set of upgrade offers refers to the selected set of transports, then the
	 * difference is 0.
	 */
	salesPriceDifferencePerPax: MonetaryAmount;
	/**
	 * The signed `salesPriceDifference` value as text. For example, if the difference is minus USD 200
	 * this has `USD -200.00`.
	 */
	salesPriceDifferenceText: string;
	/**
	 * The signed `salesPriceDifferencePerPax` value as text. For example, if the difference is minus USD 200
	 * this has `USD -200.00`.
	 */
	salesPriceDifferencePerPaxText: string;
}

export interface RemarksWrapper {
	/** Remarks text (markdown syntax supported) */
	remarks?: string;
}

export interface UpgradeReferences {
	/**
	 * If true, only template references are updated, products stay the same.
	 * Defaults to false if not sent.
	 */
	templatesOnly?: boolean;
}

export interface RecreateComponents {
	/** Recreates the accommodation components according to the passed service level. */
	serviceLevel: string;
}

export interface ItineraryManagedServiceLevelsResponse {
	serviceLevels: ManagedServiceLevelWithPrice[];
}

export interface ManagedServiceLevelWithPrice {
	serviceLevel: ManagedServiceLevel;
	priceInfo: PriceInfo;
	isSelected: boolean;
}

export interface ManagedServiceLevel {
	refId: string;
	name: string;
	level?: 'Level1' | 'Level2' | 'Level3' | 'Level4' | 'Level5';
}

export interface UpsellItemTravelDocsOffers {
	offers: UpsellItemTravelDocsOffer[];
}

export interface UpsellItemTravelDocsOffer {
	/** Upsell Item offer product name */
	productName: string;
	/** Description of upsell product */
	description?: string;
	/** Upsell Item offer product reference Id */
	productRefId: string;
	/** Upsell Item offer product service categories */
	serviceCategories: UpsellItemServiceCategoryTravelDocsOffer[];
}

export interface UpsellItemServiceCategoryTravelDocsOffer {
	/** Upsell Item product offer service category name */
	name: string;
	/** Upsell Item product offer service category reference Id */
	refId: string;
	/** The net price set for the ad-hoc generic component */
	price?: MonetaryAmount;
	/** Whether or not to display this offer in travel documentation */
	displayInTravelDocs?: boolean;
}

export interface ItineraryAvailabilities {
	useStartDateRange: boolean;
	availabilities: ItineraryAvailability[];
}

export interface ItineraryAvailability {
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	startDate: string;
	/** A "full-date" as defined by https://datatracker.ietf.org/doc/html/rfc3339#section-5.6 */
	endDate: string;
}
