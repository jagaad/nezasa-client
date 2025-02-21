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

/** the type of the picture dimensions */
export enum Dimension {
	Original = 'Original',
	FullWeb = 'FullWeb',
	ThumbnailWeb = 'ThumbnailWeb',
}

/** The severity of the problem */
export enum Level {
	ERROR = 'ERROR',
	WARNING = 'WARNING',
	INFO = 'INFO',
}

/** Information about the license of a picture */
export interface LicenseInfo {
	/** The reference ID of the company that licensed the picture */
	licenseHolderRefId: string;
	/** If true only the license holder is allowed to use the picture on their website, if false all marketplace participants can use the picture on their website. */
	restrictedUse: boolean;
	/** The author of the picture if has to be provided. If none is defined we assume that we are not obliged to show any attribution notice. Can be a Markdown formatted string with a link to the author's website. */
	attributionAuthor?: string;
	/** The license of the picture if has to be provided. If none is defined we assume that we are not obliged to show any attribution notice. Can be a Markdown formatted string with a link to the license. */
	attributionLicense?: string;
}

/** Information about a picture */
export interface PictureItem {
	/** the name of the picture */
	name: string;
	/**
	 * the width of the picture in pixels
	 * @format int32
	 */
	width: number;
	/**
	 * the height of the picture in pixels
	 * @format int32
	 */
	height: number;
	/**
	 * the size of the picture in kilobytes
	 * @format double
	 */
	sizeInKb?: number;
	/** the type of the picture dimensions */
	dimension: Dimension;
}

/** The meta data information of the picture */
export interface PictureMetaData {
	/** The folder path in which the picture shall be stored. If the folder does not exist yet, it is automatically created. The folder path is delimited by a forward slash /.  Example: `/` denotes the root folder; `/modules/costarica/` creates a folder `modules` with a subfolder `costarica` */
	folderPath: string;
	/** Localized picture caption */
	caption?: Record<string, string>;
	/** Localized keywords */
	keywords?: Record<string, string>;
	/** Information about the license of a picture */
	licenseInfo?: LicenseInfo;
}

/** Represents information of a picture created in the picture library */
export interface PictureResponse {
	/** The object ID of a picture */
	id: string;
	/** The meta data information of the picture */
	metadata: PictureMetaData;
	/** The picture items. Each item corresponds to a picture file with a different size. */
	items?: PictureItem[];
}

export interface PictureUploadRequest {
	/**
	 * The original file in the maximum resolution. The size should be at least 1600x1200 pixels
	 * @format binary
	 */
	originalFile: File;
	/**
	 * The file optimized for display in web applications.The file size should be at least 800 x 600 pixels
	 * @format binary
	 */
	webOptimizedFile?: File;
	/**
	 * The file in the size as it can be used for thumbnails. The recommended size for thumbnail use on TripBuilder is 460 x 345 pixels
	 * @format binary
	 */
	thumbnailFile?: File;
	/** The meta data information of the picture */
	metadata?: PictureMetaData;
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
