type prefixingFunction = (strings: TemplateStringsArray | string, ...values: (false | string)[]) => string;

const memo = new Map<string, prefixingFunction>();


export function tailwindPrefixer(prefix: string): prefixingFunction
{
	if (memo.has(prefix))
		return memo.get(prefix)!;

	const prefixer = prefixerFactory(prefix);
	memo.set(prefix, prefixer);

	return prefixer;
}

function prefixerFactory(prefix: string): prefixingFunction
{
	return prefixer; 

	function prefixer(strings: TemplateStringsArray | string, ...values: (false | string)[]): string
	{
		return core(prefix, Array.isArray(strings) ? strings : [...strings], values);
	}
}

function core(prefix: string, strings: string[], values: (false | string)[]): string
{
	let array: string[] = [];

	for (let i = 0; i < strings.length; i++)
	{
		if (strings[i])
			array = array.concat(strings[i].split(/\s+/g));

		// Local variable necessary because TypeScript...
		const value = values[i];

		if (value)
			array = array.concat(value.split(/\s+/g));
	}

	const classes = array.filter(item => item.length !== 0)
						.map(item => prefix + item)
						.join(" ");

	return " " + classes + " ";
}