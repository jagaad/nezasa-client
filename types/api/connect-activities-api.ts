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

/** @example {"code":0,"details":["details","details"],"message":"message"} */
export interface Status {
	/** @format int32 */
	code?: number;
	message: string;
	details?: string[];
}

/** @example {"password":"password","user":"user"} */
export interface LoginRequest {
	/** Unique ID of the account */
	user: string;
	/** Account password, a secret string. */
	password: string;
}

/**
 * Represents authentication response
 * Returns the bearer token upon successful authentication or a list of notifications.
 * The expiration value in the authentication response is useful to keep accurate track of when a token will expire.
 * @example {"expiresInMinutes":0,"accessToken":"accessToken"}
 */
export interface LoginResponse {
	/** The valid bearer token */
	accessToken: string;
	/**
	 * The expiration of the token in minutes
	 * @format int32
	 */
	expiresInMinutes: number;
}

/**
 * Supported languages
 * 2-letter code (ISO 639-1)
 * @default "de"
 * @example "de"
 */
export enum Language {
	De = 'de',
	En = 'en',
	Fr = 'fr',
	It = 'it',
	Nl = 'nl',
	Es = 'es',
	Fi = 'fi',
	Pt = 'pt',
}

/**
 * Paging management for a request
 * @example {"resultsFrom":7,"total":5,"pageSize":2}
 */
export interface CommonPaging {
	/**
	 * Total number of results
	 * Can be ignored in requests, the response always give back this information
	 * @format int32
	 */
	total?: number;
	/**
	 * Number of results per page
	 * If the parameter is not specified, the pageSize is the total number of results
	 * @format int32
	 */
	pageSize?: number;
	/**
	 * Position (zero based) of the first result to retrieve
	 * If the parameter is not specified, the value is 0
	 * @format int32
	 */
	resultsFrom?: number;
}

/**
 * Generic travel period
 * @example {"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"}
 */
export interface CommonTravelPeriod {
	/**
	 * Desired starting date of the product represented in ISO8601 format (yyyy-MM-dd)
	 * @example "2024-08-01"
	 */
	startDate: string;
	/**
	 * Desired starting zoned date/time of the product in ISO8601 format (HH:mm:ss.SSS).
	 * Empty if the activity doesn't have a specific start time (e.g. full day).
	 * @example "12:00:00"
	 */
	startTime?: string;
	/**
	 * Desired ending date of the product represented in ISO8601 format (yyyy-MM-dd)
	 * Empty if the activity doesn't have a specific end time (e.g. full day).
	 * @example "2023-08-14"
	 */
	endDate: string;
	/**
	 * Desired ending zoned date/time of the product in ISO8601 format (HH:mm:ss.SSS).
	 * @example "16:00:00"
	 */
	endTime?: string;
	/**
	 * Duration in nights of the product
	 * @format int32
	 * @example 1
	 */
	nights?: number;
}

/**
 * Representation of an area
 * The location can be represented in one of the following types (geoCircle, geoPolygon or destinationId)
 */
export interface GeoLocation {
	geoCircle?: GeoCircle;
	geoPolygon?: GeoPolygon;
	destinationId?: GeoDestinationId;
}

/** Area defined by a circle */
export interface GeoCircle {
	coordinate?: GeoCoordinate;
	/**
	 * radius in meter around the center
	 * @format int32
	 */
	radius?: number;
}

/**
 * Coordinates as latitude; longitude
 * @example {"latitude":0.8008281904610115,"longitude":6.027456183070403}
 */
export interface GeoCoordinate {
	/** @format double */
	latitude: number;
	/** @format double */
	longitude: number;
}

/** Area defined by a set of points */
export interface GeoPolygon {
	/** points of the polygon */
	points?: GeoPolygonPoint[];
}

/** Point of a GeoPolygon */
export interface GeoPolygonPoint {
	coordinate?: GeoCoordinate;
	/**
	 * index in the polygon
	 * @format int32
	 */
	index?: number;
}

export interface GeoDestinationId {
	destinationId?: string;
}

