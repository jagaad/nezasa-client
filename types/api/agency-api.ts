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

export interface AgencyBranch {
	/** an unique identifier for the TA branch. If omitted it will be generated */
	refId?: string;
	/** the external references of the TA branch */
	externalReferences?: ExternalReference[];
	/** the location of the TA branch */
	location?: Location;
	/** if this in the main branch of the TA */
	mainBranch?: boolean;
	/** the postal address of TA branch */
	postalAddress?: PostalAddress;
	/** the email of the TA branch */
	email: string;
	/** the phone of the TA branch */
	phone?: string;
	/** the skypeId of the TA branch */
	skypeId?: string;
	/** the main contact person of the TA branch */
	contactPerson?: string;
}

/** To create a new travel agency */
export interface AgencyCreateRequest {
	/** the refId of the TA. Ony admin users can specify the refId, otherwise it will be generated based on the shortName */
	refId?: string;
	/** the distribution channel this agency belongs to. If not provided, the current DC will be assumed. */
	distributionChannelRefId?: string;
	/** the group/cooperative of the TA */
	cooperativeId?: string;
	/** the shortname of the TA */
	shortName: string;
	/** the legal name of the TA */
	legalName: string;
	/** the external references of the TA */
	externalReferences?: ExternalReference[];
	/** the email of the TA */
	adminEmail: string;
	/** the default communication language of the TA */
	defaultCommunicationLanguage?: string;
	/** the slogan of the TA */
	slogan?: Record<string, string>;
	/** the IATA number of the TA */
	iataNumber?: string;
	/** the default currency */
	currency: string;
	/** the branches of the TA. It is recommended that at least one branch is specified */
	branches?: AgencyBranch[];
	/** if the TA represents a referrer (and not an actual travel agency */
	isReferrerOnly?: boolean;
	tags?: Record<string, string>;
	/** the payment checkout config for bookings by this agency */
	paymentConfig?: PaymentConfig;
}

/** The travel agency details */
export interface AgencyResponse {
	/** the refId of the TA */
	refId: string;
	/** the refId of distribution channel (DC) owning the TA */
	distributionChannelRefId: string;
	/** the group/cooperative of the TA */
	cooperativeId?: string;
	/** the shortname of the TA */
	shortName: string;
	/** the legal name of the TA */
	legalName: string;
	/** the external references of the TA */
	externalReferences?: ExternalReference[];
	/** the email of the TA */
	adminEmail: string;
	/** the default communication language of the TA */
	defaultCommunicationLanguage?: string;
	/** the slogan of the TA */
	slogan?: Record<string, string>;
	/** the IATA number of the TA */
	iataNumber?: string;
	/** the default currency */
	currency: string;
	/** the branches of the TA. It is recommended that at least one branch is specified */
	branches?: AgencyBranch[];
	/** if the TA represents a referrer (and not an actual travel agency */
	isReferrerOnly?: boolean;
	tags?: Record<string, string>;
	/** the payment checkout config for bookings by this agency */
	paymentConfig?: PaymentConfig;
}

/** To update a travel agency */
export interface AgencyUpdateRequest {
	/** the group/cooperative of the TA */
	cooperativeId?: string;
	/** the shortname of the TA */
	shortName: string;
	/** the legal name of the TA */
	legalName: string;
	/** the external references of the TA */
	externalReferences?: ExternalReference[];
	/** the email of the TA */
	adminEmail: string;
	/** the default communication language of the TA */
	defaultCommunicationLanguage?: string;
	/** the slogan of the TA */
	slogan?: Record<string, string>;
	/** the IATA number of the TA */
	iataNumber?: string;
	/** the default currency */
	currency: string;
	/** the branches of the TA. It is recommended that at least one branch is specified */
	branches?: AgencyBranch[];
	/** if the TA represents a referrer (and not an actual travel agency */
	isReferrerOnly?: boolean;
	tags?: Record<string, string>;
	/** the payment checkout config for bookings by this agency */
	paymentConfig?: PaymentConfig;
}

/** Defines if the agency is relying on the default setting for down payments from the distribution channel, or overwrites it either by disabling or enabling it. */
export enum DownPaymentEnabled {
	Default = 'Default',
	Enabled = 'Enabled',
	Disabled = 'Disabled',
}

/** The external reference maps the an entity in TripBuilder with an entity in an external system. */
export interface ExternalReference {
	/** The identifier of the owning entity in the external system */
	externalRefId: string;
	/** The external system. Used to identify the external system. Supported values are: - Midoco (for suppliers mapped to Midoco) - SoftConEx (for agencies mapped to SoftConEx) - TourOperatorProductCode (for suppliers mapped to 3rd party tour operator systems) */
	externalSystemId: string;
}

/** The severity of the problem */
export enum Level {
	ERROR = 'ERROR',
	WARNING = 'WARNING',
	INFO = 'INFO',
}

/** the location of the TA branch */
export interface Location {
	/**
	 * @maxItems 2
	 * @minItems 2
	 */
	coordinate: number[];
	timeZoneId: string;
}

export enum PaymentCategory {
	Invoice = 'Invoice',
	OnlinePayment = 'OnlinePayment',
}

/** the payment checkout config for bookings by this agency */
export interface PaymentConfig {
	/** Defines if the agency is relying on the default setting for down payments from the distribution channel, or overwrites it either by disabling or enabling it. */
	downPayment: DownPaymentEnabled;
	/**
	 * Defines the down payment percentage of the agency if for this agency the overwrite has been enabled.
	 * @format int32
	 */
	downPaymentPercentage?: number;
	/**
	 * Defines the down payment threshold in days before the departure date of the agency if for this agency the overwrite has been enabled.
	 * @format int32
	 */
	downPaymentThresholdInDays?: number;
	/** Overwrite the enabled payment categories in the IBE checkout for itineraries assigned to this agency.An empty list means that there is no agency-specific overwrite. If both, multiple payment categories are defined, then the first one will be considered the default one and will be pre-selected on the checkout page. */
	paymentCategoriesIBE?: PaymentCategory[];
	/** Overwrite the enabled payment categories in the checkout of the b2b portal for itineraries assigned to this agency.An empty list means that there is no agency-specific overwrite. If both, multiple payment categories are defined, then the first one will be considered the default one and will be pre-selected on the checkout page. */
	paymentCategoriesB2BPortal?: PaymentCategory[];
}

/** the postal address of TA branch */
export interface PostalAddress {
	country?: string;
	countryCode?: string;
	city?: string;
	postalCode?: string;
	street1?: string;
	street2?: string;
	region?: string;
}

/** A Problem object inspired by https://tools.ietf.org/html/rfc7807 (Problem Details for HTTP APIs) */
export interface Problem {
	/** A specific code narrowing the type of Problem down */
	code: string;
	/** A human readable explanation (localized to the language of the user) of this problem */
	detail: string;
	/** The severity of the problem */
	level: Level;
	/** An object containing references to the source of the error */
	source?: ProblemSource;
}

/** An array of Problem objects */
export interface ProblemResponse {
	/**
	 * The HTTP status code generated for this problem response
	 * @format int32
	 */
	status: number;
	problems?: Problem[];
}

/** An object containing references to the source of the error */
export interface ProblemSource {
	/** A reference to the associated entity in the request document which caused the problem */
	pointer: string;
}
