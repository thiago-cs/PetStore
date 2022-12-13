import { OverlappingPanel } from "views/panels/OverlappingPanel";
import { ImageSticker } from "views/components/Sticker/ImageSticker";
import { PawSticker } from "views/components/Sticker/PawSticker";
import { LinkButton } from "views/components/LinkButton";
import { CurlyOverlay } from "views/components/CurlyOverlay";
import { HTMLComment } from "views/devComponents/HTMLComment";
// import { WireFrame } from "views/devComponents/WireFrame";

import heroDog from "assets/images/hero-dog.png";
import heroBag from "assets/images/hero-bag.png";


export function HeroSection(): JSX.Element
{
	return (
		<section className="relative hero h-fit mb-10 pt-7 select-text overflow-y-clip" >

			<HTMLComment>
				Constrained box
			</HTMLComment>
			<OverlappingPanel className="relative aspect-[2/1] min-h-[300px] max-h-[calc(100vh-6rem)] mx-auto overflow-x-visible" >

				{/* <WireFrame color="magenta" /> */}

				<HTMLComment>
					Stickers
				</HTMLComment>
				<div className="text-accent-secondary pointer-events-none" >

					<HTMLComment>
						paws
					</HTMLComment>
					<PawSticker size={40} x={-3} y={49} angle={25} />
					<PawSticker size={15} x={57} y={33} angle={-47} />
					<PawSticker size={15} x={70} y={75} angle={40} />

					<HTMLComment>
						bags
					</HTMLComment>
					<ImageSticker image={heroBag} size={35} x={57} y={60} angle={-32} />
					<ImageSticker image={heroBag} size={25} x={67} y={22} angle={-30} />
					<ImageSticker image={heroBag} size={30} x={94} y={21} angle={-30} />

					<HTMLComment>
						dog
					</HTMLComment>
					<ImageSticker image={heroDog} size={75} x={67} y={25} angle={0} />
				</div>

				<div className="ml-[11%] w-[44%] z-10 pb-4
								flex-col justify-center items-center 
								text-white whitespace-nowrap" >

					<h1 className="font-bangers leading-none mb-[0.5em]
								   text-[calc(8px+min(100vw/2,100vh-5rem)/10)] text-center" >
						<p>
							HIGH QUALITY
						</p>
						<p className="text-white text-[200%]" style={{ "--tw-text-opacity": 0.85 } as React.CSSProperties} >
							PET FOOD
						</p>
					</h1>

					<p className="mb-1 sm:text-2xl" >
						Sale up to 40% today
					</p>

					<LinkButton className="border-2 border-white bg-transparent hover:bg-black" url="/shop" >
						Shop now
					</LinkButton>
				</div>

			</OverlappingPanel>

			<HTMLComment> curly overlay </HTMLComment>
			<CurlyOverlay className="w-screen absolute bottom-0 -mb-1" foreground="var(--base-medium-high)" />

		</section>
	);
}