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

/** Represents a geographic location with coordinates and country information. Used for airports, cities, and other points of interest. */
export interface GeoLocation {
	name: string;
	coordinates: Coordinates;
	/**
	 * an ISO 3166-1 alpha-2 country code
	 * @format iso-3661-1
	 */
	countryCode?: string;
}

export interface Coordinates {
	/** @format double */
	lat: number;
	/** @format double */
	lon: number;
}

export interface MonetaryValue {
	/** The amount of money */
	amount: number;
	/** The currency of the amount, in ISO 4217 format */
	currency: string;
}

/**
 * Represents the current status of a booking:
 * - Open: Available for booking
 * - OnRequest: Available but requires manual confirmation
 * - Booked: Successfully booked
 * - NonBookable: Not available for booking
 * - Cancelled: Was booked but has been cancelled
 * - None: Status unknown or not applicable
 */
export enum BookingStatus {
	Open = 'Open',
	OnRequest = 'OnRequest',
	Booked = 'Booked',
	NonBookable = 'NonBookable',
	Cancelled = 'Cancelled',
	None = 'None',
}

export interface Address {
	country?: string;
	countryCode?: string;
	city?: string;
	postalCode?: string;
	street1?: string;
	street2?: string | null;
	region?: string | null;
}

/** Contains personal contact information including name, address, and communication details. Used for both travelers and billing contacts. */
export interface ContactInfo {
	firstName?: string;
	lastName?: string;
	companyName?: string;
	gender?: 'Male' | 'Female';
	address?: Address;
	email?: string;
	mobilePhone?: string;
	taxNumber?: string | null;
}

/** Detailed passenger information including personal details, travel documents, and contact information. Each passenger must have a unique refId. */
export interface PaxInfo {
	/** A unique ID for the passenger in the format ('pax-<number>') and it should be sequential. */
	refId?: string;
	firstName?: string;
	lastName?: string;
	gender?: 'Male' | 'Female';
	age?: number;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	birthDate?: string;
	nationality?: string;
	nationalityCountryCode?: string;
	passportNr?: string;
	secondOrAdditionalName?: string | null;
	isMainContact?: boolean;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	passportExpirationDate?: string;
	passportIssuingCountry?: string;
	passportIssuingCountryCode?: string;
	address?: Address;
	externalRefId?: string | null;
}

export interface UpsellItemOffer {
	offerId: string;
	name: string;
	description: string;
	serviceCategories: ServiceCategoryOffer[];
}

export interface ServiceCategoryOffer {
	serviceCategoryRefId: string;
	name: string;
	salesPrice: MonetaryValue;
}

export interface UpsellItemOfferSelection {
	offerId: string;
	/** The service category ref ID to add the upsell item or null to remove it */
	serviceCategoryRefId?: string | null;
	/**
	 * The quantity of the upsell item to add or remove
	 * @min 1
	 * @max 99
	 */
	quantity?: number;
}

/**
 * Represents an additional service or product that can be added to the booking.
 * Includes pricing information, supplier details, and booking status.
 */
export interface UpsellItem {
	/** The component unique identifier */
	componentRefId: string;
	/** The name of the Upsell Item */
	name: string;
	/** A description for any additional information about the item */
	description?: string;
	netPrice: MonetaryValue;
	salesPrice: MonetaryValue;
	/** The supplier of the upsell item */
	supplier?: string;
	/**
	 * Represents the current status of a booking:
	 * - Open: Available for booking
	 * - OnRequest: Available but requires manual confirmation
	 * - Booked: Successfully booked
	 * - NonBookable: Not available for booking
	 * - Cancelled: Was booked but has been cancelled
	 * - None: Status unknown or not applicable
	 */
	status: BookingStatus;
	/** The supplier confirmation number if component status is booked. */
	supplierConfirmationNumber?: string;
	externalReferences?: ExternalReference[];
}

