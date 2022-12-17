import { Product } from "@/models/Product";
import { Filter, FilterProps } from "@/views/components/Filter";
import { DuoToneHeader } from "@/views/components/DuoToneHeader";
import { ProductListView } from "@/views/components/ProductListView";


export function BestSellerSection(props: BestSellerSectionProps): JSX.Element
{
	const { className = "", products, productIsFavoriteChanged, filters } = props;

	return (
		<section className={`px-4 py-8 ${className}`} >

			<DuoToneHeader>{["Best", " Seller"]}</DuoToneHeader>

			{ filters && filters.length !== 0 &&
				<ul className="pt-8 flex-row items-center justify-center flex-wrap gap-8" >
				{
					filters.map((props, index) =><li key={index} ><Filter {...props} /></li>)
				}
				</ul>
			}

			<ProductListView products={products} productIsFavoriteChanged={productIsFavoriteChanged} />

		</section>
	);
}


interface BestSellerSectionProps
{
	className?: string;

	products: Product[] | undefined;
	productIsFavoriteChanged: (product: Product) => void;

	filters?: FilterProps<any>[];
}