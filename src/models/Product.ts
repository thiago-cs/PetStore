import { array, z } from "zod";

import { ProductTag } from "./ProductTag";
import { Rating, RatingSchema } from "./Rating";


enum errorMessage
{
	noId = "Id is required",
	invalidIdType = "Id must be a string",
	invalidId = "Invalid id format",

	noDescription = "Description is required",
	invalidDescriptionType = "Description must be a string",
	invalidDescription = "Invalid description format",

	noPageUrl = "Page URL is required",
	invalidPageUrlType = "Page URL must be a string",
	invalidPageUrl = "Invalid page URL format",

	noPrice = "Price is required",
	invalidPriceType = "Price must be a number",
	invalidPriceRange = "Price must be positive",
	invalidPriceValue = "Price must not have fraction of a cent",

	noNumberOfReviews = "Number of reviews is required",
	invalidNumberOfReviewsType = "Number of reviews must be a number",
	invalidNumberOfReviewsRange = "Number of reviews must not be negative",
	invalidNumberOfReviewsValue = "Number of reviews must be an integer",

	invalidIsFavoriteType = "Rating score must be a boolean",
}

const shape =
{
	id:
		z.string({ required_error: errorMessage.noId, invalid_type_error: errorMessage.invalidIdType })
		 .startsWith("p", errorMessage.invalidId),

    description:
		z.string({ required_error: errorMessage.noDescription, invalid_type_error: errorMessage.invalidDescriptionType })
		 .min(1, errorMessage.invalidDescription),

	tags:
		z.array(z.nativeEnum(ProductTag)),

	pageUrl:
		z.string({ required_error: errorMessage.noPageUrl, invalid_type_error: errorMessage.invalidPageUrlType })
		 /* .url(errorMessage.invalidPageUrl) */,

	images:
		z.array(z.string()),

	price:
		z.number({ required_error: errorMessage.noPrice, invalid_type_error: errorMessage.invalidPriceType })
		 .positive(errorMessage.invalidPriceRange)
		 .multipleOf(0.01, errorMessage.invalidPriceValue),

	rating:
		(RatingSchema as z.ZodType<Rating>)
		 .default({ numberOfReviews: 0, score: 0 }),

	isFavorite:
		z.boolean({ invalid_type_error: errorMessage.invalidIsFavoriteType })
		 .default(false)
		 .optional(),
};

const schema = z.object(shape).passthrough();
export type Product = { [key in keyof z.infer<typeof schema>]: z.infer<typeof schema>[key] };


export function validateProduct(object: any): Product | null
{
	const parseResult = schema.safeParse(object);

	return parseResult.success
		 ? parseResult.data
		 : null;
}

export function validateProducts(array: any[]): Product[]
{
	const products: Product[] = [];

	for (const item of array)
	{
		const product = validateProduct(item);

		if (product !== null)
            products.push(product);
    }

	return products;
}

export function favoriteProductsComparison(a: Product, b: Product): number
{
	return a.isFavorite === b.isFavorite ? 0
		 : a.isFavorite ? -1
		 : 1;
}

export function filterProducts(products: Product[] | null, ...criteriaList: ProductTag[][]): Product[] | null
{
	if (products === null)
		return null;

	for (const criteria of criteriaList)
		if (criteria !== undefined && criteria.length !== 0)
			products = products.filter(p => p.tags.some(c => criteria.includes(c)));

	return products;
}