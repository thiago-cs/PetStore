import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { isNullOrEmpty } from "./ArrayHelper";


// NAME        TYPE   DESCRIPTION
// Item        T      An item of the search param or the filter.
// Filter      T[]    The valid values for a filter or the selected items of that filter.
// FilterList  T[][]  All items of all filters. The list selected items for each filter.

export function useFilterSearchParam<T>(filterParams: FilterParam<T>[]): [ T[][], SetFilterAction<T> ]
{
	const [ searchParams, setSearchParams ] = useSearchParams("");

	const query = searchParams.toString();
	const filterList = filterParams.map(fp => parseSearchParam(searchParams.get(fp.name), fp.converter, fp.items));
	//console.log("query:", query);

	useEffect(() => updateSearchParams(filterList), [query]);


	function onFilterChanged(index: number, selectedItems: T[]): void
	{
		const newFilterList = [...filterList];
		newFilterList[index] = selectedItems;

		updateSearchParams(newFilterList);
	}


	return [ filterList, onFilterChanged ];


	function updateSearchParams(filterList: T[][])
	{
		const namedCriteria = filterList.map((filter, i) => ({ ...filterParams[i], items: filter }));
		const newSearchParams = composeSearchParams(namedCriteria);

		if (newSearchParams !== query)
			setSearchParams(newSearchParams, { replace: true });
	}
}


export type FilterParam<T> =
{
	name: string,
	items: T[],
	converter: ValueConverter<T, string>,
};

type ValueConverter<T1,T2> =
{
	convert: (value: T1) => T2,
	convertBack: (text: T2) => T1,
};

type SetFilterAction<T> = (index: number, selectedItems: T[]) => void;


const tagSeparator = ".";

function composeSearchParams<T>(filterList: FilterParam<T>[]): string
{
	const array: string[] = [];

	for (const filter of filterList)
		if (!isNullOrEmpty(filter.items))
		{
			const key = filter.name;
			const value = filter.items.sort()
									  .map(item => filter.converter.convert(item))
									  .join(tagSeparator);

			array.push(key + "=" + value);
		}

	return array.join("&");
}

function parseSearchParam<T>(param: string | null, converter: ValueConverter<T, string>, validValues: T[]): T[]
{
	if (param === null || param.length === 0)
		return [];

	return param.split(tagSeparator)
				.map(s => converter.convertBack(s))
				.filter(n => validValues.includes(n));
}