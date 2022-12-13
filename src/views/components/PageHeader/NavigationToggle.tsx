import { CSSProperties, SVGProps } from "react";

import { Action } from "models/Action";

import "./NavigationToggle.css";


export function NavigationToggle(props: NavigationToggleProps): JSX.Element
{
	const { isOpen, size, className = "", onClick } = props;

	const style: CSSProperties = { width: size, height: size };

	return (
		<button className={"navigation-toggle " + className + (isOpen ? " open" : "")}
				style={style}
				aria-label="Toggle navigation" aria-expanded={isOpen}
				onClick={onClick} >

			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none" />
				<line className="top"    x1="40" y1=" 64" x2="216" y2=" 64" {...lineAttributes} />
				<line className="middle" x1="40" y1="128" x2="216" y2="128" {...lineAttributes} />
				<line className="bottom" x1="40" y1="192" x2="216" y2="192" {...lineAttributes} />
			</svg>

		</button>
	);
}


interface NavigationToggleProps
{
	isOpen: boolean;
	size: string;
	className?: string;
	onClick: Action;
}


const lineAttributes: SVGProps<SVGLineElement> =
{
	stroke: "currentColor",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	strokeWidth: "16",
}