/** Basic representation of a pax */
export interface CommonPax {
	/**
	 * age of the pax at the beginning of the TravelPeriod
	 * @format int32
	 * @example 30
	 */
	age: number;
	/**
	 * first name of the pax
	 * @example "Mike"
	 */
	firstName?: string;
	/**
	 * last name of the pax
	 * @example "Riverdance"
	 */
	lastName?: string;
	/**
	 * passport number of the pax
	 * @example "C3045654"
	 */
	passportNumber?: string;
	/**
	 * 2 letters code of the country (ISO 3166-1 alpha-2)
	 * @example "DE"
	 */
	nationality?: string;
	/** Basic representation of a physical address. */
	address?: GeoAddress;
	/** Electronic contacts like phone, email, and website */
	electronicContactDetails?: ContactElectronicContactDetails;
	/** an optional identifier of the pax used for correlation */
	nezasaRefId?: string;
	/** an optional supplier identifier of the pax */
	supplierRefId?: string;
	/** if this pax is the main contact */
	isMainContact?: boolean;
	gender?: CommonGender;
	/**
	 * The birth date of the pax
	 * This date is parsed / serialized through DateTimeFormatter.ISO_LOCAL_DATE
	 * @example "1990-01-01"
	 */
	birthDate: string;
	/**
	 * Expiration date of the passport
	 * @example "2030-01-01"
	 */
	passportExpirationDate?: string;
	/** additional names beside first and last names */
	secondOrAdditionalNames?: string[];
	/** country that issued the passport */
	passportIssuingCountryCode?: string;
	/** passenger reduction identifier (half-fare, swiss-pass, student) */
	passengerReduction?: string;
	/**
	 * - MR: Mister
	 * - MRS: Mistress or Missus
	 * - MS: Miss
	 * - MSTR: Master, typically used for young boys
	 * - DR: Doctor
	 * - PROF: Professor
	 * - REV: Reverend
	 * - CAPT: Captain
	 * - SIR: Sir
	 * - LADY: Lady
	 * - INF: Infant (0-2 years old)
	 * - CHD: Child (2-11 years old)
	 */
	title?: CommonPaxTitle;
}

/**
 * Basic representation of a physical address.
 * @example {"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"}
 */
export interface GeoAddress {
	/**
	 * street address, first line
	 * @example "132, My Street"
	 */
	street?: string;
	/** street address, second line if needed */
	street2?: string;
	/**
	 * name of the city
	 * @example "Littletown"
	 */
	city?: string;
	/**
	 * postal code
	 * @example "BG23 4YZ"
	 */
	postalCode?: string;
	/** region / state */
	region?: string;
	/**
	 * 2 letters code of the country (ISO 3166-1 alpha-2)
	 * @example "DE"
	 */
	countryCode?: string;
	/**
	 * country
	 * @example "Germany"
	 */
	country?: string;
}

/** Electronic contacts like phone, email, and website */
export interface ContactElectronicContactDetails {
	phones?: ContactPhone[];
	/** @example "mike.riverdance@example.com" */
	email?: string;
	/** @example "www.example.com" */
	website?: string;
}

/**
 * Phone contact like mobile, landline, fax
 * @example {"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}
 */
export interface ContactPhone {
	/** @example true */
	mobile?: boolean;
	/** @example false */
	landline?: boolean;
	/** @example false */
	fax?: boolean;
	/** @example false */
	company?: boolean;
	/** @example "+41 44 123 45 67" */
	value?: string;
}

/**
 * @default "Male"
 * @example "Male"
 */
export enum CommonGender {
	Male = 'Male',
	Female = 'Female',
	Unknown = 'Unknown',
}

/**
 * The title of pax
 * - MR: Mister
 * - MRS: Mistress or Missus
 * - MS: Miss
 * - MSTR: Master, typically used for young boys
 * - DR: Doctor
 * - PROF: Professor
 * - REV: Reverend
 * - CAPT: Captain
 * - SIR: Sir
 * - LADY: Lady
 * - INF: Infant (0-2 years old)
 * - CHD: Child (2-11 years old)
 */
export enum CommonPaxTitle {
	MR = 'MR',
	MRS = 'MRS',
	MS = 'MS',
	MSTR = 'MSTR',
	DR = 'DR',
	PROF = 'PROF',
	REV = 'REV',
	CAPT = 'CAPT',
	SIR = 'SIR',
	LADY = 'LADY',
	INF = 'INF',
	CHD = 'CHD',
}

