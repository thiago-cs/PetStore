import { CSSProperties } from "react";

import { OverlappingPanel } from "@/views/panels/OverlappingPanel";


export function InfoBadge(props: InfoBadgeProps): JSX.Element
{
	const { content, background, foreground = "inherit", children } = props;

	const style: CSSProperties =
	{
		backgroundColor: background,
		color: foreground,
		scale: content ? "" : "0%",
	};

	return (
		<OverlappingPanel>
			{ children }

			<span style={style}
				  className="self-start justify-self-end -m-2
							 min-w-[1rem] px-[0.125rem] rounded-full
							 text-2xs text-center font-mono tracking-tight opacity-100
							 transition-[scale]" >
				{ content }
			</span>

		</OverlappingPanel>
	);
}


type InfoBadgeProps =
{
	content: number | string | JSX.Element,
	background: string,
	foreground?: string,
	children: JSX.Element,
};