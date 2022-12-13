import { Carousel, CarouselStylesNames } from "@mantine/carousel";
import { Styles } from "@mantine/styles";
import { CarouselStylesParams } from "@mantine/carousel/lib/Carousel.styles";
import { CarouselBreakpoint } from "@mantine/carousel/lib/types";

import { ProductCategoryCard } from "views/sections/TopProductCategoriesSection/ProductCategoryCard";
import { DuoToneHeader } from "views/components/DuoToneHeader";
import { settings } from "../../../settings";


export function TopProductCategoriesSection(): JSX.Element
{
	const categories = settings.topCategories;

	return (
		<section className="pt-8 pb-12" >
			<DuoToneHeader>{[ "Top", " categories" ]}</DuoToneHeader>

			<Carousel className="md:hidden mt-16" height="21rem" mx="auto" px="4rem"
					  slideSize="auto" slideGap="sm" includeGapInSize loop 
					  breakpoints={carouselBreakpoints} styles={carouselStyle} >
			{
				categories.map((item, index) => <Carousel.Slide key={index}><ProductCategoryCard category={item} /></Carousel.Slide>)
			}
			</Carousel>

			<div className="mt-16 hidden md:flex xl:flex-row flex-nowrap justify-around gap-[3%] px-[3%] scroll-p-[3%]" >
			{
				categories.map((item, index) => <ProductCategoryCard key={index} category={item} />)
			}
			</div>
		</section>
	);
}


const carouselBreakpoints: CarouselBreakpoint[] =
[
	{ maxWidth: "xs", slideSize: "100%" },
	{ maxWidth: "sm", slideSize: "50%" },
];

const carouselStyle : Styles<CarouselStylesNames, CarouselStylesParams> =
{
	control: { backgroundColor: "blue", color: "var(--alt-medium)", borderColor: "var(--alt-medium)", borderWidth: 2, cursor: "pointer", },
	indicators: { /* borderColor: "var(--accent-color-primary)", borderWidth: 2, */ color: "green", cursor: "pointer", },
};