/**
 * Generic response providing a list of activity offers.
 *
 * Returns either a list of activities, or a list of notifications.
 * @example {"activities":[{"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]},{"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]}],"paging":{"resultsFrom":7,"total":5,"pageSize":2},"notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}]}
 */
export interface ActivityOfferResponse {
	/** list of activity offers */
	activities: ActivityOffer[];
	paging?: CommonPaging;
	/** notifications */
	notifications?: CommonNotification[];
}

/**
 * Detailed offer response providing an activity offer detail.
 *
 * Returns either an activity, or a list of notifications.
 * It also returns a list of questions that need to be answered when
 * doing the booking.
 * @example {"activity":{"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]},"questions":[{"question":"question","id":"id","placeholder":"placeholder","required":true,"validation":"String","answerOptions":[{"answer":"answer","id":"id"},{"answer":"answer","id":"id"}]},{"question":"question","id":"id","placeholder":"placeholder","required":true,"validation":"String","answerOptions":[{"answer":"answer","id":"id"},{"answer":"answer","id":"id"}]}],"notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}]}
 */
export interface ActivityOfferDetailsResponse {
	/**
	 * Representation of a activity offer.
	 * The `reference` is the activity offer identifier and should be as stable as possible (i.e two identical request should return offers with the same references).
	 * Furthermore the reference should be also valid until the activity takes place, so that a book can be made a long time after the planning was done.
	 */
	activity: ActivityOffer;
	/** notifications */
	notifications?: CommonNotification[];
	/** questions */
	questions?: ActivityQuestion[];
}

/** @example {"reference":"reference","period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"serviceCategoryReferences":["serviceCategoryReferences","serviceCategoryReferences"],"dropOffId":"dropOffId","contact":{"firstName":"Mike","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"}},"answers":[{"answer":"answer","id":"id"},{"answer":"answer","id":"id"}],"currency":"currency","pickUpId":"pickUpId","lang":"de","paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}],"activityLanguage":"activityLanguage"} */
export interface AvailabilityAndBookRequest {
	/** The reference of the offer */
	reference: string;
	/** The reference(s) of the service category (could represent many tickets for the same activity) */
	serviceCategoryReferences: string[];
	/** Desired currency (3 letter code) */
	currency: string;
	/** Passengers participating in the activity */
	paxes: CommonPax1[];
	/** Answers to activity questions */
	answers?: ActivityBookingActivityAnswer[];
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	/** Generic travel period */
	period: CommonTravelPeriod;
	/** The optional pickUp id */
	pickUpId?: string;
	/** The optional dropOff id */
	dropOffId?: string;
	contact?: CommonContactDetails;
	/** Optional value for the language selected of the activity */
	activityLanguage?: string;
}

/**
 * Returns either a booking or a list of notifications.
 *
 * Optionally a list of "itemIds" can be returned. These represent sub-items
 * of the booking if the supplier needs them. These will have to be used in
 * the CancellationRequest so that they can be sent to the supplier.
 * @example {"vouchersUrls":["vouchersUrls","vouchersUrls"],"bookStatus":"Unknown","itemsIds":["itemsIds","itemsIds"],"supplier":"supplier","bookingId":"bookingId","notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}]}
 */
export interface ActivityBookingBookResponse {
	/**
	 * - Unknown: Unknown. most likely an error happened
	 * - Requested: Requested. the booking is "on request"
	 * - Confirmed: Confirmed.
	 */
	bookStatus: ActivityBookingBookStatus;
	/** the booking identifier. Used to cancel the booking. */
	bookingId: string;
	/** optional. the sub-items of the booking */
	itemsIds?: string[];
	/** name of the activity supplier */
	supplier: string;
	/** vouchers URLs */
	vouchersUrls?: string[];
	/** notifications */
	notifications?: CommonNotification[];
}

/**
 * Represents cancellation response
 * Returns list of notifications in case of error
 * @example {"cancellationFee":{"currency":"EUR","value":"230.2"},"bookingId":"bookingId","notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}]}
 */
