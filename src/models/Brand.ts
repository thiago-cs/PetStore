import { z } from "zod";


const shape =
{
	header: z.string(),
	image: z.string(),
	url: z.string()/*.url()*/,
};

const schema = z.object(shape).passthrough();
export type Brand = { [key in keyof z.infer<typeof schema>]: z.infer<typeof schema>[key] };


export function validateBrand(object: any): Brand | null
{
	const parseResult = schema.safeParse(object);

	return parseResult.success
		 ? parseResult.data
		 : null;
}


export function validateBrands(array: any[]): Brand[]
{
	const brands: Brand[] = [];

	for (const item of array)
	{
		const brand = validateBrand(item);

		if (brand !== null)
			brands.push(brand);
	}

	return brands;
}