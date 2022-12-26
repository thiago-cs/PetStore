import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { favoriteProductsComparison, filterProducts, Product } from "@/models/Product";
import { ProductTag } from "@/models/ProductTag";
import { Page } from "../Page";
import { BestSellerSection } from "@/views/sections/BestSellerSection";
import { FilterCriterion } from "@/views/components/Filter/FilterCriterion";
import { Cat, Dog, Bird, Fish, PetFood, PetToy, PetMedicine } from "@/views/icons";
import { useProducts } from "@/utils/useProducts";


export function ShopPage(): JSX.Element
{
	// Search param
	const [ searchParams, setSearchParams ] = useSearchParams(defaultSearchParams);
	const categoryCriteriaParam = parseShopSearchParam(searchParams.get(categoryParamName));
	const animalCriteriaParam = parseShopSearchParam(searchParams.get(animalParamName));

	// Filter criteria
	const [ categoryCriteria, setCategoryCriteria ] = useState(categoryCriteriaParam);
	const [ animalCriteria, setAnimalCriteria ] = useState(animalCriteriaParam);

	const filters =
	[
		{ itemsSource: animalCriteriaSource,   allowMultiselect: false, selectedItems: animalCriteria,   selectedItemsChanged: onAnimalCriteriaChanged },
		{ itemsSource: categoryCriteriaSource, allowMultiselect: true,  selectedItems: categoryCriteria, selectedItemsChanged: onCategoryCriteriaChanged },
	];

	// Filtered product list
	const [ products, setProducts ] = useProducts();
	const filteredProducts = filterProducts(products, categoryCriteria, animalCriteria);
	filteredProducts?.sort(favoriteProductsComparison);

	return (
		<Page title="Shop" className="pt-16 lg:px-16" >
			<BestSellerSection products={filteredProducts} productIsFavoriteChanged={toggleProductAsFavorite} filters={filters} />
		</Page>
	);


	function toggleProductAsFavorite(product: Product): void
	{
		if (products === undefined)
			return;

		const copy = [...products];

		for (let i = 0; i < copy.length; i++)
			if (copy[i].id === product.id)
			{
				copy[i] = {...product, isFavorite: !product.isFavorite };
				break;
			}

		setProducts(copy);
	}

	function onCategoryCriteriaChanged(categories: ProductTag[])
	{
		setSearchParams(composeSearchParams(categories, animalCriteria), { replace: true });
		setCategoryCriteria(categories);
	}

	function onAnimalCriteriaChanged(animals: ProductTag[])
	{
		setSearchParams(composeSearchParams(categoryCriteria, animals), { replace: true });
		setAnimalCriteria(animals);
	}
}


const categoryParamName = "category";
const animalParamName = "for";
const tagSeparator = ".";
const defaultSearchParams = "";

function composeSearchParams(categories: ProductTag[], animalTypes: ProductTag[]): string
{
	const params:string[] = [];

	if (!isNullOrEmpty(categories))
		add(categoryParamName, categories);

	if (!isNullOrEmpty(animalTypes))
		add(animalParamName, animalTypes);

	return params.join("&");


	function add(key: string, values: ProductTag[]): void
	{
		params.push(key + "=" + values.sort().join(tagSeparator));
	}
}

function parseShopSearchParam(param: string | null): ProductTag[]
{
	if (param === null || param.length === 0)
		return [];

	return param.split(tagSeparator)
				.map(s => parseInt(s))
				.filter(n => n in ProductTag);
}

function isNullOrEmpty<T>(array: T[])
{
	return array == null || array.length === 0;
}


const filterIconSize = 18;

const animalCriteriaSource: FilterCriterion<ProductTag>[] =
[
	{ id: ProductTag.Cat, title: "for cats", content: <Cat size={filterIconSize} /> },
	{ id: ProductTag.Dog, title: "for dogs", content: <Dog size={filterIconSize} /> },
	{ id: ProductTag.Bird, title: "for birds", content: <Bird size={filterIconSize} /> },
	{ id: ProductTag.Fish, title: "for fishes", content: <Fish size={filterIconSize} /> },
];

const categoryCriteriaSource: FilterCriterion<ProductTag>[] =
[
	{ id: ProductTag.Food, title: "food", content: <PetFood size={filterIconSize} /> },
	{ id: ProductTag.Toy, title: "toys", content: <PetToy size={filterIconSize} /> },
	{ id: ProductTag.Medicine, title: "medicine", content: <PetMedicine size={filterIconSize} /> },
];