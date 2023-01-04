import { ErrorBoundary } from "@/views/devComponents/ErrorBoundary";
import { RenderFallback } from "@/context/RenderFallbackContext";
import { settings } from "@/settings";


export function Page(props: PageProps): JSX.Element
{
	const { className = "", children, title } = props;

	document.title = title + " | " + settings.companyInfo.name;

	return (
		<RenderFallback>
			<main className={`w-full min-h-[70svh] flex-1 bg-base-medium-high text-alt-high ${className}`} >
				<ErrorBoundary>
					{ children }
				</ErrorBoundary>
			</main>
		</RenderFallback>
	);
}


type PageProps =
{
	title: string,
	className?: string,
	children: React.ReactNode,
};