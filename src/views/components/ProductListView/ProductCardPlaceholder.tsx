import { Rating } from "@mantine/core";
import ContentLoader from "react-content-loader";


export function ProductCardPlaceholder(): JSX.Element
{
	return (
		<div className="relative card
						w-48 sm:w-60 lg:w-72 xl:w-80" >

			<div className="aspect-square flex place-content-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 bg-base-medium rounded-md" >
				<ContentLoader className="w-3/4 h-full" {...ContentLoaderStyleProps} >
					<rect {...RectStyleProps} />
				</ContentLoader>
			</div>

			<div className="p-1 flex-row place-content-center gap-1 bg-transparent" >
				<Rating defaultValue={0} readOnly />
				<ContentLoader className="w-14 h-4" {...ContentLoaderStyleProps} >
					<rect {...RectStyleProps} />
				</ContentLoader>
			</div>

			<div className="flex-col items-center" >

				<ContentLoader className="w-3/4 h-7 mx-auto pb-1" {...ContentLoaderStyleProps} >
					<rect {...RectStyleProps} />
				</ContentLoader>

				<ContentLoader className="w-1/4 h-7" {...ContentLoaderStyleProps} >
					<rect {...RectStyleProps} />
				</ContentLoader>

			</div>
		</div>
	);
}


const ContentLoaderStyleProps =
{
	speed: 2,
	backgroundColor: "var(--base-medium-low)",
	foregroundColor: "var(--base-medium)",
};


const RectStyleProps =
{
	x: "0",
	y: "0",
	width: "100%",
	height: "100%",
	rx: "0.5rem",
	ry: "0.5rem" ,
};