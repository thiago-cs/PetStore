import { myApi } from "./myApi";
import { useItems } from "./useItems";


export function useProducts()
{
	return useItems(myApi.getProductsAsync);
}