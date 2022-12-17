import { FooterLink } from "./FooterLink";
import { FooterLinkListHeader } from "./FooterLinkListHeader";
import { LinkInfoGroup } from "@/models/LinkInfo";


export function FooterLinkList(props: FooterLinkListProps): JSX.Element
{
	const { header, links } = props.linkGroup;

	return (
		<ul role="list" className="flex-col items-start max-sm:gap-3 gap-2" >

			<FooterLinkListHeader header={header} />

		{
			links.map((item, index) =>
				<li key={index} >
					<FooterLink link={item} row={index} />
				</li>
			)
		}
		</ul>
	);
}


interface FooterLinkListProps
{
	linkGroup: LinkInfoGroup;
}