import { Styles } from "@mantine/styles";
import { Carousel, CarouselStylesNames } from "@mantine/carousel";
import { CarouselStylesParams } from "@mantine/carousel/lib/Carousel.styles";
import { CarouselBreakpoint } from "@mantine/carousel/lib/types";

import { BrandCard } from "views/sections/TopBrandsSection/BrandCard";
import { DuoToneHeader } from "views/components/DuoToneHeader";
import { useTopBrands } from "utils/useTopBrands";


export function TopBrandsSection(): JSX.Element
{
	const [ brands ] = useTopBrands();

	return (
		<section className="py-8 " >
		{
			brands !== undefined && brands.length !== 0 &&
			<>
				<DuoToneHeader>{[ "Popular", " Brands" ]}</DuoToneHeader>

				<Carousel className="md:hidden mt-16" height="12rem" mx="auto" px="4rem"
						slideSize="auto" slideGap="sm" includeGapInSize loop align="center"
						breakpoints={carouselBreakpoints} styles={carouselStyle} >
				{
					brands.map((item, index) => <Carousel.Slide key={index} ><BrandCard brand={item} /></Carousel.Slide>)
				}
				</Carousel>

				<ul className="mt-16 px-[3%] hidden md:flex xl:flex-row justify-around gap-[3%]" >
				{
					brands.map((item, index) => <li key={index} ><BrandCard brand={item} /></li>)
				}
				</ul>
			</>
		}
		</section>
	);
}


const carouselBreakpoints: CarouselBreakpoint[] =
[
	{ maxWidth: "xs", slideSize: "50%" },
	{ maxWidth: "sm", slideSize: "33%" },
];

const carouselStyle : Styles<CarouselStylesNames, CarouselStylesParams> =
{
	control: { backgroundColor: "blue", color: "var(--alt-medium)", borderColor: "var(--alt-medium)", borderWidth: 2, cursor: "pointer", },
	indicators: { color: "green", cursor: "pointer", },
};