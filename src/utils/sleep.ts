/**
 * Returns a Promise that resolves after the specified time.
 * @param ms The number of milliseconds to wait.
 * @returns A Promise that resolves after the specified time
 */
export function sleep(ms: number)
{
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}