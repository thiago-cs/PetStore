import { OverlappingPanel } from "views/panels/OverlappingPanel";
import { LinkButton } from "../../components/LinkButton";
import { Offer } from "models/Offer";


export function OfferCard(props: OfferCardProps): JSX.Element
{
	const { image, header, content, url } = props.offer;

	return (
		<OverlappingPanel className="aspect-[3/2] rounded-[3%] overflow-clip group" >

			<img className="w-full h-full group-hover:scale-110 origin-bottom-right
							transition-transform duration-1000 ease-out"
				 src={image}
				 loading="lazy" />

			<div className="mx-8 flex-col justify-center z-0" >
				<h3 className="lg:text-lg text-black" >
					{header}
				</h3>

				<p className="w-1/2 min-h-[4.5rem] mb-[4%] text-3xl text-black font-bold" >
					{content}
				</p>

				<LinkButton url={url} >
					Read More
				</LinkButton>
			</div>

		</OverlappingPanel>
	);
}


interface OfferCardProps
{
	offer: Offer;
}