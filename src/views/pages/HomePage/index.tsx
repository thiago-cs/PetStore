import { Page } from "../Page";
import { HeroSection } from "@/views/sections/HeroSection";
import { OffersSection } from "@/views/sections/OffersSection";
import { TopProductCategoriesSection } from "@/views/sections/TopProductCategoriesSection";
import { TopBrandsSection } from "@/views/sections/TopBrandsSection";
import { AdvantagesSection } from "@/views/sections/AdvantagesSection";
import { HTMLComment } from "@/views/devComponents/HTMLComment";


export function HomePage(): JSX.Element
{
	return (
		<Page title="" >

			<HeroSection/>

			<OffersSection/>

			<TopProductCategoriesSection/>

			<TopBrandsSection/>

			<AdvantagesSection />

		</Page>
	);
}