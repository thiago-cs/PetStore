import { useAxios } from "@/utils/useAxios";
import { ResponseStatus } from "@/api/Response";

import { Product, filterProducts } from "@/models/Product";
import { ProductTag } from "@/models/ProductTag";
import { Filter, FilterProps } from "@/views/components/Filter";
import { OverlappingPanel } from "@/views/panels/OverlappingPanel";
import { DuoToneHeader } from "@/views/components/DuoToneHeader";
import { ProductListView } from "@/views/components/ProductListView";
import { LoadingIndicator } from "@/views/components/LoadingIndicator";
import { api } from "@/api";
import { isNullOrEmpty } from "@/utils/ArrayHelper";


export function BestSellerSection(props: BestSellerSectionProps): JSX.Element
{
	const state = useAxios(api.getProductsAsync);

	const { className = "", filters } = props;

	const shouldShowFilter = !isNullOrEmpty(filters);

	let products = state.data || state.prevData;

	if (shouldShowFilter)
		products = filterProducts(state.data || state.prevData, ...filters!.map(filter => filter.selectedItems!));


	return (
		<section className={`min-h-[30rem] px-4 py-8 ${className}`} >

			<DuoToneHeader>{["Best", " Seller"]}</DuoToneHeader>
			{
				shouldShowFilter &&
				<ul className="my-8 flex-row items-center justify-center flex-wrap gap-8" >
				{
					filters!.map((props, index) =><li key={index} ><Filter {...props} /></li>)
				}
				</ul>
			}

			<OverlappingPanel>
			{
				state.status === ResponseStatus.Error
				?
					<div className="m-20 flex-row justify-center">
						Sorry, we could not load the list of best selling products.
						{ state.errorMessage }
					</div>
				:
				products !== null &&
					<ProductListView products={products}
									 productIsFavoriteChanged={onProductIsFavoriteChanged} />
			}
			{
				state.status === ResponseStatus.Loading &&
				<div className="m-20 flex-row justify-center">
					<LoadingIndicator />
				</div>
			}

			</OverlappingPanel>

		</section>
	);


	function onProductIsFavoriteChanged(_product: Product): void
	{
		// todo: implement onProductIsFavoriteChanged
	}
}


type BestSellerSectionProps =
{
	className?: string,
	filters?: FilterProps<ProductTag>[],
};