/**
 * This view object is a representation of our Itinerary model. It provides callers with
 * the structure as well as pertinent information pertaining to their entire trip.
 */
export interface Itinerary {
	/** The ID of the itinerary */
	id: string;
	title: string;
	/** The external customer ID, in any. */
	externalCustomerId?: string;
	lastModified: string;
	/**
	 * If present it is the ID of the itinerary-template from which this itinerary was generated. Not
	 * all itineraries have a static itinerary-template backing them. Itineraries-from-Scratch, for example,
	 * have a dynamically generated itinerary-template and as such, do not contain a `templateId`
	 */
	templateId?: string;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	startDate: string;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	endDate: string;
	modules: Module[];
	availabilities: ItineraryAvailabilities;
}

export interface Module {
	/** A unique ID (only within the owning Itinerary) which identifies this module */
	id: string;
	/** Represents a geographic location with coordinates and country information. Used for airports, cities, and other points of interest. */
	startLocation: GeoLocation;
	/** Represents a geographic location with coordinates and country information. Used for airports, cities, and other points of interest. */
	endLocation: GeoLocation;
	legs?: Leg[];
}

/**
 * Represents a segment of the journey between two locations. A leg consists of:
 * 1. A series of connections (transport between locations)
 * 2. A stop (stay at a location)
 * 3. Optional activities at the stop location
 *
 * The leg connects the previous stop to the current one through various transportation options.
 */
export interface Leg {
	id: string;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	startDate: string;
	/**
	 * Represents a stay at a specific location during the journey. Includes:
	 * - Location details (city, area, or point of interest)
	 * - Duration of stay (number of nights)
	 * - Accommodation details
	 * - Flexible duration options (minimum and maximum nights)
	 */
	stop: Stop;
}

/**
 * Represents a stay at a specific location during the journey. Includes:
 * - Location details (city, area, or point of interest)
 * - Duration of stay (number of nights)
 * - Accommodation details
 * - Flexible duration options (minimum and maximum nights)
 */
export interface Stop {
	/** A specialized type of location which serves as the location for a Stop */
	stopLocation: StopLocation;
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
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	startDate: string;
}

/** A specialized type of location which serves as the location for a Stop */
export interface StopLocation {
	id: string;
	name: string;
	countryCode?: string;
	coordinates: Coordinates;
	locationType: 'Area' | 'Airport';
}

/** A view over the AreaDescription model which describes an area (textual descriptions and pictures). */
export interface AreaDescription {
	/** A unique ID which identifies the area description */
	id: string;
	/** A key sentence describing the area description */
	keySentence: string;
	/** Short description of the area */
	shortDescription?: string;
}

export interface ItineraryAvailabilities {
	useStartDateRange: boolean;
	availabilities: ItineraryAvailability[];
}

export interface ItineraryAvailability {
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	startDate: string;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	endDate: string;
}

export interface ExternalReference {
	id: string;
	system: string;
}

export interface TravelAgencyDetails {
	/** The id that can be used to identify this travel agency in our system */
	refId: string;
}

export interface OptIns {
	/** The contact information for the user */
	contactInfo?: {
		/** The user email to opt-in to marketing communications */
		email?: string;
	};
	optIns: OptInChannel[];
}

export interface OptInChannel {
	type: 'Newsletter';
	consent: boolean;
	channel: string;
}

export interface TermsAndConditions {
	sections: TextSection[];
}

export interface TextSection {
	header: string;
	/** @format html */
	text: string;
	/** @format html */
	checkboxText?: string;
	/** If defined, this section is specific to the supplier with the given ID. */
	supplierId?: string;
}

