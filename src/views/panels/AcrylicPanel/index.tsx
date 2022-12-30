export function AcrylicPanel(props: AcrylicPanelProps): JSX.Element
{
	const { className = "", children } = props;

	return (
		<div className={`bg-base-color/30 backdrop-blur-lg ${className}`}>
			{ children }
		</div>
	);
}


type AcrylicPanelProps =
{
	className?: string,
	children?: React.ReactNode,
};