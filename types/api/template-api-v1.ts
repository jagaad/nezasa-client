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

export enum PublicationStatus {
	Draft = 'Draft',
	Published = 'Published',
	Archived = 'Archived',
}

export interface PublishResponse {
	/** The unique identifier of the published template */
	id: string;
	/** The revision of the published template */
	revision: number;
	status: PublicationStatus;
	meta?: Meta;
}

export interface ArchiveResponse {
	/** The unique identifier of the archived template */
	id: string;
	/** The revision of the archived template */
	revision: number;
	status: PublicationStatus;
	meta?: Meta;
}
