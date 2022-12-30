import { Link } from "react-router-dom";
import { Rating } from "@mantine/core";

import { Product } from "@/models/Product";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Price } from "@/views/components/ProductListView/Price";
import { Favorite, ShoppingCart } from "@/views/icons";

import defaultImage from "@/assets/images/package.svg";


export function ProductCard(props: ProductCardProps): JSX.Element
{
	const shoppingCartContext = useShoppingCart();

	const { className = "", product, onIsFavoriteChanged } = props;

	let image = product.images[0];

	return (
		<div className={`relative card
						 rounded-lg border border-transparent hover:border-base-low transition-colors duration-200 ${className}`} >

			<div className="aspect-square flex place-content-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 bg-base-medium rounded-md" >
				<img src={image} onError={onProductImageLoadError} />
			</div>

			<div className="p-1 flex-row place-content-center gap-1 bg-transparent" >
				<Rating fractions={2} defaultValue={product.rating.score} readOnly />
				<span className="ml-1 text-xs text-alt-low" >
					{ product.rating.numberOfReviews } ratings
				</span>
			</div>

			<Link className="p-2 flex-col gap-2" to={product.pageUrl} >

				<span className="[a:hover_&]:underline" >
					{ product.description }
				</span>

				<Price value={product.price} />

			</Link>

			<div className={`absolute top-2 right-2 p-2 text-base-low
							 flex-col gap-1
							 [&_button]:rounded-full [&_button]:transition-opacity [&_button]:duration-200
							 [.card:hover_&_button]:opacity-100`} >

				<button className={`${product.isFavorite ? "opacity-100 text-red-500" : "opacity-0"}`}
						onClick={onFavoriteButtonClick} >
					<Favorite size={24} color="currentColor" />
				</button>

				<button className={`${isInShoppingCart(product) ? "opacity-100 text-alt-medium-high" : "opacity-0 hover:text-alt-medium-low"}`}
						onClick={() => onShoppingCartButtonClick(product)} >
					<ShoppingCart size={24} color="currentColor" />
				</button>

			</div>
		</div>
	);


	function onFavoriteButtonClick(e: React.MouseEvent<HTMLButtonElement>)
	{
		e.preventDefault();
		e.stopPropagation();

		onIsFavoriteChanged(product);
	}

	function onShoppingCartButtonClick(product: Product): void
	{
		shoppingCartContext.addItem(product);
	}

	function isInShoppingCart(product: Product): boolean
	{
		return shoppingCartContext.items.some(item => item.product.id === product.id);
	}
}


type ProductCardProps =
{
	product: Product,
	className?: string,
	onIsFavoriteChanged: (product: Product) => void,
};

function onProductImageLoadError(event: React.SyntheticEvent<HTMLImageElement>): void
{
	const target = event.currentTarget;
	const a = defaultImage;

	if (target.src === a)
		return;

	target.src = a;
	target.className = "max-w-[80%] max-h-[80%] grayscale-[75%]";
}