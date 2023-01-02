

export enum ResponseStatus
{
	Loading,
	Success,
	Error
}

export type Response<T> =
{
	status: ResponseStatus,
	data: T | null,
	prevData: T | null,
	errorMessage: string | null,
};