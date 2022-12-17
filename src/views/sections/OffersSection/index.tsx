import { OfferCard } from "@/views/sections/OffersSection/OfferCard";
import { useOffers } from "@/utils/useOffers";


export function OffersSection(): JSX.Element
{
	const [ offers ] = useOffers();

	return (
		<section>
			<ul className="py-8 grid content-center px-[3%] gap-x-[3vw] gap-y-[3vw]
						   grid-cols-1 md:grid-cols-2 xl:grid-cols-3" >
			{
				offers?.map((item, index) => <li key={index} ><OfferCard offer={item} /></li>)
			}
			</ul>
		</section>
	);
}