export interface ActivityBookingCancellationResponse {
	/** the booking identifier */
	bookingId?: string;
	cancellationFee?: CommonMonetaryValue;
	/** notifications */
	notifications?: CommonNotification[];
}

/**
 * Represents pre-booking availability check response
 * Returns either an availability status and activity offer, or a list of notifications.
 * The returned activity offer can contain an updated price.
 * It might also returns a list of extra questions that need to be answered when doing the booking.
 * @example {"offer":{"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]},"questions":[{"question":"question","id":"id","placeholder":"placeholder","required":true,"validation":"String","answerOptions":[{"answer":"answer","id":"id"},{"answer":"answer","id":"id"}]},{"question":"question","id":"id","placeholder":"placeholder","required":true,"validation":"String","answerOptions":[{"answer":"answer","id":"id"},{"answer":"answer","id":"id"}]}],"availabilityStatus":"Unknown","notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}]}
 */
export interface ActivityBookingAvailabilityCheckResponse {
	/**
	 * - Unknown: Unknown. most likely an error happened
	 * - Available: Available
	 * - NotAvailable: Not available. the offer cannot be booked
	 */
	availabilityStatus: CommonBookingAvailabilityStatus;
	/**
	 * Representation of a activity offer.
	 * The `reference` is the activity offer identifier and should be as stable as possible (i.e two identical request should return offers with the same references).
	 * Furthermore the reference should be also valid until the activity takes place, so that a book can be made a long time after the planning was done.
	 */
	offer?: ActivityOffer;
	/** questions */
	questions?: ActivityQuestion[];
	/** notifications */
	notifications?: CommonNotification[];
}

/** @example {"activities":[{"activityId":"activityId","title":"title","bookingId":"bookingId"},{"activityId":"activityId","title":"title","bookingId":"bookingId"}],"notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}]} */
export interface ActivityBookingGetBookingResponse {
	/** A list of booked activities ready to be pulled. */
	activities: ActivityBookingGetBookingResponseActivity[];
	notifications?: CommonNotification[];
}

/** @example {"activityId":"activityId","title":"title","bookingId":"bookingId"} */
export interface ActivityBookingGetBookingResponseActivity {
	/** ID of the booking this activity belongs to. */
	bookingId: string;
	/** Specific ID of the activity in the booking. */
	activityId: string;
	/** Human readable title. */
	title: string;
}

/** @example {"details":[{"offer":{"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]},"bookStatus":"Unknown"},{"offer":{"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]},"bookStatus":"Unknown"}],"notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}]} */
export interface ActivityBookingGetBookingDetailsResponse {
	details: GetBookingDetailsResponseActivityDetails[];
	notifications?: CommonNotification[];
}

/** @example {"offer":{"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]},"bookStatus":"Unknown"} */
export interface GetBookingDetailsResponseActivityDetails {
	/**
	 * Representation of a activity offer.
	 * The `reference` is the activity offer identifier and should be as stable as possible (i.e two identical request should return offers with the same references).
	 * Furthermore the reference should be also valid until the activity takes place, so that a book can be made a long time after the planning was done.
	 */
	offer: ActivityOffer;
	/**
	 * - Unknown: Unknown. most likely an error happened
	 * - Requested: Requested. the booking is "on request"
	 * - Confirmed: Confirmed.
	 */
	bookStatus: ActivityBookingBookStatus;
}

/**
 * Representation of a activity offer.
 * The `reference` is the activity offer identifier and should be as stable as possible (i.e two identical request should return offers with the same references).
 * Furthermore the reference should be also valid until the activity takes place, so that a book can be made a long time after the planning was done.
 * @example {"componentSourceType":"Private","onRequest":true,"dropOffs":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"salesPrice":{"currency":"EUR","value":"230.2"},"durationInMinutes":1,"description":{"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."},"netPrice":{"currency":"EUR","value":"230.2"},"pictures":[{"pictureItem":[{"url":"url"},{"url":"url"}]},{"pictureItem":[{"url":"url"},{"url":"url"}]}],"reference":"reference","startLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"supportedLanguages":["de","de"],"name":"name","categories":["Other","Other"],"pickUps":[{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"},{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}],"endLocation":{"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"},"cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"},"serviceCategories":[{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}},{"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}]}
 */
