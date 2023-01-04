import { Page } from "../Page";


export function PageNotFoundPage(): JSX.Element
{
	return (
		<Page title="Not Found" className="min-h-[50vh] pt-20 flex-row justify-center items-center" >
			<span className="text-2xl pr-3 border-r-2">404</span>
			<span className="pl-3">Not Found</span>
		</Page>
	);
}