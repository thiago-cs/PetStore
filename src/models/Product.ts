import { ProductTag } from "./ProductTag";


export interface Product
{
	id: string;
	description: string;
	tags: ProductTag[];
	productPageUrl: string;
	images: string[];
	price: number;
	numberOfReviews: number;
	ratingScore: number;
	isFavorite: boolean;
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