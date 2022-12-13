import { useState, useEffect } from "react";



export function useItems<T>(getItemsAsync: () => Promise<T[]>): [T[] | undefined, React.Dispatch<React.SetStateAction<T[] | undefined>>]
{
	const [items, setItems] = useState<T[]>();

	useEffect(() => { fetchItems(); }, []);

	return [items, setItems];


	async function fetchItems(): Promise<void>
	{
		const items = await getItemsAsync();
		setItems(items);
	}
}
