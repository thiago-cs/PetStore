import { Link } from "react-router-dom";


export function LinkButton(props: LinkButtonProps): JSX.Element
{
	const { className = "", children, url } = props;

	return (
		<Link className={`w-fit h-fit rounded-full px-4 py-2 
						  bg-black text-white text-sm sm:text-base hover:bg-accent-primary font-bold select-none
						  transition-colors duration-300 ${className}`}
			  to={url} >
			{children}
		</Link>
	);
}


interface LinkButtonProps
{
	url: string;
	className?: string;
	children: string;
}