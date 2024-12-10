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

export interface CountryCallingCodesResponse {
	callingCodes: CountryCallingCode[];
	meta?: Meta;
}

export interface CountryCallingCode {
	/** The ISO 639-1 country code (e.g. "PT" for Portugal) */
	isoCode: string;
	/** The name of the country localized in the current language (e.g. Portugal) */
	name: string;
	/** Telephone number prefixes for reaching telephone subscribers in the country (e.g. 351 for Portugal) */
	callingCode: number;
}

export interface AreasResponse {
	areas: Area[];
	meta?: Meta;
}

export interface AirportsResponse {
	airports: Airport[];
	meta?: Meta;
}

export interface DistanceResponse {
	segments: DistanceResponseSegment[];
	meta?: Meta;
}

/** An array of Picture objects */
export interface PicturesResponse {
	pictures: Picture[];
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
	page?: Page;
}

export interface Page {
	/**
	 * Current page number
	 * @format int32
	 */
	number: number;
	/**
	 * Amount of items per page
	 * @format int32
	 */
	size: number;
	/** Answers if there are more pages */
	hasMore?: boolean;
}

export interface Notification {
	notificationType:
		| 'GeneralInfo'
		| 'GeneralError'
		| 'ServiceUnavailable'
		| 'NotAuthorized';
	/** Field containing the general warning / information to display to the user */
	message: string;
	/**
	 * A specific code identifying the notification
	 * @example "Deprecated"
	 */
	code?: string;
}

export type DistanceRequest = DistanceRequestSegment[];

/**
 * The unique 3-letter IATA code that is assigned to each airport
 * @example "JFK"
 */
export type IataCode = string;

/**
 * The local time zone in the TZ database format (e.g. Area/Location).
 * @example "Europe/Zurich"
 */
export type Timezone = string;

/**
 * an ISO 3166-1 alpha-2 country code
 * @format iso-3661-1
 * @example "CH"
 */
export type CountryCode = string;

export enum AirportType {
	International = 'International',
	Unknown = 'Unknown',
}

export enum TransportMode {
	Flight = 'Flight',
	Boat = 'Boat',
	Road = 'Road',
	Rail = 'Rail',
	Walk = 'Walk',
	Bicycle = 'Bicycle',
}

export enum LocationType {
	Airport = 'Airport',
	Area = 'Area',
}

/**
 * For areas or area descriptions which are managed by the tour operator, the supplier value is the tour
 * operator's refId. For Nezaza-owned areas and area descrptions, the supplier value is "Nezasa"
 * @example "Nezasa"
 */
export type AreaSupplier = string;

/** A view over the Area model which describes a set of coordinates contained within administrative borders. */
export interface Area {
	id: string;
	/** Localized area name */
	name: string;
	coordinates: Coordinates;
	/** A sequence of nearby airports defined by their three-letter codes. */
	airports: string[];
	/** The IATA defined metropolitan area code if there's any */
	metropolitanArea?: string;
	/**
	 * an ISO 3166-1 alpha-2 country code
	 * @format iso-3661-1
	 * @example "CH"
	 */
	countryCode: string;
	/** If known it is the localized name of the country */
	countryName?: string;
	/**
	 * The Area has a rating associated which shall be used as a weighting system to show the users of the system
	 * the touristically more relevant/important areas. The value range for the rating is `[0 - 5]`.
	 * @format double
	 */
	rating?: number;
	/** If known, the state where the area is located in. */
	state?: string;
	/** If known, the city where the area is located at. */
	city?: string;
	/**
	 * The local time zone in the TZ database format (e.g. Area/Location).
	 * @example "Europe/Zurich"
	 */
	timezone?: string;
	/**
	 * For areas or area descriptions which are managed by the tour operator, the supplier value is the tour
	 * operator's refId. For Nezaza-owned areas and area descrptions, the supplier value is "Nezasa"
	 * @example "Nezasa"
	 */
	supplier?: string;
}

export interface Airport {
	id: string;
	/**
	 * The unique 3-letter IATA code that is assigned to each airport
	 * @example "JFK"
	 */
	iataCode: string;
	/** 4 letter code simmilar to the IATA code, used to identify airports and structures alike */
	icaoCode?: string;
	/** Official name of the airport */
	name: string;
	/**
	 * Distinguish airport types. International are generally important airports for the tourism industry.
	 * Used to filter out small local airports which would have value `Unknown`.
	 */
	airportType?: 'International' | 'Unknown';
	/** The city where the airport belongs */
	city: string;
	/**
	 * an ISO 3166-1 alpha-2 country code
	 * @format iso-3661-1
	 * @example "CH"
	 */
	countryCode: string;
	/** The IATA defined metropolitan area code where the airport belongs */
	metropolitanArea?: string;
	/**
	 * The local time zone in the TZ database format (e.g. Area/Location).
	 * @example "Europe/Zurich"
	 */
	timezone?: string;
	coordinates: Coordinates;
	locationType: string;
}

export interface DistanceRequestSegment {
	/** Either `coordinates` or `location` should be provided */
	from: GeoPoint;
	/** Either `coordinates` or `location` should be provided */
	to: GeoPoint;
	transportMode: 'Flight' | 'Boat' | 'Road' | 'Rail' | 'Walk' | 'Bicycle';
}

export interface DistanceResponseSegment {
	/** Either `coordinates` or `location` should be provided */
	from: GeoPoint;
	/** Either `coordinates` or `location` should be provided */
	to: GeoPoint;
	transportMode: 'Flight' | 'Boat' | 'Road' | 'Rail' | 'Walk' | 'Bicycle';
	/**
	 * Duration in seconds. Might be empty if it couldn't be calculated or retrieved.
	 * @format int32
	 */
	duration?: number;
	/**
	 * Distance in meters. Might be empty if it couldn't be calculated or retrieved.
	 * @format int32
	 */
	distance?: number;
}

/** Either `coordinates` or `location` should be provided */
export interface GeoPoint {
	coordinates?: Coordinates;
	/** Reference to a location from our inventory */
	location?: Location;
}

/** Reference to a location from our inventory */
export interface Location {
	locationId: string;
	locationType: 'Airport' | 'Area';
}

export interface Coordinates {
	/** @format double */
	lat: number;
	/** @format double */
	lon: number;
}

/** Defines a view of our Picture model along with its descriptions */
export interface Picture {
	refId?: string;
	caption?: string;
	image?: PictureItem;
	thumbnail?: PictureItem;
	original?: PictureItem;
	uncropped?: PictureItem;
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
}