export interface PaymentTransaction {
	/** The transaction ID */
	transactionId: string;
	/** The external reference ID */
	externalRefId?: string;
	amount: MonetaryValue;
	status:
		| 'Open'
		| 'InProgress'
		| 'PreauthCaptureInProgress'
		| 'Pending'
		| 'Preauth'
		| 'Closed'
		| 'Failed'
		| 'Deleted'
		| 'Unknown';
	paymentMethod:
		| 'CreditCard'
		| 'DirectDebit'
		| 'BankTransfer'
		| 'Future'
		| 'Unknown'
		| 'Other';
	/** Defined if the payment method name is of type "Other" */
	paymentMethodName?: string;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * @example "2017-12-31"
	 */
	created: string;
}

export interface CheckoutDetails {
	/** The checkout Ref ID */
	refId: string;
	/** The checkout Status */
	checkoutState: string;
	/** The external booking ID, if any */
	externalBookingId?: string;
	termsAndConditions: TermsAndConditions;
	/**
	 * This view object is a representation of our Itinerary model. It provides callers with
	 * the structure as well as pertinent information pertaining to their entire trip.
	 */
	itinerary: Itinerary;
	/** Traveler details */
	travelerDetails: TravelerDetails;
	/**
	 * Represents the pricing info for the current checkout:
	 * - packagePrice - the original total price of the package before any discounts are applied.
	 * - previousPackagePrice - the previous price of the package before any discounts are applied, only set during booking changes.
	 * - totalPackagePrice - the original price of the package before any discounts are applied and including any externally paid charges.
	 * - discountedPackagePrice - the total sales price of the package after applying any discounts.
	 * - downPayment - the configured down payment amount required to secure the booking.
	 * - openAmount - the remaining balance that needs to be paid after accounting for any down payments.
	 * - externallyPaidCharges - charges that must be paid externally, such as at the destination.
	 * - promoCode - the details of the applied promo code.
	 * - promoCodeDiscount - the discount amount due to the applied promo code.
	 */
	prices: PackagePayableInfo;
	insurances: InsuranceAdHocComponentResponse[];
	paymentTransactions: PaymentTransaction[];
	upsellItems: UpsellItem[];
	optIns: OptIns;
	travelAgency: TravelAgencyDetails;
}

export interface CreateCheckoutRequest {
	/** The id of travel agency doing the checkout */
	agencyId?: string;
}

export interface CreateCheckoutResponse {
	/** The URL to redirect to */
	redirectUrl: string;
}

export interface InsuranceAdHocComponentUpsertRequest {
	/** The name of the insurance */
	name: string;
	/** A description for any additional information about the insurance */
	description?: string;
	netPrice: MonetaryValue;
	salesPrice: MonetaryValue;
	/**
	 * Represents the current status of a booking:
	 * - Open: Available for booking
	 * - OnRequest: Available but requires manual confirmation
	 * - Booked: Successfully booked
	 * - NonBookable: Not available for booking
	 * - Cancelled: Was booked but has been cancelled
	 * - None: Status unknown or not applicable
	 */
	bookingStatus?: BookingStatus;
	/** The confirmation number on the supplier */
	supplierConfirmationNumber?: string;
	externalReferences?: ExternalReference[];
	/** The pax selection for the insurance */
	paxSelection?: string[];
}

export interface InsuranceAdHocComponentResponse {
	/** The component unique identifier */
	componentId: string;
	/** The name of the insurance */
	name: string;
	/** A description for any additional information about the insurance */
	description?: string;
	netPrice: MonetaryValue;
	salesPrice: MonetaryValue;
	/**
	 * Represents the current status of a booking:
	 * - Open: Available for booking
	 * - OnRequest: Available but requires manual confirmation
	 * - Booked: Successfully booked
	 * - NonBookable: Not available for booking
	 * - Cancelled: Was booked but has been cancelled
	 * - None: Status unknown or not applicable
	 */
	bookingStatus?: BookingStatus;
	/** The confirmation number on the supplier */
	supplierConfirmationNumber?: string;
	externalReferences?: ExternalReference[];
	/** The pax selection for the insurance */
	paxSelection?: string[];
}

