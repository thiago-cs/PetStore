

export function Price(props: PriceProps): JSX.Element
{
	const { className = "", value } = props;

	const units = Math.floor(value);
	const fractional = Math.floor((value - units) * 100);

	const unitsText = `\$ ${units}`;
	const fractionalText = fractional.toString().padStart(2, "0");

	return (
		<div className={`flex-row items-start flex-nowrap -text-accent-primary font-bold ${className}`}>
			<span className="text-xl">
				{ unitsText }
			</span>
			<span className="text-xs pl-px">
				{ fractionalText }
			</span>
		</div>
	);
}


type PriceProps =
{
	value: number,
	className?: string,
};