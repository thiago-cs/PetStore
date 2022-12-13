export function FooterLinkListHeader(props: FooterLinkListHeaderProps): JSX.Element
{
	const { header } = props;

	return (
		<div className="mb-1 text-alt-low text-base sm:text-lg" style={{ gridRowStart: 1 }} >
			{header}
		</div>
	);
}


interface FooterLinkListHeaderProps
{
	header: string;
}