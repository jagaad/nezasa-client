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

/** Information about a country (name, country code, etc.) */
export interface SupplierContactCountry {
	/** the 2-letter ISO code of the country */
	isoCode: string;
	/** the default name of the country. This information is returned for convenience of a frontend application  only in case a country name needs to be shown in the UI. For the reference in the data model the `isoCode` is sufficient. The Update or Create only requires the `isoCode`, name field is not needed. */
	name?: string;
	/** the localized name in different locales. This information is returned for convenience of a frontend application only in case a country name needs to be shown in the UI. For the reference in the data model the `isoCode` is sufficient. The Update or Create only requires the `isoCode`, name field is not needed. */
	localizedName?: string;
}

/** Information about a country */
export interface SupplierContactCountryRequest {
	/** the 2-letter ISO code of the country */
	isoCode: string;
}

/** To create a new supplier contact */
export interface SupplierContactCreateRequest {
	/** Name of the supplier contact */
	name: string;
	/** Address line 1 of the supplier contact */
	address1?: string;
	/** Address line 2 of the supplier contact */
	address2?: string;
	/** City in which the supplier contact is located */
	city?: string;
	/** Zip code of the city in which the supplier contact is located */
	zip?: string;
	/** Information about a country */
	country: SupplierContactCountryRequest;
	/** The phone number including international prefix of the supplier contact. */
	phone?: string;
	/** The email address of the supplier contact used for B2B operations. Automated mail notifications sent by the system are sent to this address. */
	email: string;
	/** Whether to suppress automated mail notifications that shall be sent to the email address configured in the attribute `email`. */
	doNotNotify?: boolean;
	/** The phone number used for traveller support including international prefix of the supplier contact. */
	supportPhone?: string;
	/** The email address used for traveller support. */
	supportEmail?: string;
	/** Free, internal text comment about the supplier */
	comment?: string;
	/** External references of a supplier contact in 3rd party systems. This can be used by automated import or syncs with external system. The importer can provide the ID of the supplier contact in the external system and use this for later reference. */
	externalReferences?: ExternalReference[];
	/** Used to inactivate a contact. */
	archived?: boolean;
}

/** The supplier contact details */
export interface SupplierContactResponse {
	/** The unique id of the supplier contact */
	refId: string;
	/** Deprecated attribute Type of the contact. Do no longer use this attribute. Only supported for backward compatibility reasons. */
	contactType?: string;
	/** Name of the supplier contact */
	name: string;
	/** Address line 1 of the supplier contact */
	address1?: string;
	/** Address line 2 of the supplier contact */
	address2?: string;
	/** City in which the supplier contact is located */
	city?: string;
	/** Zip code of the city in which the supplier contacted is located */
	zip?: string;
	/** Information about a country (name, country code, etc.) */
	country: SupplierContactCountry;
	/** The phone number including international prefix of the supplier contact. */
	phone?: string;
	/** The email address of the supplier contact used for B2B operations. Automated mail notifications sent by the system are sent to this address. */
	email: string;
	/** Whether to suppress automated mail notifications that shall be sent to the email address configured in the attribute `email`. */
	doNotNotify?: boolean;
	/** The phone number used for traveller support including international prefix of the supplier contact. */
	supportPhone?: string;
	/** The email address used for traveller support. */
	supportEmail?: string;
	/** Free, internal text comment about the supplier */
	comment?: string;
	/** External references of a supplier contact in 3rd party systems. This can be used by automated import or syncs with external system. The importer can provide the ID of the supplier contact in the external system and use this for later reference. */
	externalReferences?: ExternalReference[];
}

/** To update an existing supplier contact */
export interface SupplierContactUpdateRequest {
	/** Name of the supplier contact */
	name: string;
	/** Address line 1 of the supplier contact */
	address1?: string;
	/** Address line 2 of the supplier contact */
	address2?: string;
	/** City in which the supplier contact is located */
	city?: string;
	/** Zip code of the city in which the supplier contact is located */
	zip?: string;
	/** Information about a country */
	country: SupplierContactCountryRequest;
	/** The phone number including international prefix of the supplier contact. */
	phone?: string;
	/** The email address of the supplier contact used for B2B operations. Automated mail notifications sent by the system are sent to this address. */
	email: string;
	/** Whether to suppress automated mail notifications that shall be sent to the email address configured in the attribute `email`. */
	doNotNotify?: boolean;
	/** The phone number used for traveller support including international prefix of the supplier contact. */
	supportPhone?: string;
	/** The email address used for traveller support. */
	supportEmail?: string;
	/** Free, internal text comment about the supplier contact. */
	comment?: string;
	/** External references of a supplier contact in 3rd party systems. This can be used by automated import or syncs with external system. The importer can provide the ID of the supplier contact in the external system and use this for later reference. */
	externalReferences?: ExternalReference[];
	/** Used to inactivate a contact. */
	archived?: boolean;
}
