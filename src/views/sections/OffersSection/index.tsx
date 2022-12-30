import { useAsyncValue } from "react-router-dom";

import { Offer } from "@/models/Offer";
import { OfferCard } from "@/views/sections/OffersSection/OfferCard";
import { LoadingIndicator } from "@/views/components/LoadingIndicator";
import { Async } from "@/views/components/Async";
import { api } from "@/api";


export function OffersSection(): JSX.Element
{
	return (
		<Async promise={api.getOffersAsync()} loadingElement={loadingElement} >
			<OfferList />
		</Async>
	);
}

function OfferList(): JSX.Element
{
	const response = useAsyncValue() as any;
	const offers = response.data as Offer[];

	return (
		<section>
			<ul className="py-8 grid content-center px-[3%] gap-x-[3vw] gap-y-[3vw]
						   grid-cols-1 md:grid-cols-2 xl:grid-cols-3" >
			{
				offers.map((offer, index) =><li key={index} ><OfferCard offer={offer} /></li>)
			}
			</ul>
		</section>
	);
}


const loadingElement = <div className="m-20 flex-row justify-center"><LoadingIndicator /></div>;