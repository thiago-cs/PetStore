import { Link } from "react-router-dom";

import { LinkInfo } from "@/models/LinkInfo";


export function FooterLink(props: FooterLinkProps): JSX.Element
{
	const { row, link: { header, url } }= props;

	return (
		<Link className="text-alt-medium-low text-sm sm:text-base hover:underline underline-offset-4"
			  to={url}
			  style={{ gridRowStart: row }} >
			{ header }
		</Link>
	);
}


type FooterLinkProps =
{
	row: number,
	link: LinkInfo,
};