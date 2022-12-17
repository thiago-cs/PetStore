import { LinkInfo } from "@/models/LinkInfo";


export function FooterLink(props: FooterLinkProps): JSX.Element
{
	const { row, link: { header, url } }= props;

	return (
		<a className="text-alt-medium-low text-sm sm:text-base hover:underline underline-offset-4" href={url} style={{ gridRowStart: row }} >
			{header}
		</a>
	);
}


interface FooterLinkProps
{
	row: number;
	link: LinkInfo;
}