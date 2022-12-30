export function isNullOrEmpty<T>(array: T[]| undefined | null): array is null|undefined
{
	return array == null || array.length === 0;
}