export interface ActivityOffer {
	/** The reference of the offer */
	reference: string;
	/** The title of the activity */
	name: string;
	description: ActivityDescriptions;
	startLocation: ActivityLocation;
	endLocation: ActivityLocation;
	/**
	 * The possible duration of the activity in minutes. Empty if the activity is not limited in duration.
	 * @format int32
	 */
	durationInMinutes?: number;
	/** The category of the activity. See `ActivityCategory` for the possible values. */
	categories: ActivityCategory[];
	/** The pictures of the activity */
	pictures: ActivityPicture[];
	salesPrice: CommonMonetaryValue;
	netPrice?: CommonMonetaryValue;
	/** If the booking is on request */
	onRequest: boolean;
	/**
	 * Type of contract used to source the product.
	 *
	 *  - Private: Indicates a private contract. The B2B customer sourced the
	 *    component from an external source through his own contract, or sourced
	 *    the component from the Nezasa inventory, which by definition is private.
	 *  - Reseller: Indicates a reseller contract. The B2B customer sourced
	 *    the component from an external source through a Nezasa reseller
	 *    contract.
	 */
	componentSourceType: NezasaComponentSourceType;
	/**
	 * Base the cancellation calculation on the period->startDate.
	 * For instance, if an activity incurs a cancellation fee starting 24
	 * hours before the period->startDate date, then determine the applicable
	 * cancellation fee using the formula: period->startDate minus 24 hours.
	 */
	cancellationPolicy: ActivityCancellationPolicy;
	/** All the serviceCategories about the activity */
	serviceCategories: ActivityServiceCategory[];
	/** The breakdown of supported languages by the activity event (on site). */
	supportedLanguages?: Language[];
	/** The available list of pick-up points for this activity */
	pickUps?: PickUpDropOff[];
	/** The available list of drop-off points for this activity */
	dropOffs?: PickUpDropOff[];
}

/**
 * Descriptions for the activity
 * @example {"keySentence":"Experience the thrill of snorkeling in the Great Barrier Reef","description":"Immerse yourself in the beauty of the Great Barrier Reef on this guided snorkeling adventure. You'll get a chance to see a wide variety of marine life in their natural habitat.","meetingPoints":["Cairns Marina","Reef Fleet Terminal"],"inclusions":["Professional snorkeling guide","Snorkeling gear","Lunch and refreshments"],"exclusions":["Hotel pickup and drop-off","Gratuities"],"requirements":["Must be able to swim","Minimum age is 10 years"],"knowBeforeGo":"Be sure to bring a swimsuit, towel, sunscreen, and a sense of adventure."}
 */
export interface ActivityDescriptions {
	keySentence: string;
	/** Description of the activity. Supports basic HTML. */
	description: string;
	meetingPoints?: string[];
	inclusions?: string[];
	exclusions?: string[];
	requirements?: string[];
	knowBeforeGo?: string;
	otherSections?: ActivityDescriptionsOtherSectionsInner[];
}

/**
 * Describes an activity location
 * @example {"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"countryCode":"countryCode"}
 */
export interface ActivityLocation {
	coordinate: GeoCoordinate;
	/** the country code of the activity */
	countryCode: string;
}

/** @default "Other" */
export enum ActivityCategory {
	Other = 'Other',
	CityAndShopping = 'CityAndShopping',
	ThemeParks = 'ThemeParks',
	TicketsAndSightSeeingPasses = 'TicketsAndSightSeeingPasses',
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
	ForFamilies = 'ForFamilies',
	ForCouples = 'ForCouples',
	ForSeniors = 'ForSeniors',
}

/**
 * A picture
 * @example {"pictureItem":[{"url":"url"},{"url":"url"}]}
 */
export interface ActivityPicture {
	/** the picture renditions associated with this picture */
	pictureItem?: ActivityPictureItem[];
}

/**
 * A picture item is a picture and describes metadata information of an image file.
 * @example {"url":"url"}
 */
export interface ActivityPictureItem {
	url?: string;
}

/**
 * The cancellation policy of the activity huhu.
 * Base the cancellation calculation on the period->startDate.
 * For instance, if an activity incurs a cancellation fee starting 24
 * hours before the period->startDate date, then determine the applicable
 * cancellation fee using the formula: period->startDate minus 24 hours.
 * @example {"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}
 */
