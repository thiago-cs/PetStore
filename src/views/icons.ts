import { FunctionComponent } from "react";


export type Icon = FunctionComponent<IconProps>;

export type IconProps =
{
	className?: string;
	size?: number | string;
	color?: string;
};

export
{
	MagnifyingGlass as Search, 
	User, 
	Bag as Shop, 
	Moon as DarkTheme, 
	Sun as LightTheme, 
	Package, 
	PhoneCall, 
	ShieldCheck, 
	Truck,
	MapPin, 
	Phone,
	ArrowLineLeft as Shrink,
	ArrowLineRight as Enlarge,
	Heart as Favorite,
	Cat,
	Dog,
	Bird,
	Fish,
	Pizza as PetFood,
	Cookie as PetSnack,
	Pill as PetMedicine,
	TennisBall as PetToy,
	ArrowSquareOut as OpenInNewTab,
} from "phosphor-react";