import { Link } from "react-router-dom";

import { ProductCategory } from "@/models/ProductCategory";


export function ProductCategoryCard(props: ProductCategoryCardProps): JSX.Element
{
	const { image, header, url } = props.category;

	return (
		<Link className="mx-auto group cursor-pointer flex-col items-center" to={url} >

			<div className="min-w-[8rem] max-w-[16rem] aspect-square rounded-[3%] overflow-clip" >
				<img className="w-full h-full group-hover:scale-110
								transition-transform duration-700 ease-out"
					 src={image}
					 loading="lazy" />
			</div>

			<h3 className="pt-2 text-center md:text-xl font-bold hover:text-accent-secondary
						   transition-colors duration-500 ease-out" >
				{ header }
			</h3>
		</Link>
	);
}


type ProductCategoryCardProps =
{
	category: ProductCategory,
};