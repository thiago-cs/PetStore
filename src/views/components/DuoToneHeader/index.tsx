export function DuoToneHeader(props: DuoToneHeaderProps): JSX.Element
{
	const { className = "", children: [text1, text2] } = props;

	return (
		<h2 className={"text-4xl text-center " + className} >
			<span className="text-accent-primary" >
				{text1}
			</span>
			<span className="font-semibold" >
				{text2}
			</span>
		</h2>
	);
}


interface DuoToneHeaderProps
{
	className?: string;
	children: [string, string];
}