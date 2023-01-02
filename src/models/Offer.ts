import { z } from "zod";


const shape =
{
	header: z.string().min(1),
	content: z.string().min(1),
	image: z.string().min(1),
	url: z.string().url(),
};

const schema = z.object(shape).passthrough();
export type Offer = { [key in keyof z.infer<typeof schema>]: z.infer<typeof schema>[key] };


export function validateOffer(object: any): Offer | null
{
	const parseResult = schema.safeParse(object);

	return parseResult.success
		 ? parseResult.data
		 : null;
}


export function validateOffers(array: any[]): Offer[]
{
	const offers: Offer[] = [];

	for (const item of array)
	{
		const offer = validateOffer(item);

		if (offer !== null)
			offers.push(offer);
	}

	return offers;
}