export interface UpsellItemRequest {
	/** The name of the Upsell Item */
	name: string;
	/** A description for any additional information about the item */
	description?: string;
	netPrice: MonetaryValue;
	salesPrice: MonetaryValue;
	/**
	 * Represents the current status of a booking:
	 * - Open: Available for booking
	 * - OnRequest: Available but requires manual confirmation
	 * - Booked: Successfully booked
	 * - NonBookable: Not available for booking
	 * - Cancelled: Was booked but has been cancelled
	 * - None: Status unknown or not applicable
	 */
	status?: BookingStatus;
	/** The external reference ID of the Upsell Item */
	supplierConfirmationNumber?: string;
	externalReferences?: ExternalReference[];
}

export type UpsellItemCreateRequest = UpsellItemRequest & {
	/** The quantity of the Upsell Items to create */
	quantity: number;
};

export interface UpsellItemOffersResponse {
	offers: UpsellItemOffer[];
}

export interface UpsellItemOfferSelectionRequest {
	selection: UpsellItemOfferSelection[];
}

/**
 * The object containing various aspects of the itinerary recheck, such
 * as rechecked components and general recheck remarks.
 */
export interface AvailabilitySummary {
	/**
	 * The result per component of the recheck, containing base information about
	 * each component and the result of the recheck (e.g., not available anymore).
	 */
	components: AvailabilityComponent[];
	/** Indicates whether the itinerary has non-bookable components or is outside the booking window. */
	nonBookable: boolean;
	/**
	 * The end of the booking window for the itinerary. This is the latest date
	 * the itinerary can be booked.
	 * @format date
	 * @example "2017-12-31"
	 */
	bookingWindowEnd: string;
	/**
	 * Represents the pricing info for the current checkout:
	 * - packagePrice - the original total price of the package before any discounts are applied.
	 * - previousPackagePrice - the previous price of the package before any discounts are applied, only set during booking changes.
	 * - totalPackagePrice - the original price of the package before any discounts are applied and including any externally paid charges.
	 * - discountedPackagePrice - the total sales price of the package after applying any discounts.
	 * - downPayment - the configured down payment amount required to secure the booking.
	 * - openAmount - the remaining balance that needs to be paid after accounting for any down payments.
	 * - externallyPaidCharges - charges that must be paid externally, such as at the destination.
	 * - promoCode - the details of the applied promo code.
	 * - promoCodeDiscount - the discount amount due to the applied promo code.
	 */
	prices: PackagePayableInfo;
	/**
	 * A list of general findings by the recheck. The information may contain hints such as
	 * pointing out that a stop has no hotel yet.
	 */
	remarks: string[];
}

/**
 * The object contains the relevant information about a component after the
 * rechecked has been performed. Note that the components have been updated
 * as well accordingly in the itinerary itself.
 */
export interface AvailabilityComponent {
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
	 * * PaxSelectionConflict: the flight component has a pax selection that conflicts with another flight
	 * * Cancelled: the component has been cancelled
	 * * NonFittingToItinerary: the component is no longer aligned to the current itinerary structure
	 * * NonFittingLocations: the component's start and/or end locations are not aligned with the itinerary locations immediately before and/or after. This is only only flagged as a warning, and may not be actual an issue for the booking.
	 * * UnscheduledComponentNoLocationFound: indicates that the component cannot currently be scheduled due to an incorrect itinerary structure.
	 * * NonFittingButAccepted: indicates that this component doesn't fit but has been marked by the user as accepted for booking nevertheless.
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
		| 'UnscheduledComponentNoLocationFound'
		| 'Unknown';
	price: MonetaryValue;
	previousPrice?: MonetaryValue;
	/** A localized name representing the component, e.g., the hotel or activity name. */
	name?: string;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * representing the start date of component if applicable, e.g., hotel check-in date.
	 * @example "2017-12-31"
	 */
	startDate?: string;
	/**
	 * A "full-date" as defined by https://www.rfc-editor.org/rfc/rfc3339#section-5.6 using the format 2017-12-31
	 * representing the end date of component if applicable, e.g., hotel check-out date.
	 * @example "2017-12-31"
	 */
	endDate?: string;
	/** A reference to the location of the component, usually the city name. */
	locationName?: string;
	/**
	 * A URL to the availability check endpoint for this component. This URL can be used to
	 * redirect the user to the products search page to search for alternative products,
	 * useful if a component is nonBookable. Add a `goto` query param to this url so if a
	 * redirect back is needed.
	 */
	alternativesSearchUrl?: string;
}

