import { LoadingIndicator } from "@/views/components/LoadingIndicator";
import { AttributionSection } from "@/views/sections/AttributionSection";
import { Page } from "../Page";


export function ContactPage(): JSX.Element
{
	return (
		<Page title="Contact" className="py-32 " >

			<section className="mx-auto w-min" >
				<LoadingIndicator/>
			</section>
			
			<AttributionSection />

		</Page>
	);
}