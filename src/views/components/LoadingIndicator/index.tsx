import { PawSticker, PawStickerProps } from "@/views/components/Sticker/PawSticker";

import "./index.css";


export function LoadingIndicator(): JSX.Element
{
	return (
		<div className="loading-1 relative w-40 aspect-square" id="LoadingIndicator" >
		{
			pawData.map((data, index) => <PawSticker key={index} {...data} />)
		}
		</div>
	);
}


// https://coolors.co/palettes/popular/orange
const pawData: PawStickerProps[] =
[
	{ x: 30, y:  0, size: 13, angle: -60, color: "#ffb700" },
	{ x:  0, y: 30, size: 15, angle: 105, color: "#ffaa00" },
	{ x: 45, y: 45, size: 18, angle: 220, color: "#ffa200" },
	{ x: 10, y: 75, size: 25, angle:  10, color: "#ff9500" },
	{ x: 70, y: 17, size: 30, angle: 165, color: "#ff8800" },
	{ x: 55, y: 75, size: 25, angle: 100, color: "#ff7b00" },
];