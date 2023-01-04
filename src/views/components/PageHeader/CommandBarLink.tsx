import { Action } from "@/models/Action";
import { ReactNode } from "react";

import { LinkWithPreload } from "@/views/components/LinkWithPreload";
import { Icon } from "@/views/icons";


export function CommandBarLink(props: CommandBarLinkProps): JSX.Element
{
	const { className = "", children, icon: Icon, iconSize, url = "", click } = props;

	return (
		<LinkWithPreload className={`block cursor-pointer p-2
									 hover:scale-125 active:translate-y-[1px] motion-safe:transition-transform ease-out ${className}`}
						 to={url}
						 onClick={click} >

			{ Icon && <Icon size={iconSize} /> }
			{ children }
		</LinkWithPreload>
	);
}


type CommandBarLinkProps =
{
	icon?: Icon,
	iconSize?: number | string,
	url?: string,
	click?: Action,

	className?: string,
	children?: ReactNode,
};