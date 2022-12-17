import useWindowSize from "@/utils/useWindowSize";

import { Shrink, Enlarge } from "@/views/icons";


export function PageSizeIndicator(props: PageSizeIndicatorProps): JSX.Element | null
{
	// 0.
	if (import.meta.env.PROD)
		return null;

	// 1.
	const windowSize = useWindowSize();

	const { className = "" } = props;

	// 2.
	// 2.1.
	let index = 0;

	while (index < array.length && array[index].minWidth <= windowSize.width)
		index++;

	index--;

	// 2.2.
	let data = array[index];

	const prev = index == 0
				? undefined
				: windowSize.width - data.minWidth + 1;

	const next = index < array.length - 1
				? array[index + 1].minWidth - windowSize.width
				: undefined;


	return (
		<div className={`w-[5.5rem] aspect-square p-2 rounded-[10%]
						 grid grid-cols-2 gap-x-2 place-content-center
						 ${data.background} text-white shadow-md shadow-black/50
						 ${className}` } >

			<span className="col-span-2 text-2xl font-semibold text-center" >
				{data.content}
			</span>

			<div>
				{ prev && <Shrink size={iconSize} className="px-0.5 scale-x-150" /> }

				<span className="text-sm" >
					{prev}
				</span>
			</div>

			<div>
				{ next && <Enlarge size={iconSize} className="ml-auto px-0.5 scale-x-150" /> }

				<div className="text-sm text-right" >
					{next}
				</div>
			</div>

		</div>
	);
}


interface PageSizeIndicatorProps
{
	className?: string;
}


const iconSize = "1rem";

const array =
[
	{
		minWidth: 0,
		content: "XS",
		background: "bg-red-600",
	},
	{
		minWidth: 640,
		content: "SM",
		background: "bg-orange-500",
	},
	{
		minWidth: 768,
		content: "MD",
		background: "bg-yellow-500",
	},
	{
		minWidth: 1024,
		content: "LG",
		background: "bg-green-500",
	},
	{
		minWidth: 1280,
		content: "XL",
		background: "bg-cyan-500",
	},
	{
		minWidth: 1536,
		content: "2XL",
		background: "bg-blue-500",
	},
];