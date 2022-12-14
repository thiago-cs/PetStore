type Function<T> = (...args: any[]) => T;

/**
 * Debounces the specified function for the specified interval.
 * @remark Even the first call is debounced.
 * @param func The function to be debounced.
 * @param interval The minimum interval between consecutive calls to func.
 * @returns a debounced version of the specified function.
 *
 * @example
 * function saveInput()
 * {
 * 	console.log('Saving data');
 * }
 * const processChange = debounce(() => saveInput());
 *
 */
export function debounce<T>(func: Function<T>, interval = 300) : Function<void>
{
	let timeoutId: NodeJS.Timeout;

	return function(this: any, ...args: any[])
	{
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), interval);
	};
}



export function debounceSubsequent<T>(func: Function<T>, interval = 300) : Function<T | undefined>
{
	let lastCallTime = 0;

	return function(this: any, ...args: any[])
	{
		const callTime = Date.now();
		const shouldInvoke = interval < callTime - lastCallTime;

		lastCallTime = callTime;

		if (shouldInvoke)
		{
			lastCallTime = callTime;
			return func.apply(this, args);
		}

		return undefined;
	};
}