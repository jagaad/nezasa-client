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

export interface ProblemResponse {
	/**
	 * A human-readable problem description in English. Maybe be shown to the end user of
	 * the system. An actionable message whenever possible. Doesn't contain credentials
	 * and other secrets.
	 * @example "Customer phone number must start with a country code prefix, e.g +41."
	 */
	message: string;
	/**
	 * Identifies the error type. Snake case (using underscores).
	 * @example "invalid_argument"
	 */
	code: string;
	/**
	 * A list of unprocessed requests to the supplier system. If no external system is
	 * involved, the list will be empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawRequests?: string[];
	/**
	 * A list of unprocessed responses from the supplier system. If no external system is
	 * involved, the list will be empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawResponses?: string[];
}

/**
 * Request for accommodations
 * Request to search for accommodations based on the given criteria.
 * Mandatory criteria are the travel period, the room allocation and the accommodation codes.
 * Additionally can also support filtering by board codes, on request and non-refundable offers.
 * @example {"market":"DE","period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"accommodationCodes":["123456","123456"],"onRequest":false,"roomAllocation":[{"reference":1,"paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}]},{"reference":1,"paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}]}],"currency":"EUR","paging":{"resultsFrom":1,"total":0,"pageSize":6},"boardCodes":["BB","BB"],"lang":"de","nonRefundable":false,"purchaseChannel":"K"}
 */
export interface AccommodationOffersRequest {
	/**
	 * Preferred currency. 3-letter code (ISO 4217).
	 * @example "EUR"
	 */
	currency: string;
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	paging: CommonPaging;
	/** Generic travel period */
	period: CommonTravelPeriod;
	/** Required accommodation codes in one of the formats supported by Nezasa. */
	accommodationCodes: string[];
	/** Required room allocation */
	roomAllocation: RoomAllocation[];
	/**
	 * Required Nezasa board codes. For possible values, see AccommodationRoom in AccommodationOffer. No filtering will be applied if left empty.
	 * @default []
	 */
	boardCodes?: string[];
	/**
	 * Whether to return on request offers in the response
	 * @default false
	 * @example false
	 */
	onRequest?: boolean;
	/**
	 * Whether to return non-refundable offers in the response
	 * @default false
	 * @example false
	 */
	nonRefundable?: boolean;
	/**
	 * Market country or point-of-sale. 2 letters code of the country (ISO 3166-1 alpha-2)
	 * @example "DE"
	 */
	market?: string;
	/**
	 * Channel (in supplier-specific format) via which the content is offered
	 * @example "K"
	 */
	purchaseChannel?: string;
}

/**
 * Response providing a list of accommodation offers.
 * @example {"offers":[{"availableBoardCodes":["BB","BB"],"rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"salesPrice":{"currency":"EUR","value":"230.2"},"supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"accommodationName":"Hotel name","reference":"reference","accommodationCode":"123456","availableCancellationPolicies":[{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"}],"supplier":"supplier","surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}]},{"availableBoardCodes":["BB","BB"],"rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"salesPrice":{"currency":"EUR","value":"230.2"},"supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"accommodationName":"Hotel name","reference":"reference","accommodationCode":"123456","availableCancellationPolicies":[{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"}],"supplier":"supplier","surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}]}],"accommodations":[{"availableBoardCodes":["BB","BB"],"rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"salesPrice":{"currency":"EUR","value":"230.2"},"supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"accommodationName":"Hotel name","reference":"reference","accommodationCode":"123456","availableCancellationPolicies":[{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"}],"supplier":"supplier","surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}]},{"availableBoardCodes":["BB","BB"],"rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"salesPrice":{"currency":"EUR","value":"230.2"},"supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"accommodationName":"Hotel name","reference":"reference","accommodationCode":"123456","availableCancellationPolicies":[{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"}],"supplier":"supplier","surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}]}],"rawRequests":["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"],"paging":{"resultsFrom":1,"total":0,"pageSize":6},"notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}],"rawResponses":["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]}
 */
export interface AccommodationOffersResponse {
	/** [Deprecated] Use offers field instead. */
	accommodations?: AccommodationSearchOffer[];
	/**
	 * List of accommodation offers.
	 * List of accommodation offers for the request accommodation codes. Not an exhaustive list of offers of accommodations.
	 * When possible, returns the cheapest offer per every of accommodation code and offer cancellation type. Otherwise, returns the cheapest offer per
	 * accommodation code, understanding that the customer won't necessarily see the accommodation offer if they look for offers with a particular cancellation
	 * type.
	 */
	offers?: AccommodationSearchOffer[];
	paging?: CommonPaging;
	/** [Deprecated] Use a non-200 code response with ProblemResponse instead */
	notifications?: CommonNotification[];
	/**
	 * A list of unprocessed requests to the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"]
	 */
	rawRequests?: string[];
	/**
	 * A list of unprocessed responses from the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]
	 */
	rawResponses?: string[];
}

/**
 * Request for accommodation details
 * Request to check the full accommodation details of an offer.
 * Uses the accommodation code of the hotel.
 * @example {"market":"DE","accommodationCode":"123456","period":{"endDate":"2023-08-14","nights":1,"startTime":"12:00:00","endTime":"16:00:00","startDate":"2024-08-01"},"onRequest":false,"roomAllocation":[{"reference":1,"paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}]},{"reference":1,"paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}]}],"currency":"EUR","boardCodes":["BB","BB"],"lang":"de","nonRefundable":false,"purchaseChannel":"K"}
 */
export interface AccommodationOfferDetailsRequest {
	/**
	 * Required accommodation code in one of the formats supported by Nezasa.
	 * @example "123456"
	 */
	accommodationCode?: string;
	/**
	 * Preferred currency. 3-letter code (ISO 4217).
	 * @example "EUR"
	 */
	currency: string;
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	/** Generic travel period */
	period: CommonTravelPeriod;
	/** Required room allocation */
	roomAllocation: RoomAllocation[];
	/**
	 * Required Nezasa board codes. For possible values, see AccommodationRoom in AccommodationOffer. No filtering will be applied if left empty.
	 * @default []
	 */
	boardCodes?: string[];
	/**
	 * Whether to return on request offers
	 * @default false
	 * @example false
	 */
	onRequest?: boolean;
	/**
	 * Whether to return non-refundable offers
	 * @default false
	 * @example false
	 */
	nonRefundable?: boolean;
	/**
	 * Market country or point-of-sale. 2 letters code of the country (ISO 3166-1 alpha-2)
	 * @example "DE"
	 */
	market?: string;
	/**
	 * Channel (in supplier-specific format) via which the content is offered
	 * @example "K"
	 */
	purchaseChannel?: string;
}

/**
 * Response providing the details of an accommodation offer.
 * @example {"offers":[{"reference":"reference","accommodationCode":"123456","rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"supplier":"supplier","salesPrice":{"currency":"EUR","value":"230.2"},"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"accommodationName":"Hotel name"},{"reference":"reference","accommodationCode":"123456","rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"supplier":"supplier","salesPrice":{"currency":"EUR","value":"230.2"},"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"accommodationName":"Hotel name"}],"accommodations":[{"reference":"reference","accommodationCode":"123456","rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"supplier":"supplier","salesPrice":{"currency":"EUR","value":"230.2"},"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"accommodationName":"Hotel name"},{"reference":"reference","accommodationCode":"123456","rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"supplier":"supplier","salesPrice":{"currency":"EUR","value":"230.2"},"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"accommodationName":"Hotel name"}],"rawRequests":["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"],"notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}],"rawResponses":["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]}
 */
export interface AccommodationOfferDetailsResponse {
	/** [Deprecated] Use offers field instead. */
	accommodations?: AccommodationDetailsOffer[];
	/** List of accommodation offers of the selected accommodation */
	offers?: AccommodationDetailsOffer[];
	/** [Deprecated] Use a non-200 code response with ProblemResponse instead */
	notifications?: CommonNotification[];
	/**
	 * A list of unprocessed requests to the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"]
	 */
	rawRequests?: string[];
	/**
	 * A list of unprocessed responses from the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]
	 */
	rawResponses?: string[];
}

/**
 * Check accommodation availability
 * Check if the accommodation offer is available. Use the `offerReference` provided
 * by the offer search or details.
 * @example {"reference":"reference","market":"DE","currency":"EUR","lang":"de"}
 */
export interface AccommodationAvailabilityRequest {
	/** The offer `reference` returned from the accommodations details call. */
	reference?: string;
	/**
	 * Preferred currency. 3-letter code (ISO 4217).
	 * @example "EUR"
	 */
	currency: string;
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	/**
	 * Market country or point-of-sale.
	 * 2 letters code of the country (ISO 3166-1 alpha-2)
	 * @example "DE"
	 */
	market?: string;
}

/**
 * Response providing the details of an accommodation offer.
 * @example {"accommodation":{"reference":"reference","accommodationCode":"123456","rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"supplier":"supplier","salesPrice":{"currency":"EUR","value":"230.2"},"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"accommodationName":"Hotel name"},"rawRequests":["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"],"notifications":[{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"},{"notificationLevel":"Info","description":"description","notificationType":"InputValidation"}],"rawResponses":["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]}
 */
export interface AccommodationAvailabilityResponse {
	/**
	 * Representation of an accommodation offer.
	 * Used to return the detailed information of an accommodation offer.
	 */
	accommodation?: AccommodationDetailsOffer;
	/** [Deprecated] Use a non-200 code response with ProblemResponse instead */
	notifications?: CommonNotification[];
	/**
	 * A list of unprocessed requests to the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"]
	 */
	rawRequests?: string[];
	/**
	 * A list of unprocessed responses from the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]
	 */
	rawResponses?: string[];
}

/**
 * Book accommodation
 * Books the accommodation offer if available. Use the offer reference provided
 * by the `AccommodationAvailabilityRequest`.
 * @example {"reference":"reference","roomAllocation":[{"reference":1,"paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}]},{"reference":1,"paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}]}],"contact":{"firstName":"Mike","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"}},"lang":"de"}
 */
export interface AccommodationBookingRequest {
	/** The `reference` of an offer returned from the availability call to be booked. */
	reference?: string;
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	/**
	 * Expected room allocation
	 * The room reference refers to the room allocationReference returned by the availability
	 * response and assigns paxes to individual rooms.
	 */
	roomAllocation: RoomAllocation[];
	contact: CommonContactDetails;
}

/**
 * Response providing the result of an accommodation booking.
 * @example {"booking":{"bookingReference":"SUNHOTEL-12345#SUNHOTEL-67890","supplierReferences":["[\"SUNHOTEL-12345\",\"SUNHOTEL-67890\"]","[\"SUNHOTEL-12345\",\"SUNHOTEL-67890\"]"],"salesPrice":{"currency":"EUR","value":"230.2"},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"status":"Booked"},"rawRequests":["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"],"rawResponses":["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]}
 */
export interface AccommodationBookingResponse {
	booking: AccommodationBooking;
	/**
	 * A list of unprocessed requests to the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"]
	 */
	rawRequests?: string[];
	/**
	 * A list of unprocessed responses from the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]
	 */
	rawResponses?: string[];
}

/**
 * Cancel accommodation
 * Request to cancel a booking with the `bookingReference` provided by the booking operation.
 * @example {"reference":"BOOKING-123456"}
 */
export interface AccommodationCancelRequest {
	/**
	 * The `reference` of the booking to be canceled.
	 * @example "BOOKING-123456"
	 */
	reference?: string;
}

/**
 * Response providing the results of a booking cancellation.
 * @example {"rawRequests":["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"],"rawResponses":["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]}
 */
export interface AccommodationCancelResponse {
	/**
	 * A list of unprocessed requests to the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"]
	 */
	rawRequests?: string[];
	/**
	 * A list of unprocessed responses from the supplier system. If no external system is
	 * involved, the list is empty. The list is sorted by request time, and any
	 * sensitive information, such as credentials, is redacted.
	 * @example ["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]
	 */
	rawResponses?: string[];
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
 * @example {"resultsFrom":1,"total":0,"pageSize":6}
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
 * Pax allocation in an accommodation
 * Represents the association between a room reference and a list of paxes.
 * @example {"reference":1,"paxes":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}]}
 */