export interface ActivityCancellationPolicy {
	/**
	 * Defines the cancellation policy type of a product.
	 *  - Free: The cancellation is free for some time after the booking.
	 *  - FeeApplies: There will be some cancellation fee regardless of when the booking is cancelled.
	 *  - NonRefundable: The cancellation fee is 100% once the offer is booked.
	 */
	cancellationType: CommonCancellationPolicy;
	rules: ActivityCancellationPolicyRule[];
}

/**
 * A cancellation policy rule. startDatetime and endDatetime define an interval (can be open ended) where this rule applies.
 * @example {"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}
 */
export interface ActivityCancellationPolicyRule {
	amount?: CommonMonetaryValue;
	/**
	 * a percentage of the booking
	 * @format int64
	 */
	percentage?: number;
	/** The start date time of the cancellation policy rule in ISO8601 format (yyyy-MM-ddTHH:mm:ss.SSS) */
	startDatetime?: string;
	/** The end date time of the cancellation policy rule in ISO8601 format (yyyy-MM-ddTHH:mm:ss.SSS). */
	endDatetime?: string;
}

/**
 * A Service Category describes variations of an activity, usually also with a
 * variation in price (think normal ticket vs VIP ticket),
 * schedule (normal activity starts at 9AM, VIP activity starts at 10AM).
 *
 * You can also represent a more complex hierarchy using name and sub_name
 * (e.g. 1 -> name = adult, sub_name = half day; 2 -> name = adult,
 * sub_name = full day; 3 -> name = child, sub_name = full day)
 *
 * The netPrice is required, the salesPrice is optional. If ommitted,
 * additional price calculations may be applied. Otherwise, the sales
 * price will be used unchanged.
 * @example {"period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"dropOffType":null,"pickUpType":"Unavailable","subName":"subName","salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","netPrice":{"currency":"EUR","value":"230.2"},"id":"id","cancellationPolicy":{"rules":[{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"},{"startDatetime":"startDatetime","amount":{"currency":"EUR","value":"230.2"},"percentage":5,"endDatetime":"endDatetime"}],"cancellationType":"Unknown"}}
 */
export interface ActivityServiceCategory {
	/** the identifier/reference of this service category */
	id: string;
	/** the name of this service category */
	name?: string;
	/** Generic travel period */
	period: CommonTravelPeriod;
	/**
	 * - Unavailable: no pickup/dropoff is available
	 * - Optional: pickup/dropoff is optional
	 * - Required: pickup/dropoff is required. See method GetActivitiesOfferPickUpsDropOffs
	 */
	pickUpType: ActivityPickUpDropOffType;
	/**
	 * - Unavailable: no pickup/dropoff is available
	 * - Optional: pickup/dropoff is optional
	 * - Required: pickup/dropoff is required. See method GetActivitiesOfferPickUpsDropOffs
	 */
	dropOffType: ActivityPickUpDropOffType;
	/**
	 * Base the cancellation calculation on the period->startDate.
	 * For instance, if an activity incurs a cancellation fee starting 24
	 * hours before the period->startDate date, then determine the applicable
	 * cancellation fee using the formula: period->startDate minus 24 hours.
	 */
	cancellationPolicy: ActivityCancellationPolicy;
	/** optional subName of the service category */
	subName?: string;
	salesPrice: CommonMonetaryValue;
	netPrice?: CommonMonetaryValue;
}

/**
 * The type of pickup/dropoff information
 * - Unavailable: no pickup/dropoff is available
 * - Optional: pickup/dropoff is optional
 * - Required: pickup/dropoff is required. See method GetActivitiesOfferPickUpsDropOffs
 * @default "Unavailable"
 */
export enum ActivityPickUpDropOffType {
	Unavailable = 'Unavailable',
	Optional = 'Optional',
	Required = 'Required',
}

/**
 * Describes the pick up or drop off point of an activity
 * @example {"coordinate":{"latitude":0.8008281904610115,"longitude":6.027456183070403},"name":"name","id":"id"}
 */
export interface PickUpDropOff {
	/** The id of the question. will be used to correlate it to an answer */
	id: string;
	/** The id of the question. will be used to correlate it to an answer */
	name: string;
	coordinate?: GeoCoordinate;
}

