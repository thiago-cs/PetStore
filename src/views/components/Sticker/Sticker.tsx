import React, { CSSProperties } from "react";


export function Sticker(props: StickerProps): JSX.Element
{
	const { x, y, size, angle, children } = props;

	const style: CSSProperties =
	{
		top: y + "%",
		left: x + "%",
		height: size + "%",
		rotate: `${angle}deg`,
		userSelect: 'none',
	};

	return React.cloneElement(children, { style });
}


export interface StickerPropsBase
{
	x: number;
	y: number;
	size: number;
	angle: number;
}

interface StickerProps extends StickerPropsBase
{
	children: JSX.Element;
}