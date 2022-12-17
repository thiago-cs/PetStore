import { LinkInfoGroup } from "@/models/LinkInfo";
import { FooterLink } from "./FooterLink";
import { FooterLinkListHeader } from "./FooterLinkListHeader";


export function FooterLinkTable(props: FooterLinkTableProps): JSX.Element
{
	const { className = "", linkGroups } = props;
	let counter = 1;

	return (
		<nav className={"grid grid-flow-col auto-cols-auto auto-rows-fr justify-around gap-x-2 gap-y-2 max-sm:gap-y-3 md:gap-x-10 " + className} >
		{
			linkGroups.map(group =>
			[
				<FooterLinkListHeader key={counter++} header={group.header} />,

				group.links.map((link, index2) => <FooterLink key={counter++} row={2 + index2} link={link} />)
			]
			).flat(2)
		}
		</nav>
	);
	//	<div className="mb-12 flex-row justify-around gap-[4vw]" >
	//	{
	//		linkGroups.map((item, index) => <FooterLinkList key={index} linkGroup={item} />)
	//	}
	//	</div>
}


interface FooterLinkTableProps
{
	linkGroups: LinkInfoGroup[];
	className?: string;
}