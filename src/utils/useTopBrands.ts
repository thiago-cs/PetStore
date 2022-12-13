import { myApi } from "./myApi";
import { useItems } from "./useItems";


export function useTopBrands()
{
	return useItems(myApi.getTopBrandsAsync);
}