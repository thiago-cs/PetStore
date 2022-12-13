import { Rating } from "@mantine/core";

import { Product } from "models/Product";
import { Price } from "views/components/ProductListView/Price";
import { Favorite } from "views/icons";

import defaultImage from "assets/images/package.svg";


export function ProductCard(props: ProductCardProps): JSX.Element
{
	const { className = "", product, onIsFavoriteChanged: onIsFavoriteChanged } = props;

	let image = product.images[0];

	return (
		<div className={`relative card
						 rounded-lg border border-transparent hover:border-base-low transition-colors duration-200 ${className}`} >

			<div className="aspect-square flex place-content-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 bg-base-medium rounded-md" >
				<img src={image} onError={onProductImageLoadError} />
			</div>

			<div className="p-1 flex-row place-content-center gap-1 bg-transparent" >
				<Rating fractions={2} defaultValue={product.ratingScore} readOnly />
				<span className="ml-1 text-xs text-alt-low" >
					{product.numberOfReviews} ratings
				</span>
			</div>

			<a className="flex-col items-center" href={product.productPageUrl} >

				<span className="text-lg text-center [a:hover_&]:underline" >
					{product.description}
				</span>

				<Price value={product.price} />

			</a>

			<button className={`absolute top-2 right-2 p-2 rounded-full text-alt-medium
								${product.isFavorite ? "" : "opacity-0"}  [.card:hover_&]:opacity-100 transition-opacity duration-200`}
					onClick={onFavoriteButtonClick} >
				<Favorite size={24} color={product.isFavorite ? "red" : "var(--base-low)"} />
			</button>
		</div>
	);


	function onFavoriteButtonClick(e: React.MouseEvent<HTMLButtonElement>)
	{
		e.preventDefault();
		e.stopPropagation();

		onIsFavoriteChanged(product);
	}
}


interface ProductCardProps
{
	product: Product;
	className?: string;
	onIsFavoriteChanged: (product: Product) => void;
}

function onProductImageLoadError(event: React.SyntheticEvent<HTMLImageElement>): void
{
	const a = defaultImage;

	if (event.currentTarget.src !== a)
		event.currentTarget.src = a;
}