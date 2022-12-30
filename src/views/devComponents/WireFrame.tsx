import React from "react";

import { HTMLComment } from "./HTMLComment";


export function WireFrame(props: WireFrameProps): JSX.Element | null
{
	const style: React.CSSProperties = { borderColor: props.color };

	return import.meta.env.PROD
		? null
		: <>
			<HTMLComment includeInProduction={false} >
				wire frame
			</HTMLComment>
			<div className="absolute w-full h-full border-2 pointer-events-none" style={style} />
		</>;
}


type WireFrameProps =
{
	color?: string,
};

WireFrame.defaultProps =
{
	color: "white",
};