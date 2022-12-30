import "./index.css";


export function OverlappingPanel(props: OverlappingPanelProps): JSX.Element
{
	const { className = "", children } = props;

	return (
		<div className={"overlapping-panel " + className}>
			{ children }
		</div>
	);
}


type OverlappingPanelProps =
{
	className?: string,
	children: React.ReactNode,
};