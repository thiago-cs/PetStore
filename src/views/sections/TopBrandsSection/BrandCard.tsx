import { Link } from "react-router-dom";

import { Brand } from "@/models/Brand";


export function BrandCard(props: BrandCardProps): JSX.Element
{
	const { /*header,*/ image, url } = props.brand;

	return (
		<Link className="max-sm:w-full w-40 mx-auto rounded-lg p-1 cursor-pointer
						 ring-accent-primary ring-opacity-0 hover:ring-opacity-70 focus:ring-opacity-70"
			  to={url} >

			<img className="rounded-lg" src={image} loading="lazy" />
		</Link>
	);
}


type BrandCardProps =
{
	brand: Brand,
};