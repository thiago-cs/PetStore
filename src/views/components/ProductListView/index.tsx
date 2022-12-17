import { Product } from "@/models/Product";
import { ProductCard } from "./ProductCard";
import { ProductCardPlaceholder } from "./ProductCardPlaceholder";


export function ProductListView(props: ProductListViewProps): JSX.Element
{
	const { products, productIsFavoriteChanged } = props;
	

	return products === undefined ?
		<Loading1/>

		: products.length === 0 ?
		<div className="p-10 text-2xl text-center" >
			No items found.	
		</div>

		:
		<ul className="pt-10 grid grid-flow-row grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(auto-fill,minmax(0,20rem))]
					   place-content-center gap-x-4 gap-y-6 xl:gap-y-12" >
		{
			products.map(item =>
				<li key={item.id} >
					<ProductCard product={item} onIsFavoriteChanged={productIsFavoriteChanged} />
				</li>)
		}
		</ul>;
}


interface ProductListViewProps
{
	products: Product[] | undefined;
	productIsFavoriteChanged: (product: Product) => void;
}


function Loading1(): JSX.Element
{
	return (
		<ul className="pt-10 flex-row flex-wrap place-content-center gap-4" >
			<li><ProductCardPlaceholder /></li>
			<li><ProductCardPlaceholder /></li>
			<li className="hidden md:block" ><ProductCardPlaceholder /></li>
		</ul>
	);
}