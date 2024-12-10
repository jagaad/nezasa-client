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

/** a container object for representing a monetary value in the system */
export interface CommonMonetaryValue {
	/**
	 * The ISO-4217 currency code (e.g. EUR, USD, etc)
	 * @format iso-4217
	 */
	currency: string;
	/**
	 * The monetary value whereby the major and minor currency units are separated by a decimal (e.g. "29.95").
	 * This property is deprecated in favor of amount. Please start including amount in your requests.
	 * @deprecated
	 * @pattern ^\d+\.\d{2}$
	 */
	value: string;
	/**
	 * The monetary value whereby the major and minor currency units are separated by a decimal (e.g. "29.95").
	 * If both amount and value are included, amount will be used.
	 * @pattern ^\d+\.\d{2}$
	 */
	amount?: string;
}

/** Indicates whether the transaction is a payment or a refund. */
export enum TransactionType {
	Payment = 'Payment',
	Refund = 'Refund',
}

/**
 * The method of the payment
 * Only the payment methods "CreditCard", "BankTransfer", "DirectDebit", and "Other" are supported when creating or changing payment transactions, while the other
 * payment methods may be returned in existing payment transactions.
 */
export enum PaymentMethod {
	CreditCard = 'CreditCard',
	BankTransfer = 'BankTransfer',
	DirectDebit = 'DirectDebit',
	Paypal = 'Paypal',
	Datatrans = 'Datatrans',
	Invoice = 'Invoice',
	Payyo = 'Payyo',
	Stripe = 'Stripe',
	Future = 'Future',
	Other = 'Other',
	Unknown = 'Unknown',
}

/**
 * Indicates the status of the transaction.
 * When creating payment transactions only the status "Open" and "Closed" are supported.
 * When updating payment transactions only the status "Closed" is supported.
 * The other statuses may be returned in existing payment transactions.
 */
export enum StatusType {
	Open = 'Open',
	InProgress = 'InProgress',
	PreauthCaptureInProgress = 'PreauthCaptureInProgress',
	Pending = 'Pending',
	Preauth = 'Preauth',
	Closed = 'Closed',
	Failed = 'Failed',
	Deleted = 'Deleted',
	Unknown = 'Unknown',
}

export interface CreatePaymentTransactionRequest {
	/** The ref id identifying this particular transaction in the external system */
	externalRefId: string;
	/** a container object for representing a monetary value in the system */
	amount: CommonMonetaryValue;
	/** Indicates whether the transaction is a payment or a refund. */
	transactionType: TransactionType;
	/**
	 * The method of the payment
	 * Only the payment methods "CreditCard", "BankTransfer", "DirectDebit", and "Other" are supported when creating or changing payment transactions, while the other
	 * payment methods may be returned in existing payment transactions.
	 */
	paymentMethod: PaymentMethod;
	/**
	 * Must only be used in combination with the payment method "Other" in which case it is mandatory.
	 * @example "Apple Pay"
	 */
	paymentMethodName?: string;
	/**
	 * The date and time the transaction was created. Defaults to the current date and time if not set.
	 * @format RFC 3339
	 * @example "2023-08-31T12:00:27.87+01:00"
	 */
	created?: string;
	/**
	 * The valuta date and time of the transaction. Defaults to the current date and time if not set.
	 * @format RFC 3339
	 * @example "2023-08-31T12:00:27.87+01:00"
	 */
	valuta?: string;
	/**
	 * The due date and time of the transaction
	 * @format RFC 3339
	 * @example "2023-08-31"
	 */
	dueDate?: string;
	/**
	 * Indicates the status of the transaction.
	 * When creating payment transactions only the status "Open" and "Closed" are supported.
	 * When updating payment transactions only the status "Closed" is supported.
	 * The other statuses may be returned in existing payment transactions.
	 */
	status?: StatusType;
}

