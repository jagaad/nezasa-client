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

/** @example {"paxAges":[{"paxId":"pax1","age":27},{"paxId":"pax1","age":27}],"metadata":{"itineraryId":"1xinmvo5skro","agencyId":"ABC12345"},"filters":{"allowAirportChange":true,"requireHoldBaggage":true,"fareTypes":["PUBNEG","NET"],"maxStops":2,"includedCarriers":[],"maxDurationInMinutes":180,"maxLayoverInMinutes":120,"excludedCarriers":[{"iataCode":"LH"},{"iataCode":"BA"}],"transportTypes":"FLIGHT","transportClasses":[{"flightClass":"FLIGHT_CLASS_ECONOMY"}]},"connections":[{"arrivalArea":{"iataCode":"NYC"},"departureMaxTime":"22:00","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalMaxTime":"18:00","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","departureMinTime":"08:00","arrivalLocations":[{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"}],"arrivalMinTime":"08:00","connectionId":"1","departureArea":{"iataCode":"PAR"},"departureLocations":[{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"}],"departureDate":"2024-02-10"},{"arrivalArea":{"iataCode":"NYC"},"departureMaxTime":"22:00","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalMaxTime":"18:00","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","departureMinTime":"08:00","arrivalLocations":[{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"}],"arrivalMinTime":"08:00","connectionId":"1","departureArea":{"iataCode":"PAR"},"departureLocations":[{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"}],"departureDate":"2024-02-10"}]} */
export interface TransportOffersRequest {
	/** A list of transport connections. */
	connections?: RequestTransportConnection[];
	/** The ages of the passengers. */
	paxAges?: PaxAge[];
	filters?: Filters;
	metadata?: Metadata;
}

