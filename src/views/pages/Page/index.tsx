import { settings } from "@/settings";


export function Page(props: PageProps): JSX.Element
{
	const { title } = props;
	document.title = title + " | " + settings.companyInfo.name;


	const { className = "", children } = props;

	return (
		<main className={"w-full flex-1 bg-base-medium-high text-alt-high " + className} >
			{children}
		</main>
	);
}


interface PageProps
{
	title: string;

	className?: string;
	children: React.ReactNode;
}