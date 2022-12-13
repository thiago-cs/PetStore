import { useState } from "react";


export function useFilter<TCriterion>(): [ TCriterion[] | undefined, (criteria: TCriterion[]) => void]
{
	const [filter, setFilter] = useState<TCriterion[]>();

	function onFilterChanged(criteria: TCriterion[])
	{
		setFilter(criteria);
	}

	return [ filter, onFilterChanged ];
}