/**
 * Business notifications
 * @example {"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}
 */
export interface CommonNotification {
	notificationLevel?: CommonNotificationLevel;
	notificationType?: CommonNotificationType;
	/** Description of the notification */
	description?: string;
}

/**
 * Level of the notification
 * @default "Info"
 */
export enum CommonNotificationLevel {
	Info = 'Info',
	Warning = 'Warning',
	Error = 'Error',
}

/**
 * Type of the notification
 * @default "InputValidation"
 */
export enum CommonNotificationType {
	InputValidation = 'InputValidation',
	Business = 'Business',
	Remarks = 'Remarks',
	SupplierSystem = 'SupplierSystem',
}

/**
 * Describes activities questions
 * @example {"question":"question","id":"id","placeholder":"placeholder","required":true,"validation":"String","answerOptions":[{"answer":"answer","id":"id"},{"answer":"answer","id":"id"}]}
 */
export interface ActivityQuestion {
	/** The id of the question. will be used to correlate it to an answer */
	id: string;
	/** The question to be presented */
	question: string;
	/** If an answer to the question is necessary */
	required: boolean;
	placeholder?: string;
	/** Optional possible answers to this question */
	answerOptions?: ActivityAnswerOption[];
	validation?: ActivityAnswerValidation;
}

/** @example {"answer":"answer","id":"id"} */
export interface ActivityAnswerOption {
	/** the id of this answer */
	id?: string;
	/** the display text of this answer */
	answer?: string;
}

/** @default "String" */
export enum ActivityAnswerValidation {
	String = 'String',
	Int = 'Int',
	Bool = 'Bool',
	Date = 'Date',
	DateTime = 'DateTime',
}

/**
 * Basic representation of a pax
 * @example {"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}
 */
export interface CommonPax1 {
	/**
	 * age of the pax at the beginning of the TravelPeriod
	 * @format int32
	 * @example 30
	 */
	age: number;
	/**
	 * first name of the pax
	 * @example "Mike"
	 */
	firstName?: string;
	/**
	 * last name of the pax
	 * @example "Riverdance"
	 */
	lastName?: string;
	/**
	 * passport number of the pax
	 * @example "C3045654"
	 */
	passportNumber?: string;
	/**
	 * 2 letters code of the country (ISO 3166-1 alpha-2)
	 * @example "DE"
	 */
	nationality?: string;
	/** Basic representation of a physical address. */
	address?: GeoAddress;
	/** Electronic contacts like phone, email, and website */
	electronicContactDetails?: ContactElectronicContactDetails1;
	/** an optional identifier of the pax used for correlation */
	nezasaRefId?: string;
	/** an optional supplier identifier of the pax */
	supplierRefId?: string;
	/** if this pax is the main contact */
	isMainContact?: boolean;
	gender?: CommonGender;
	/**
	 * The birth date of the pax
	 * This date is parsed / serialized through DateTimeFormatter.ISO_LOCAL_DATE
	 * @example "1990-01-01"
	 */
	birthDate: string;
	/**
	 * Expiration date of the passport
	 * @example "2030-01-01"
	 */
	passportExpirationDate?: string;
	/** additional names beside first and last names */
	secondOrAdditionalNames?: string[];
	/** country that issued the passport */
	passportIssuingCountryCode?: string;
	/** passenger reduction identifier (half-fare, swiss-pass, student) */
	passengerReduction?: string;
	/**
	 * - MR: Mister
	 * - MRS: Mistress or Missus
	 * - MS: Miss
	 * - MSTR: Master, typically used for young boys
	 * - DR: Doctor
	 * - PROF: Professor
	 * - REV: Reverend
	 * - CAPT: Captain
	 * - SIR: Sir
	 * - LADY: Lady
	 * - INF: Infant (0-2 years old)
	 * - CHD: Child (2-11 years old)
	 */
	title?: CommonPaxTitle;
}

/**
 * Electronic contacts like phone, email, and website
 * @example {"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"}
 */
export interface ContactElectronicContactDetails1 {
	phones?: ContactPhone[];
	/** @example "mike.riverdance@example.com" */
	email?: string;
	/** @example "www.example.com" */
	website?: string;
}

