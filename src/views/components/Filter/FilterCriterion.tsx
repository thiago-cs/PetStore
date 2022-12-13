export interface FilterCriterion<T>
{
	id: T;
	title?: string;
	content: JSX.Element;
}
