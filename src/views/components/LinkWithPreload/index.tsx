import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

import { Action } from "@/models/Action";
import { preloadRoute } from "@/routes";


export function LinkWithPreload(props: LinkWithPreloadProps): JSX.Element
{
	const { className, children, style, to, onClick } = props;

	return (
		<NavLink className={className} to={to} style={style} onMouseEnter={() => preloadRoute(to)} onClick={onClick} >
			{ children }
		</NavLink>
	);
}


type LinkWithPreloadProps =
{
	className?: string,
	style?: CSSProperties,
	children?: React.ReactNode,
	to: string,
	onClick?: Action,
};