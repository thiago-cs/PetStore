import "./index.css";


export function OverlappingPanel(props: OverlappingPanelProps): JSX.Element
{
	let className = "overlapping-panel ";

	if (props.className)
		className += props.className;

	return (
		<div className={className}>
			{props.children}
		</div>
	);
}


interface OverlappingPanelProps
{
	className?: string;
	children?: React.ReactNode;
}