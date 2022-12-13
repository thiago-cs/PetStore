import { useMemo, useState } from "react";


type FilterPredicate<T1, T2> = (items: T1[], criteria: T2[]) => T1[];

type SetFilterCriteria<T> = (criteria: T[]) => void;

type HookOutput<TItem, TCriterion> = [ TItem[], TCriterion[], SetFilterCriteria<TCriterion>];


export function useFilteredItems<TItem, TCriterion>(items: TItem[], predicate: FilterPredicate<TItem, TCriterion>): HookOutput<TItem, TCriterion>
{
	const [criteria, setCriteria] = useState<TCriterion[]>([]);

	const filteredItems = useMemo(() => predicate(items, criteria), [items, criteria]);

	function onCriteriaChanged(criteria: TCriterion[])
	{
		setCriteria(criteria);
	}

	return [ filteredItems, criteria, onCriteriaChanged ];
}