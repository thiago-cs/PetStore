import { ProductTag } from "@/models/ProductTag";
import { Page } from "@/views/pages/Page";
import { BestSellerSection } from "@/views/sections/BestSellerSection";
import { FilterCriterion } from "@/views/components/Filter/FilterCriterion";
import { ErrorBoundary } from "@/views/devComponents/ErrorBoundary";
import { Cat, Dog, Bird, Fish, PetFood, PetToy, PetMedicine } from "@/views/icons";
import { FilterParam, useFilterSearchParam } from "@/utils/useFilterSearchParams";


export function ShopPage(): JSX.Element
{
	const [ filterList, setFilter ] = useFilterSearchParam(filterParams);

	const filters =
	[
		{ itemsSource: animalCriteriaSource,   allowMultiselect: false, selectedItems: filterList[0], selectedItemsChanged: (selectedItems: ProductTag[]) => setFilter(0, selectedItems) },
		{ itemsSource: categoryCriteriaSource, allowMultiselect: true,  selectedItems: filterList[1], selectedItemsChanged: (selectedItems: ProductTag[]) => setFilter(1, selectedItems) },
	];


	return (
		<Page title="Shop" className="pt-16 lg:px-16" >
			<ErrorBoundary>
				<BestSellerSection filters={filters} />
			</ErrorBoundary>
		</Page>
	);
}


const filterIconSize = 18;

const animalCriteriaSource: FilterCriterion<ProductTag>[] =
[
	{ id: ProductTag.Cat,  title: "for cats",   content: <Cat size={filterIconSize} /> },
	{ id: ProductTag.Dog,  title: "for dogs",   content: <Dog size={filterIconSize} /> },
	{ id: ProductTag.Bird, title: "for birds",  content: <Bird size={filterIconSize} /> },
	{ id: ProductTag.Fish, title: "for fishes", content: <Fish size={filterIconSize} /> },
];

const categoryCriteriaSource: FilterCriterion<ProductTag>[] =
[
	{ id: ProductTag.Food, title: "food", content: <PetFood size={filterIconSize} /> },
	{ id: ProductTag.Toy, title: "toys", content: <PetToy size={filterIconSize} /> },
	{ id: ProductTag.Medicine, title: "medicine", content: <PetMedicine size={filterIconSize} /> },
];


const productTagToStringConverter =
{
	convert: (id: ProductTag): string => id.toString(),
	convertBack: (text: string): ProductTag => parseInt(text, 10),
};

const pairs: [string, ProductTag][] =
[
	[ "🐶", ProductTag.Dog ],
	[ "😺", ProductTag.Cat ],
	[ "🐟", ProductTag.Fish ],
	[ "🐤", ProductTag.Bird ],

	[ "🌮", ProductTag.Food ],
	[ "💊", ProductTag.Medicine ],
	[ "🪀", ProductTag.Toy ],
];

const productTagToEmojiConverter =
{
	convert:     (id: ProductTag): string    => pairs.find(p => p[1] === id)?.[0] || "",
	convertBack: (emoji: string): ProductTag => pairs.find(p => p[0] === emoji)?.[1] || ProductTag.Other,
}

const filterParams: FilterParam<ProductTag>[] =
[
	{
		name: "for",
		items: animalCriteriaSource.map(f => f.id),
		converter: productTagToEmojiConverter, // Or productTagToStringConverter. Either one is fine.
	},
	{
		name: "category",
		items: categoryCriteriaSource.map(f => f.id),
		converter: productTagToEmojiConverter,
	},
];