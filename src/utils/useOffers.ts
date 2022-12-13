import { myApi } from "./myApi";
import { useItems } from "./useItems";


export function useOffers()
{
	return useItems(myApi.getOffersAsync);
}