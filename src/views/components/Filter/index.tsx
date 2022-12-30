import { FilterCriterion } from "./FilterCriterion";


export function Filter<T>(props: FilterProps<T>): JSX.Element
{
	const { className, itemsSource, allowMultiselect, selectedItems, selectedItemsChanged } = props;

	return (
		<menu className={className} >
		{
			itemsSource.map((item, index) =>
			<li key={index}
				className={`-m-[1px] inline-block
							rounded-none first:rounded-l-md last:rounded-r-md  border border-transparent hover:border-alt-color hover:translate-x-0
							${selectedItems?.includes(item.id) ? "bg-base-high text-alt-high" : "bg-base-medium text-alt-medium-low"}`} >

				<button className="appearance-none px-4 py-3  transition-transform active:translate-y-[1px]"
						title={item.title}
						onClick={() => onCriterionClick(item.id)} >
					{ item.content }
				</button>

			</li>)
		}
		</menu>
	);


	function onCriterionClick(item: T)
	{
		const newArray = selectedItems === undefined ? [item]
					   : selectedItems.includes(item) ? selectedItems.filter(e => e !== item)
					   : allowMultiselect ? [...selectedItems, item]
					   : [item];

		selectedItemsChanged(newArray);
	}
}


export type FilterProps<T> =
{
	selectedItems?: T[],
	allowMultiselect: boolean,
	className?: string,
	itemsSource: FilterCriterion<T>[],
	selectedItemsChanged: (criteria:T[]) => void,
};