/** An object containing references to the source of the error */
export interface ProblemSource {
	/**
	 * A reference to the associated entity in the request document which caused the problem
	 * @example ""/data" for a primary data object or "/title" for a specific attribute"
	 */
	pointer: string;
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

/** An array of Problem objects */
export interface ProblemResponse {
	/**
	 * The HTTP status code generated for this problem response
	 * @format int32
	 * @min 100
	 * @max 600
	 */
	status: number;
	problems: Problem[];
}

/** The created or updated payment transaction */
export interface PaymentTransaction {
	/** The ref id identifying this particular transaction */
	transactionRefId: string;
	/** The ref id identifying this particular transaction in the external system */
	externalRefId?: string;
	/**
	 * Indicates the status of the transaction.
	 * When creating payment transactions only the status "Open" and "Closed" are supported.
	 * When updating payment transactions only the status "Closed" is supported.
	 * The other statuses may be returned in existing payment transactions.
	 */
	status: StatusType;
	/** a container object for representing a monetary value in the system */
	amount: CommonMonetaryValue;
	/** Indicates whether the transaction is a payment or a refund. */
	transactionType: TransactionType;
	/**
	 * The method of the payment
	 * Only the payment methods "CreditCard", "BankTransfer", "DirectDebit", and "Other" are supported when creating or changing payment transactions, while the other
	 * payment methods may be returned in existing payment transactions.
	 */
	paymentMethod: PaymentMethod;
	/** The name of the payment method if the payment method is Other */
	paymentMethodName?: string;
	/** The online payment service provider's payment method */
	paymentServiceProviderPaymentMethod?: string;
	/** The online payment service provider's id */
	paymentServiceProviderId?: string;
	/**
	 * The date and time the transaction was created. Defaults to the current date and time if not set.
	 * @format RFC 3339
	 * @example "2023-08-31T12:00:27.87+01:00"
	 */
	created: string;
	/**
	 * The valuta date and time of the transaction. Defaults to the current date and time if not set.
	 * @format RFC 3339
	 * @example "2023-08-31T12:00:27.87+01:00"
	 */
	valuta: string;
	/**
	 * The due date and time of the transaction
	 * @format RFC 3339
	 * @example "2023-08-31"
	 */
	dueDate?: string;
}

export interface PaymentTransactionResponse {
	/** The created or updated payment transaction */
	transaction: PaymentTransaction;
}

export interface UpdatePaymentTransactionRequest {
	/** The ref id identifying this particular transaction in the external system */
	externalRefId?: string;
	/** a container object for representing a monetary value in the system */
	amount?: CommonMonetaryValue;
	/** Indicates whether the transaction is a payment or a refund. */
	transactionType?: TransactionType;
	/**
	 * The method of the payment
	 * Only the payment methods "CreditCard", "BankTransfer", "DirectDebit", and "Other" are supported when creating or changing payment transactions, while the other
	 * payment methods may be returned in existing payment transactions.
	 */
	paymentMethod?: PaymentMethod;
	/**
	 * Must only be used in combination with the payment method "Other" in which case it is mandatory.
	 * @example "Apple Pay"
	 */
	paymentMethodName?: string;
	/**
	 * The date and time the transaction was created. Defaults to the current date and time if not set.
	 * @format RFC 3339
	 * @example "2023-08-31T12:00:27.87+01:00"
	 */
	created?: string;
	/**
	 * The valuta date and time of the transaction. Defaults to the current date and time if not set.
	 * @format RFC 3339
	 * @example "2023-08-31T12:00:27.87+01:00"
	 */
	valuta?: string;
	/**
	 * The due date and time of the transaction
	 * @format RFC 3339
	 * @example "2023-08-31"
	 */
	dueDate?: string;
	/**
	 * Indicates the status of the transaction.
	 * When creating payment transactions only the status "Open" and "Closed" are supported.
	 * When updating payment transactions only the status "Closed" is supported.
	 * The other statuses may be returned in existing payment transactions.
	 */
	status?: StatusType;
}