export interface AvailabilityCheckResponse {
	/**
	 * This view object is a representation of our Itinerary model. It provides callers with
	 * the structure as well as pertinent information pertaining to their entire trip.
	 */
	itinerary: Itinerary;
	/**
	 * The object containing various aspects of the itinerary recheck, such
	 * as rechecked components and general recheck remarks.
	 */
	summary: AvailabilitySummary;
}

export interface BookingResponse {
	/**
	 * This view object is a representation of our Itinerary model. It provides callers with
	 * the structure as well as pertinent information pertaining to their entire trip.
	 */
	itinerary: Itinerary;
	/**
	 * The object containing various aspects of the itinerary recheck, such
	 * as rechecked components and general recheck remarks.
	 */
	summary: AvailabilitySummary;
}

export interface StartBookingResponse {
	status: string;
}

/** Traveler details */
export interface TravelerDetails {
	/** Contains personal contact information including name, address, and communication details. Used for both travelers and billing contacts. */
	contactInfo?: ContactInfo;
	/** Information about each passenger */
	paxInfo: PaxInfo[];
	/** Contains personal contact information including name, address, and communication details. Used for both travelers and billing contacts. */
	billingInfo?: ContactInfo;
}

export interface RequiredTravelerFields {
	contact: {
		firstName?: RequiredTravelerFieldType;
		lastName?: RequiredTravelerFieldType;
		companyName?: RequiredTravelerFieldType;
		email?: RequiredTravelerFieldType;
		mobilePhone?: RequiredTravelerFieldType;
		address1?: RequiredTravelerFieldType;
		address2?: RequiredTravelerFieldType;
		postalCode?: RequiredTravelerFieldType;
		city?: RequiredTravelerFieldType;
		country?: RequiredTravelerFieldType;
		state?: RequiredTravelerFieldType;
		gender?: RequiredTravelerFieldType;
		taxNumber?: RequiredTravelerFieldType;
		localIdNumber?: RequiredTravelerFieldType;
	};
	billing: {
		firstName?: RequiredTravelerFieldType;
		lastName?: RequiredTravelerFieldType;
		email?: RequiredTravelerFieldType;
		address1?: RequiredTravelerFieldType;
		address2?: RequiredTravelerFieldType;
		postalCode?: RequiredTravelerFieldType;
		city?: RequiredTravelerFieldType;
		country?: RequiredTravelerFieldType;
		taxNumber?: RequiredTravelerFieldType;
		localIdNumber?: RequiredTravelerFieldType;
	};
	passenger: {
		firstName?: RequiredTravelerFieldType;
		lastName?: RequiredTravelerFieldType;
		secondOrAdditionalName?: RequiredTravelerFieldType;
		gender?: RequiredTravelerFieldType;
		passportNumber?: RequiredTravelerFieldType;
		nationality?: RequiredTravelerFieldType;
		dateOfBirth?: RequiredTravelerFieldType;
		passportExpirationDate?: RequiredTravelerFieldType;
		passportIssuingCountry?: RequiredTravelerFieldType;
	};
}

export enum RequiredTravelerFieldType {
	Required = 'required',
	Optional = 'optional',
	Hidden = 'hidden',
}

/**
 * Charges to be paid externally, meaning not on our platform. These are charges for
 * things that we want to show the price on our platform, however, when the user makes
 * the payment, we wouldn't charge for them. Instead, these charges are paid in the
 * destination.
 */
