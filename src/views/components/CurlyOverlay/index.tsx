export function CurlyOverlay(props: CurlyOverlayProps): JSX.Element
{
	const { className = "", foreground, forceUniformScaling = true } = props;
	const aspectRatioMode = forceUniformScaling ? "xMidYMid" : "none";

	return (
		<svg className={className + ""}
			 preserveAspectRatio={aspectRatioMode}
			 viewBox="0 0 4400 462"
			 xmlns="http://www.w3.org/2000/svg" >

			<path fill={foreground}
				  d="M 878,19 c 409,-6.5,990,325,1577,322 c 587,-3,1617,-195,1945,-340 v 462 h -4400 v -237 c 146,-74,469,-201,878,-207 z" />
		</svg>
	);
}


type CurlyOverlayProps =
{
	className?: string,
	foreground: string,
	//background?: string,
	forceUniformScaling?: boolean,
};