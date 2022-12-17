import { ReactNode } from "react";

import { Icon } from "@/views/icons";
import { Action } from "@/models/Action";


export function CommandBarButton(props: CommandBarButtonProps): JSX.Element
{
	const { className = "", icon: Icon, iconSize, command, children } = props;

	return (
		<button className={`block cursor-pointer p-2
							hover:scale-125 active:translate-y-[1px] motion-safe:transition-transform ease-out ${className}`}
				onClick={command} >

			{ Icon && <Icon size={iconSize} /> }
			{ children }
		</button>
	);
}


interface CommandBarButtonProps
{
	icon?: Icon;
	iconSize?: number | string;
	command?: Action;

	className?: string;
	children?: ReactNode;
}