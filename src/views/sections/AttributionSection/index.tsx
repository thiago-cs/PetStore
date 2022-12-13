import { OpenInNewTab } from "views/icons";
import { settings } from "../../../settings";


export function AttributionSection(): JSX.Element
{
	const { attributions } = settings;

	return (
		<div className="" >
		{
			attributions.map((item, index) =>
			<li key={index} >
				<small className="p-1 flex items-center text-alt-low text-center hover:underline cursor-pointer" >
					<a href={item.url} target="_blank" rel="noopener noreferrer" >
						{item.content}
					</a>
					<OpenInNewTab size={20} />
				</small>
			</li>)
		}
		</div>
	);
}