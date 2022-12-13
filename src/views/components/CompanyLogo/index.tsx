export function CompanyLogo(props: CompanyLogoProps): JSX.Element
{
	const { className = "", companyLogo: logo, companyName } = props;

	return (
		<a className={"flex-row items-center gap-1 " + className}
		   href="/"
		   title={companyName + " home page"} >

			{ props.companyLogo &&
				<img className="w-7 aspect-square"
					 src={logo}
					 alt="company logo" />
			}
			{ props.companyName &&
				<span className="font-carter text-2xl md:text-4xl select-none" >
					{companyName}
				</span>
			}
		</a>
	);
}


interface CompanyLogoProps
{
	className?: string;
	companyLogo?: string;
	companyName: string | null;
}