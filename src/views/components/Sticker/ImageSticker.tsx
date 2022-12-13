import { Sticker, StickerPropsBase } from "./Sticker";


export function ImageSticker(props: ImageStickerProps): JSX.Element
{
	return (
		<Sticker {...props} >
			<img className="absolute" src={props.image} />
		</Sticker>
	);
}


interface ImageStickerProps extends StickerPropsBase
{
	image: string;
}