import { Action } from "@/models/Action";
import { LinkWithPreload } from "@/views/components/LinkWithPreload";


export function PageLink(props: PageLinkProps): JSX.Element
{
	const { title, to, isActive = false, className = "", onClick } = props;

	/* I do not like the built-in {isActive}. */
	return isActive
		?
		<span className={`cursor-default underline ${className}`}
			  onClick={onClick} >
			{ title }
		</span>
		:
		<LinkWithPreload className={`cursor-pointer opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity duration-100 ${className}`}
						 to={to}
						 onClick={onClick} >
			{ title }
		</LinkWithPreload>;
}


type PageLinkProps =
{
	title: string,
	to: string,
	isActive?: boolean,
	className?: string,
	onClick?: Action,
};