/**
 * An answer to an ActivityQuestion
 * @example {"answer":"answer","id":"id"}
 */
export interface ActivityBookingActivityAnswer {
	/** the id of the question */
	id?: string;
	/** the text of the answer */
	answer?: string;
}

/**
 * Basic representation of the contact
 * @example {"firstName":"Mike","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"}}
 */
export interface CommonContactDetails {
	/**
	 * first name of the contact
	 * @example "Mike"
	 */
	firstName?: string;
	/**
	 * last name of the contact
	 * @example "Riverdance"
	 */
	lastName?: string;
	gender?: CommonGender;
	/** Electronic contacts like phone, email, and website */
	electronicContactDetails?: ContactElectronicContactDetails1;
	/** Basic representation of a physical address. */
	address?: GeoAddress;
}

/**
 * Represents booking status
 * - Unknown: Unknown. most likely an error happened
 * - Requested: Requested. the booking is "on request"
 * - Confirmed: Confirmed.
 * @default "Unknown"
 */
export enum ActivityBookingBookStatus {
	Unknown = 'Unknown',
	Requested = 'Requested',
	Confirmed = 'Confirmed',
}

/**
 * Representation of a price
 * @example {"currency":"EUR","value":"230.2"}
 */
export interface CommonMonetaryValue {
	/**
	 * 3-letter code (ISO 4217) of the currency
	 * @example "EUR"
	 */
	currency: string;
	/**
	 * The value of the price, e.g. "230.20", "13000.55"
	 * @pattern ^\d+\.\d{2}$
	 * @example "230.2"
	 */
	value: string;
}

/**
 * Represents availability check status
 * - Unknown: Unknown. most likely an error happened
 * - Available: Available
 * - NotAvailable: Not available. the offer cannot be booked
 * @default "Unknown"
 */
export enum CommonBookingAvailabilityStatus {
	Unknown = 'Unknown',
	Available = 'Available',
	NotAvailable = 'NotAvailable',
}

/**
 * Type of contract used to source the product.
 *
 *  - Private: Indicates a private contract. The B2B customer sourced the
 *    component from an external source through his own contract, or sourced
 *    the component from the Nezasa inventory, which by definition is private.
 *  - Reseller: Indicates a reseller contract. The B2B customer sourced
 *    the component from an external source through a Nezasa reseller
 *    contract.
 * @default "Private"
 */
export enum NezasaComponentSourceType {
	Private = 'Private',
	Reseller = 'Reseller',
}

/**
 * Defines the cancellation policy type of a product.
 *  - Free: The cancellation is free for some time after the booking.
 *  - FeeApplies: There will be some cancellation fee regardless of when the booking is cancelled.
 *  - NonRefundable: The cancellation fee is 100% once the offer is booked.
 * @default "Unknown"
 */
export enum CommonCancellationPolicy {
	Unknown = 'Unknown',
	Free = 'Free',
	FeeApplies = 'FeeApplies',
	NonRefundable = 'NonRefundable',
}

export interface ActivitiesV1OffersRequest {
	/** Preferred currency. 3-letter code (ISO 4217). */
	currency: string;
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	paging?: CommonPaging;
	/** Generic travel period */
	period: CommonTravelPeriod;
	/** The location can be represented in one of the following types (geoCircle, geoPolygon or destinationId) */
	startLocation: GeoLocation;
	/** The location can be represented in one of the following types (geoCircle, geoPolygon or destinationId) */
	endLocation: GeoLocation;
	/** Passengers participating in the activity */
	paxes: CommonPax[];
}

export interface ActivitiesV1OfferDetailsRequest {
	/** Desired currency (3-letter code). */
	currency: string;
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	paging?: CommonPaging;
	/** Generic travel period */
	period: CommonTravelPeriod;
	/** Passengers participating in the activity */
	paxes: CommonPax[];
	/** The optional pickup id. */
	pickupId?: string;
	/** The optional dropoff id. */
	dropoffId?: string;
}

export interface ActivityDescriptionsOtherSectionsInner {
	/** Name of the section */
	label: string;
	/** Content of the section. Supports basic HTML. */
	description: string;
}
