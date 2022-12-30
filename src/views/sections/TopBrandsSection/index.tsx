import { useAsyncValue } from "react-router-dom";
import { Styles } from "@mantine/styles";
import { Carousel, CarouselStylesNames } from "@mantine/carousel";
import { CarouselStylesParams } from "@mantine/carousel/lib/Carousel.styles";
import { CarouselBreakpoint } from "@mantine/carousel/lib/types";

import { Brand } from "@/models/Brand";
import { BrandCard } from "@/views/sections/TopBrandsSection/BrandCard";
import { Async } from "@/views/components/Async";
import { LoadingIndicator } from "@/views/components/LoadingIndicator";
import { DuoToneHeader } from "@/views/components/DuoToneHeader";
import { api } from "@/api";


export function TopBrandsSection(): JSX.Element
{
	return (
		<section className="py-8 " >
			<Async promise={api.getTopBrandsAsync()} loadingElement={loadingElement} errorElement={errorElement} >
				<BrandList />
			</Async>
		</section>
	);
}

function BrandList(): JSX.Element
{
	const response = useAsyncValue() as any;
	const brands = response.data as Brand[];

	return <>
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
	</>;
}


const loadingElement = <div className="m-20 flex-row justify-center"><LoadingIndicator /></div>;
const errorElement = <p className="m-20 text-center">Sorry, we could not load the list of top selling brands.</p>;

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