export interface RoomAllocation {
	/**
	 * Pax allocation reference
	 * The pax allocation reference (index 1 based reference) as defined in the
	 * AccommodationRoom object.
	 * @format int32
	 * @min 1
	 * @max 6
	 * @example 1
	 */
	reference?: number;
	/** The room paxes */
	paxes?: CommonPax[];
}

/**
 * Representation of an accommodation offer.
 * Can be used to return the cheapest offer for an accommodation with additional information about available cancellation policies and board codes.
 * @example {"availableBoardCodes":["BB","BB"],"rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"salesPrice":{"currency":"EUR","value":"230.2"},"supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"accommodationName":"Hotel name","reference":"reference","accommodationCode":"123456","availableCancellationPolicies":[{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"}],"supplier":"supplier","surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}]}
 */
export interface AccommodationSearchOffer {
	/**
	 * Offer reference
	 * The `reference` allows the integration partner to uniquely identify the offer.
	 * Note that TripBuilder does not parse or interpret the booking reference.
	 * The integration partner can encode necessary information within the reference
	 * to facilitate the booking operation while maintaining a stateless approach.
	 * Note that customers can plan their trip in advance and book the accommodation
	 * later. Therefore, if the offer is still valid, the `reference` must retain
	 * its validity until the booking takes place.
	 */
	reference: string;
	/**
	 * Accommodation code
	 * Accommodation code as requested, in one of the formats supported by Nezasa.
	 * @example "123456"
	 */
	accommodationCode: string;
	/**
	 * Accommodation name
	 * The name of the accommodation
	 * @example "Hotel name"
	 */
	accommodationName?: string;
	/**
	 * Offer supplier
	 * The name or a short identification of a specific supplier that provided the offer. Necessary for the means of offer source identification and
	 * filtering. String, not an enum, for quicker enablement.
	 *
	 * Trip Builder offers configuration referencing suppliers and sometimes enables supplier-specific content. Therefore, please use identifiers already
	 * present in the system, or consult Nezasa for new suppliers. The list of present suppliers:
	 *
	 * Amadeus, Anixe, AOT, AtCore, ATI, Bonotel, CMI, Diethelm, Eurotours, Expedia, ExpediaRapid, GetARoom, Hotelbeds, Jonview, Juniper, Limatours, MTSGlobe,
	 * NWT, Peakwork, PhoenixUnlimited, Priceline, Ratehawk, Restel, STC, Sunhotels, TBO, TourVest, TourVestPush, Travolutionary, W2M, Welcomebeds, YouTravel
	 */
	supplier: string;
	/**
	 * Offer rooms
	 * The room and paxes associated with the offer
	 */
	rooms: AccommodationRoom[];
	/** Accommodation promocode */
	promoCode?: string;
	salesPrice: CommonMonetaryValue;
	surcharges?: AccommodationSurcharge[];
	/**
	 * Offer on request
	 * Whether the offer is on request
	 * @example true
	 */
	onRequest: boolean;
	/** Note that TripBuilder will use the cancellationPolicy if set. */
	cancellationPolicy: AccommodationCancellationPolicy;
	/**
	 * Offer Remarks
	 * Provide remarks returned by the supplier system.
	 */
	remarks?: AccommodationRemark[];
	/**
	 * Information that was required in the past to build a specific customer integration.
	 * Those fields are not required.
	 */
	supplierExtras?: SupplierSpecificExtraInformation;
	/**
	 * Available cancellation policies
	 * List of available cancellation policies for an hotel.
	 * When only the cheapest offer is returned for an hotel, this list should contain the complete set of available cancellation policies.
	 */
	availableCancellationPolicies?: AccommodationCancellationPolicy[];
	/**
	 * Available board codes
	 * List of available board codes for for an hotel.
	 * When only the cheapest offer is returned for an hotel, this list should contain the complete set of available board codes.
	 */
	availableBoardCodes?: AccommodationBoardCode[];
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
 * A list of unprocessed requests to the supplier system. If no external system is
 * involved, the list is empty. The list is sorted by request time, and any
 * sensitive information, such as credentials, is redacted.
 * @example ["{ \"queryId\": 1257, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"ABC123\", \"reason\": \"Client request\" }, \"requestTime\": \"2024-06-15T14:30:00Z\", \"success\": true }","{ \"queryId\": 1258, \"endpoint\": \"/cancelBooking\", \"parameters\": { \"bookingId\": \"XYZ789\", \"reason\": \"System error\" }, \"requestTime\": \"2024-06-15T14:31:00Z\", \"success\": false }"]
 */
export type RawRequests = string[];

/**
 * A list of unprocessed responses from the supplier system. If no external system is
 * involved, the list is empty. The list is sorted by request time, and any
 * sensitive information, such as credentials, is redacted.
 * @example ["{ \"queryId\": 1257, \"responseTime\": \"2024-06-15T14:30:05Z\", \"statusCode\": 200, \"body\": { \"message\": \"Cancellation confirmed\", \"cancellationId\": \"CANC123\" } }","{ \"queryId\": 1258, \"responseTime\": \"2024-06-15T14:31:05Z\", \"statusCode\": 500, \"body\": { \"error\": \"Internal server error\" } }"]
 */
export type RawResponses = string[];

/**
 * Representation of an accommodation offer.
 * Used to return the detailed information of an accommodation offer.
 * @example {"reference":"reference","accommodationCode":"123456","rooms":[{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"},{"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}],"onRequest":true,"supplier":"supplier","salesPrice":{"currency":"EUR","value":"230.2"},"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false},{"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}],"promoCode":"promoCode","supplierExtras":{"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"accommodationName":"Hotel name"}
 */
export interface AccommodationDetailsOffer {
	/**
	 * Offer reference
	 * The `reference` allows the integration partner to uniquely identify the offer.
	 * It is limited to 2000 characters.
	 * Note that TripBuilder does not parse or interpret the booking reference.
	 * The integration partner can encode necessary information within the reference
	 * to facilitate the booking operation while maintaining a stateless approach.
	 * Note that customers can plan their trip in advance and book the accommodation
	 * later. Therefore, if the offer is still valid, the `reference` must retain
	 * its validity until the booking takes place.
	 */
	reference: string;
	/**
	 * Accommodation code
	 * Accommodation code as requested, in one of the formats supported by Nezasa.
	 * @example "123456"
	 */
	accommodationCode: string;
	/**
	 * Accommodation name
	 * The name of the accommodation
	 * @example "Hotel name"
	 */
	accommodationName?: string;
	/**
	 * Offer supplier
	 * The name or a short identification of a specific supplier that provided the offer. Necessary for the means of offer source identification and
	 * filtering. String, not an enum, for quicker enablement.
	 *
	 * Trip Builder offers configuration referencing suppliers and sometimes enables supplier-specific content. Therefore, please use identifiers already
	 * present in the system, or consult Nezasa for new suppliers. The list of present suppliers:
	 *
	 * Amadeus, Anixe, AOT, AtCore, ATI, Bonotel, CMI, Diethelm, Eurotours, Expedia, ExpediaRapid, GetARoom, Hotelbeds, Jonview, Juniper, Limatours, MTSGlobe,
	 * NWT, Peakwork, PhoenixUnlimited, Priceline, Ratehawk, Restel, STC, Sunhotels, TBO, TourVest, TourVestPush, Travolutionary, W2M, Welcomebeds, YouTravel
	 */
	supplier: string;
	/**
	 * Offer rooms
	 * The room and paxes associated with the offer
	 */
	rooms: AccommodationRoom[];
	/** Accommodation promocode */
	promoCode?: string;
	salesPrice: CommonMonetaryValue;
	surcharges?: AccommodationSurcharge[];
	/**
	 * Offer on request
	 * Whether the offer is on request
	 * @example true
	 */
	onRequest: boolean;
	/** Note that TripBuilder will use the cancellationPolicy if set. */
	cancellationPolicy: AccommodationCancellationPolicy;
	/**
	 * Offer Remarks
	 * Provide remarks returned by the supplier system.
	 */
	remarks?: AccommodationRemark[];
	/**
	 * Information that was required in the past to build a specific customer integration.
	 * Those fields are not required.
	 */
	supplierExtras?: SupplierSpecificExtraInformation;
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
	electronicContactDetails?: ContactElectronicContactDetails;
	/** Basic representation of a physical address. */
	address?: GeoAddress;
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
 * Electronic contacts like phone, email, and website
 * @example {"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"}
 */
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

/** @example {"bookingReference":"SUNHOTEL-12345#SUNHOTEL-67890","supplierReferences":["[\"SUNHOTEL-12345\",\"SUNHOTEL-67890\"]","[\"SUNHOTEL-12345\",\"SUNHOTEL-67890\"]"],"salesPrice":{"currency":"EUR","value":"230.2"},"cancellationPolicy":{"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"},"remarks":[{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"},{"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}],"status":"Booked"} */
export interface AccommodationBooking {
	/**
	 * Booking reference
	 * The booking reference returned by the book response. This reference allows the
	 * integration partner to uniquely identify the booking. It is limited to 2000 characters. Note that
	 * TripBuilder does not parse or interpret the booking reference.
	 * The integration partner can encode necessary information within the reference to
	 * facilitate booking cancellation while maintaining a stateless approach.
	 * @example "SUNHOTEL-12345#SUNHOTEL-67890"
	 */
	bookingReference: string;
	/**
	 * Supplier references
	 * Supplier booking Ids.
	 * - For suppliers where multiple bookings are required to fulfil the booking (one per
	 * room for example) we will end up with multiple supplier ids/references
	 * - This list will contain references for all the booking references, ordered by the
	 * room index (1st room → 1st reference)
	 *
	 * This is useful if end customer wants to check a particular booking in B2B system
	 */
	supplierReferences: string[];
	/**
	 * - Booked: Booking was confirmed.
	 * - OnRequest: Booking was confirmed "on request".
	 *   Only offers that have the onRequest flag set to
	 *   true can be booked on request.
	 */
	status: BookingStatus;
	salesPrice: CommonMonetaryValue;
	/** Note that TripBuilder will use the cancellationPolicy if set. */
	cancellationPolicy?: AccommodationCancellationPolicy;
	/**
	 * Booking Remarks
	 * Hotel reservation details as provided by end supplier.
	 */
	remarks?: AccommodationRemark[];
}

/**
 * Represents booking status on the supplier side
 * - Booked: Booking was confirmed.
 * - OnRequest: Booking was confirmed "on request".
 *   Only offers that have the onRequest flag set to
 *   true can be booked on request.
 * @default "Booked"
 * @example "Booked"
 */
export enum BookingStatus {
	Booked = 'Booked',
	OnRequest = 'OnRequest',
}

/**
 * Basic representation of a pax
 * @example {"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}
 */
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
 * Accommodation room
 * Detailed information about a room, including the room code, the board code and allocation reference.
 * @example {"allocationReference":1,"salesPrice":{"currency":"EUR","value":"230.2"},"boardCode":"BB","name":"Family room with sea view","roomCode":"DBL"}
 */
export interface AccommodationRoom {
	/**
	 * Pax allocation reference
	 * The Nezasa pax allocation reference (index 1 based reference)
	 * @format int32
	 * @min 1
	 * @max 6
	 * @example 1
	 */
	allocationReference: number;
	/**
	 * Supplier room code
	 * The supplier room code
	 * @example "DBL"
	 */
	roomCode: string;
	/**
	 * Nezasa board code
	 * Nezasa supports the following board codes:
	 *
	 * | Code      | Description                             |
	 * |-----------|-----------------------------------------|
	 * | RO        | No Meals                                |
	 * | SC        | Self Catering                           |
	 * | AB        | American Breakfast                      |
	 * | BB        | Breakfast                               |
	 * | CB        | Continental Breakfast                   |
	 * | DB        | Buffet Breakfast                        |
	 * | EB        | English Breakfast                       |
	 * | IB        | Irish Breakfast                         |
	 * | LB        | Light Breakfast                         |
	 * | SB        | Scottish Breakfast                      |
	 * | HB        | Half board                              |
	 * | BH        | Breakfast + Half board                  |
	 * | HBP       | Half board plus                         |
	 * | FB        | Full board                              |
	 * | FH        | Half board + Full board                 |
	 * | FBP       | Full board plus                         |
	 * | AI        | All inclusive                           |
	 * | AIP       | All inclusive plus                      |
	 * | AIPP      | All inclusive double plus               |
	 * | AILight   | All inclusive - drinks only during meals|
	 * | AIPremium | All inclusive plus premium services     |
	 * | AIUltra   | All inclusive plus ultra services       |
	 * | AP        | According to Program                    |
	 * | DC        | Dining credit included                  |
	 * | DO        | Dinner Only                             |
	 * | LO        | Lunch Only                              |
	 * @example "BB"
	 */
	boardCode: string;
	/**
	 * Room name
	 * The supplier room name or description
	 * @example "Family room with sea view"
	 */
	name?: string;
	salesPrice?: CommonMonetaryValue;
}

/**
 * Nezasa board code
 * Nezasa supports the following board codes:
 *
 * | Code      | Description                             |
 * |-----------|-----------------------------------------|
 * | RO        | No Meals                                |
 * | SC        | Self Catering                           |
 * | AB        | American Breakfast                      |
 * | BB        | Breakfast                               |
 * | CB        | Continental Breakfast                   |
 * | DB        | Buffet Breakfast                        |
 * | EB        | English Breakfast                       |
 * | IB        | Irish Breakfast                         |
 * | LB        | Light Breakfast                         |
 * | SB        | Scottish Breakfast                      |
 * | HB        | Half board                              |
 * | BH        | Breakfast + Half board                  |
 * | HBP       | Half board plus                         |
 * | FB        | Full board                              |
 * | FH        | Half board + Full board                 |
 * | FBP       | Full board plus                         |
 * | AI        | All inclusive                           |
 * | AIP       | All inclusive plus                      |
 * | AIPP      | All inclusive double plus               |
 * | AILight   | All inclusive - drinks only during meals|
 * | AIPremium | All inclusive plus premium services     |
 * | AIUltra   | All inclusive plus ultra services       |
 * | AP        | According to Program                    |
 * | DC        | Dining credit included                  |
 * | DO        | Dinner Only                             |
 * | LO        | Lunch Only                              |
 * @example "BB"
 */
export type AccommodationBoardCode = string;

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
 * Accommodation surcharge
 * Detailed about extra charges associated with the offer.
 * @example {"amount":{"currency":"EUR","value":"230.2"},"description":"City tax","included":true,"mandatory":false}
 */
export interface AccommodationSurcharge {
	amount: CommonMonetaryValue;
	/**
	 * whether the surcharge is included in the total amount
	 * @default true
	 * @example true
	 */
	included: boolean;
	/**
	 * Whether the surcharge is mandatory
	 * @default false
	 * @example false
	 */
	mandatory: boolean;
	/**
	 * Description of the surcharge
	 * @example "City tax"
	 */
	description?: string;
}

/**
 * The cancellation policy of the accommodation
 * Note that TripBuilder will use the cancellationPolicy if set.
 * @example {"rules":[{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"},{"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}],"cancellationType":"Unknown"}
 */
export interface AccommodationCancellationPolicy {
	/**
	 * Defines the cancellation policy type of a product.
	 *  - Free: The cancellation is free for some time after the booking.
	 *  - FeeApplies: There will be some cancellation fee regardless of when the booking is cancelled.
	 *  - NonRefundable: The cancellation fee is 100% once the offer is booked.
	 */
	cancellationType: CommonCancellationPolicy;
	rules: AccommodationCancellationPolicyRule[];
}

/**
 * A cancellation policy rule of the accommodation
 * A cancellation policy rule.
 * startDatetime and endDatetime define an interval where this rule applies.
 * Rules don't overlap and cover the whole period from now until the rental itself.
 * startDatetime is empty whenever the interval starts at now.
 * endDatetime is empty whenever the interval lasts until the rental itself.
 * Either percentage or amount needs to be provided.
 * @example {"startDatetime":"2023-08-01T00:00:00","amount":{"currency":"EUR","value":"230.2"},"percentage":50,"endDatetime":"2023-08-01T23:59:00"}
 */
export interface AccommodationCancellationPolicyRule {
	amount?: CommonMonetaryValue;
	/**
	 * a percentage of the booking
	 * @format int64
	 * @example 50
	 */
	percentage?: number;
	/**
	 * The start date time of the cancellation policy rule.
	 * This date is parsed / serialized through DateTimeFormatter.ISO_LOCAL_DATE_TIME (As defined by rfc3339).
	 * The field is empty if and only if the interval starts at now.
	 * @example "2023-08-01T00:00:00"
	 */
	startDatetime?: string;
	/**
	 * The end date time of the cancellation policy rule
	 * This date is parsed / serialized through DateTimeFormatter.ISO_LOCAL_DATE_TIME (As defined by rfc3339).
	 * The field is empty if and only if the interval lasts until the rental itself.
	 * @example "2023-08-01T23:59:00"
	 */
	endDatetime?: string;
}

/**
 * Accommodation remark
 * Extra information about the accommodation, like check-in and check-out times, accommodation information and additional costs.
 * @example {"language":"de","text":"Check-in time at 15:00. Check-out time at 11:00.","lang":"de"}
 */
export interface AccommodationRemark {
	/** 2-letter code (ISO 639-1) */
	lang: Language;
	/** 2-letter code (ISO 639-1) */
	language?: Language;
	/**
	 * Remarks sent by the reservation system.
	 * They can be plain text or formatted with Markdown.
	 * @example "Check-in time at 15:00. Check-out time at 11:00."
	 */
	text: string;
}

/**
 * Location information for the accommodation
 * @example {"locationType":"Country","locationCode":"MAD"}
 */
export interface AccommodationLocation {
	/**
	 * accommodation location code
	 * Location code that will depend on the location type
	 * @example "MAD"
	 */
	locationCode: string;
	locationType: AccommodationLocationType;
}

/** @default "Country" */
export enum AccommodationLocationType {
	Country = 'Country',
	Region = 'Region',
	Resort = 'Resort',
	Airport = 'Airport',
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

/**
 * Supplier specific extra information.
 * Information that was required in the past to build a specific customer integration.
 * Those fields are not required.
 * @example {"isExternal":true,"location":[{"locationType":"Country","locationCode":"MAD"},{"locationType":"Country","locationCode":"MAD"}]}
 */
export interface SupplierSpecificExtraInformation {
	/**
	 * Offer location
	 * Geography information of the accommodation
	 */
	location?: AccommodationLocation[];
	/** Whether the offer is external */
	isExternal?: boolean;
}