/** @example {"offers":[{"componentSourceType":"Private","fareTypes":["NET"],"ticketingLimitDate":"2022-12-31","pnrCount":1,"pricePerPax":[{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"},{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"}],"salesPrice":{"currency":"EUR","value":"230.2"},"offerId":"offerId","priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"passengerRequiredFields":{"isPassportIssuingCountryCodeRequired":true,"isPassportNumberRequired":true,"isPassportExpirationDateRequired":true,"isNationalityRequired":true},"connections":[{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]},{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]}],"ticketingLimitTime":"23:59"},{"componentSourceType":"Private","fareTypes":["NET"],"ticketingLimitDate":"2022-12-31","pnrCount":1,"pricePerPax":[{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"},{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"}],"salesPrice":{"currency":"EUR","value":"230.2"},"offerId":"offerId","priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"passengerRequiredFields":{"isPassportIssuingCountryCodeRequired":true,"isPassportNumberRequired":true,"isPassportExpirationDateRequired":true,"isNationalityRequired":true},"connections":[{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]},{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]}],"ticketingLimitTime":"23:59"}],"rawRequests":["{ queryId: 1257, success: true }"],"rawResponses":["{ queryId: 1257, success: true }"]} */
export interface TransportOffersResponse {
	/** List of transport available offers. */
	offers?: TransportOffer[];
	/**
	 * If there's communication with an external system, a list of unprocessed requests from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawRequests?: string[];
	/**
	 * If there's communication with an external system, a list of unprocessed responses from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawResponses?: string[];
}

/** @example {"metadata":{"itineraryId":"1xinmvo5skro","agencyId":"ABC12345"},"quoteId":"quoteId"} */
export interface TransportRulesRequest {
	/** The `offerId` of the quote returned from the availability check which rules to retrieve. */
	quoteId?: string;
	metadata?: Metadata;
}

/** @example {"rawRequests":["{ queryId: 1257, success: true }"],"text":"text","rawResponses":["{ queryId: 1257, success: true }"]} */
export interface TransportRulesResponse {
	text: string;
	/**
	 * If there's communication with an external system, a list of unprocessed requests from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawRequests?: string[];
	/**
	 * If there's communication with an external system, a list of unprocessed responses from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawResponses?: string[];
}

/** @example {"paxAges":[{"paxId":"pax1","age":27},{"paxId":"pax1","age":27}],"metadata":{"itineraryId":"1xinmvo5skro","agencyId":"ABC12345"},"offerId":"offerId"} */
export interface TransportAvailabilityRequest {
	/** The `offerId` identifying the offer from the search results. */
	offerId?: string;
	/** The ages of the passengers. */
	paxAges?: PaxAge[];
	metadata?: Metadata;
}

/** @example {"quote":{"componentSourceType":"Private","fareTypes":["NET"],"ticketingLimitDate":"2022-12-31","pnrCount":1,"pricePerPax":[{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"},{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"}],"salesPrice":{"currency":"EUR","value":"230.2"},"offerId":"offerId","priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"passengerRequiredFields":{"isPassportIssuingCountryCodeRequired":true,"isPassportNumberRequired":true,"isPassportExpirationDateRequired":true,"isNationalityRequired":true},"connections":[{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]},{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]}],"ticketingLimitTime":"23:59"},"persistedStorage":"persistedStorage","rawRequests":["{ queryId: 1257, success: true }"],"rawResponses":["{ queryId: 1257, success: true }"]} */
export interface TransportAvailabilityResponse {
	quote?: TransportOffer;
	/** This field, serves as a repository for any pertinent data that need to pass across subsequent interactions, its content should be minimal. It remains unaltered by TripBuilder and is solely stored and returned in its original form. */
	persistedStorage?: string;
	/**
	 * If there's communication with an external system, a list of unprocessed requests from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawRequests?: string[];
	/**
	 * If there's communication with an external system, a list of unprocessed responses from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawResponses?: string[];
}

/** @example {"passengers":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}],"metadata":{"itineraryId":"1xinmvo5skro","agencyId":"ABC12345"},"options":{"instantTicketOrder":true},"persistedStorage":"persistedStorage","quoteId":"quoteId","billing":{"firstName":"Martin","lastName":"Müller","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"phone":"+49 123 456789","email":"martin@example.com"}} */
export interface TransportBookRequest {
	/** The `offerId` of the quote returned from the availability check to be booked. */
	quoteId?: string;
	/** A list of passenger information. */
	passengers?: CommonPax[];
	billing?: BillingInformation;
	options?: BookOptions;
	/** This field, sourced from the TransportAvailabilityResponse, serves as a repository for any pertinent data that need to pass across subsequent interactions. It remains unaltered by TripBuilder and is solely stored and returned in its original form. */
	persistedStorage?: string;
	metadata?: Metadata;
}

/** @example {"pnrLocator":"pnrLocator","bookStatus":"BOOKED","salesPrice":{"currency":"EUR","value":"230.2"},"rawRequests":["{ queryId: 1257, success: true }"],"ticketInformation":[{"bsparcReconciled":true,"number":"TICKET_123","paxRefIds":["123"],"type":"TKT","segmentIds":["456"],"status":"CONFIRMED"},{"bsparcReconciled":true,"number":"TICKET_123","paxRefIds":["123"],"type":"TKT","segmentIds":["456"],"status":"CONFIRMED"}],"pnrStatus":"OPEN","bookingId":"bookingId","rawResponses":["{ queryId: 1257, success: true }"]} */
export interface TransportBookResponse {
	/** The result of the successful booking call. If the booking fails, an error message will be returned. */
	bookStatus: TransportBookingStatus;
	salesPrice?: CommonMonetaryValue;
	/** The ID of the booking. May be a plain PNR locator or other external system ID or it's derivative. */
	bookingId?: string;
	/** The PNR locator for the booking if available. */
	pnrLocator?: string;
	/** The list of tickets for the booking. */
	ticketInformation?: TicketInformation[];
	/**
	 * The status of the Passenger Name Record (PNR).
	 *
	 * Enum Values:
	 * - `CANCELLED`: All segments of the booking are canceled. This can happen at any point and may involve penalties or fees depending on the ticket rules. It is a formal cancellation process with potential financial implications.
	 * - `ISSUED`: The booking is confirmed, and the ticket(s) have been issued. Payment has been processed, and either an e-ticket or paper ticket has been generated, meaning the passenger has a valid ticket for travel.
	 * - `OPEN`: The booking is incomplete, with one or more segments or details not yet fully defined or confirmed.
	 * - `ORDERED`: Refers to a reservation status where the booking request has been placed, but ticket issuance or confirmation is pending. This status may vary depending on the airline or reservation system.
	 * - `REFUNDED`: All segments of the booking have been refunded, and any associated tickets are void.
	 * - `UNKNOWN`: The current status of the PNR cannot be determined, or it does not match any known statuses.
	 * - `VOIDED`: The booking has been immediately reversed within a short time window, typically without penalties, as if the ticket was never issued.
	 */
	pnrStatus?: PnrStatus;
	/**
	 * If there's communication with an external system, a list of unprocessed requests from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawRequests?: string[];
	/**
	 * If there's communication with an external system, a list of unprocessed responses from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawResponses?: string[];
}

/** @example {"metadata":{"itineraryId":"1xinmvo5skro","agencyId":"ABC12345"},"options":{"forceCancellation":true},"bookingId":"BOOKING-123456"} */
export interface TransportCancelRequest {
	/**
	 * The `bookingId` of the booking to be canceled.
	 * @example "BOOKING-123456"
	 */
	bookingId?: string;
	options?: CancelOptions;
	metadata?: Metadata;
}

/** @example {"cancelStatus":"CANCELLED","rawRequests":["{ queryId: 1257, success: true }"],"ticketInformation":[{"bsparcReconciled":true,"number":"TICKET_123","paxRefIds":["123"],"type":"TKT","segmentIds":["456"],"status":"CONFIRMED"},{"bsparcReconciled":true,"number":"TICKET_123","paxRefIds":["123"],"type":"TKT","segmentIds":["456"],"status":"CONFIRMED"}],"rawResponses":["{ queryId: 1257, success: true }"]} */
export interface TransportCancelResponse {
	/** The result of a successful cancelling call. If the cancellation fails, the error message will be returned. */
	cancelStatus: TransportCancelStatus;
	/** The list of tickets for the booking. */
	ticketInformation?: TicketInformation[];
	/**
	 * If there's communication with an external system, a list of unprocessed requests from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawRequests?: string[];
	/**
	 * If there's communication with an external system, a list of unprocessed responses from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawResponses?: string[];
}

/** @example {"metadata":{"itineraryId":"1xinmvo5skro","agencyId":"ABC12345"},"bookingId":"BOOKING-123456"} */
export interface TransportRetrieveRequest {
	/**
	 * The `bookingId` of the booking to be retrieved.
	 * @example "BOOKING-123456"
	 */
	bookingId?: string;
	metadata?: Metadata;
}

/** @example {"pnrLocator":"pnrLocator","rawRequests":["{ queryId: 1257 }"],"ancillaryList":[{"ticketNumber":"ticketNumber","code":"code","paxRefIds":["123"],"salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","description":"description","priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"segmentIds":["456"],"createDate":"createDate","status":"CONFIRMED"},{"ticketNumber":"ticketNumber","code":"code","paxRefIds":["123"],"salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","description":"description","priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"segmentIds":["456"],"createDate":"createDate","status":"CONFIRMED"}],"details":{"componentSourceType":"Private","fareTypes":["PUBNEG","NET"],"pax":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}],"ticketingLimitDate":"2022-12-31","pricePerPax":[{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"},{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"}],"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}],"ticketingLimitTime":"23:59"},"ticketInformation":[{"bsparcReconciled":true,"number":"TICKET_123","paxRefIds":["123"],"type":"TKT","segmentIds":["456"],"status":"CONFIRMED"},{"bsparcReconciled":true,"number":"TICKET_123","paxRefIds":["123"],"type":"TKT","segmentIds":["456"],"status":"CONFIRMED"}],"pnrStatus":"OPEN","rawResponses":["{ queryId: 1257, success: true }"]} */
export interface TransportRetrieveResponse {
	/** The PNR locator for the booking. */
	pnrLocator?: string;
	/**
	 * The status of the Passenger Name Record (PNR).
	 *
	 * Enum Values:
	 * - `CANCELLED`: All segments of the booking are canceled. This can happen at any point and may involve penalties or fees depending on the ticket rules. It is a formal cancellation process with potential financial implications.
	 * - `ISSUED`: The booking is confirmed, and the ticket(s) have been issued. Payment has been processed, and either an e-ticket or paper ticket has been generated, meaning the passenger has a valid ticket for travel.
	 * - `OPEN`: The booking is incomplete, with one or more segments or details not yet fully defined or confirmed.
	 * - `ORDERED`: Refers to a reservation status where the booking request has been placed, but ticket issuance or confirmation is pending. This status may vary depending on the airline or reservation system.
	 * - `REFUNDED`: All segments of the booking have been refunded, and any associated tickets are void.
	 * - `UNKNOWN`: The current status of the PNR cannot be determined, or it does not match any known statuses.
	 * - `VOIDED`: The booking has been immediately reversed within a short time window, typically without penalties, as if the ticket was never issued.
	 */
	pnrStatus?: PnrStatus;
	/** Detailed information about the already booked transport. */
	details: TransportDetails;
	/** The list of tickets for the booking. */
	ticketInformation?: TicketInformation[];
	/** The list of ancillary information for the booking. */
	ancillaryList?: AncillaryInformation[];
	/**
	 * If there's communication with an external system, a list of unprocessed requests from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257 }"]
	 */
	rawRequests?: string[];
	/**
	 * If there's communication with an external system, a list of unprocessed responses from the query will be provided. If no external system is involved, the list may be empty. The list is sorted by the request time and the possible secrets, including credentials, are masked.
	 * @example ["{ queryId: 1257, success: true }"]
	 */
	rawResponses?: string[];
}

/** @example {"arrivalArea":{"iataCode":"NYC"},"departureMaxTime":"22:00","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalMaxTime":"18:00","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","departureMinTime":"08:00","arrivalLocations":[{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"}],"arrivalMinTime":"08:00","connectionId":"1","departureArea":{"iataCode":"PAR"},"departureLocations":[{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"}],"departureDate":"2024-02-10"} */
export interface RequestTransportConnection {
	/**
	 * Unique identifier for the connection. Used to identify connections in an offer.
	 * @example "1"
	 */
	connectionId: string;
	/**
	 * The departure date in the format YYYY-MM-DD. This field will be provided in all requested connections, except for the first one, which must specify either `departureDate` or `arrivalDate`.
	 * @format date
	 * @example "2024-02-10"
	 */
	departureDate?: string;
	departureLocation?: TransportLocation;
	/**
	 * Information about the departure locations.
	 * @minItems 1
	 */
	departureLocations?: TransportLocation[];
	/** Information about the departure area if applicable. */
	departureArea?: RequestTransportConnectionDepartureArea;
	/**
	 * Minimum departure time in the format HH:MM.
	 * @format time
	 * @example "08:00"
	 */
	departureMinTime?: string;
	/**
	 * Maximum departure time in the format HH:MM, inclusive.
	 * @format time
	 * @example "22:00"
	 */
	departureMaxTime?: string;
	/**
	 * The arrival date in the format YYYY-MM-DD. May be provided for the first requested connection only.
	 * @format date
	 * @example "2024-02-10"
	 */
	arrivalDate?: string;
	arrivalLocation?: TransportLocation;
	/**
	 * Information about the arrival locations.
	 * @minItems 1
	 */
	arrivalLocations?: TransportLocation[];
	/** Information about the arrival area if applicable. */
	arrivalArea?: RequestTransportConnectionArrivalArea;
	/**
	 * Minimum arrival time in the format HH:MM.
	 * @format time
	 * @example "08:00"
	 */
	arrivalMinTime?: string;
	/**
	 * Maximum arrival time in the format HH:MM, inclusive.
	 * @format time
	 * @example "18:00"
	 */
	arrivalMaxTime?: string;
}

/** @example {"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"} */
export interface TransportLocation {
	/**
	 * IATA code for the location.
	 * @example "CDG"
	 */
	iataCode: string;
	/** Type of the transport location */
	locationType: TransportLocationType;
	/**
	 * Terminal at the location.
	 * @example "A"
	 */
	terminal?: string;
}

/** @example {"paxId":"pax1","age":27} */
export interface PaxAge {
	/**
	 * Unique identifier for the passenger. Used to identify baggage in the offer.
	 * @example "pax1"
	 */
	paxId: string;
	/**
	 * Age of the passenger.
	 * @format int32
	 * @example 27
	 */
	age: number;
}

/** @example {"allowAirportChange":true,"requireHoldBaggage":true,"fareTypes":["PUBNEG","NET"],"maxStops":2,"includedCarriers":[],"maxDurationInMinutes":180,"maxLayoverInMinutes":120,"excludedCarriers":[{"iataCode":"LH"},{"iataCode":"BA"}],"transportTypes":"FLIGHT","transportClasses":[{"flightClass":"FLIGHT_CLASS_ECONOMY"}]} */
export interface Filters {
	/**
	 * List of carrier to which the search will be limited. An empty list means no limit.
	 * @example []
	 */
	includedCarriers?: Carrier[];
	/**
	 * List of carrier codes to be excluded. An empty list means no carriers are excluded.
	 * @example [{"iataCode":"LH"},{"iataCode":"BA"}]
	 */
	excludedCarriers?: Carrier[];
	/** If true, only include offers that allow hold baggage. */
	requireHoldBaggage?: boolean;
	/** @example "FLIGHT" */
	transportTypes?: TransportType[];
	/**
	 * List of transport classes to include per type. No element for a given type means all classes are included.
	 * @example [{"flightClass":"FLIGHT_CLASS_ECONOMY"}]
	 */
	transportClasses?: TransportClass[];
	/**
	 * Maximum number of stops per connection.
	 * @format int32
	 * @example 2
	 */
	maxStops?: number;
	/**
	 * List of fare types to include. An empty list means all fare types are included.
	 * @example ["PUBNEG","NET"]
	 */
	fareTypes?: TransportFareType[];
	/**
	 * Maximum total duration of the journey in minutes.
	 * @format int32
	 * @example 180
	 */
	maxDurationInMinutes?: number;
	/**
	 * Maximum allowed layover time per connection in minutes.
	 * @format int32
	 * @example 120
	 */
	maxLayoverInMinutes?: number;
	/** If true, allow changing airports during the journey. */
	allowAirportChange?: boolean;
}

/**
 * Represents the available classes for different transport types, but only one at a time.
 * @example {"flightClass":"FLIGHT_CLASS_ECONOMY"}
 */
export interface TransportClass {
	/** Represents the class of a flight, specifying different levels of comfort and amenities. */
	flightClass?: FlightClassType;
}

/** @example {"itineraryId":"1xinmvo5skro","agencyId":"ABC12345"} */
export interface Metadata {
	/**
	 * Nezasa ID of the itinerary.
	 * ID of the planned trip. Will be the same for all bookings made for this trip.
	 * @example "1xinmvo5skro"
	 */
	itineraryId: string;
	/**
	 * Supplier specific Agency ID.
	 * Customer has an option in Trip Builder to configure Supplier specific Agency ID. If configured, the ID is provided here.
	 * @example "ABC12345"
	 */
	agencyId?: string;
}

/** @example {"componentSourceType":"Private","fareTypes":["NET"],"ticketingLimitDate":"2022-12-31","pnrCount":1,"pricePerPax":[{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"},{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"}],"salesPrice":{"currency":"EUR","value":"230.2"},"offerId":"offerId","priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"passengerRequiredFields":{"isPassportIssuingCountryCodeRequired":true,"isPassportNumberRequired":true,"isPassportExpirationDateRequired":true,"isNationalityRequired":true},"connections":[{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]},{"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]}],"ticketingLimitTime":"23:59"} */
export interface TransportOffer {
	/**
	 * Identifier of the offer. This reference allows the
	 * integration partner to uniquely identify the booking. Note that
	 * TripBuilder does not parse or interpret the booking reference.
	 * The integration partner can encode necessary information within the reference to
	 * facilitate booking cancellation while maintaining a stateless approach.
	 */
	offerId: string;
	salesPrice: CommonMonetaryValue;
	/** Detailed information about the connections included in this offer */
	connections?: TransportConnectionOffer[];
	/**
	 * Date until the ticket has to be purchased after booking in the format YYYY-MM-DD in departure timezone
	 * @example "2022-12-31"
	 */
	ticketingLimitDate?: string;
	/**
	 * Time of the day until the ticket has to be purchased after booking in the format HH:MM in departure timezone
	 * @example "23:59"
	 */
	ticketingLimitTime?: string;
	/**
	 * The number of Passenger Name Records (PNRs) associated with this offer
	 * @format int32
	 * @example 1
	 */
	pnrCount?: number;
	/**
	 * Fare types applicable to this offer
	 * @example ["NET"]
	 */
	fareTypes?: TransportFareType[];
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
	componentSourceType?: NezasaComponentSourceType;
	/** Detailed information about the sales price breakdown. */
	priceBreakdown?: PriceBreakdown;
	/** Breakdown booked transport prices per offer. */
	pricePerPax?: CommonPaxPriceInformation[];
	passengerRequiredFields?: PassengerRequiredFields;
}

/** @example {"departureTime":"13:15","departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"distance":{"unit":"MILES","value":123.56},"arrivalTime":"15:49","connectionId":"connectionId","transportType":"FLIGHT","departureDate":"2024-02-10","arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}]} */
export interface TransportConnectionOffer {
	/** Identifier for the connection. */
	connectionId: string;
	departureLocation: TransportLocation;
	/**
	 * Departure date of the connection in the format YYYY-MM-DD
	 * @example "2024-02-10"
	 */
	departureDate: string;
	/**
	 * Departure local time of the connection in the format HH:MM
	 * @example "13:15"
	 */
	departureTime: string;
	arrivalLocation: TransportLocation;
	/**
	 * Arrival date of the connection in the format YYYY-MM-DD
	 * @example "2024-02-10"
	 */
	arrivalDate: string;
	/**
	 * Arrival local time of the connection in the format HH:MM
	 * @example "15:49"
	 */
	arrivalTime: string;
	/** TransportType represents the various modes of transportation. */
	transportType?: TransportType;
	/** List of segments in the connection. */
	segments?: TransportConnectionOfferSegment[];
	/** Represents the distance between two locations. */
	distance?: TransportDistance;
}

/** @example {"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"} */
export interface TransportConnectionOfferSegment {
	/**
	 * Identifier for the segment.
	 * @example "1"
	 */
	segmentId: string;
	/** TransportType represents the various modes of transportation. */
	transportType: TransportType;
	departureLocation: TransportLocation;
	/**
	 * Departure date of the segment in the format YYYY-MM-DD
	 * @example "2024-02-10"
	 */
	departureDate: string;
	/**
	 * Departure local time of the segment in the format HH:MM
	 * @example "13:15"
	 */
	departureTime: string;
	arrivalLocation: TransportLocation;
	/**
	 * Arrival date of the segment in the format YYYY-MM-DD
	 * @example "2024-02-10"
	 */
	arrivalDate: string;
	/**
	 * Arrival local time of the segment in the format HH:MM
	 * @example "15:49"
	 */
	arrivalTime: string;
	carrier: Carrier;
	operatingCarrier: Carrier;
	/**
	 * Identifier of the transport (flight number, etc.).
	 * @example "LX1348"
	 */
	transportNumber: string;
	/**
	 * Identifier of the operating transport (flight number, etc.).
	 * @example "LO 5054"
	 */
	operatingTransportNumber?: string;
	/**
	 * Equipment Code of the segment.
	 * @example "14F"
	 */
	vehicleCode: string;
	/**
	 * Equipment of the segment.
	 * @example "Airbus A220-300 Passenger"
	 */
	vehicle?: string;
	/** Array of baggage offers corresponding to passenger ages. */
	baggagesPerPax?: PaxBaggageOffers[];
	/** Represents the available classes for different transport types, but only one at a time. */
	transportClass: TransportClass;
	/**
	 * Duration of the segment in minutes.
	 * @example 115
	 */
	durationInMinutes: number;
	/** Number of technical stops during the segment. */
	numberOfTechnicalStops: number;
	/** Booking class code for the segment. */
	bookingClassCode: string;
	/**
	 * Name of the fare family associated with the segment
	 * @example "Economy Saver Plus"
	 */
	fareFamilyName?: string;
	/** Represents the distance between two locations. */
	distance?: TransportDistance;
	/** List of seats for the segment. */
	seats?: TransportSeat[];
	/**
	 * Reference used by the airline to identify the customer’s bookings in their system.
	 * @example "VY/U44M8"
	 */
	airlineReference?: string;
	/**
	 * Supplier ID that provided the booking reference number.
	 * @example "AMADEUS"
	 */
	vendor?: string;
	/**
	 * The unique identifier for the branded fare associated with this flight, distinguishing between different fare brands.
	 * @example "Basic"
	 */
	brandedFareId?: string;
	/**
	 * A brief description of the branded fare, outlining included features and services.
	 * @example "Seat selection"
	 */
	brandedFareDescription?: string;
}

/**
 * Baggage offers for a passenger category. These offers can be specific to a passenger or to an age category.
 * @example {"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}
 */
export interface PaxBaggageOffers {
	/**
	 * Unique identifier of the passenger from the request. This field is optional. If provided, the baggage offers are specific to this passenger.
	 * @example "pax1"
	 */
	paxId?: string;
	/**
	 * Minimum age of the passenger for the baggage category. If not set, it is assumed to be 0, meaning there is no lower age limit.
	 * @example 0
	 */
	minAge?: number;
	/**
	 * Maximum age of the passenger for the baggage category. If not set, it is assumed that there is no upper age limit.
	 * @example 2
	 */
	maxAge?: number;
	/** List of baggage offers available for the passenger. These offers can be either specific to the passenger or applicable to a certain age range. */
	baggageOffers?: BaggageOffer[];
}

/** @example {"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1} */
export interface BaggageOffer {
	/** Type of baggage. */
	baggageType: BaggageType;
	/** Indicates whether the baggage is included. */
	included: boolean;
	/**
	 * Maximum count of baggage items (empty means limit not known).
	 * @example 1
	 */
	maxCount?: number;
	salesPrice?: CommonMonetaryValue;
	/**
	 * Maximum sum of height + width + length in centimeters.
	 * @format int32
	 * @example 220
	 */
	maxSumInCm?: number;
	/**
	 * Maximum width of the baggage in centimeters.
	 * @format int32
	 * @example 80
	 */
	maxWidthInCm?: number;
	/**
	 * Maximum height of the baggage in centimeters.
	 * @format int32
	 * @example 120
	 */
	maxHeightInCm?: number;
	/**
	 * Maximum length of the baggage in centimeters.
	 * @format int32
	 * @example 60
	 */
	maxLengthInCm?: number;
	/**
	 * Maximum weight of the baggage in kilograms.
	 * @format int32
	 * @example 7
	 */
	maxWeightInKg?: number;
	/**
	 * Additional remarks or comments about the baggage.
	 * @example "Invoiced separately."
	 */
	remark?: string;
}

/**
 * Represents the distance between two locations.
 * @example {"unit":"MILES","value":123.56}
 */
export interface TransportDistance {
	/** The unit of distance for the transport. */
	unit: TransportDistanceUnit;
	/**
	 * The numerical value representing the distance, measured in the units specified by the 'unit' field.
	 * @format decimal
	 * @example 123.56
	 */
	value: number;
}

/**
 * Seat information for a passenger.
 * @example {"column":"A","paxId":"1","row":"10"}
 */
export interface TransportSeat {
	/**
	 * Unique identifier for the passenger. Used to identify the passenger seat in the offer.
	 * @example "1"
	 */
	paxId: string;
	/**
	 * The row reference for the seat.
	 * @example "10"
	 */
	row: string;
	/**
	 * The column reference for the seat.
	 * @example "A"
	 */
	column: string;
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

/** @example {"firstName":"Martin","lastName":"Müller","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"phone":"+49 123 456789","email":"martin@example.com"} */
export interface BillingInformation {
	/**
	 * Phone number.
	 * @example "+49 123 456789"
	 */
	phone: string;
	/**
	 * Email address.
	 * @example "martin@example.com"
	 */
	email: string;
	/**
	 * First name.
	 * @example "Martin"
	 */
	firstName: string;
	/**
	 * Last name.
	 * @example "Müller"
	 */
	lastName: string;
	/** Basic representation of a physical address. */
	address: GeoAddress;
}

/** @example {"instantTicketOrder":true} */
export interface BookOptions {
	/** If true, the booking is expected to be confirmed instantly. */
	instantTicketOrder?: boolean;
}

/**
 * The result of the successful booking call. If the booking fails, an error message will be returned.
 * @example "BOOKED"
 */
export enum TransportBookingStatus {
	BOOKED = 'BOOKED',
	UNKNOWN = 'UNKNOWN',
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
 * Detailed information about a specific transport ticket.
 * @example {"bsparcReconciled":true,"number":"TICKET_123","paxRefIds":["123"],"type":"TKT","segmentIds":["456"],"status":"CONFIRMED"}
 */
export interface TicketInformation {
	/**
	 * The unique identifier of the passenger associated with the ticket(this is referenced to CommonPax#supplierRefId).
	 * @example ["123"]
	 */
	paxRefIds: string[];
	/**
	 * The unique identifier of the travel segment associated with the ticket.
	 * @example ["456"]
	 */
	segmentIds: string[];
	/**
	 * The status received from the supplier.
	 * @example "CONFIRMED"
	 */
	status: string;
	/** The type of the transport ticket. */
	type?: TransportTicketType;
	/**
	 * The unique ticket number assigned to this specific ticket.
	 * @example "TICKET_123"
	 */
	number?: string;
	/** Indicates whether a booking has been reconciled in BSP (Billing and Settlement Plan). */
	bsparcReconciled?: boolean;
}

/**
 * The type of the transport ticket.
 * @example "TKT"
 */
export enum TransportTicketType {
	TKT = 'TKT',
	EMD = 'EMD',
}

/**
 * The status of the Passenger Name Record (PNR).
 *
 * Enum Values:
 * - `CANCELLED`: All segments of the booking are canceled. This can happen at any point and may involve penalties or fees depending on the ticket rules. It is a formal cancellation process with potential financial implications.
 * - `ISSUED`: The booking is confirmed, and the ticket(s) have been issued. Payment has been processed, and either an e-ticket or paper ticket has been generated, meaning the passenger has a valid ticket for travel.
 * - `OPEN`: The booking is incomplete, with one or more segments or details not yet fully defined or confirmed.
 * - `ORDERED`: Refers to a reservation status where the booking request has been placed, but ticket issuance or confirmation is pending. This status may vary depending on the airline or reservation system.
 * - `REFUNDED`: All segments of the booking have been refunded, and any associated tickets are void.
 * - `UNKNOWN`: The current status of the PNR cannot be determined, or it does not match any known statuses.
 * - `VOIDED`: The booking has been immediately reversed within a short time window, typically without penalties, as if the ticket was never issued.
 * @example "OPEN"
 */
export enum PnrStatus {
	CANCELLED = 'CANCELLED',
	ISSUED = 'ISSUED',
	OPEN = 'OPEN',
	ORDERED = 'ORDERED',
	REFUNDED = 'REFUNDED',
	UNKNOWN = 'UNKNOWN',
	VOIDED = 'VOIDED',
}

/** @example {"forceCancellation":true} */
export interface CancelOptions {
	/** If true, the booking is cancelled even if there are tickets attached to the booking. The tickets have to be cancelled separately. */
	forceCancellation?: boolean;
}

/**
 * The result of a successful cancelling call. If the cancellation fails, the error message will be returned.
 * @example "CANCELLED"
 */
export enum TransportCancelStatus {
	CANCELLED = 'CANCELLED',
	UNKNOWN = 'UNKNOWN',
}

/**
 * Detailed information about the already booked transport.
 * @example {"componentSourceType":"Private","fareTypes":["PUBNEG","NET"],"pax":[{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30},{"passportNumber":"C3045654","lastName":"Riverdance","address":{"country":"Germany","city":"Littletown","street":"132, My Street","countryCode":"DE","postalCode":"BG23 4YZ","street2":"street2","region":"region"},"gender":"Male","supplierRefId":"supplierRefId","passengerReduction":"passengerReduction","secondOrAdditionalNames":["secondOrAdditionalNames","secondOrAdditionalNames"],"title":"MR","birthDate":"1990-01-01","firstName":"Mike","nezasaRefId":"nezasaRefId","nationality":"DE","electronicContactDetails":{"website":"www.example.com","phones":[{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"},{"mobile":true,"company":false,"landline":false,"fax":false,"value":"+41 44 123 45 67"}],"email":"mike.riverdance@example.com"},"passportIssuingCountryCode":"passportIssuingCountryCode","isMainContact":true,"passportExpirationDate":"2030-01-01","age":30}],"ticketingLimitDate":"2022-12-31","pricePerPax":[{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"},{"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"}],"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"segments":[{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"},{"departureTime":"13:15","bookingClassCode":"bookingClassCode","brandedFareDescription":"Seat selection","distance":{"unit":"MILES","value":123.56},"seats":[{"column":"A","paxId":"1","row":"10"},{"column":"A","paxId":"1","row":"10"}],"numberOfTechnicalStops":0,"vehicle":"Airbus A220-300 Passenger","brandedFareId":"Basic","arrivalTime":"15:49","vendor":"AMADEUS","segmentId":"1","transportClass":{"flightClass":"FLIGHT_CLASS_ECONOMY"},"transportNumber":"LX1348","fareFamilyName":"Economy Saver Plus","transportType":null,"departureDate":"2024-02-10","airlineReference":"VY/U44M8","operatingCarrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"departureLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"durationInMinutes":115,"vehicleCode":"14F","baggagesPerPax":[{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"},{"maxAge":2,"baggageOffers":[{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1},{"maxWeightInKg":7,"baggageType":"BAGGAGE_TYPE_HAND","maxWidthInCm":80,"maxHeightInCm":120,"maxLengthInCm":60,"salesPrice":{"currency":"EUR","value":"230.2"},"maxSumInCm":220,"remark":"Invoiced separately.","included":true,"maxCount":1}],"minAge":0,"paxId":"pax1"}],"arrivalLocation":{"iataCode":"CDG","locationType":"AIRPORT","terminal":"A"},"arrivalDate":"2024-02-10","carrier":{"iataCode":"LH","icaoCode":"DLH","name":"Air France"},"operatingTransportNumber":"LO 5054"}],"ticketingLimitTime":"23:59"}
 */
export interface TransportDetails {
	/** List of segments in the transport. */
	segments: TransportConnectionOfferSegment[];
	/** List of passengers in the transport. Only name, surname, gender, birthDate, nationality and passport number are required. */
	pax: CommonPax[];
	salesPrice?: CommonMonetaryValue;
	/**
	 * Date until the ticket has to be purchased after booking in the format YYYY-MM-DD in departure timezone
	 * @example "2022-12-31"
	 */
	ticketingLimitDate?: string;
	/**
	 * Time of the day until the ticket has to be purchased after booking in the format HH:MM in departure timezone
	 * @example "23:59"
	 */
	ticketingLimitTime?: string;
	/**
	 * List of Fare types for the transport.
	 * @example ["PUBNEG","NET"]
	 */
	fareTypes?: TransportFareType[];
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
	componentSourceType?: NezasaComponentSourceType;
	/** Detailed information about the sales price breakdown. */
	priceBreakdown?: PriceBreakdown;
	/** Breakdown booked transport prices per passenger. */
	pricePerPax?: CommonPaxPriceInformation[];
}

/**
 * Detailed information about a specific transport ticket.
 * @example {"ticketNumber":"ticketNumber","code":"code","paxRefIds":["123"],"salesPrice":{"currency":"EUR","value":"230.2"},"name":"name","description":"description","priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"segmentIds":["456"],"createDate":"createDate","status":"CONFIRMED"}
 */
export interface AncillaryInformation {
	/**
	 * The list of passengers associated with the ticket(this is referenced to pax#supplierRefId).
	 * @example ["123"]
	 */
	paxRefIds: string[];
	/**
	 * The list of segments associated with the ticket.
	 * @example ["456"]
	 */
	segmentIds: string[];
	code?: string;
	name?: string;
	description?: string;
	createDate?: string;
	ticketNumber?: string;
	salesPrice?: CommonMonetaryValue;
	/** Detailed information about the sales price breakdown. */
	priceBreakdown?: PriceBreakdown;
	/** The status of the ancillary information. */
	status: AncillaryStatus;
}

/**
 * The status of the ancillary information.
 * @example "CONFIRMED"
 */
export enum AncillaryStatus {
	CONFIRMED = 'CONFIRMED',
	CANCELLED = 'CANCELLED',
}

/**
 * Type of the transport location
 * @example "AIRPORT"
 */
export enum TransportLocationType {
	UNKNOWN = 'UNKNOWN',
	AIRPORT = 'AIRPORT',
	TRAIN_STATION = 'TRAIN_STATION',
	BUS_STATION = 'BUS_STATION',
	AREA = 'AREA',
}

/** @example {"iataCode":"LH","icaoCode":"DLH","name":"Air France"} */
export interface Carrier {
	/**
	 * Name of the carrier.
	 * @example "Air France"
	 */
	name?: string;
	/**
	 * IATA code of the carrier. Either this or icaoCode must be present.
	 * @example "LH"
	 */
	iataCode?: string;
	/**
	 * ICAO code of the carrier. Either this or iataCode must be present.
	 * @example "DLH"
	 */
	icaoCode?: string;
}

/** TransportType represents the various modes of transportation. */
export enum TransportType {
	FLIGHT = 'FLIGHT',
	TRAIN = 'TRAIN',
	BUS = 'BUS',
	FERRY = 'FERRY',
}

/** TransportFareType is an enumeration of fare types. PUBNEG indicates a Published fare (IATA_NEGO). NET is  used for Conso Fare. TOP is a Tour Operator fare. LOW_COST stands for Low cost fare. PUB indicates a  Published fare (IATA). NEG is used for Negotiated (NEGO) fare. */
export enum TransportFareType {
	PUBNEG = 'PUBNEG',
	NET = 'NET',
	TOP = 'TOP',
	LOW_COST = 'LOW_COST',
	PUB = 'PUB',
	NEG = 'NEG',
}

/**
 * Represents the class of a flight, specifying different levels of comfort and amenities.
 * @example "FLIGHT_CLASS_ECONOMY"
 */
export enum FlightClassType {
	FLIGHT_CLASS_UNKNOWN = 'FLIGHT_CLASS_UNKNOWN',
	FLIGHT_CLASS_BUSINESS = 'FLIGHT_CLASS_BUSINESS',
	FLIGHT_CLASS_ECONOMY = 'FLIGHT_CLASS_ECONOMY',
	FLIGHT_CLASS_FIRST = 'FLIGHT_CLASS_FIRST',
	FLIGHT_CLASS_PREMIUM_ECONOMY = 'FLIGHT_CLASS_PREMIUM_ECONOMY',
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
 * Detailed information about the sales price breakdown.
 * @example {"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]}
 */
export interface PriceBreakdown {
	netPrice: CommonMonetaryValue;
	/** Detailed information about the tax breakdown. */
	taxes?: SurchargeOrTax[];
	/** Detailed information about the surcharge breakdown. */
	surcharges?: SurchargeOrTax[];
	/** Detailed information about the commission breakdown. */
	commissions?: Commission[];
}

/**
 * Represents a surcharge or tax.
 * @example {"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}
 */
export interface SurchargeOrTax {
	name: string;
	amount: CommonMonetaryValue;
	/** [Deprecated] Type of surcharge or tax. */
	chargeType?: SurchargeOrTaxType;
	/** [Deprecated] Indicates if the surcharge or tax is included in the price. */
	included?: boolean;
}

/**
 * Detailed information about the commission.
 * @example {"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}
 */
export interface Commission {
	/** The name of the commission. */
	name: string;
	/**
	 * The percentage of the commission.
	 * @format decimal
	 * @example 10.6
	 */
	percentage?: number;
	amount: CommonMonetaryValue;
}

/**
 * Price information for a single passenger
 * @example {"salesPrice":{"currency":"EUR","value":"230.2"},"priceBreakdown":{"commissions":[{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"},{"amount":{"currency":"EUR","value":"230.2"},"percentage":10.6,"name":"name"}],"surcharges":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}],"netPrice":{"currency":"EUR","value":"230.2"},"taxes":[{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true},{"amount":{"currency":"EUR","value":"230.2"},"name":"name","chargeType":"SURCHARGE_TAX_TYPE_NONE","included":true}]},"paxId":"paxId"}
 */
export interface CommonPaxPriceInformation {
	/**
	 * ID of the passenger for correlation.
	 * In case of `/v1/transports` should correlate with request's `paxAges.paxId`.
	 * In case of `/v1/transports/availability` should correlate with the prior.
	 * In case of `/v1/transports/retrieve`, should correlate with response's `details.pax.supplierRefId`
	 */
	paxId: string;
	salesPrice?: CommonMonetaryValue;
	/** Detailed information about the sales price breakdown. */
	priceBreakdown?: PriceBreakdown;
}

/** @example {"isPassportIssuingCountryCodeRequired":true,"isPassportNumberRequired":true,"isPassportExpirationDateRequired":true,"isNationalityRequired":true} */
export interface PassengerRequiredFields {
	/** If true, passenger passport number needs to be provided during booking. */
	isPassportNumberRequired?: boolean;
	/** If true, passenger passport expiration date needs to be provided during booking. */
	isPassportExpirationDateRequired?: boolean;
	/** If true, passenger passport issuing country code needs to be provided during booking. */
	isPassportIssuingCountryCodeRequired?: boolean;
	/** If true, passenger nationality needs to be provided during booking. */
	isNationalityRequired?: boolean;
}

/** Type of baggage. */
export enum BaggageType {
	BAGGAGE_TYPE_HAND = 'BAGGAGE_TYPE_HAND',
	BAGGAGE_TYPE_HOLD = 'BAGGAGE_TYPE_HOLD',
	BAGGAGE_TYPE_PERSONAL_ITEM = 'BAGGAGE_TYPE_PERSONAL_ITEM',
}

/**
 * The unit of distance for the transport.
 * @example "MILES"
 */
export enum TransportDistanceUnit {
	MILES = 'MILES',
	KILOMETERS = 'KILOMETERS',
}

/** [Deprecated] Type of surcharge or tax. */
export enum SurchargeOrTaxType {
	SURCHARGE_TAX_TYPE_NONE = 'SURCHARGE_TAX_TYPE_NONE',
	SURCHARGE_TAX_TYPE_TOTAL_TAX = 'SURCHARGE_TAX_TYPE_TOTAL_TAX',
}

/**
 * Information about the departure area if applicable.
 * @example {"iataCode":"PAR"}
 */
export interface RequestTransportConnectionDepartureArea {
	/** IATA metropolitan area code. */
	iataCode: string;
}

/**
 * Information about the arrival area if applicable.
 * @example {"iataCode":"NYC"}
 */
export interface RequestTransportConnectionArrivalArea {
	/** IATA metropolitan area code. */
	iataCode: string;
}