export interface ExternallyPaidCharge {
	name: string;
	value: MonetaryValue;
}

/**
 * Charges to be paid externally, meaning not on our platform. These are charges for
 * things that we want to show the price on our platform, however, when the user makes
 * the payment, we wouldn't charge for them. Instead, these charges are paid in the
 * destination.
 */
export interface ExternallyPaidCharges {
	externallyPaidCharges: ExternallyPaidCharge[];
	totalPrice: MonetaryValue;
	unitPrice: MonetaryValue;
}

/**
 * Represents the pricing info for the current checkout:
 * - packagePrice - the original total price of the package before any discounts are applied.
 * - previousPackagePrice - the previous price of the package before any discounts are applied, only set during booking changes.
 * - totalPackagePrice - the original price of the package before any discounts are applied and including any externally paid charges.
 * - discountedPackagePrice - the total sales price of the package after applying any discounts.
 * - downPayment - the configured down payment amount required to secure the booking.
 * - openAmount - the remaining balance that needs to be paid after accounting for any down payments.
 * - externallyPaidCharges - charges that must be paid externally, such as at the destination.
 * - promoCode - the details of the applied promo code.
 * - promoCodeDiscount - the discount amount due to the applied promo code.
 */
export interface PackagePayableInfo {
	packagePrice: MonetaryValue;
	previousPackagePrice?: MonetaryValue;
	totalPackagePrice: MonetaryValue;
	discountedPackagePrice: MonetaryValue;
	downPayment: MonetaryValue;
	openAmount: MonetaryValue;
	/**
	 * Charges to be paid externally, meaning not on our platform. These are charges for
	 * things that we want to show the price on our platform, however, when the user makes
	 * the payment, we wouldn't charge for them. Instead, these charges are paid in the
	 * destination.
	 */
	externallyPaidCharges: ExternallyPaidCharges;
	/**
	 * The promo code object with its details as defined in the booking management.
	 * Either valueAbs or valueRel is provided, never both.
	 */
	promoCode?: PromoCode;
	promoCodeDiscount?: MonetaryValue;
}

/**
 * The promo code object with its details as defined in the booking management.
 * Either valueAbs or valueRel is provided, never both.
 */
export interface PromoCode {
	/** The unique identifier for the promo code */
	code: string;
	/** Optional title or name for the promo code */
	title?: string | null;
	/** Text describing the conditions or terms of the promo code */
	conditionText: string;
	valueAbsolute?: MonetaryValue;
	/**
	 * The relative discount value as a decimal (e.g., 0.1 for 10%)
	 * @format double
	 */
	valueRelative?: number;
	valueAbsolutePricingUnit?: PromoCodePricingUnit;
}

/** @default "PerBooking" */
export enum PromoCodePricingUnit {
	PerPax = 'PerPax',
	PerBooking = 'PerBooking',
}

export interface PromoCodeRequest {
	/** The promo code to add or redeem */
	promoCode: string;
}

export interface ActivityQuestions {
	componentId: string;
	productName: string;
	questions: ActivityQuestion[];
}

/**
 * Represents a question that needs to be answered for an activity booking.
 * Questions can have different validation types (text, number, date) and may be required or optional.
 * Some questions may have predefined answer options.
 */
export interface ActivityQuestion {
	refId: string;
	question: string;
	required: boolean;
	answer?: string;
	placeholder?: string;
	answerOptions?: {
		refId: string;
		displayName: string;
	}[];
	answerValidation?:
		| 'int'
		| 'double'
		| 'boolean'
		| 'date'
		| 'dateAndTime'
		| 'phone';
}

export interface ActivityQuestionAnswer {
	componentId: string;
	questionRefId: string;
	answer: string;
}

export interface ExternalBookingId {
	/** The External Booking ID */
	externalBookingId: string;
}

export interface ExternalCustomerId {
	/** The External Customer ID */
	externalCustomerId: string;
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
